const express = require('express')
const router = require('./router/routes')
const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})


module.exports = router.apply(app)