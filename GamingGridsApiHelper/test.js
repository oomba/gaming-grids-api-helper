const beautify = require('js-beautify').js_beautify

const fs = require('fs');

fs.readFile('./api/clientGame.js', 'utf8', function (err, data) {
   if (err) {
       throw err;
   }
   console.log(beautify(data, { indent_size: 2 }));
});