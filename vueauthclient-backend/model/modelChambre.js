const con = require("../configuration/mySqlConfig");

let myreq="Select * from chambre";

function getReqChambres(){
  return con.then(function(con){
    let chambres = con.query(myreq);
    return chambres
  })
}

module.exports={
  getReqChambres
}