const userController = require('../controllers/User')
const priceController = require('../controllers/Price')

const passport = require('passport')

const router = require('express').Router()

// passport.authenticate('jwt', {session: false})
router.post('/auth/register', userController.register)

router.post('/auth/login', userController.login)

router.post('/auth/test', passport.authenticate('jwt', {session: false}), (req,res) => {
  res.status(200).json({
    message: "Passport-jwt work"
  })
})

router.post('/auth/price', passport.authenticate('jwt', {session: false}), priceController.totalMoney)

router.delete('/auth/:id',  userController.deleteUser)

// get product 

router.get('/auth/get', userController.getPrice)

module.exports = router


// {
//     "email": "Ivan@gm2il.com",
//     "password": "classModel"
// }

// {
//     "total": 12345
// }
