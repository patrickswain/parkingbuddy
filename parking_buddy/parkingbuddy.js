// parkingbuddy.js (root file)

// Modules ////////////
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

// Files /////////
var webscraper = require('./webscraper.js');
var dbfile = require('./accessdatabase.js');

// MongoDB document names
var SU_DocName = "StudentUnion";
var CB1_DocName = "5d1688b0fb6fc00e79b23ed0";
var CB2_DocName = "5d168a86fb6fc00e79b23fb3";
var MSB_DocName = "5d168b05fb6fc00e79b23fd0";
var ENG_DocName = "5d176e6efb6fc00e79b260ea";
var PSY_DocName = "5d17724bfb6fc00e79b2616a";

console.log(webscraper.testModule());

//const databaseURL = "mongodb://<dbuser>:<dbpassword>@ds245387.mlab.com:45387/heroku_lcj9p1fs";
const databaseURL = "mongodb://Database_User:StrongPassword1@ds245387.mlab.com:45387/heroku_lcj9p1fs";

// Connect to the db
MongoClient.connect(databaseURL, function (err, db) {

     if(err) throw err;

		 console.log("Connected to Database?");

		 var database = db.db("heroku_lcj9p1fs");
		 var collection = database.collection("Distances");

		 // Poll collection "Distances" for document containing correct building
		 //var cursor = collection.findOne({_id: "5d16837efb6fc00e79b23c4e"});

		 async function getDocument() {
			 var cursor = await collection.findOne({name: 'StudentUnion'});
			 //while (cursor == null){}

			 console.log(cursor.Garages[0]);
			 return cursor;
		 }

		 getDocument();

		 if (err) throw err;

		 //console.log(cursor.Garages[0]);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
