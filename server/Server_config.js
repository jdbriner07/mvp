var express = require('express');
var path = require('path');


var app = express();

app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '../components')));
app.use(express.static(path.join(__dirname, '../node_modules')));


app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/views/index.html'));
})

app.post('/shield', function(req, res) {
	//invoke a helper function to maintain game state
	res.send('hello back');
})

app.post('/reload', function(req, res) {
	//invoke a helper function to maintain game state
	//send back ammo count to the player-- might have to move that up a scope so that computer ammo can be updated at the same time
	res.send('hello back');
})

module.exports = app;