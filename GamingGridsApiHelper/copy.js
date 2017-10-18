const fs = require('fs-extra')

const source = 'C:\\projects\\GamingGridsApiHelper\\GamingGridsApiHelper\\api'
const destination = 'C:\\projects\\gaming-grids-graphql\\src\\types'

fs.copy(source, destination, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
})