const productController = require('../conrollers/productController')
const rewiewController = require('../conrollers/rewiewController')
const router = require('express').Router()

router.post('/', productController.addProduct)

router.post('/1', rewiewController.totalMoney)

module.exports = router