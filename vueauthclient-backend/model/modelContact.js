const con = require("../configuration/mySqlConfig");

let myreq="Select * from contact";

function getReqContact(){
  return con.then(function(con){
    let resultat = con.query(myreq);
    return resultat
  })
}

module.exports ={ getReqContact }