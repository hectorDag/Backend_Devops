const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')
const cors = require('cors')
const port = process.env.PORT || 5000


connectDB()

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use('/api/noticias', require('./routes/newsRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
