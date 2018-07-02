var fs = require("fs");
var Letter = require("./letter.js");
// var wordbank = require('./wordbank.js');
var inputLetter = require('./game.js')


var Word = function() {
	this.wordBank = ["rocket", "orbit", "universe", "spacex", "nasa", "falcon", "planet", "jupiter", "earth", "saturn", "galaxy", "apollo", "moon", "astroid", "nebula"].shuffle();
	this.counter = 0;
}

Array.prototype.shuffle = function(){
	var i = this.length, j, temp;
	while(--i > 0){
	    j = Math.floor(Math.random() * (i+1));
	    temp = this[j];
	    this[j] = this[i];
	    this[i] = temp;
	}
	return this;
};

module.exports = Word;

