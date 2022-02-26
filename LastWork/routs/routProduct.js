const controllers = require('../controllers/ProductControl')

const router = require('express').Router()


router.post('/', controllers.addProduct)

router.get('/getAll', controllers.getAllProducts)

router.get('/published', controllers.getPublishedProduct)



router.get('/:id', controllers.getSingleProduct)

router.put('/:id', controllers.updateProduct)

router.delete('/:id', controllers.deleteProduct)




module.exports = router

