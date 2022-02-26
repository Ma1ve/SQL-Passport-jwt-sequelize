const db = require('../DB/dbConfig')

const Price = db.price;
const User = db.user;

const totalMoney = async (req, res) => {

  let info = {
    total: req.body.total
  }
  const money = await Price.create(info)
  res.status(200).send(money)
}


module.exports = {
  totalMoney
}