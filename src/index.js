import Nadm from "./Nadm";

var configuration = {
    website: "www.google.com",
    username: null,
    password: null,
    hitsPerHour: 6000
}

var nadm = new Nadm(configuration);

console.log("=================OPENING CONNECTION TO WEBSITE================");
// nadm.start();