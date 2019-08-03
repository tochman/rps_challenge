const chai = require('chai');
chai.use(require('chai-dom'))
const BrowserHelpers = require('e2e_training_wheels')
global.browser = new BrowserHelpers({headless: false})
global.expect = chai.expect;
global.sinon = require('sinon');

global.Player = require('./src/js/game')
global.Game = require('./src/js/game')

