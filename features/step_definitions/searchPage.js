const { Then } = require ('@cucumber/cucumber');
const SearchPage = require('../../models/SearchPage')
const {expect} = require("@playwright/test");

Then(/^Search output matches (.*)$/, async function(searchTerm){
    const searchPage = new SearchPage(page);
    const results = await searchPage.getSearchResultText()
    expect(results).toMatch(new RegExp(`${searchTerm}\\(\\d+ results\\)`));
})