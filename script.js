const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector('.scissor');

let pOneScore=document.querySelector('.playerPicked');
let pTwoScore=document.querySelector('.compPicked');
let drawScore=document.querySelector('.drawCount');

let gamesPlayed=0;
let playerOneScore=0;
let playerTwoScore=0;
let drawScoreCount=0;

const maxTurns=(max) => {
    return computersPick=Math.floor(Math.random()*max);
};

const computersTurn=() => {
    let computersPick=maxTurns(3);
    return computerResult=
    (computersPick===0) ? 'rock':
    (computersPick===1) ? 'paper':
    (computersPick===2) ? 'scissor':
    '';
};

function draw(){
    drawScore.textContent=drawScoreCount+=1;
}
function updatePlayerOneScore(){
    pOneScore.textContent=playerOneScore+=1;
    if(playerOneScore===5) {
        alert('Player One is the winner');
    }
};

function updatePlayerTwoScore(){
    pTwoScore.textContent=playerTwoScore+=1;
    if(playerTwoScore===5){
        alert('Player Two is the winner');
    }
};

function readyPlayerOne (e) {
    const {value}=e.target;
    switch(value){
        case 'rock':
            if(computersTurn() ==='rock'){
                return draw();
            } else if(computersTurn()==='paper'){
                return updatePlayerTwoScore();
            } else if(computersTurn() ==='scissor'){
                return updatePlayerOneScore();
            }
            break;
            case 'paper':
                if(computersTurn()==='paper'){
                    return draw();
                } else if(computersTurn()==='scissor'){
                    return updatePlayerTwoScore();
                } else if(computersTurn()==='rock'){
                    return updatePlayerOneScore();
                }
            break;
            case 'scissor':
                if(computersTurn() === 'scissor'){
                    return draw();
                } else if(computersTurn() === 'rock'){
                    return updatePlayerTwoScore();
                } else if(computersTurn() === 'paper'){
                    return updatePlayerOneScore();
                }
            break;
    };
};

rockButton.addEventListener('click', readyPlayerOne);
paperButton.addEventListener('click', readyPlayerOne);
scissorButton.addEventListener('click', readyPlayerOne);
