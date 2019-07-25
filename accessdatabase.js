// accessdatabase.js
exports.testModule = function () {
	return "Connected to accessdatabase.js";
};

// Contacting database
exports.fetchFromDB = async function (identifier) {
	var MongoClient = require('mongodb').MongoClient;

	var garageArray;
	var database;
	var collection;

	// MongoDB document names
	var SU_DocName = "SU";
	var CB1_DocName = "CB1";
	var CB2_DocName = "CB2";
	var MSB_DocName = "MSB";
	var ENG_DocName = "ENG";
	var PSY_DocName = "PSY";

	const databaseURL = "mongodb://Database_User:StrongPassword1@ds245387.mlab.com:45387/heroku_lcj9p1fs";

	// Connect to the db
	MongoClient.connect(databaseURL, { useNewUrlParser: true }, function (err, db)
	{
			 async function getDocument() {
			  	try {
					 console.log("WERE HERE1");
					 //console.log(await collection.findOne({name: identifier}));
					 return await collection.findOne({name: identifier});
				 }
				 catch (error) {
					 //if (err) throw err;
					 console.log("ERR");
					 console.log(error);
				 }
			 }

	     if(err) throw err;

			 console.log("Connected to Database?");

			 database = await db.db("heroku_lcj9p1fs");
			 collection = await database.collection("Distances");

			 if (err) throw err;

			 return await collection.findOne({name: identifier});


	}).then(function (err, value) {

	});
	return garageArray;
}
