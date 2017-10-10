var fs = require('fs')
var path = require('path')

const getPropertiesFromParam = obj => {
    return obj.properties ? obj.properties.reduce((props, prop) => {
        props[prop.name] = prop.type || getPropertiesFromParam(prop)
        return props
    }, {}) : undefined
}

const buildApis = () => {
    var basePath = 'json'
    var files = fs.readdirSync(path.join(__dirname, basePath))
    files.forEach(file => {
        var fileData = fs.readFileSync(path.join(__dirname, basePath, file))
        var fileJson = JSON.parse(fileData)
        var fileName = file.replace('.json', '').split('-').reduce((results, item, index) => {
            results += index === 0 ? (item.slice(0, 1).toLowerCase() + item.slice(1)) : (item.slice(0, 1).toUpperCase() + item.slice(1))
            return results
        }, '')

        let obj = 
            fileJson.reduce((results, api) => {
                results[api.name] = {
                    url: api.url,
                    httpVerbs: {
                        get: api.httpVerbs.get === true ? true : undefined,
                        post: api.httpVerbs.post === true ? true : undefined,
                        put: api.httpVerbs.put === true ? true : undefined,
                        delete: api.httpVerbs.delete === true ? true : undefined,
                    },
                    urlParams: api.urlParams ?
                        api.urlParams.reduce((propResults, prop) => {
                            propResults[prop.name] = prop.type || getPropertiesFromParam(prop, prop.name)
                            return propResults
                        }, {}) : undefined,
                    bodyParam: api.bodyParam ? {
                        [api.bodyParam.name]: api.bodyParam ? api.bodyParam.properties.reduce((propResults, prop) => {
                            propResults[prop.name] = prop.type
                            return propResults
                        }, {}) : undefined
                    } : undefined,
                    uriParam: api.uriParam ? {
                        [api.uriParam.name]: api.uriParam.properties.reduce((propResults, prop) => {
                            propResults[prop.name] = prop.type
                            return propResults
                        }, {})
                    } : undefined,
                    returnParams: api.returnParams ?
                        api.returnParams.reduce((propResults, prop) => {
                            propResults[prop.name] = prop.type || getPropertiesFromParam(prop, prop.name)
                            return propResults
                        }, {}) : undefined
                }
                return results
            }, {})
        
        fs.writeFileSync(path.join(__dirname, 'api', fileName + '.js'), "export const " + fileName + " = " + JSON.stringify(obj, null, 2), error => {

        })
    })
}

buildApis()