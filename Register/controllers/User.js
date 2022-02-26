const db = require('../DB/dbConfig');
const bcrypt = require('bcryptjs');
const keys = require('../config/keys');
const jwt = require('jsonwebtoken');

const User = db.user;
const Price = db.price;

const register = async (req, res) => {
  const candidate = await User.findOne({where: {email: req.body.email}}); //email // let email = req.body.email

  if (candidate) {
    res.status(409).json({
      message: "Такой email уже занят. Попробуйте другой."
    })
  }else {

    const salt = bcrypt.genSaltSync(10);
    const PasRes = req.body.password;

    let info = {
      email: req.body.email,
      password: bcrypt.hashSync(PasRes,salt)
    }

    try {

      const user = await User.create(info);
      res.status(201).send(user);

    } catch (e) {

      console.log(e)

    }
  }
  
}

const login = async (req, res) => {
  const candidate = await User.findOne({where: {email: req.body.email}});
  // candidate.createPrice({total: 34})

  if (candidate) {

    // const password = await User.findOne({where: {password: req.body.password}})

    const passwordRes = bcrypt.compareSync(req.body.password, candidate.password);

    if (passwordRes) {

      
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate.id
         
      }, keys.jwt, {expiresIn: 60 * 60});

      res.status(200).json({
        token: `Bearer ${token}` 
      })
      
      
    } else {
      res.status(404).json({
      message: "Пароли не совпадают, попробуйте снова"
    })
    }

  } else {
    res.status(404).json({
      message: "Пользователь с таким email не найден."
    })

  }
}

const deleteUser = async (req, res) => {

  let id = req.params.id;

  await User.destroy({where: { id: id }});

  res.status(200).send("product is delete");
}

const getPrice = async (req, res) => {
  
  const data = await User.findAll({
    include: [{
      model: Price,
      as: "price" 
      
    }],
    where: { id : 2}
  })
    
  res.status(200).send(data);
  
  
  

  // const data = await Price.findAll({})
  // res.status(200).send(data);

  
}



module.exports = {
  register,
  login,
  deleteUser,
  getPrice
  
};