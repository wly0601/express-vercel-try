function apply(app){
	app.get('/', (req, res) => {
		res.send('Hey this is my API running 🥳')
	})

	app.get('/about', (req, res) => {
		res.send('This is my about route..... ')
	})

	return app
}

module.exports = { apply };