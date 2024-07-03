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
  let randomNumber = Math.floor(Math.random()*(100))
  return randomNumber 
}

const createPlayersProblems = () => { //The random should only happen once every game play.
  playerTopNumber.innerHTML = randomize()
  computerTopNumber.innerHTML = playerTopNumber.textContent
  playerBottomNumber.innerHTML = randomize()
  computerBottomNumber.innerHTML = playerBottomNumber.textContent
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

//Pseudocode
//So, I need for the math problems to be the same numbers, that section to have the same numbers,
//however, I need the input fields, where the answers go and show to be different.
//What I can do is, I can make the two parts of the sections have the same classname, 
//And then I can grab that one classname, and then get the children of them,
//Where I can ise those and then randomize those.
//I can also use the same classname to make the cards.
