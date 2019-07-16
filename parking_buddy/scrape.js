
var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

exports.testModule = function () {
	return "Connected to scrape.js";
};

//app.get('/scrape/content', function(req, res){
exports.scrapeSite = function () {

  url = 'http://secure.parking.ucf.edu/GarageCount/';
  var arr = [];
	var string;
	var jsonString = "{\n";

  request(url, function(error, response, html){
      if(!error){
            var $ = cheerio.load(html);
            $('.dxgv').each(function(i, elem){
            	arr[i] = $(this).text().trim();
            });
        var filtered = arr.filter(function (el) {
            return el != "";
        });
      }

			// Formatting array to JSON
			for (var i = 0; i < 14; i = i + 2)
			{
				// New line of JSON for every garage (removing spaces from names)
				jsonString += JSON.stringify(filtered[i].split(' ').join('')) + ":" + JSON.stringify(filtered[i+1]);
				if (i < 12)
				{
					jsonString += ",\n";
				}
			}
			jsonString += "\n}"; // Additional formatting

			console.log("JSON STRING IS :\n" + jsonString);

			fs.writeFile('content.json', jsonString, function(err) {});
      
  });
}
