//Player Game Section
let playerTopNumber = document.getElementById('player-top-number');
let playerBottomNumber = document.getElementById('player-bottom-number');
let playerOperationSection = document.getElementById('player-operation-section');

//Computer Game Section
let computerTopNumber = document.getElementById('computer-top-number');
let computerBottomNumber = document.getElementById('computer-bottom-number');
let computerOperationSection = document.getElementById('computer-operation-section')

let startAddGame = document.getElementById('start-add-game')

const randomize = () => {
  let randomNumber = Math.floor(Math.random()*100)
  console.log(randomNumber)
  return randomNumber
}

const createPlayersProblems = () => { //The random should only happen once every game play.
  playerTopNumber.innerHTML = randomize()
  playerBottomNumber.innerHTML = randomize()
  computerTopNumber.innerHTML = randomize()
  computerBottomNumber.innerHTML = randomize()
}

const startGame = () => {
  displayMathProblems()
  createPlayersProblems()
}

const displayMathProblems = () => {
  show([playerOperationSection, computerOperationSection])
  hide([startAddGame])
}

const show = (elements) => {
  elements.forEach(element => element.classList.remove('hidden'))
}

const hide = (elements) => {
  elements.forEach(element => element.classList.add('hidden'))
}

startAddGame.addEventListener('click', startGame)
