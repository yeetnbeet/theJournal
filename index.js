var express = require("express");
var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get("/",function(req,res){
	res.render("home.html")
	});

app.get("/api/:lat/:lng",function(req,res){
	var lat  = req.params.lat;
	var lng  = req.params.lng;
	res.json({lat:lat,lng:lng});
	});


app.listen(8080,function(){
	console.log('running');
	});


