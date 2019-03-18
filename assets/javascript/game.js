// *** GAME VARIABLES AND OBJECTS

// Variable objects of all the words the computer can select

// Variable for the current word the computer has selected

// Variable for the word that's being guessed by the user

// Variables that display the wins, losses, guesses and letters guessed
    // Wins start at 0 - Counter for each time user guesses the word
    // Losses start at 0 - Counter for losses once user makes max number of guessing attempts, aka errors
    // Errors start at 15 - Each time a user can guess wrong
    // Guessed is blank - For all the letters the cuser guessed

// Variables for game states
    // Game start
    // Game over

// *** GAME FUNCTIONS AND KEY EVENTS

// Function that starts the game with default counters

// Computer randomly chooses a word from the list mentioned above
    // Display a series of blanks that match the length of the word computer chose

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