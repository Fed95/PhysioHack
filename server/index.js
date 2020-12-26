const express = require('express')
const app = express()
const port = 3000
const db = require('./config/db')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');
//necessario require in variabile per autoswagger
const router = require('./controllers/index')

app.use(express.json())

db.init()
app.use(router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, function() {
  console.log('Listening on port 3000...')
})