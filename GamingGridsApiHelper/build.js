var fs = require('fs')
var path = require('path')
const graphql = require('graphql')

const convertToGraphQLType = type => {
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
    case 'Number':
      graphQLName = 'graphql.GraphQLInt'
      break
    case 'String':
      graphQLName = 'graphql.GraphQLString'
      break
    default:
      console.log('UKNOWN TYPE: ' + type)
      graphQLName = type
      break
  }
  return graphQLName
}

const getPropertiesFromParam = obj => {
  return obj.properties
    ? obj.properties.reduce((props, prop) => {
        props[prop.name] =
          convertToGraphQLType(prop.type) || getPropertiesFromParam(prop)
        return props
      }, {})
    : undefined
}

const getResponsePropertiesFromParam = (name, properties, inner) => {
  const innerSchema =
    'new graphql.GraphQLObjectType(' +
    JSON.stringify({
      name: "'" + name + 'Response' + "'",
      fields: properties.reduce((propResults, prop) => {
        propResults[prop.name] =
          prop.type !== undefined
            ? { type: convertToGraphQLType(prop.type) }
            : prop.properties
              ? getResponsePropertiesFromParam(
                  name + prop.name,
                  prop.properties,
                  true
                )
              : undefined
        return propResults
      }, {})
    }) +
    ')'
  return inner ? ({ type: innerSchema }) : innerSchema
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
        urlParams: api.urlParams
          ? api.urlParams.reduce((propResults, prop) => {
              propResults[prop.name] = {
                type:
                  convertToGraphQLType(prop.type) ||
                  getPropertiesFromParam(prop)
              }
              return propResults
            }, {})
          : undefined,
        body: api.body
          ? {
              fields: api.body.properties.reduce((propResults, prop) => {
                propResults[prop.name] = {
                  type: convertToGraphQLType(prop.type)
                }
                return propResults
              }, {})
            }
          : undefined,
        response: api.response
          ? getResponsePropertiesFromParam(api.name, api.response, false)
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
    const targetFileName = path.join(__dirname, 'api', fileName + '.js')
    fs.writeFileSync(targetFileName, fileContents, error => {
      if (error) console.log(error)
    })
  })
}

buildApis()
