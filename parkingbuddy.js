// parkingbuddy.js (root file)

// Modules ////////////
var express = require('express');
var app = express();
const router = express.Router();
var fs = require('fs');

// Files /////////
var dbfile = require('./accessdatabase.js');
var scraper = require('./scrape.js');

// Routes ////////
app.use('/testing', router); // For testing
router.route('/').get(function(req,res){
  if (err) {
    console.log(err);
  } else {
    res.json({status: 'Success'});
  }
});



app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/siteData', function (req, res) {
  res.json('Site data reached!');
});

//app.listen(3000, function () {
  //console.log('Example app listening on port 3000!');
//});

//app.get('/StudentUnion', determineGarage("SU"));
//app.get('/ClassroomBuilding1', determineGarage("CB1"));

// MongoDB document names
var SU_DocName = "SU";
var CB1_DocName = "CB1";
var CB2_DocName = "CB2";
var MSB_DocName = "MSB";
var ENG_DocName = "ENG";
var PSY_DocName = "PSY";

// Constants
const num_garages = 7;
const identifier = "SU";

// Actual code ////////
console.log(scraper.testModule());
console.log(dbfile.testModule());


function isFull(string)
{
  // String in format of "1234/4321"
  var length = string.length;

  // Split string into numerator and denominator
  var denominator = string.substring(length - 4, length);
  var numerator = string.substring(0 , length - 5);

  // Turn numerator and denominator into ints
  numerator = parseInt(numerator);
  denominator = parseInt(denominator);

  // Returns true if garage is full
  return (numerator / denominator > 0 ? false : true);
}

async function determineGarage(identifier)
{
  // Scrape site and load json file
  scraper.scrapeSite();
  let rawdata = fs.readFileSync('content.json');
  let data = JSON.parse(rawdata);
  console.log("Garage A : " + data.GarageA + " Is Full : " + (isFull(data.GarageA)));
  console.log("Garage B : " + data.GarageB + " Is Full : " + (isFull(data.GarageB)));
  console.log("Garage C : " + data.GarageC + " Is Full : " + (isFull(data.GarageC)));
  console.log("Garage D : " + data.GarageD + " Is Full : " + (isFull(data.GarageD)));
  console.log("Garage H : " + data.GarageH + " Is Full : " + (isFull(data.GarageH)));
  console.log("Garage I : " + data.GarageI + " Is Full : " + (isFull(data.GarageI)));
  console.log("Garage Libra : " + data.GarageLibra + " Is Full : " + (isFull(data.GarageLibra)));

  // Array of garages sorted by distances
  var garageList;
  try
  {
    garageList = dbfile.fetchFromDB(identifier);
    return garageList;//console.log("GARAGE LIST" + garageList);
  }
  catch (error)
  {
    console.log(error);
  }
 // event that catches
  //
  return garageList;
  //return "FORMATTED FIRST GARAGE" + garageList[0].split(' ').join('');
  // Once connecting is fixed
  // for (var i = 0; i < num_garages; i++)
  // {
  //   garage_name = garageList[i].split(' ').join('');
  //
  //   console.log(data.garage_name); // Get occupancy of garage
    // if (isNotFull(data.garage_name))
    // {
    //   return garage_name + garageList[i].distance;
    // }
  // }
  // return "No garages are currently available";
}

//determineGarage(identifier);
determineGarage(identifier).then(result => {
  console.log(garageList);
}).catch(err => {

});
