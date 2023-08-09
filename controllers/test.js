async function test(req, res){
	try {
		res.status(200).json({
			"name": "Hello There"
		})
	} catch(err) {
		res.status(400).json({
			"name": "ERROR"
		})
	}
}

module.exports = test