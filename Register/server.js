const express = require('express')
const passport = require('passport')
const routAuth = require('./routes/routAuth')



const app = express();

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', routAuth)


const PORT = process.env.PORT || 8888

app.listen(PORT, () => console.log(`Server is run on port ${PORT}`))