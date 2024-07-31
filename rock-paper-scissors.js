 
//------------JSON.parse() converts a string into object-------
let score =  JSON.parse(localStorage.getItem('score'))||
{

  wins: 0,
  losses: 0,
  ties: 0
  
};


updateScore();

/*
if(score === null){  OR if(!score){
score={
  wins: 0,
  losses: 0,
  ties: 0
};
}
*/
function playGame(playerMove){
  const computerMove=pickComputerMove();
    let result='';

    if(playerMove==='scissors'){
      if(computerMove==='rock'){
        result='You lose.';
      }
      else if(computerMove==='paper'){
        result='You win.';
      }
      else{
        result='Tie.';
      }
    }
    else if(playerMove==='paper'){
      if(computerMove==='rock'){
    result='You win.';
  }
  else if(computerMove==='paper'){
    result='Tie.';
  }
  else{
    result='You lose.';
  }
    }
    else{
      if(computerMove==='rock'){
    result='Tie.';
  }
  else if(computerMove==='paper'){
    result='You lose.';
  }
  else{
    result='You win.';
  }
    }


    if(result==='You win.'){
      score.wins+=1;
    }
    else if(result==='You lose.'){
      score.losses+=1;
    }
    else{
      score.ties+=1;
    }

    //-------JSON.stringify converts an object into a string---------

    localStorage.setItem('score',JSON.stringify(score));

    updateScore();

    const Result=document.querySelector('.js-result');
   Result.innerHTML=result;
   Result.classList.add('result-para');

   const Moves=document.querySelector('.js-move');
    Moves.innerHTML=`You 
    <img src="images/${playerMove}-emoji.png" class="move-icon"> 
    <img src="images/${computerMove}-emoji.png" class="move-icon"> 
    Computer`;
}

function updateScore(){
document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
    function pickComputerMove(){
      let computerMove='';
    // Math.random() select any random integer between 0 & 1

      const randomNumber=Math.random();
  if(randomNumber >=0 && randomNumber<1/3){
    computerMove='rock';
  }
  else if(randomNumber>=1/3 && randomNumber<2/3){
     computerMove='paper';
  }
  else{
     computerMove='scissors';
  }
  return computerMove;
    }
