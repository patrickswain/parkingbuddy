// parkingbuddy.js (root file)

// Modules ////////////
var express = require('express');
var app = express();
var fs = require('fs');

// Files /////////
var dbfile = require('./accessdatabase.js');
var scraper = require('./scrape.js');

// MongoDB document names
var SU_DocName = "SU";
var CB1_DocName = "CB1";
var CB2_DocName = "CB2";
var MSB_DocName = "MSB";
var ENG_DocName = "ENG";
var PSY_DocName = "PSY";

console.log(scraper.testModule());
console.log(dbfile.testModule());

async function (identifier) {

  // Scrape site and load json file
  scraper.scrapeSite();
  let rawdata = fs.readFileSync('content.json');
  let data = JSON.parse(rawdata);
  console.log(data.GarageA);

  dbfile.accessFromDatabase(identifier);

}


// Routes //////////
//app.get('/StudentUnion', determineGarage("SU"));
//app.get('/ClassroomBuilding1', determineGarage("CB1"));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
