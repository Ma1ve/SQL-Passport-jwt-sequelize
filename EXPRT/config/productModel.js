const {Sequelize} = require('sequelize')

module.exports = (sequelize) => {
  
  const Product = sequelize.define("product", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
    }
  })

  return Product
}