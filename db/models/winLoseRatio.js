var db = require('../config');
var mongoose = require('mongoose');

var WLRatioSchema = mongoose.Schema({
	wins: Number,
	loses: Number,
	id: Number
});

var WLRatio = mongoose.model('WLRatio', WLRatioSchema);

module.exports = WLRatio;