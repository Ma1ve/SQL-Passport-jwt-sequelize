
const {Sequelize} = require('sequelize')


const sequelize = new Sequelize(
  'testsql',
  'root',
  'Stssms10', {
    host: 'localhost',
    dialect: 'mysql'
  }
)


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require('./productModel.js')(sequelize);

db.sequelize.sync({force: false})
.then(() =>{
  console.log('yes re-sunc done!');
})

module.exports = db