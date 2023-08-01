const Page = require('./page');

class SignUpPage extends Page {
    getLogInlink() { return $('//*[@id="app"]/div/main/div/div[1]/div/div/div/div[1]/div/div/p[2]/a') }
    getEmailBar() {return $('#input-15') }
    getContinueBtn() { return $('//*[@id="app"]/div/main/div/div[1]/div/div/div/div[1]/div/div/div/form/button') }
    
}

export default new HomePage()