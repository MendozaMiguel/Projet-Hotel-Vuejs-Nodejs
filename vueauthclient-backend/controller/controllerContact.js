const query = require('../model/modelContact');

function getContact (req, res) {
  query.getReqContact().then((resultat, err)=>{
      if (err) throw err;
      res.send({resultat:resultat})
  })
}

module.exports ={
  getContact:getContact,
};