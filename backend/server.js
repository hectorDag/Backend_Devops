const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000


connectDB()

const app = express()

app.use(express.json())

app.use('/api/noticias', require('./routes'))


app.listen(port, () => console.log(`Server started on port ${port}`))
