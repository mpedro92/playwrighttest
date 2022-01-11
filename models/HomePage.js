class HomePage {
    constructor(page) {
        this.page = page
    }

    async navigate() {
        await this.page.goto('https://dunelm.com');
        try {
            await this.page.click('text= Allow All', {timeout: 2000});
        } catch (e) {
        }
    }

    async searchF(text){
        await this.page.fill('[data-testid="headerSearchInput-desktop"]', text);
        await this.page.click('[data-testid="headerSearchButton"]');
    }

}

module.exports = HomePage;