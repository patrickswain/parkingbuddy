// parkingbuddy.js (root file)

// Modules ////////////
var express = require('express');
var app = express();
const router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/testing', router);

router.route('/SU').get(function(req, res)
{
  determineGarage("SU").then(function(value) {
    //console.info('WE WON!', value);
    res.send(value);
  }, function(err) {
    console.error('The promise was rejected at the ENDDD', err, err.stack);
  });
});

router.route('/CB1').get(function(req, res)
{
  determineGarage("CB1").then(function(value) {
    //console.info('WE WON!', value);
    res.send(value);
  }, function(err) {
    console.error('The promise was rejected at the ENDDD', err, err.stack);
  });
});

router.route('/CB2').get(function(req, res)
{
  determineGarage("CB2").then(function(value) {
    //console.info('WE WON!', value);
    res.send(value);
  }, function(err) {
    console.error('The promise was rejected at the ENDDD', err, err.stack);
  });
});

router.route('/MSB').get(function(req, res)
{
  determineGarage("MSB").then(function(value) {
    //console.info('WE WON!', value);
    res.send(value);
  }, function(err) {
    console.error('The promise was rejected at the ENDDD', err, err.stack);
  });
});

router.route('/ENG1').get(function(req, res)
{
  determineGarage("ENG1").then(function(value) {
    //console.info('WE WON!', value);
    res.send(value);
  }, function(err) {
    console.error('The promise was rejected at the ENDDD', err, err.stack);
  });
});

router.route('/ENG2').get(function(req, res)
{
  determineGarage("ENG2").then(function(value) {
    //console.info('WE WON!', value);
    res.send(value);
  }, function(err) {
    console.error('The promise was rejected at the ENDDD', err, err.stack);
  });
});

router.route('/BA1').get(function(req, res)
{
  determineGarage("BA1").then(function(value) {
    //console.info('WE WON!', value);
    res.send(value);
  }, function(err) {
    console.error('The promise was rejected at the ENDDD', err, err.stack);
  });
});

router.route('/BA2').get(function(req, res)
{
  determineGarage("BA2").then(function(value) {
    //console.info('WE WON!', value);
    res.send(value);
  }, function(err) {
    console.error('The promise was rejected at the ENDDD', err, err.stack);
  });
});

router.route('/HEC').get(function(req, res)
{
  determineGarage("HEC").then(function(value) {
    //console.info('WE WON!', value);
    res.send(value);
  }, function(err) {
    console.error('The promise was rejected at the ENDDD', err, err.stack);
  });
});

router.route('/PSY').get(function(req, res)
{
  determineGarage("PSY").then(function(value) {
    //console.info('WE WON!', value);
    res.send(value);
  }, function(err) {
    console.error('The promise was rejected at the ENDDD', err, err.stack);
  });
});

router.route('/VAB').get(function(req, res)
{
  determineGarage("VAB").then(function(value) {
    //console.info('WE WON!', value);
    res.send(value);
  }, function(err) {
    console.error('The promise was rejected at the ENDDD', err, err.stack);
  });
});

router.route('/BIO').get(function(req, res)
{
  determineGarage("BIO").then(function(value) {
    //console.info('WE WON!', value);
    res.send(value);
  }, function(err) {
    console.error('The promise was rejected at the ENDDD', err, err.stack);
  });
});

router.route('/TA').get(function(req, res)
{
  determineGarage("TA").then(function(value) {
    //console.info('WE WON!', value);
    res.send(value);
  }, function(err) {
    console.error('The promise was rejected at the ENDDD', err, err.stack);
  });
});

router.route('/NSC').get(function(req, res)
{
  determineGarage("NSC").then(function(value) {
    //console.info('WE WON!', value);
    res.send(value);
  }, function(err) {
    console.error('The promise was rejected at the ENDDD', err, err.stack);
  });
});

router.route('/HPA1').get(function(req, res)
{
  determineGarage("HPA1").then(function(value) {
    //console.info('WE WON!', value);
    res.send(value);
  }, function(err) {
    console.error('The promise was rejected at the ENDDD', err, err.stack);
  });
});

router.route('/HPA2').get(function(req, res)
{
  determineGarage("HPA2").then(function(value) {
    //console.info('WE WON!', value);
    res.send(value);
  }, function(err) {
    console.error('The promise was rejected at the ENDDD', err, err.stack);
  });
});

router.route('/CHEM').get(function(req, res)
{
  determineGarage("CHEM").then(function(value) {
    //console.info('WE WON!', value);
    res.send(value);
  }, function(err) {
    console.error('The promise was rejected at the ENDDD', err, err.stack);
  });
});

router.route('/TCH').get(function(req, res)
{
  determineGarage("TCH").then(function(value) {
    //console.info('WE WON!', value);
    res.send(value);
  }, function(err) {
    console.error('The promise was rejected at the ENDDD', err, err.stack);
  });
});

router.route('/EC').get(function(req, res)
{
  determineGarage("EC").then(function(value) {
    //console.info('WE WON!', value);
    res.send(value);
  }, function(err) {
    console.error('The promise was rejected at the ENDDD', err, err.stack);
  });
});

// Connect React to API
if (process.env.NODE_ENV === 'production')
{
  app.use(express.static('new_client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'new_client', 'build', 'index.html'));
  })
}

// Connecting to local port or heroku port
const PORT = process.env.PORT || 5000;
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

// Actual code ////////
console.log(scraper.testModule());

function isFull(string)
{
  console.log(typeof string);

  // String in format of "1234/4321"
  var length = string.length;

  // Split string into numerator and denominator
  var denominator = string.substring(length - 4, length);
  var numerator = string.substring(0 , length - 5);

  // Turn numerator and denominator into ints
  numerator = parseInt(numerator);
  denominator = parseInt(denominator);

  //console.log("string in isFull is " + string);
  //console.log("numerator is " + numerator + "denominator is " + denominator);

  // Returns true if garage is full
  return (numerator / denominator > 0 ? false : true);
}

function testIsFull(garage_name, data)
{
  if (garage_name == "GarageA")
  {
    console.log("GarageA is full? " + isFull(data.GarageA));
  }
  else if (garage_name == "GarageB")
  {
    console.log("GarageB is full? " + isFull(data.GarageB));
  }
  else if (garage_name == "GarageC")
  {
    console.log("GarageC is full? " + isFull(data.GarageC));
  }
   else if (garage_name == "GarageD")
  {
    console.log("GarageD is full? " + isFull(data.GarageD));
  }
  else if (garage_name == "GarageH")
  {
    console.log("GarageH is full? " + isFull(data.GarageH));
  }
  else if (garage_name == "GarageI")
  {
    console.log("GarageI is full? " + isFull(data.GarageI));
  }
  else if (garage_name == "Libra")
  {
    console.log("Libra is full? " + isFull(data.GarageLibra));
  }
}

async function determineGarage(identifier)
{
  // Scrape site and load json file
  //scraper.scrapeSite();
  let rawdata = fs.readFileSync('content.json');
  let data = JSON.parse(rawdata);

  var garage_name;

  try
  {
    return await db2.fetchFromDB(identifier).then(function(items)
    {
      console.info('The promise was fulfilled with items!', items);

      // Actual logic
      for (var i = 0; i < num_garages; i++)
      {
        console.log("TRY NUMBER " + i + " is " + items.Garages[i].id);
        garage_name = items.Garages[i].id.split(' ').join('');

        //testIsFull(garage_name, data);

        if (garage_name == "GarageA")
        {
          if (isFull(data.GarageA))
          {
            console.log("Garage A is full, continue to next garage");
            continue;
          }
          else
          {
            return JSON.stringify({ garage: "Garage A", distance: items.Garages[i].distance, availability: data.GarageA});
          }

        }
        else if (garage_name == "GarageB")
        {
          if (isFull(data.GarageB))
          {
            console.log("Garage B is full, continue to next garage");
            continue;
          }
          else
          {
            return JSON.stringify({ garage: "Garage B", distance: items.Garages[i].distance, availability: data.GarageB});
          }
        }
        else if (garage_name == "GarageC")
        {
          if (isFull(data.GarageC))
          {
            console.log("Garage C is full, continue to next garage");
            continue;
          }
          else
          {
            return JSON.stringify({ garage: "Garage C", distance: items.Garages[i].distance, availability: data.GarageC});
          }
        }
        else if (garage_name == "GarageD")
        {
          if (isFull(data.GarageD))
          {
            console.log("Garage D is full, continue to next garage");
            continue;
          }
          else
          {
            return JSON.stringify({ garage: "Garage D", distance: items.Garages[i].distance, availability: data.GarageD});
          }
        }
        else if (garage_name == "GarageH")
        {
          if (isFull(data.GarageH))
          {
            console.log("Garage H is full, continue to next garage");
            continue;
          }
          else
          {
            return JSON.stringify({ garage: "Garage H", distance: items.Garages[i].distance, availability: data.GarageH});
          }
        }
        else if (garage_name == "GarageI")
        {
          if (isFull(data.GarageI))
          {
            console.log("Garage I is full, continue to next garage");
            continue;
          }
          else
          {
            return JSON.stringify({ garage: "Garage I", distance: items.Garages[i].distance, availability: data.GarageI});
          }
        }
        else if (garage_name == "Libra")
        {
          if (isFull(data.GarageA))
          {
            console.log("Garage Libra is full, continue to next garage");
            continue;
          }
          else
          {
            return JSON.stringify({ garage: "Garage Libra", distance: items.Garages[i].distance, availability: data.GarageLibra});
          }
        }

        return JSON.stringify({error : "All garages are full, go to park and ride"});

      }

    }, function(err) {
      console.error('The promise was rejected', err, err.stack);
    });

  }
  catch (err)
  {
    console.error(err);
  }
}

// determineGarage(identifier).then(function(value) {
//   console.info('WE WON!', value);
// }, function(err) {
//   console.error('The promise was rejected at the ENDDD', err, err.stack);
// });
