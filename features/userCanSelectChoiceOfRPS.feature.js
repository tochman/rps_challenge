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

  // Example test

  it('should have 3 choice butttons', async function () {
    const BUTTON = 'button';

    expect(await browser.page.$$(BUTTON)).to.have.lengthOf(3);
  });

  it('choice buttons are visible on game section of the page', async () => {
    let content = await browser.getContent("div[id='game']")
    expect(content).to.have.string("Rock", "Paper", "Scissors");
  });
});