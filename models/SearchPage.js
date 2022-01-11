module.exports = class SearchPage {
    constructor(page) {
        this.page = page
    }

    async getSearchResultText(){
        return page.innerText('[data-testid="resultsTitle"]');
    }

}