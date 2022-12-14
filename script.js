// Game
let playerScore=0;
let computerScore=0;
let drawScore=0;
let roundWinner="";

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        drawScore++;
        roundWinner='draw';
    } else if (
        (playerSelection==='rock'&&computerSelection==='scissors') ||
        (playerSelection==='scissors'&& computerSelection==='paper') ||
        (playerSelection==='paper' && computerSelection==='rock')
    ) {
        playerScore++;
        roundWinner='player';
    }
    else {
        computerScore++;
        roundWinner='computer';
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
}

function getRandomChoice() {
    let randomNumber=Math.floor(Math.random()*3)
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function isGameOver() {
    return playerScore===1000 || computerScore===1000;
}

// UI

const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const playerScorePara = document.getElementById('playerScore');
const computerScorePara = document.getElementById('computerScore');
const drawScorePara = document.getElementById('drawScore');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const restartBtn = document.getElementById('restartBtn');
const endgameModal=document.getElementById('endgameModal');
const overlay =document.getElementById('overlay');

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));
restartBtn.addEventListener('click', restartGame);
overlay.addEventListener('click', closeEndgameModal)


function handleClick(playerSelection) {
    if (isGameOver()) {
        openEndgameModal()
        return;
    }
    const computerSelection=getRandomChoice();
    playRound(playerSelection, computerSelection);
    //updateChoices(playerSelection, computerSelection);
    updateScore()
    if (isGameOver()) {
        openEndGameModal()
        setFinalMessage()
    }
}

function updateScore() {
    if (roundWinner==='draw') {
        scoreInfo.textContent="It's a draw!";
    } else if (roundWinner==='player') {
        scoreInfo.textContent="You won!";
    } else if (roundWinner==='computer') {
        scoreInfo.textContent='You lost!';
    }
    playerScorePara.textContent=`Player: ${playerScore}`;
    drawScorePara.textContent=`Draw: ${drawScore}`;
    computerScorePara.textContent=`Computer: ${computerScore}`;
}
function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
      scoreMessage.textContent = `${capitalizeFirstLetter(
        playerSelection
      )} beats ${computerSelection.toLowerCase()}`
      return
    }
    if (winner === 'computer') {
      scoreMessage.textContent = `${capitalizeFirstLetter(
        playerSelection
      )} is beaten by ${computerSelection.toLowerCase()}`
      return
    }
  
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} ties with ${computerSelection.toLowerCase()}`
  }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }
  
  function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }

  function setFinalMessage() {
    return playerScore>computerScore
        ? (endgameMsg.textContent='You won!')
        : (endgameMsg.textContent='You lost')
  }

function restartGame() {
    playerScore=0;
    computerScore=0;
    drawScore=0;
    scoreInfo.textContent='Choose';
    scoreMessage.textContent='First to Score 5 points wins the game';
    playerScorePara.textContent='Player: 0';
    computerScorePara.textContent='Computer: 0';
    drawScorePara.textContent='Draw: 0';
    playerSign.textContent='?';
    computerSign.textContent='?';
    endgameModal.classList.remove('active');
    overlay.classList.remove('active');
}
