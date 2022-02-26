const productController = require('../controllers/productControllers')

const router = require('express').Router()

router.post('/', productController.addProduct)

module.exports = router