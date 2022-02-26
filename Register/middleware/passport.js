const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const db = require('../DB/dbConfig')
const User = db.user
// const mongoose = require('mongoose')
// const User = mongoose.model('users')
const keys = require('../config/keys')


const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.jwt
}

module.exports = passport =>{
  passport.use(
    new JwtStrategy(options, async (payload, done) =>{
      
      try {
        const user = await User.findOne({where: {id: payload.userId}})/* .select('email id') */

        if (user) {
          done(null, user)
        }else{
          done(null, false)
        }

      } catch (e) {
        console.log(e)
      }
      
    })
  )
}

// findById(payload.userId)