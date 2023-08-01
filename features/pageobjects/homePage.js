const Page = require('./page');

class HomePage extends Page {
    getLTKBtn() { return $('//*[@id="app"]/div/header/div/div/div[1]/a/svg') }
    getSearchBar() {return $('#input-45') }
    getSignUpBtn() { return $('#app > div > header > div > div > div:nth-child(1)') }
    getLogInBtn () { return $('//*[@id="app"]/div/header/div/div/a[2]/span/span') }
}

export default new HomePage()