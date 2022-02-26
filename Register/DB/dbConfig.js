const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
  'register',
  'root',
  'Stssms10', {
    host: 'localhost',
    dialect: 'mysql'
  }
)

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.user = require('./UserModel')(sequelize);
db.price = require('./PriceModel')(sequelize);

db.user.hasMany(db.price, {
  foreignKey: 'user_id',
  as: 'price'
});

db.price.belongsTo(db.user, {
  foreignKey: 'user_id',
  as: 'user'
});

db.sequelize.sync({force: false})
.then(() => console.log("MySQL work..."));



module.exports = db;