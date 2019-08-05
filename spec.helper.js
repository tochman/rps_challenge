const chai = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
global.browser = new BrowserHelpers({headless: false})
global.expect = chai.expect;

global.Game = require('./src/js/game')
global.Player = require('./src/js/player')



