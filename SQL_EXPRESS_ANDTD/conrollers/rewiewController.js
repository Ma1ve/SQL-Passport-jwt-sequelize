const db = require('../models/index')

const Product = db.products;
const Rewiews = db.reviews;

const totalMoney = async (req, res) => {


  // const candidate = await User.findOne({where: {email: req.body.email}});

  let info = {
    total: req.body.total/* ,
    id: candidate.id */
  }
  const money = await Rewiews.create(info)
  res.status(200).send(money)
}

module.exports = {
  totalMoney
}