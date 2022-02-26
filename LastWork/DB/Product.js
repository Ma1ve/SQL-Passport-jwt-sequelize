const {Sequelize, DataTypes} = require('sequelize')

module.exports = (sequelize) => {

  const Product = sequelize.define("product", {

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
       type: DataTypes.INTEGER,
    },
    /* published: {
      type: Sequelize.BOOLEAN,
    } */
    
  })

  return Product
}