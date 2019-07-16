exports.testModule = function () {
	return "Connected to scrape.js";
};

var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

// exports.testModule = function () {
// 	return "Connected to scrape.js";
// };

//app.get('/scrape/content', function(req, res){
exports.scrapeSite = function () {

  url = 'http://secure.parking.ucf.edu/GarageCount/';
  var arr = [];

  request(url, function(error, response, html){
      if(!error){
            var $ = cheerio.load(html)
            $('.dxgv').each(function(i, elem){
            arr[i] = $(this).text().trim();
            });
        var filtered = arr.filter(function (el) {
            return el != "";
        });
      }

      fs.writeFile('content.json', JSON.stringify(filtered, null, 4), function(err){
            //console.log('File successfully written! - Check your project directory for the output.json file');
            console.log(filtered);
      })
      res.send('Check your console!')
  })
}
//})

//app.listen('8081');
