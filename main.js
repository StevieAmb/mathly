//Player Game Section
let playerTopNumber = document.getElementById('player-top-number');
let playerBottomNumber = document.getElementById('player-bottom-number');
let playerOperationSection = document.getElementById('player-operation-section');

//Computer Game Section
let computerTopNumber = document.getElementById('computer-top-number');
let computerBottomNumber = document.getElementById('computer-bottom-number');
let computerOperationSection = document.getElementById('computer-operation-section')

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

}

const show = (elements) => {
  elements.forEach(element => element.classList.remove('hidden'))
}

const hide = (elements) => {
  elements.forEach(element => element.classList.add('hidden'))
}


createPlayersProblems()
