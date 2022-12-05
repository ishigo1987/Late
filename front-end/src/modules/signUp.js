   "use strict";
   /** 
   * This module handle the sign up functionality
   * @param {name} string
   * @param {surname} string
   * @param {phoneNumber} string
   * @return {promise} object
    */
module.exports = (name, surname, phoneNumber)=>{

     return new Promise((resolve)=>{

           if([name, surname, phoneNumber].includes("")){

                return resolve({

                        status: "Not ok",

                        message: "Veuillez entrer vos toutes vos informations."

                });

           }
           
           phoneNumber = Number.isFinite(Number(phoneNumber))

           if(phoneNumber[0] !== 6 && phoneNumber.length !== 9 && phoneNumber === false){

                return resolve({

                      status: "Not ok",

                      message: "Veuillez entrer un numéro camerounais valide."

                });

           }


           return require("../helpers/fetchData")().then((result)=>{



           });

           

     });

}