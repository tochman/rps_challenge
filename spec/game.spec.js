require('../spec.helper')

describe("Game", () => {
  let player = new global.Player({ callSign: 'Thomas' })
  let computer = new Player({ callSign: 'Computer' })
  let game = new Game()
  before(() => {

  });

  it('rock beats scissors', () => {
    player.currentChoice = "Rock"
    computer.currentChoice = "Scissors"
    expect(game.play(player, computer)).to.equal("Thomas Wins!");
  })
  it('scissors beats paper', () => {
    player.currentChoice = "scissors"
    computer.currentChoice = "paper"
    expect(game.play(player, computer)).to.equal(player);
  })
  it('paper beats rock', () => {
    player.currentChoice = "paper"
    computer.currentChoice = "rock"
    expect(game.play(player, computer)).to.equal(player);
  })
  it('rock beats scissors', () => {
    player.currentChoice = "scissors"
    computer.currentChoice = "rock"
    expect(game.play(player, computer)).to.equal(computer);
  })
  it('scissors beats paper', () => {
    player.currentChoice = "paper"
    computer.currentChoice = "scissors"
    expect(game.play(player, computer)).to.equal(computer);
  })
  it('paper beats rock', () => {
    player.currentChoice = "rock"
    computer.currentChoice = "paper"
    expect(game.play(player, computer)).to.equal(computer);
  })

})



