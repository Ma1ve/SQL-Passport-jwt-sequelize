// const dbConfig = require('../config/dbConfig')
// , DataTypes
const {Sequelize} = require('sequelize')

// const sequelize = new Sequelize(
//   dbConfig.DB,
//   dbConfig.USER,
//   dbConfig.PASSWORD, {
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialict,
//     operatorsAliases: false,

//     pool: {
//       max: dbConfig.pool.max,
//       min: dbConfig.pool.min,
//       acquire: dbConfig.pool.acquire,
//       idle: dbConfig.pool.idle
//     }
//   }
// )

const sequelize = new Sequelize(
  'node_sequelize_api_db',
  'root',
  'Stssms10', {
    host: 'localhost',
    dialect: 'mysql'
  }
)


// sequelize.authenticate()
// .then(() => {
//   console.log('connected...')
// })
// .catch(err => {
//   console.log("Error"+err)
// })

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

// db.products = require('./productModel.js')(sequelize, DataTypes)

db.products = require('./productModel.js')(sequelize)
db.reviews = require('./rewiewModel.js')(sequelize)

db.sequelize.sync({force: false})
.then(() =>{
  console.log('yes re-sunc done!')
})

module.exports = db