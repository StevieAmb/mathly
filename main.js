//Player Game Section
let playerTopNumber = document.getElementById('player-top-number');
let playerBottomNumber = document.getElementById('player-bottom-number');
let playerOperationSection = document.getElementById('player-operation-section');

//Computer Game Section
let computerTopNumber = document.getElementById('computer-top-number');
let computerBottomNumber = document.getElementById('computer-bottom-number');
let computerOperationSection = document.getElementById('computer-operation-section')
let correctAnswerView = document.getElementById('correctAnswer')

//Input Fields
let userAnswerInput = document.getElementById('userAnswer')

//Buttons
let startAddGame = document.getElementById('start-add-game')
let checkUserAnswer = document.getElementById('submitUserAnswer')


const randomize = () => {
  let randomNumber = Math.floor(Math.random()*(100))
  return randomNumber 
}

const startMathProblemRound = () => {
  viewMathProblems()
  createPlayersProblems()
  setTimeout(() => {showAutomatedResponse()}, 10000)
}

const createPlayersProblems = () => { //The random should only happen once every game play.
  playerTopNumber.innerHTML = randomize()
  computerTopNumber.innerHTML = playerTopNumber.textContent
  playerBottomNumber.innerHTML = randomize()
  computerBottomNumber.innerHTML = playerBottomNumber.textContent
}

const showAutomatedResponse = () => {
  const topNumbers = parseInt(computerTopNumber.textContent)
  const bottomNumbers = parseInt(computerBottomNumber.textContent)
  correctAnswerView.innerHTML = topNumbers + bottomNumbers
}

const viewMathProblems = () => {
  show([playerOperationSection, computerOperationSection])
  hide([startAddGame])
}

const show = (elements) => {
  elements.forEach(element => element.classList.remove('hidden'))
}

const hide = (elements) => {
  elements.forEach(element => element.classList.add('hidden'))
}

startAddGame.addEventListener('click', startMathProblemRound)

//Pseudocode
//For this, I need to grab the response from the user input field,
//I need to them compare it to the correct answer from the problems
//Then I need to add the score to the score field

//If the user answer is correct, the computer card flips, and it says you got the correct answer
//I need to think of something that stops the game, or removes the input field, and replaces it
//With the word correct, and also flips the computer card.
