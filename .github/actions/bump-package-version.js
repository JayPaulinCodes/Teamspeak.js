// const fs = require('fs')
const package = require("../../package.json")
console.log(package)

// const newVersion = process.env.TGT_RELEASE_VERSION

// const manifestFile = fs.readFileSync('fxmanifest.lua', {encoding: 'utf8'})

// const newFileContent = manifestFile.replace(/\bversion+(.*)$/gm, `version("${newVersion}")`)

// fs.writeFileSync('fxmanifest.lua', newFileContent) 