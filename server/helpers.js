var express = require('express');
var path = require('path');

module.exports = {
	gameResults: function(player, computer, res) {
		if (player.shield || computer.shield) {
			return;
		}
		if (player.shooting && computer.shooting) {
			res.send('tie');
		} else if (player.shooting) {
			res.send('win');
		} else if (computer.shooting) {
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
	}
}