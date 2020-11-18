


      function computerChoice() {
          let options = ['rock', 'paper', 'scissor'];
          return options[Math.floor(Math.random() * options.length)]
      }



let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if ( playerSelection === 'rock' && computerSelection === 'scissor') {
        playerScore ++;
        return `You win! Rock beats scissor. Score: ${playerScore} to ${computerScore}`;
    }
    else if ( playerSelection ==='scissor' && computerSelection === 'paper') {
        playerScore ++;
        return `You win! Scissor beats scissor.Score: ${playerScore} to ${computerScore}`;
    }
    else if ( playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return `You win! Paper beats rock.Score: ${playerScore} to ${computerScore}`;
    }
    else if ( playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore ++;
        return `You loose! Scissor beats paper.Score: ${playerScore} to ${computerScore}`;
    }
    else if ( playerSelection === 'scissor' && computerSelection === 'rock') {
        computerScore ++;
        return `You loose! Rock beats scissor.Score: ${playerScore} to ${computerScore}`;
    }
    else if ( playerSelection === 'paper' && computerSelection === 'scissor') {
        computerScore ++;
        return `You win! Scissor beats paper.Score: ${playerScore} to ${computerScore}`;
    } else ( playerSelection === computerSelection); {
        return `its a tie Score: ${playerScore} to ${computerScore}`}
}

function game() {
        for ( let i = 0; i < 10; i++) {
            let playerSelection = prompt('Type: Rock, Paper or Scissor')
            playerSelection = playerSelection.toLowerCase();
            let computerSelection = computerChoice();
            console.log(playRound( playerSelection,computerSelection));
        }
        if ( playerScore > computerScore) {
            console.log('You are the greatest,');
        } else if ( computerScore > playerScore) {
            console.log('Bad luck in games, good luck in love ');
    } else console.log('You tied, play again') ;


}
game();


