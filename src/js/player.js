function Player(args) {
  
  this.callSign = args.callSign 
  this.sayFuck = () => {
    return 'Fuck'
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Player;
}