const ctaElement = document.querySelector('#cta p')
let player = new Player({callSign: 'Player'})
let computer = new Player({callSign: 'Computer'})
let game = new Game()



const displayChoice = (event) => {
  player.currentChoice = event.target.innerText
  computer.currentChoice = game.randomizeChoice()
  let result = game.play(player, computer)
  ctaElement.innerText = `${player.callSign} chose ${player.currentChoice} - ${computer.callSign} chose ${computer.currentChoice}`
  let resultElement = document.querySelector('#results')
  resultElement.innerText = result
}


const choiceButtons = document.querySelectorAll('.selection')
let button
choiceButtons.forEach(button => {
  button.addEventListener('click', displayChoice)
})

