const {BeforeAll, AfterAll, setDefaultTimeout} = require('@cucumber/cucumber')
const {chromium} = require('playwright');

BeforeAll(async function () {

    global.browser = await chromium.launch();
    global.page = await browser.newPage();

})

AfterAll(async function () {
    await browser.close();
})