const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  
  const Review = sequelize.define("review", {
    rating: {
      type: Sequelize.INTEGER,   
    },
    description:{
      type: Sequelize.TEXT,
    }
  })

  return Review
}