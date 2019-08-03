let player = new Player({ callSign: 'Player' })
let computer = new Player({ callSign: 'Computer' })
let game = new Game()

const playGame = () => {
  player.currentChoice = event.target.innerText
  computer.currentChoice = game.randomizeChoice()
  let result = game.play(player, computer)

  let resultElement = document.querySelector('#results')
  const ctaElement = document.querySelector('#cta p')

  ctaElement.innerText = `${player.callSign} chose ${player.currentChoice} - ${computer.callSign} chose ${computer.currentChoice}`
  resultElement.innerText = result
}


const choiceButtons = document.querySelectorAll('.selection')
let button
choiceButtons.forEach(button => {
  button.addEventListener('click', playGame)
})

