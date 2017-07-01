var fs = require('fs')
var request = require('request')
const express = require('express')
const app = express()	


app.get('/', function (req, res) {
	res.sendFile(__dirname + "/index.html")});

app.get('/dateBasedDataChart', function (req, res) {
	res.sendFile(__dirname + '/dateBasedDataChart.html');
})

app.get('/professionalCandlesticksChart', function (req, res) {
	res.sendFile(__dirname + '/professionalCandlesticks.html');
})


// Api #1:
app.get('/getTick', function(req, res){
	
	var obj;
	var url = 'http://www.barchartmarketdata.com/data-samples/getHistoryUSFuturesTick.json';
	
	request.get(url, function(error, response, body){
		if (!error && response.statusCode == 200) {
			obj = JSON.parse(body);
			res.json(obj);
		}
	});
	
})

// API #2:
app.get('/getEOD', function(req, res){
	
	var obj;
	var url = 'http://www.barchartmarketdata.com/data-samples/getHistoryUSFuturesEOD.json';
	
	request.get(url, function(error, response, body){
		if (!error && response.statusCode == 200) {
			obj = JSON.parse(body);
			res.json(obj);
		}
	});
	
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})