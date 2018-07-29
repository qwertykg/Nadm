import  ChromeAPI from "./headlessChrome/ChromeAPI";

class Nadm {

    constructor(configuration) {
        const webSite = configuration.webSite;

        const username = configuration.username;
        const password = configuration.password;
        
        const hitsPerHour = configuration.hitsPerHour;
    
        let chromeAPI = new ChromeAPI();
        // chromeAPI.openConnection(webSite);
    }

    start() {
        this.chromeAPI.openConnection(webSite);
    }
    
    destroy() {
        this.chromeAPI.destroy();
    }
}

export default Nadm;