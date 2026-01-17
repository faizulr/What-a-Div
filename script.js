const board = document.getElementById('board');
const startBtn = document.getElementById('startBtn');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const gridSizeEl = document.getElementById('gridSize');
const gameTimeEl = document.getElementById('gameTime');

let score = 0;
let timeLeft = 0;
let timerId = null;
let activeIndex = -1;
let spawnIntervalId = null;

function makeBoard(size){
  board.innerHTML = '';
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for(let i=0;i<size*size;i++){
    const div = document.createElement('div');
    div.className = 'cell';
    div.dataset.index = i;
    div.addEventListener('click', onCellClick);
    board.appendChild(div);
  }
}

function onCellClick(e){
  const idx = Number(e.currentTarget.dataset.index);
  if(idx === activeIndex){
    score++;
    scoreEl.textContent = score;
    // clear the active immediately so player can't click repeatedly
    setActive(-1);
  }
}

function setActive(idx){
  const cells = board.children;
  if(activeIndex >= 0 && cells[activeIndex]) cells[activeIndex].classList.remove('active');
  activeIndex = idx;
  if(idx >= 0 && cells[idx]) cells[idx].classList.add('active');
}

function pickRandom(size){
  return Math.floor(Math.random() * (size*size));
}

function startGame(){
  // initialize
  score = 0;
  scoreEl.textContent = score;
  timeLeft = Number(gameTimeEl.value);
  timeEl.textContent = timeLeft;
  const size = Number(gridSizeEl.value);
  makeBoard(size);

  // spawn loop
  clearInterval(spawnIntervalId);
  spawnIntervalId = setInterval(()=>{
    const idx = pickRandom(size);
    setActive(idx);
    // active only briefly
    setTimeout(()=> {
      if(activeIndex === idx) setActive(-1);
    }, Math.max(600 - (size*20), 300));
  }, 700);

  // countdown
  clearInterval(timerId);
  timerId = setInterval(()=>{
    timeLeft--;
    timeEl.textContent = timeLeft;
    if(timeLeft <= 0){
      endGame();
    }
  }, 1000);
}

function endGame(){
  clearInterval(timerId);
  clearInterval(spawnIntervalId);
  setActive(-1);
  alert(`Time's up! Your score: ${score}`);
}

startBtn.addEventListener('click', startGame);

// initial board
makeBoard(Number(gridSizeEl.value));
timeEl.textContent = gameTimeEl.value;
