var fs = require('fs')
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
	fs.readFile(__dirname + '/getHistoryUSFuturesTick.json', 'utf8', function (err, data) {
		if (err) throw err;
		obj = JSON.parse(data);
		res.json(obj)
	});
	
})

// API #2:
app.get('/getEOD', function(req, res){
	
	var obj;
	fs.readFile(__dirname + '/getHistoryUSFuturesEOD.json', 'utf8', function (err, data) {
		if (err) throw err;
		obj = JSON.parse(data);
		res.json(obj)
	});
	
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})