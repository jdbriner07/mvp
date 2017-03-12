//define a player and computer object
var Player = function () {
	this.ammo = 1,
	this.shield = false,
	this.shooting = false
};
// var computer = {
// 	ammo: 1,
// 	shield: false,
// 	alive: true
// }

//make a helper function for /reload
Player.prototype.reload = function() {
	//update player ammo count and invoke a random computer function
	this.ammo ++;
}

//make a helper function for /shield
Player.prototype.shielded = function() {
	this.shield = true;
	//shield for the turn and invoke computer rng
}
//make a helper function for shooting the computer
Player.prototype.shot = function() {
	//rng for computer action then prefrom shooting action
	this.shooting = true;
	this.ammo--;
}

module.exports = Player;
//rng for computer action
//define computer actions