const con = require("../configuration/mySqlConfig");

let myreq="Select * from contact";

function getReqContact(){
  return con.then(function(conn){
    let resultat = conn.query(myreq);
    return resultat
  })
}

module.exports ={ getReqContact }