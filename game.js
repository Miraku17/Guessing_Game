
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;

document.querySelector('body').style.backgroundColor = '#222';

const displayMessage = function (message) {
  document.querySelector('.start').textContent = message;
};

const displayAnswer = function (answer) {
    document.querySelector('.number').textContent = answer;
  };

console.log(secretNumber);

document.querySelector(".check").addEventListener('click',function(){

    const guess = Number(document.querySelector('.guess-input').value);
    console.log(guess, typeof guess);

      // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');
    document.querySelector('body').style.backgroundColor = '#8f3131';

    // When player wins
  }else if( guess === secretNumber){
    displayMessage('🎉 Correct Number!');
    displayAnswer(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    alert("Coded by Zian Valles. Thank you for playing the game!");

    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
     }
  }
  

//when player is wrong
  else if( guess !== secretNumber){
    if (score > 1) {
       
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#2b0303';
      }
  }
});
// if again is pressed 
document.querySelector(".again").addEventListener('click',function(){

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    lscore = 5;
    highscore = 0;

    document.querySelector('.guess-input').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing...');
    document.querySelector('.number').style.width = '15rem';
});