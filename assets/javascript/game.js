// *** GAME VARIABLES AND OBJECTS

// Variable objects of all the words the computer can select

var wordOptions = [
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

// Variable for the current word the computer has selected

// Variable for the blank word that's being guessed by the user
    var blankWord = [];

// Variables that display the wins, losses, guesses and letters that the user has already guessed
    // Wins start at 0 - Counter for each time user guesses the word
    // Losses start at 0 - Counter for losses once user hits max number of guesses
    // Guesses start at 15 - Each time a user can guess wrong
    const guessesMax = 15;
    // Letters is blank - For all the letters the cuser guessed

// Flags for beginning and end game states
    // Game start - run the function that starts the game (might not need this, but will remove after testing)
    var gameStart = false;
    // Game over - prompts the user to try guessing the new word
    var gameOver = false;

// *** GAME FUNCTIONS AND KEY EVENTS

// Function that resets the game with default score counters
function resetScore() {
    // Guesses 15 (max)
    guessesLeft = guessMax;
    // Game start
    gameStart

    // Computer randomly chooses a word from the list mentioned above
        // Display a series of blanks that match the length of the word computer chose
        var blankWord = Math.floor(Math.random() * (wordOptions.length));

    // Create the blanks for the word the user has to guess

    // Hide image win word and game over text

    // Show everything

// User attempts to guess what the word is by pressing letters on the keyboard

// Whenever a user presses a letter key, run the following function

    // If user's guess is a letter that is part of the word the computer chose
        // Add user's correct letter(s) to its respective blank spot within the word
        // Reapeat each time user's guesses match the letters in computer's word
    
    // If user guesses all the letters in the word
        // Play sound/song
        // Add one point to Win
        // Reset Guesses
        // Reset Letters Guessed to blank
        // Computer chooses a new word
    
    // If user's guess is a letter that is NOT part of the word the computer chose
        // Minus one from Guesses
        // Add user's guess to list of Letters Guessed
    
    // If user reaches 0 Guesses left
        // Add one to Losses
        // Reset Guesses
        // Reset Letters Guessed to blank
        // Computer chooses a new word