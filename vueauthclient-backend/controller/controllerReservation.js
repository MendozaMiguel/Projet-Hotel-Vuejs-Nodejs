const query= require('./../model/modelReservationClient');

function ReservationPost(req){
  query.postReqReservation(req).then((err)=>{
    if (err) throw err;
  })
}

module.exports={
  ReservationPost:ReservationPost
}