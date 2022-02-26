const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
  'LastWork', 'root', 'Stssms10', {
    host: "localhost",
    dialect: "mysql"
  }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.product = require('./Product')(sequelize)

db.sequelize.sync({force: false})
  .then(() => console.log("Connect in MySQL..."))

module.exports = db

