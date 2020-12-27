const express = require('express')
const app = express()
const port = 3001
const db = require('./config/db')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');
//need in variable for autoswagger
const router = require('./controllers/index')

app.use(express.json())

db.init()
app.use(router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, function() {
  console.log(`Listening on port ${port}...`)
})