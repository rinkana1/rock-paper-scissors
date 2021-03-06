// Keeps count of the number of rounds the player has won
var winCount = 0;
var loseCount = 0;
var winner = document.getElementById('js_winner');
var score = document.getElementById('js_score')

score.textContent = 'Score: ' + winCount + ' vs. ' + loseCount;

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
                    loseCount += 1;
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
                    loseCount += 1;
                    return 'You Lose! Scissors beats Paper :('
                    break;
            }
            break;
        case 'SCISSORS':
            switch (computerSelection) {
                case 'ROCK':
                    loseCount += 1;
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
/*function game() {
    for (var i = 0; i <= 4; i++) {
        console.log(playRound(prompt(), computerPlay()));
    }
    if (winCount >= 3) {
        return 'Congratulations! Player wins!'
    } else {
        return 'Computer Wins! Better luck next time.'
    }
}

console.log(game())*/

var buttons = document.querySelectorAll('button');
var results = document.getElementById('js_results')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        switch(button.id) {
            case 'js_rock':
                results.textContent = playRound('ROCK', computerPlay());
                break;
            case 'js_paper':
                results.textContent = playRound('PAPER', computerPlay());
                break;
            case 'js_scissors':
                results.textContent = playRound('SCISSORS', computerPlay());
                break;
        }
    })
})



document.addEventListener('click', () => {
    score.textContent = 'Score: ' + winCount + ' vs. ' + loseCount;
    if (winCount == 5) {
        if (winCount == loseCount) {
            winner.textContent = "The game is a draw :/";
        } else if (winCount > loseCount) {
            winner.textContent = "Congratulations! You Win the Game!"
        } else {
            winner.textContent = "You Lose the Game. Better luck next time."
        }
    }
})