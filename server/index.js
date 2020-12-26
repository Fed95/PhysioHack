const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.use(require('./controllers'))

app.listen(port, function() {
  console.log('Listening on port 3000...')
})