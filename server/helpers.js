var express = require('express');
var path = require('path');

var db = require('../db/config');
var WLRatio = require('../db/models/winLoseRatio');

module.exports = {
	gameResults: function(player, computer, res) {
		if (player.shield || computer.shield) {
			return;
		}
		if (player.shooting && computer.shooting) {
			res.send('tie');
		} else if (player.shooting) {
			module.exports.update('wins')
			res.send('win');
		} else if (computer.shooting) {
			module.exports.update('loses');
			res.send('lose');
		}
	},
	roundCleanup: function() {
		var players = Array.prototype.slice.call(arguments);
		players.forEach(function(player) {
			player.shooting = false;
			player.shield = false;
		})
	},
	checkGameover: function(player, computer) {
		if (player.shield || computer.shield) {
			return false;
		} else if (player.shooting || computer.shooting) {
			return true;
		} else {
			return false;
		}
	},
	newGame: function() {
		var players = Array.prototype.slice.call(arguments);
		players.forEach(function(player) {
			player.shooting = false;
			player.shield = false;
			player.ammo = 1;
		})
	},
	update: function(winOrLose) {
		WLRatio.findOne({id: 1}).exec(function(err, ratio) {
			ratio[winOrLose]++;
			ratio.save(function(err, ratio) {
				console.log(ratio);
				return ratio;
			})
		})
	}
}