class Player {

  constructor(args) {
    this.callSign = args.callSign 

  }

  sayFuck = () => {
    return 'Fuck'
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Player;
}