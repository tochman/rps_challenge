require('../spec.helper')

describe("Game", () => {
  let player, computer, game
  beforeEach(() => {
    player = new Player({callSign: 'Thomas'})
    computer = new Player({callSign: 'Computer'})
    game = new Game()
  });

  it('rock beats scissors', () => {
    player.currentChoice = "Rock"
    computer.currentChoice = "Scissors"
    expect(game.play(player, computer)).to.equal("Thomas Wins!");
  })
  it('scissors beats paper', () => {
    // console.log(JSON.stringify(player))
    player.currentChoice = "Scissors"
    computer.currentChoice = "Paper"
    expect(game.play(player, computer)).to.equal("Thomas Wins!");
  })
  it('paper beats rock', () => {
    player.currentChoice = "Paper"
    computer.currentChoice = "Rock"
    expect(game.play(player, computer)).to.equal("Thomas Wins!");
  })
  it('rock beats scissors', () => {
    player.currentChoice = "Scissors"
    computer.currentChoice = "Rock"
    expect(game.play(player, computer)).to.equal("Computer Wins!");
  })
  it('scissors beats paper', () => {
    player.currentChoice = "Paper"
    computer.currentChoice = "Scissors"
    expect(game.play(player, computer)).to.equal("Computer Wins!");
  })
  it('paper beats rock', () => {
    player.currentChoice = "Rock"
    computer.currentChoice = "Paper"
    expect(game.play(player, computer)).to.equal("Computer Wins!");
  })

})



