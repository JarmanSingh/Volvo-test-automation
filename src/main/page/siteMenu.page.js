const page = require('./page');

class SiteMenuPage {

    //Locators
    get btnBuy() {return $('div[data-autoid="nav:sideNavLinksMenu"]').$$('button')[0]}

    //Action Methods
    clickBtnBuy(){
        page.doClick(this.btnBuy);
    }

}
module.exports=new SiteMenuPage();