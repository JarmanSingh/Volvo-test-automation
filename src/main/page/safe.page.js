const constants=require('../constants/FrameworkContants');
const page = require('./page');

class SafePage {

    //Locators
    get btnAccept() { return $('button[title="Accept"]') }
    get safePageNavMenu() { return $('button[id="nav:topNavCarMenu"]') }


    //Action Methods
    getSafePageTitle() {
        return page.doGetPageTitle(constants.SAFE_PAGE_HEAD_TITLE);
    }

    isSafeNavMenuDisplayed() {
        return page.doIsDisplayed(this.safePageNavMenu);
    }

    clickAcceptCookie(){
        page.doClick(this.btnAccept);
    }

    clickNavMenu(){
        page.doClick(this.safePageNavMenu);
    }

}

module.exports=new SafePage();