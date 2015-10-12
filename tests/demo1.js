module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('div.srg:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h3:nth-child(1) > a:nth-child(1)', 'Night Watch - IMDb', 'Found it!')
      .end();
  }
};
