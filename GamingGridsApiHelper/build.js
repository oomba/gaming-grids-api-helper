const fs = require('fs')
const graphql = require('graphql')
const path = require('path')
const format = require('prettier-eslint')

const convertToGraphQLType = (type, name) => {
  let graphQLName = ''
  switch (type) {
    case 'Boolean':
      graphQLName = 'graphql.GraphQLBoolean'
      break
    case 'DateTime':
      graphQLName = 'graphql.GraphQLString'
      break
    case 'Double':
      graphQLName = 'graphql.GraphQLFloat'
      break
    case 'Guid':
      graphQLName = 'graphql.GraphQLString'
      break
    case 'Number':
      graphQLName = 'graphql.GraphQLInt'
      break
    case 'Object':
      graphQLName = 'graphql.GraphQLString'
      break
    case 'Single':
      graphQLName = 'graphql.GraphQLFloat'
      break
    case 'String':
      graphQLName = 'graphql.GraphQLString'
      break
    default:
      console.log('UKNOWN TYPE: ' + type + ' - ' + name)
      graphQLName = type
      break
  }
  return graphQLName
}

// const getPropertiesFromParam = obj => {
//   return obj
//     ? obj.properties
//       ? obj.properties.reduce((props, prop) => {
//           props[prop.name] = prop.type
//             ? convertToGraphQLType(prop.type, prop.name)
//             : getPropertiesFromParam(prop)
//           return props
//         }, {})
//       : undefined
//     : undefined
// }

const getFields = (name, obj) => {
  return obj
    ? obj.properties
      ? obj.properties.reduce((propResults, prop) => {
          propResults[prop.name] = prop.type
            ? { type: convertToGraphQLType(prop.type, prop.name) }
            : prop.properties
              ? getResponsePropertiesFromParam(name + prop.name, prop, true)
              : undefined
          return propResults
        }, {})
      : undefined
    : undefined
}

const getResponsePropertiesFromParam = (name, obj, inner) => {
  if (obj == undefined) {
    return undefined
  }
  if (!obj.properties) {
    return convertToGraphQLType(obj.type, obj.name)
  } else {
    const innerSchema =
      (obj.isList ? 'new graphql.GraphQLList(' : '') +
      'new graphql.GraphQLObjectType(' +
      JSON.stringify({
        name: "'" + name + 'Response' + "'",
        fields: getFields(name, obj)
      }) +
      ')' +
      (obj.isList ? ')' : '')
    return inner ? { type: innerSchema } : innerSchema
  }
}

const buildApis = () => {
  var basePath = 'json'
  var files = fs.readdirSync(path.join(__dirname, basePath))
  files.forEach(file => {
    var fileData = fs.readFileSync(path.join(__dirname, basePath, file))
    var fileJson = JSON.parse(fileData)
    var fileName = file
      .replace('.json', '')
      .split('-')
      .reduce((results, item, index) => {
        results +=
          index === 0
            ? item.slice(0, 1).toLowerCase() + item.slice(1)
            : item.slice(0, 1).toUpperCase() + item.slice(1)
        return results
      }, '')

    let obj = fileJson.reduce((results, api) => {
      results[api.name] = {
        method: "'" + api.method + "'",
        url: "'" + api.url + "'",
        urlParams: api.urlParam ? getFields('urlParam', api.urlParam.properties[0]) : undefined,
        body: getResponsePropertiesFromParam('body', api.body, false),
        response: api.response
          ? getResponsePropertiesFromParam(
              fileName + api.name,
              api.response,
              false
            )
          : undefined,
        uriParam: api.uriParam
          ? {
              [api.uriParam
                .name]: api.uriParam.properties.reduce((propResults, prop) => {
                propResults[prop.name] = prop.type
                return propResults
              }, {})
            }
          : undefined
      }
      return results
    }, {})

    let fileContents =
      "const graphql = require('graphql')\n\nmodule.exports = " +
      JSON.stringify(obj, null, 2)

    fileContents = fileContents.replace(/"/g, '').replace(/\\/g, '')

    fileContents = format({
      text: fileContents,
      eslintConfig: {
        parserOptions: {
          ecmaVersion: 7
        },
        rules: {
          semi: ['error', 'never']
        }
      },
      prettierOptions: {
        bracketSpacing: true
      },
      fallbackPrettierOptions: {
        singleQuote: true
      }
    })
    const targetFileName = path.join(__dirname, 'api', fileName + '.js')
    fs.writeFileSync(targetFileName, fileContents, error => {
      if (error) console.log(error)
    })
  })
}

buildApis()
