var express = require('express');
var path = require('path');

var Player = require('./models/players');
var Computer = require('./models/computer');
var helper = require('./helpers');
var WLRatio = require('../db/models/winLoseRatio');

var app = express();

app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '../components')));
app.use(express.static(path.join(__dirname, '../node_modules')));

var mainPlayer = new Player();
var computer = new Computer();
var newWLRatio = new WLRatio({
			wins: 0,
			loses: 0,
			id: 1
		});
		newWLRatio.save(function(err, ratio) {
			console.log(err, ratio);
		});

app.get('/', function(req, res) {
	helper.newGame(mainPlayer, computer);
	res.sendFile(path.join(__dirname + '/views/index.html'));
})

app.get('/tie', function(req, res) {
	res.sendFile(path.join(__dirname + '/views/tie.html'));
})

app.get('/win', function(req, res) {
	res.sendFile(path.join(__dirname + '/views/win!!!.html'));
})

app.get('/lose', function(req, res) {
	res.sendFile(path.join(__dirname + '/views/lose.html'));
})

app.post('/shield', function(req, res) {
	mainPlayer.shielded();
    computer.randomAction(computer.randNum());
    if (helper.checkGameover(mainPlayer, computer)) {
    	helper.gameResults(mainPlayer, computer, res);
    } else {
	    helper.roundCleanup(mainPlayer, computer)
		res.send([mainPlayer, computer]);	
    }
})

app.post('/reload', function(req, res) {
	//invoke a helper function to maintain game state
	mainPlayer.reload();
	computer.randomAction(computer.randNum());
	if (helper.checkGameover(mainPlayer, computer)) {
    	helper.gameResults(mainPlayer, computer, res);
    } else {
	    helper.roundCleanup(mainPlayer, computer)
		res.send([mainPlayer, computer]);	
    }
})

app.post('/shot', function(req, res) {
	mainPlayer.shot();
	computer.randomAction(computer.randNum());
	if (helper.checkGameover(mainPlayer, computer)) {
    	helper.gameResults(mainPlayer, computer, res);
    } else {
	    helper.roundCleanup(mainPlayer, computer)
		res.send([mainPlayer, computer]);	
    }
})

module.exports = app;