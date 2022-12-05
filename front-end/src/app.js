
 "use strict";
 /** 
   * Initialization file
   * @param {} 
   * 
    */

const {app} = require("tabris");

app.idleTimeoutEnabled = false;


const userStorage = secureStorage.getItem("userInfos");

if(userStorage === null){

     // We redirect the user to the index view

     return require("./views/index.js")();

}

return require("./views/home.js")();
