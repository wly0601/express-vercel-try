const express = require('express')
const router = require('./router/routes')
const app = express()
const port = 8080;
app.use(express.json());

app.listen(port, () => {
    console.log(`Server listening on port : ${port}`)
    console.log(`Server on at ${Date(Date.now)}`);
})

module.exports = router.apply(app)