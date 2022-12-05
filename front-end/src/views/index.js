"use strict";

/** 
   * This view display the Ubix employee sign up view
   * @param {} 
   * @return {undefined} primitive type
*/

module.exports = ()=>{


    const {contentView, ImageView, TextView, TextInput, Composite} =  require("tabris");

    const snackbar = require("../widgets/snackbar.js");

    contentView.append(

        new ImageView({centerX:0, image:"src/images/logo.png", width:200, height:200}),

        new TextView({alignment:"centerX", layoutData: 'stretchX', top:["prev()", 0], padding:15, font:"16px roboto", text: "Cette application permet aux employés d'Ubix d'enregistrer sur le serveur les heures auxquelles ils sont arrivés au bureau, quand ils ont pris leurs pauses et quand ils sont rentrés chez eux."}),

        new Composite({ top: ['prev()', 30], left: 15, right: 15, height: 50, cornerRadius: 5, background:"#f4f6fa" }).append(

            new ImageView({ left: 5, centerY: 0, width: 20, height: 20, image: { src: "src/icons/no-profile.png", width: 18, height: 18 }, tintColor: "#757575" }),

            new TextInput({ centerY: 0, left: ["prev()", 0], right: 0, style: 'none', maxChars:100, floatMessage: false, textColor: "#212121", cursorColor: "#f91a27", background: 'transparent', message: "Entrez nom", messageColor: "#757575", font: "14px roboto", id:"name" }),

        ),

        new Composite({ top: ['prev()', 10], left: 15, right: 15, height: 50, cornerRadius: 5, background:"#f4f6fa" }).append(

            new ImageView({ left: 5, centerY: 0, width: 20, height: 20, image: { src: "src/icons/no-profile.png", width: 18, height: 18 }, tintColor: "#757575" }),

            new TextInput({ centerY: 0, left: ["prev()", 0], right: 0, style: 'none', maxChars:100, floatMessage: false, textColor: "#212121", cursorColor: "#f91a27", background: 'transparent', message: "Entrez votre prénom", messageColor: "#757575", font: "14px roboto", id:"surname" })

        ),
        
        new Composite({ top: ['prev()', 10], left: 15, right: 15, height: 50, cornerRadius: 5, background:"#f4f6fa" }).append(

            new ImageView({ left: 5, centerY: 0, width: 20, height: 20, image: { src: "src/icons/phone.png", width: 18, height: 18 }, tintColor: "#757575" }),

            new TextInput({ centerY: 0, left: ["prev()", 0], right: 0, keyboard:"phone", style: 'none', maxChars:100, floatMessage: false, textColor: "#212121", cursorColor: "#f91a27", background: 'transparent', message: "Entrez votre numéro sans indicatif", messageColor: "#757575", font: "14px roboto", id:"phoneNumber" })

        ),

        new Composite({ left: 15, right: 15, top: ['prev()', 30], height: 50, cornerRadius: 5, highlightOnTouch: true, elevation: 1, background: "#f91a27", id:"register" }).append(

            new TextView({ centerX: 0, centerY: 0, textColor: "#ffffff", font: "16px roboto", text:"S'ENREGISTRER" })

        ).onTap(()=>{

                const userName = contentView.find("#name").only().text;

                const userSurname = contentView.find("#surname").only().text;

                const userNumber = contentView.find("#phoneNumber").only().text;

                require("../modules/signUp.js")(userName, userSurname, userNumber).then((response)=>{

                      if(response.status !== "Ok"){

                          return snackbar(contentView, response.message);

                      }

                });

        }),


    )

};