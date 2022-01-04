const { HomePage } = require('/Users/pedromonteiro/repotest/models/HomePage.js');

const { test, expect } = require('@playwright/test');

//test.use({ headless: false });
//test('basic test', async ({ page }) => {
//    await page.goto('https://dunelm.com');
//    await expect(page).toHaveTitle('Dunelm | Bedding, Curtains, Blinds, Furniture & More');
//});

test.use({ headless: false });
for(let array of ['chair', 'chair_']) {
test(`second test ${array}`, async({page}) => {
        //await page.goto('https://dunelm.com');
        //await page.click('text= Allow All');

        //const elementHandle = await page.$('[data-testid="headerSearchInput-desktop"]');
        //await elementHandle.type(array);
        //await page.click('[data-testid="headerSearchButton"]');

        //const pag = await pag.newPage();
        const homePage = new HomePage(page);

        await homePage.navigate();
        await homePage.searchF(array);

        const results = await page.innerText('[data-testid="resultsTitle"]');
        expect(results).toMatch(new RegExp(`${array}\\(\\d+ results\\)`));
})}


 //    /\(\d+ results\)/)










