// GAME VARIABLES AND OBJECTS

// Variable objects of all the words

// Variables that display the wins, losses, guesses and letters guessed
    // Wins start at 0
    // Losses start at 0
    // Guesses start at 15
    // Letters Guessed is blank

// GAME FUNCTIONS AND KEY EVENTS

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