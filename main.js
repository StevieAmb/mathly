//Player Game Section
let playerTopNumber = document.getElementById('player-top-number');
let playerBottomNumber = document.getElementById('player-bottom-number');
let playerOperationSection = document.getElementById('player-operation-section');

//Computer Game Section
let computerTopNumber = document.getElementById('computer-top-number');
let computerBottomNumber = document.getElementById('computer-bottom-number');
let computerOperationSection = document.getElementById('computer-operation-section')
let correctAnswerView = document.getElementById('correctAnswer')

//Dialogue
let userMathProblemDialogue = document.getElementById('userMathProblemDialogue')
let userScore = document.getElementById('userScore')
let userResponse = document.getElementById('userResponse')

//Input Fields
let userAnswerInput = document.getElementById('userAnswerInput')

//Buttons
let startAddGame = document.getElementById('start-add-game')
let checkUserAnswerButton = document.getElementById('submitUserAnswer')

const integerSigns = [1, -1]


const randomizeNumber = () => {
  let randomNumber = Math.floor(Math.random()*(100))
  return randomNumber 
}

const randomizeNumberSigns = (signs) => {
  let randomNumber = Math.floor(Math.random()*signs.length)
  return randomNumber
}

const showAutomatedResponse = () => {
  const topNumbers = parseInt(computerTopNumber.textContent)
  const bottomNumbers = parseInt(computerBottomNumber.textContent)
  correctAnswerView.innerHTML = topNumbers + bottomNumbers
}

const startMathProblemRound = (answerCorrect) => {
  viewMathProblems()
  createPlayersProblems()
}

const getMathProblemAnswer = () => {
  const topNumbers = parseInt(computerTopNumber.textContent)
  const bottomNumbers = parseInt(computerBottomNumber.textContent)
  const correctAnswer = topNumbers + bottomNumbers
  return correctAnswer;
}

//The native setTimeout function returns an ID when called that you can use to clear it.
//In order to clear the setTimeout when the user gets the answer right, I need the ID,
//Which I will use to clear the timeOut. Right now, it's in the start math problem round, which means it
//is in the scope of that function. 

const restartGame = () => {
  startMathProblemRound()
  hide([userMathProblemDialogue, userResponse])
  show([userAnswerInput, checkUserAnswerButton])
}


const checkUserAnswer = () => {
  show([userMathProblemDialogue, userResponse])
  hide([userAnswerInput, checkUserAnswerButton])
  let answer = getMathProblemAnswer()
  if(parseInt(userAnswerInput.value) === answer) {
    userMathProblemDialogue.innerHTML = "CORRECT, YOU GOT IT!"
    userScore.textContent++
    userResponse.textContent = userAnswerInput.value;
    hide([checkUserAnswerButton, userAnswerInput])
  } else {
    userResponse.textContent = userAnswerInput.value;
    userMathProblemDialogue.innerHTML = "Not quite, try again!"
  }
  userAnswerInput.value = ''
  setTimeout(() => restartGame(true), 2000)
}

const createPlayersProblems = () => { //The random should only happen once every game play.
  playerTopNumber.innerHTML = randomizeNumber() * integerSigns[randomizeNumberSigns(integerSigns)]
  computerTopNumber.innerHTML = playerTopNumber.textContent
  playerBottomNumber.innerHTML = randomizeNumber() * integerSigns[randomizeNumberSigns(integerSigns)]
  computerBottomNumber.innerHTML = playerBottomNumber.textContent
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
checkUserAnswerButton.addEventListener('click', checkUserAnswer)



//If the user answer is correct, the computer card flips, and it says you got the correct answer
//I need to think of something that stops the game, or removes the input field, and replaces it
//With the word correct, and also flips the computer card.
