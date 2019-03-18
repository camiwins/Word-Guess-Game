// *** GLOBAL VARIABLES ***

// An array of words that the computer can randomly select from
var wordList = [
    "sushi",
    "sashimi",
    "ramen",
    "tempura",
    "miso soup",
    "shabu shabu",
    "yakitori",
    "tsukemen",
    "onigiri",
    "udon",
    "soba",
    "gyoza",
    "tonkatsu",
    "wagyu",
    "takoyaki",
    "natto",
    "kabayaki",
]

// An array of letters the user is allowed to select from
var alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]

// Word the computer chooses
var word = "";
// Wins - the number of times a user guessed all the letters in the word correctly
var wins = 0;
// Losses - the number of times a user expended all of their guesses
var losses = 0;
// Guesses Left Max - the max number of guesses a user has
const guessesLeftMax = 15;
// Guesses Left - the number of guesses remaining
var guessesLeft = 0;
// Guesses Made - an array of letters the user guessed
var guessesMade = "" ;

// *** FUNCTIONS ***

// Function that resets the game to default state

    // Sets the guesses left back to maximum
    console.log(guessesLeft = guessesLeftMax);

    // Computer picks a random word from the word array above
    word = Math.floor((Math.random() * wordList.length));
        console.log(wordList[word]);
        // Displays the chosen word with blanks
        
// Function of user guesses the word

    // User presses a letter keky

    // If user's guessed letter is part of computer's word
        // Reveal letter on the blank spot within the word
        // Add letter to guesses made
    
    // If user guesses all the letters in the world
        // Add one point to Win
        // Reset guesses left
        // Reset guesses made
        // Computer picks new word

    // If user's guessed letter is NOT part of computer's word
        // Minus one point from guesses left
        // Add letter to guesses made

    // If user expends all their guesses
        // Add one point to Loss
        // Reset guesses left
        // Reset guesses made
        // Computer picks new word
