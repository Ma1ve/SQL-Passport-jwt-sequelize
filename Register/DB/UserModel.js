const {Sequelize} = require('sequelize')

module.exports = (sequelize) => {
  
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  })

  return User
}
