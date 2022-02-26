const express = require('express')
const routProduct = require('./routs/routProduct')

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use('/api', routProduct)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is start on ${PORT}`))