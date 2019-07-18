// accessdatabase.js
exports.testModule = function () {
	return "Connected to accessdatabase.js";
};

// Contacting database
exports.fetchFromDB = async function (identifier) {
	var MongoClient = require('mongodb').MongoClient;

	var garageArray;

	// MongoDB document names
	var SU_DocName = "SU";
	var CB1_DocName = "CB1";
	var CB2_DocName = "CB2";
	var MSB_DocName = "MSB";
	var ENG_DocName = "ENG";
	var PSY_DocName = "PSY";

	const databaseURL = "mongodb://Database_User:StrongPassword1@ds245387.mlab.com:45387/heroku_lcj9p1fs";

	// Connect to the db
	MongoClient.connect(databaseURL, { useNewUrlParser: true }, function (err, db) {

	     if(err) throw err;

			 console.log("Connected to Database?");

			 var database = db.db("heroku_lcj9p1fs");
			 var collection = database.collection("Distances");

			 async function getDocument() {
				 try {
					 //console.log("WERE HERE1");
					 var cursor = await collection.findOne({name: identifier});

					 return cursor;
				 }
				 catch (error) {
					 //if (err) throw err;
					 console.log("ERR");
					 console.log(error);
				 }
			 }

			 if (err) throw err;

			 garageArray = getDocument();

	});

	return garageArray;
}
