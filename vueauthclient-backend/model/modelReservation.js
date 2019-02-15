const con = require("../configuration/mysqlConfig");

let myreq = "Select * from reservation";

function getReqReservation(){
  return con.then(function(con){
    let reservation = con.query(myreq);
    return reservation
  })
}

module.exports={
  getReqReservation
}