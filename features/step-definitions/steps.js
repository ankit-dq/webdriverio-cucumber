const { Given, When, Then } = require('@wdio/cucumber-framework');
// const { expect, $ } = require('@wdio/globals')
const { AxeDevToolsWebdriverIO } = require('@axe-devtools/webdriverio');
const AxeDevToolsReporter = require('@axe-devtools/reporter').default
const reportDir = './a11y-results'
const axeReporter = new AxeDevToolsReporter('axeTestSuite', reportDir)
let i=2


Given('I am on the broken workshop page', async function () {
    await browser.url(`https://broken-workshop.dequelabs.com/`);
    console.log("Opened the broken workshp page")
  });

  Then('I check the page for a11y issues', async function () {
    console.log("Checked the page for a11y issues using axe devtools");
    const axe = new AxeDevToolsWebdriverIO({client: browser});
    const results = await axe.analyze();
    await axeReporter.logTestResult(`homepage${i}`, results);
    i++;
    
  });

  Then('I click on the Recipe button', async function () {
    console.log("clicking on the recipe card button to open the model dialog box")
    const recipe_card_button = await $(`#main-content > div.Recipes > div:nth-child(1) > div.Recipes__card-foot > button`);
    await recipe_card_button.click()
  });
