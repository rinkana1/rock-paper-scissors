// Keeps count of the number of rounds the player has won
var winCount = 0;

// Randomly chooses between ROCK, PAPER, and SCISSORS for the computer
function computerPlay() {
    var select = ['ROCK', 'PAPER', 'SCISSORS']
    var random = Math.floor(Math.random() * (3))
    return select[random]
}

// Plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase()

    switch (playerSelection) {
        case 'ROCK':
            switch (computerSelection) {
                case 'ROCK':
                    return 'It\'s a tie! :/';
                    break;
                case 'PAPER':
                    return 'You Lose! Paper beats Rock :(';
                    break;
                case 'SCISSORS':
                    winCount += 1;
                    return 'You Win! Rock beats Scissors +1';
                    break;
            }
            break;
        case 'PAPER':
            switch (computerSelection) {
                case 'ROCK':
                    winCount += 1
                    return 'You Win! Paper beats Rock +1'
                    break;
                case 'PAPER':
                    return 'It\'s a tie! :/'
                    break;
                case 'SCISSORS':
                    return 'You Lose! Scissors beats Paper :('
                    break;
            }
            break;
        case 'SCISSORS':
            switch (computerSelection) {
                case 'ROCK':
                    return 'You Lose! Rock beats Scissors :('
                    break;
                case 'PAPER':
                    winCount += 1;
                    return 'You Win! Scissors beats Paper +1'
                    break;
                case 'SCISSORS':
                    return 'It\'s a tie! :/'
                    break;
            }
            break;
        default:
            // If the player gives an invalid response, restart the round
            console.log('This isn\'t a valid answer. Please try again');
            return playRound(prompt(), computerPlay())
            
    }
}

// Loops 5 rounds and logs the results to the console. Then Declares who wins depending on the score.
function game() {
    for (var i = 0; i <= 4; i++) {
        console.log(playRound(prompt(), computerPlay()));
    }
    if (winCount >= 3) {
        return 'Congratulations! Player wins!'
    } else {
        return 'Computer Wins! Better luck next time.'
    }
}

console.log(game())