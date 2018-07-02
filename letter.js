var inputLetter = require('./game.js')

var Letter = function(chosenLetter, word) {
	this.character = chosenLetter;
	this.word = word;
	this.rightArray = [];
	this.wrongArray = [];
	this.displayWord = [];
	this.theWord = [];
}

Letter.prototype.displayCharacter = function(chosenLetter, word) {
	this.displayWord = [];
	this.theWord = [];

	for (var i = 0; i < word.length; i++) {
		this.theWord.push(word.charAt(i));
	};

	if ((this.rightArray.indexOf(chosenLetter) > -1) || (this.wrongArray.indexOf(chosenLetter) > -1) ){
		console.log("You already chose this letter!");
	}
	else if( this.theWord.indexOf(chosenLetter) !== -1 ) {
		this.rightArray.push(chosenLetter);
	} else if (this.theWord.indexOf(chosenLetter) == -1) {
		this.wrongArray.push(chosenLetter);
	};
	for( i = 0; i < this.theWord.length; i++) {
		if( this.rightArray.indexOf(this.theWord[i]) !== -1 ) {
			this.displayWord.push(this.theWord[i]);
		} else {
			this.displayWord.push('_ ');
		};
	};
	console.log(this.displayWord.join(" ")); 
}; 

module.exports = Letter;
