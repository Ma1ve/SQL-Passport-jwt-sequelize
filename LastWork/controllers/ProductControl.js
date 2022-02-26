const db = require('../DB/dbCreate');

const Product = db.product;

// add Product

const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    /* published: req.body.published ? req.body.published : false */
  }

  const product = await Product.create(info);
  res.status(200).send(product);
}

// get all products

const getAllProducts = async (req, res) => {
  let products = await Product.findAll({
    attributes: [
      'id',
      'title',
      'price'
    ]
  })
  res.status(200).send(products);
}

// get by id

const getSingleProduct = async (req, res) => {

  let id = req.params.id;

  let product = await Product.findOne({where: { id: id }});

  res.status(200).send(product);

}

// get update

const updateProduct = async (req, res) => {

  let id = req.params.id;
  
  const product = await Product.update(req.body, { where: { id: id}});
  res.status(200).send(product);
}

// delete product

const deleteProduct = async (req, res) => {

  let id = req.params.id;

  await Product.destroy({where: { id: id }});

  res.status(200).send("product is delete");
}

// get publisheded product

const getPublishedProduct = async (req, res) => {

  const products = await Product.findAll({where: { published: true }});

  res.status(200).send(products);
}


module.exports = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getPublishedProduct
};