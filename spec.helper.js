const chai = require('chai');
chai.use(require('chai-dom'))
const BrowserHelpers = require('e2e_training_wheels')
global.browser = new BrowserHelpers()
global.expect = chai.expect;
