const fs = require('fs-extra')

let source = 'C:\\projects\\GamingGridsApiHelper\\GamingGridsApiHelper\\graphql'
let destination = 'C:\\projects\\gaming-grids-graphql\\src\\types'

fs.copy(source, destination, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
})

source = 'C:\\projects\\GamingGridsApiHelper\\GamingGridsApiHelper\\api'
destination = 'C:\\projects\\gaming-grids-spa\\src\\api'

fs.copy(source, destination, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
})