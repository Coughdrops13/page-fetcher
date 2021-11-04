const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

const pageFetcher = function(URL, fileName) {
  let bytes = 0;
  request(`${URL}`, (error, response, body) => {
    if (error) {
      console.log('request error');
    }
    bytes = body.length;
    //console.log('response:', response)
    fs.writeFile(fileName, body, err => {
      if (err) {
        console.error('fs writeFile error', error);
        return; 
      }

    }) 
    console.log(`Downloaded and saved ${bytes} bytes to ${fileName}`);
  })


};

pageFetcher(args[0], args[1]);