var inquirer = require("inquirer");
var Letter = require('./letter.js');
var Word = require('./word.js');
var rightArray = [];
var wrongArray = [];
// var guesses = 15;
var newWord = new Word();
var newLetter = new Letter();
var guesses = newLetter.wrongArray.length;
var matchWord = "";
var x = 0;

newLetter.displayCharacter("", newWord.wordBank[x]);

function check() {
	if (newLetter.rightArray.length === matchWord.length) {
		console.log("You win!");
		nextWord();
	} else if (guesses === 0 ) {
		console.log("Let's play Hangman!");
		startGame();
	} else if (guesses === 9) {
		console.log("You have one life left!");
		startGame();
	} else if (guesses === 10) {
		console.log("Game Over! The word was " + newWord.wordBank[x]);
		nextWord();
	} else if (guesses > 0 && guesses < 10 && newLetter.rightArray.length != newWord.wordBank[x].length) {
		console.log("Guess again!");
		startGame();
	};
}

function startGame() {
	inquirer.prompt([
	  {
	  name: 'letter',
	  message: 'Choose a letter!',
	  validate: function(str){
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
		}
	}
	]).then(function(answer){
		newLetter.displayCharacter(answer.letter, newWord.wordBank[x]);
		matchWord = newWord.wordBank[x].replace(/(.)(?=.*\1)/g, "");
		guesses = newLetter.wrongArray.length;
		check();
	});
};

function nextWord() {
	inquirer.prompt([
	  {
	  name: 'game',
	  type: 'confirm',
	  message: 'Do you want to play again?',
	  default: true
	}
	]).then(function(answer){
		if (answer.game === true ){
			x++;
			newLetter.wrongArray = [];
			newLetter.rightArray = [];
			guesses = newLetter.wrongArray.length;
			newLetter.displayCharacter(answer.letter, newWord.wordBank[x]);
			check();			
			
		} else {
			process.exit();
		};
		
	});
}

startGame();





