require('../spec.helper');

context('RPS Game', () => {
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });

  beforeEach(async () => {
    await browser.page.reload();
  });

  after(() => {
    browser.close();
  });

  describe('interface', () => {
    it('should have #game section', async () => {
      expect(await browser.page.$$('section[id="game"]'))
        .to.have.lengthOf(1);
    });
  
    it('should have #choices section', async () => {
      expect(await browser.page.$$('section[id="choices"]'))
        .to.have.lengthOf(1);
    });
  
    it('should have #results section', async () => {
      expect(await browser.page.$$('section[id="results"]'))
        .to.have.lengthOf(1);
    });
  
    it('should have 3 selection buttons', async () => {
      expect(await browser.page.$$('.selection'))
        .to.have.lengthOf(3);
    });
  
    it('choice buttons are visible on game section of the page', async () => {
      let content = await browser.getContent("section[id='game']")
      expect(content).to.contain("Rock", "Paper", "Scissors");
    });
  
    it('call to action is displayed', async () => {
      await sinon.spy
      let content = await browser.getContent("section[id='choices'] div[id='cta']")
      expect(content).to.contain('Make your choice')
    });
  });
  

  // player inteacts with game UI

  describe('- player choices are displayed when', () => {
    it('clicking Rock', async () => {
      await browser.clickOnButton('button[id="rock"]')
      let content = await browser.getContent("section[id='choices']")
      expect(content).to.contain('Player chose Rock')  
    });

    it('clicking Paper', async () => {
      await browser.clickOnButton('button[id="paper"]')
      let content = await browser.getContent("section[id='choices']")
      expect(content).to.contain('Player chose Paper')  
    });

    it('clicking Scissors', async () => {
      await browser.clickOnButton('button[id="scissors"]')
      let content = await browser.getContent("section[id='choices']")
      expect(content).to.contain('Player chose Scissors')  
    });

    it('randomized by computer player', async () => {
      await browser.clickOnButton('button[id="scissors"]')
      let content = await browser.getContent("section[id='choices'] p")
      let possibleResults = /(?: Computer chose Rock|Computer chose Paper|Computer chose Scissors)/
      expect(possibleResults.test(content)).to.equal(true)
    });
  });

  describe('game result message', () => {
    it('is displayed', async () => {
      await browser.clickOnButton('button[id="scissors"]')
      let content = await browser.getContent("section[id='results']")
      let possibleResults = /(?:Player Wins!|Computer Wins!|It is a TIE!)/
      expect(possibleResults.test(content)).to.equal(true)
    });
  });
  
});