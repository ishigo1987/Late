   /** 
   * This widget handle the message return by the module
   * @param {widgetToAttach} string
   * @param {firstTextSnackbar} string
   * @param {delayOfHidingSnackbar} string
   * @param {secondTextSnackbar} string
   * @return {promise} primitive type
*/
module.exports = (widgetToAttach, firstTextSnackbar, delayOfHidingSnackbar = 3000, secondTextSnackbar) =>{
    // Single line height = 48dp = 36px but i choose 40px
    //Multi lines height = 80dp = 60px
    return new Promise((resolve)=>{

       const {Composite,TextView} = require('tabris');

      const snackbar = new Composite({ bottom: 15, left: 15, right: 15, elevation:3, cornerRadius:5, padding: 15, background: "#212121", transform:{translationY:250}}).appendTo(widgetToAttach);
      
      const firstMessage = new TextView({ left: 0, right: 0, font: "14px roboto", centerY: 0, text: firstTextSnackbar, textColor: "#ffffff"}).appendTo(snackbar);
       
      if(secondTextSnackbar !== undefined){

         firstMessage.right = 120;

         new TextView({ right: 0, highlightOnTouch: true, centerY: 0, text: secondTextSnackbar.toUpperCase(), textColor:"#f91a27" ,font:"bold 15px roboto"})
         .onTap(() =>{

             closeSnackbar();

             resolve({Message:"Action Snackbar Clicked"});

         }).appendTo(snackbar);

       }
 
       function openSnackbar(){

           snackbar.animate({
               transform:{translationY:0}
             }, {
               delay:0,
               duration:300,
               repeat:0,
               reverse:false,
               easing: "ease-out"
             }
           ).then(()=>{
             if(delayOfHidingSnackbar !== "infinite"){
               // i replace delay by setTimeout for some design purposes
               setTimeout(()=>{closeSnackbar();},delayOfHidingSnackbar);
             }
           });
         }

       function closeSnackbar(){
           snackbar.animate({
               transform:{translationY:250}
             }, {

               delay:0,

               duration:250,

               repeat:0,

               reverse:false,

               easing: "ease-out"

             } ).then(()=>{snackbar.dispose();});
         }
       openSnackbar();
    });
 };
 