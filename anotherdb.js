var MongoClient = require('mongodb').MongoClient;

module.exports = {
  fetchFromDB : function() {
		const databaseURL = "mongodb://Database_User:StrongPassword1@ds245387.mlab.com:45387/heroku_lcj9p1fs";
    return MongoClient.connect(databaseURL, { useNewUrlParser: true }).then(function(db) {

			var identifier = "SU";
			console.log("Connected to Database");

			database = db.db("heroku_lcj9p1fs");
			collection = database.collection("Distances");

      return collection.findOne({name: identifier});
    }).then(function(items) {
      //console.log(items);
      return items;
    });
  }
};
