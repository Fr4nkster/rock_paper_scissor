// store variable in DOM cash 
// Library book example
let  userScore = 0; 
let computerScore = 0; 
let finalComputerScore = 0; 
let finalUserScore = 0;
let userScore_span = document.getElementById("user-score"); 
let computerScore_span = document.getElementById('computer-score'); 
let finalUserResult_span = document.getElementById('finalUserResult'); 
let finalComputerResult_span = document.getElementById('finalComputerResult');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p'); 
const rock_div = document.getElementById("r");
const scissor_div = document.getElementById('s');
const paper_div = document.getElementById('p');

function getComputerChoice() { 
    const choices = [ 'r', 's' ,'p']; 
    const randomNumber = Math.floor(Math.random()* 3);
    return choices[randomNumber]; 
}
// convert letter from r to rock... and use it in userSelection 
function convertToWord(letter) { 
    if (letter === 'r') return 'Rock'; 
    if (letter === 's') return 'Scissor';
    return 'Paper' 
}

function win(userSelection,computerSelection ) { 
    const smallUserWord = 'user'.fontsize(3).sub(); 
    const smallCompWord = 'comp'.fontsize(3).sub(); 
    const userChoice_div = document.getElementById(userSelection);
    userScore++; 
    userScore_span.innerHTML = userScore; 
    result_p.innerHTML = `${convertToWord(userSelection)}${smallCompWord} beats   ${convertToWord(computerSelection)}${smallUserWord} you wins`;
    userChoice_div.classList.add('green-glow'); // get userCoice rps and add the class green glow
    setTimeout(() => userChoice_div.classList.remove('green-glow'),300); 

   // computerScore_span.innerHTML= computerScore; 
   
    } 
function looses(userSelection,computerSelection) { 
    const smallUserWord = 'user'.fontsize(3).sub(); 
    const smallCompWord = 'comp'.fontsize(3).sub(); 
    const userChoice_div = document.getElementById(userSelection);
    computerScore++; 
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = `${convertToWord(computerSelection)}${smallCompWord} beats   ${convertToWord(userSelection)}${smallUserWord} computer wins`; 
    userChoice_div.classList.add('red-glow'); // get userCoice rps and add the class green glow
    setTimeout(() => userChoice_div.classList.remove('red-glow') ,300); 
    } 
function draw(userSelection,) {  
    
    result_p.innerHTML = `its a draw!`; 
    
 
    }

function game(userChoice) { 
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){ 
        case "rs":
        case 'pr':
        case 'sp':
        win(userChoice, computerChoice);
    break
        case 'rp':
        case 'ps': 
        case 'sr':
        looses(userChoice,computerChoice);
    break
        case 'rr': 
        case 'pp': 
        case 'ss': 
        draw(userChoice,computerChoice); 
    break
        
    
    }
}
function finalScore1 ( userScore, computerScore) { 
    for ( i = 0; i >=5; i++ ) { 
        if (userScore >= 5 ) { 
            finalUserScore ++; 
            finalUserResult_span.innerHTML = finalUserScore; 
        }

    }
}

// put an on Click Event at the button and print result in console

function main() {
rock_div.addEventListener('click', function() {
    game('r'); // function game if user clicks rock it gets an argument 'r'
})

scissor_div.addEventListener('click', function() {
   game('s'); 
})

paper_div.addEventListener('click', function() {
    game('p')
}) 
   
}
// function finalScore2(userScore,computerScore) { 
    
  //  if (userScore_span ==  5) { 
  //      finalUserScore ++; 
  //      finalUserResult_span.innerHTML = finalUserScore; 
  //      console.log('+1')
  //  } else if (computerScore- == 5) { 
  //      finalComputerResult_span ++; 
  //  } else 
  //    return 'start again'; 
  //  }
//
  //  finalScore2();
  finalScore1(); 
 main();