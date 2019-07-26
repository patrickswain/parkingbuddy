// parkingbuddy.js (root file)

// Modules ////////////
var express = require('express');
var app = express();
const router = express.Router();
var fs = require('fs');

// Files /////////
//var dbfile = require('./accessdatabase.js');
var scraper = require('./scrape.js');
var db2 = require('./anotherdb.js');

// Routes ////////
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  next();
});

app.use('/testing', router); // For testing
// router.route('/').get(function(req,res){
//     res.json({status: "Success"});
// });
router.route('/').post(function(req,res){
  console.log("req is :" + req);
  var data = determineGarage(identifier).then(function (value) {
    if (value == undefined)
    {
      res.json({garage: "Garage A", distance: ".2 miles", input : req});
    }
    else
    {
      res.json({data: value.Garages[0]});
    }
  }, function (err) {
    res.json({error: err});
  });
    //res.json({status: "Success"});
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/siteData', function (req, res) {
  res.json('Site data reached!');
});

// Connecting to local port or heroku port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

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
//var databaseInfo;

// Actual code ////////
console.log(scraper.testModule());

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

  try
  {
    return await db2.fetchFromDB().then(function(items) {
      console.info('The promise was fulfilled with items!', items);
      console.info('garage A distance is ' , items.Garages[3].distance);
    }, function(err) {
      console.error('The promise was rejected', err, err.stack);
    });

  }
  catch (err)
  {
    console.error(err);
  }
}

determineGarage(identifier).then(function(value) {
  console.info('WE WON!', value);
}, function(err) {
  console.error('The promise was rejected at the ENDDD', err, err.stack);
});


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
