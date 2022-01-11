const { Given, When } = require ('@cucumber/cucumber');
const HomePage = require('../../models/HomePage')

Given(/^I enter homepage$/, async function(){
    const homePage = new HomePage(page);
    await homePage.navigate();
})

When(/^I give search input (.*)$/, async function(searchTerm){
    const homePage = new HomePage(page);
    await homePage.searchF(searchTerm);

})

