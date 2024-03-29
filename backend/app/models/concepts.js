var mongoose = require('mongoose');

// define schema for concept model
var conceptSchema = mongoose.Schema({
	_id			 : String,
    name         : String,
    description	 : String,
    difficulty   : {overall : Number, a : Number, b : Number, c : Number,
    				d : Number, e : Number, f : Number, g : Number, h : Number,
    				i : Number},
    //more info possibly added later
});

// expose the model to the app
module.exports = mongoose.model('concepts', conceptSchema);