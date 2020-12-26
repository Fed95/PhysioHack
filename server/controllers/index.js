const express = require('express')
const router = express.Router()
//need in variable for autoswagger
const professionals = require('./professionals.js')
router.use('/professionals',professionals)

module.exports = router