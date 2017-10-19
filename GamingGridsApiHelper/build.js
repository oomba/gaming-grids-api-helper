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

const getFields = (name, obj, inputType) => {
  return obj
    ? obj.properties
      ? obj.properties.reduce((propResults, prop) => {
          propResults[prop.name] = prop.type
            ? { type: convertToGraphQLType(prop.type, prop.name) }
            : prop.properties
              ? getResponseObject(name + prop.name, prop, true, inputType)
              : undefined
          return propResults
        }, {})
      : undefined
    : undefined
}

const getArgObject = (name, obj) => {
  if (obj == undefined) {
    return undefined
  }
  return {
    type:
      'new graphql.GraphQLNonNull(new graphql.GraphQLInputObjectType(' +
      JSON.stringify({
        name: "'" + name + "'",
        fields: getFields(name, { properties: obj }, true, true)
      }) +
      '))'
  }
}

const getResponseObject = (name, obj, inner, inputType) => {
  if (obj == undefined) {
    return undefined
  }
  if (!obj.properties) {
    return convertToGraphQLType(obj.type, obj.name)
  } else {
    const innerSchema =
      (obj.isList ? 'new graphql.GraphQLList(' : '') +
      (inputType
        ? 'new graphql.GraphQLInputObjectType('
        : 'new graphql.GraphQLObjectType(') +
      JSON.stringify({
        name: "'" + name + 'Response' + "'",
        fields: getFields(name, obj, inputType)
      }) +
      ')' +
      (obj.isList ? ')' : '')
    return inner ? { type: innerSchema } : innerSchema
  }
}

const getResponseQuery = response => {
  const responseQuery =
    response.properties ?
    response.properties.reduce((results, p) => {
      results[p.name] = p.properties ? getResponseQuery(p) : true
      return results
    }, {}) : {
      [response.name]: true
    }
  return responseQuery
}

const formatResponseQuery = json => {
  return '\t\t\t\t' + JSON.stringify(json, null, 2)
    .replace(/"/g, '')
    .replace(/,/g, '')
    .replace(/: true/g, '')
    .replace(/:/g, '').split('\n').join('\n\t\t\t\t')
}

const buildApis = () => {
  var basePath = 'json'
  var files = fs
    .readdirSync(path.join(__dirname, basePath))
    // .filter(x => x.includes('client-Game.json'))

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
        fullName: "'" + api.fullName + "'",
        method: "'" + api.httpVerb + "'",
        url: "'/" + api.url + "'",
        args: {
          body: api.body
            ? getArgObject(fileName + api.name + 'body', api.body.properties)
            : undefined,
          uriParams: getArgObject(
            fileName + api.name + 'uriParams',
            api.uriParams
          ),
          urlParams: getArgObject(
            fileName + api.name + 'urlParams',
            api.urlParams
          )
        },
        response: getResponseObject(
          fileName + api.name,
          api.response,
          false,
          false
        )
      }
      if (Object.keys(results[api.name].args).length === 0) {
        results[api.name].args = undefined
      }
      return results
    }, {})

    let query = fileJson.reduce((results, api) => {
      const name = api.name.slice(3, 4).toLowerCase() + api.name.slice(4)
      let query = '"({args, response})" => { \n\t\tlet query = `'
      query += api.httpVerb === 'GET' ? 'query ' : 'mutation'

      if (api.uriParams || api.urlParams || api.body) {
        query += '(${JSON.stringify(...args)}'
        query += ') '
      }
      query += api.name + ' {\n'
      query += formatResponseQuery(getResponseQuery(api.response))
      query += '\n\t\t}'
      query += '`\n'
      query += '\t\treturn query\n\t"},\n'
      results += '\t' + name + ':' + query
      return results
    }, '')

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

    const targetFileName = path.join(__dirname, 'graphql', fileName + '.js')
    fs.writeFileSync(targetFileName, fileContents, error => {
      if (error) console.log(error)
    })

    let queryFileContents =
      'const ' + fileName + ' = {\n' + query.slice(0, query.length - 2) + '\n}'
    queryFileContents = queryFileContents.replace(/"/g, '')

    queryFileContents = format({
      text: queryFileContents,
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

    const queryTargetFileName = path.join(__dirname, 'api', fileName + '.js')
    fs.writeFileSync(queryTargetFileName, queryFileContents, error => {
      if (error) console.log(error)
    })
  })
}

buildApis()
