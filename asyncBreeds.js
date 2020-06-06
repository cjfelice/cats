const fs = require('fs');

const breedDetailsFromFile = function(breed, functionTime) {

  console.log('breedDetailsFromFile: Calling readFile...');

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {

    console.log("In readFile's Callback: it has the data.");

    if (error) functionTime(undefined);
    if (!error) functionTime(data);



  });

};

module.exports = breedDetailsFromFile;