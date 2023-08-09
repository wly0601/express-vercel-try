const test = require("../controllers/test")

function apply(app){
	app.get('/', (req, res) => {
		res.send('Hey this is my API running')
	})

	app.get('/about', (req, res) => {
		res.send('This is my about route..... ')
	})

	app.get('/posts', test)

	return app
}

module.exports = { apply };