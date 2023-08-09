const express = require('express')
const router = require('./router/routes')
const app = express()

module.exports = router.apply(app)