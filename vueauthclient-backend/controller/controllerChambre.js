const query = require('../model/modelChambre');

function getChambre(req, res){
  query.getReqChambres().then((chambres, err)=>{
    if(err) throw err;
    res.send({chambres:chambres})
  })
}

module.exports={
  getChambre
}