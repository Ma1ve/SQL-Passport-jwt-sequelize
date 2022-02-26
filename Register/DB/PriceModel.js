const {Sequelize} = require('sequelize')

module.exports = (sequelize) => {
  
  const Price = sequelize.define("price", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    total: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  })

  return Price
}
