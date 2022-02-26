// const { DataTypes } = require('sequelize/types')
// const { sequelize } = require(".")
// , DataTypes
const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  
  const Product = sequelize.define("product", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
    }/* ,
    description:{
      type: DataTypes.TEXT,
    },
    published: {
      type: DataTypes.BOOLEAN
    } */
  })

  return Product
}