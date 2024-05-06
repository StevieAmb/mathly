//Player Game Section
let playerTopNumber = document.getElementById('player-top-number');
let playerBottomNumber = document.getElementById('player-bottom-number');

//Computer Game Section
let computerTopNumber = document.getElementById('computer-top-number');
let computerBottomNumber = document.getElementById('computer-bottom-number');

const randomize = () => {
  let randomNumber = Math.floor(Math.random()*100)
  console.log(randomNumber)
  return randomNumber
}

const createPlayersProblems = () => {
  playerTopNumber.innerHTML = randomize()
  playerBottomNumber.innerHTML = randomize()
  computerTopNumber.innerHTML = randomize()
  computerBottomNumber.innerHTML = randomize()
}

createPlayersProblems()
