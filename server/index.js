const express = require('express')
const db = require('./config/db')

const app = express()

db.init()

app.use(require('./controllers'))

app.listen(3000, function() {
  console.log('Listening on port 3000...')
})