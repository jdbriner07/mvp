var Player = require('./players');

var Computer = function() {
	Player.call(this);
	this.action = '';
	this.rng = Math.random();
}

Computer.prototype = Object.create(Player.prototype);

Computer.prototype.constructor = Computer; 

Computer.prototype.randNum = function() {
	this.rng = Math.random();
	if (this.ammo > 0) {
		return Math.floor(this.rng * 3);
	} else {
		return Math.floor(this.rng * 2);
	}
}

Computer.prototype.randomAction = function(num) {
	if (num === 0) {
		this.reload();
		this.action = "reloading";
	} else if (num === 1) {
		this.shielded();
		this.action = 'shielding';
	} else {
		this.shot();
		this.action = "I kill you!!";
	}
}

module.exports = Computer;