var checkGuess = require('./game.js');

var wrongGuesses = module.exports = {
    count: 0,
    add: function() {
        wrongGuesses.count++;
        checkGuess.check;
    }
}