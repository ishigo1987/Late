"use strict";


/** 
   * This helper is used to retrieve and send data to the server
   * @param {url} string
   * @param {data} string
   * @return {promise} object
*/

module.exports = (url, data = null)=>{

     return new Promise((resolve)=>{

            fetch(url).then((response)=>{

                return response.json();

            }).then((result)=>{

                console.log(result)

            }).catch((error)=>{

                console.log(error);

            })

     })

}