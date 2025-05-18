const choices = document.querySelectorAll('.choice');
const playerDisplay = document.getElementById('playerChoice');
const computerDisplay = document.getElementById('computerChoice');
const outcomeDisplay = document.getElementById('outcome');
const winCount = document.getElementById('winCount');
const loseCount = document.getElementById('loseCount');
const drawCount = document.getElementById('drawCount');

const winSound = document.getElementById('winSound');
const loseSound = document.getElementById('loseSound');
const drawSound = document.getElementById('drawSound');

let wins = 0;
let losses = 0;
let draws = 0;

const gameOptions = ['✊', '🖐️', '✌️'];

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const player = choice.textContent;
    const computer = gameOptions[Math.floor(Math.random() * 3)];

    // Clear animation
    playerDisplay.classList.remove('slide-center');
    computerDisplay.classList.remove('slide-center');

    setTimeout(() => {
      playerDisplay.textContent = player;
      computerDisplay.textContent = computer;

      playerDisplay.classList.add('slide-center');
      computerDisplay.classList.add('slide-center');

      const result = getResult(player, computer);
      outcomeDisplay.textContent = result;

      if (result === 'You Win!') {
        wins++;
        winSound.play();
      } else if (result === 'You Lose!') {
        losses++;
        loseSound.play();
      } else {
        draws++;
        drawSound.play();
      }

      winCount.textContent = wins;
      loseCount.textContent = losses;
      drawCount.textContent = draws;
    }, 200);
  });
});

function getResult(player, computer) {
  if (player === computer) return 'Draw!';

  if (
    (player === '✊' && computer === '✌️') ||
    (player === '🖐️' && computer === '✊') ||
    (player === '✌️' && computer === '🖐️')
  ) {
    return 'You Win!';
  } else {
    return 'You Lose!';
  }
}
