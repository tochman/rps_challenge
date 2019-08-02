require('../spec.helper');

context('RPS Game interface', () => {
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

  // Basic interface

  it('should have #game section', async function () {
    expect(await browser.page.$$('section[id="game"]'))
      .to.have.lengthOf(1);
  });

  it('should have #choices section', async function () {
    expect(await browser.page.$$('section[id="choices"]'))
      .to.have.lengthOf(1);
  });

  it('should have #results section', async function () {
    expect(await browser.page.$$('section[id="results"]'))
      .to.have.lengthOf(1);
  });

  it('should have 3 choice butttons', async function () {
    expect(await browser.page.$$('button'))
      .to.have.lengthOf(3);
  });

  it('choice buttons are visible on game section of the page', async () => {
    let content = await browser.getContent("section[id='game']")
    expect(content).to.have.string("Rock", "Paper", "Scissors");
  });

  it('call to action is displayed', async () => {
    let content = await browser.getContent("section[id='choices'] div[id='cta']")
    expect(content).to.contain('Make your choice')
  });

  // player inteacts with game UI

  describe('player choices are displayed when', () => {
    it('clicking Rock', async () => {
      await browser.clickOnButton('button[id="rock"]')
      let content = await browser.getContent("section[id='choices']")
      expect(content).to.contain('You chose Rock')  
    });

    it('clicking Paper', async () => {
      await browser.clickOnButton('button[id="paper"]')
      let content = await browser.getContent("section[id='choices']")
      expect(content).to.contain('You chose Paper')  
    });

    it('clicking Scissors', async () => {
      await browser.clickOnButton('button[id="scissors"]')
      let content = await browser.getContent("section[id='choices']")
      expect(content).to.contain('You chose Scissors')  
    });

  });
  
});