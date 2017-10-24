const fs = require('fs-extra')
const path = require('path')

let projectsPath = path.join(__dirname, '../../')
let source = path.join(__dirname, 'graphql')
let destination = path.join(projectsPath, 'gaming-grids-graphql', 'src', 'types')

fs.copy(source, destination, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
})

source = path.join(__dirname, 'api')
destination = path.join(projectsPath, 'gaming-grids-spa', 'src', 'api')

fs.copy(source, destination, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
})
