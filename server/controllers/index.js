const express = require('express')
const router = express.Router()
//necessario require in variabile per autoswagger
const professionals = require('./professionals.js')
router.use('/professionals',professionals)

module.exports = router