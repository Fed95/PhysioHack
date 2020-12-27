const express = require('express')
const router = express.Router()
//need in variable for autoswagger
const professionals = require('./professionals.js')
const users = require('./users.js')


router.use('/professionals',professionals)
router.use('/users',users)

module.exports = router