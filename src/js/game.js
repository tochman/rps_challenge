class Player {
  constructor(args) {
    console.log(args)
    this.callSign = args.callSign 
  }
}

class Game {
  play(playerOne, playerTwo) {
    let results
    console.log(JSON.stringify(playerOne))
    const [playerOneMessage, playerTwoMessage, tieMessage] = [`${playerOne.callSign} Wins!`, `${playerTwo.callSign} Wins!`, 'It is a TIE!']
    switch ([playerOne.currentChoice, playerTwo.currentChoice].join(' ')) {
      case ['Rock', 'Scissors'].join(' '):
      case ['Paper', 'Rock'].join(' '):
      case ['Scissors', 'Paper'].join(' '):
        results = playerOneMessage
        break
      case ['Rock', 'Paper'].join(' '):
      case ['Paper', 'Scissors'].join(' '):
      case ['Scissors', 'Rock'].join(' '):
        results = playerTwoMessage
        break
      default:
        results = tieMessage
        break
    }
    return results
  }

  randomizeChoice() {
    let randomizedChoice = Math.floor(Math.random() * 3) + 1
    let randomizedChoiceInWords
    switch (randomizedChoice) {
      case 1:
        randomizedChoiceInWords = 'Rock'
        break
      case 2:
        randomizedChoiceInWords = 'Paper'
        break
      case 3:
        randomizedChoiceInWords = 'Scissors'
        break
    }
    return randomizedChoiceInWords
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Player;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Game;
}