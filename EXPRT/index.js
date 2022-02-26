const express = require('express')
const router = require('./routes/routProduct.js')

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api', router)


const PORT = process.env.PORT || 8888

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
})