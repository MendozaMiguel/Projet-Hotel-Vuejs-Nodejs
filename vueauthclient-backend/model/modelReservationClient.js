const con = require('../configuration/mySqlConfig')

function postReqReservation() {
  // let params=['2017-08-30 12:00:00',1,1,'Chambre seule','ssdqssdqsd','qsdqsdqsdsqd','0636043604','sdqsdsq','qsdqsdqsd',93500,'sqsdqdqs','qsdqsdqsd',6,4,4,10,2,1,'Oui','Sans importance','Oui','sqdqsdsqdqd',3]
  let myreq = "INSERT INTO reservation (`datechoisi`, `nb_nuit`, `nb_personnes`, `type`, `nom`, `prenom`, `tel`, `adresse`, `comp_adresse`, `cp`, `ville`, `pays`, `single`, `twin`, `familial_triple_2_lits`, `familial_triple_3_lits`, `familial_quadruple`, `options_supplementaires`, `balcon`, `vue`, `climatisation`, `msgcomplementaire`,`id_facturation`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,1)";
  return con.then(function(conn){
    let resultat = conn.query(myreq);
    return resultat
  })
}

module.exports={
  postReqReservation:postReqReservation
}