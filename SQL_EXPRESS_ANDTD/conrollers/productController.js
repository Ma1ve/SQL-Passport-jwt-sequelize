const db = require('../models/index') //   ../models

// create Main model

const Product = db.products

// main work

const addProduct = async (req,res) =>{
  let info =  {
    title: req.body.title,
    price: req.body.price
  }

  const product = await Product.create(info)
  res.status(200).send(product)
}

module.exports = {
  addProduct
}