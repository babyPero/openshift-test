const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

app.use(bodyParser.urlencoded({extended: true}))

    /*
app.listen(3000, function() {
	console.log('listening on 3000')
	    })
    */

/*
app.get('/', function(request, response) {
	 response.send('Hello World')
	    })
*/

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
	    var cursor = db.collection('quotes').find().toArray(function(err, results) {
		    console.log(results)
		})
    })

app.post('/quotes', (req, res) => {
	db.collection('quotes').save(req.body, (err, result) => {
		if (err) return console.log(err)
			     console.log('saved to database')
			     res.redirect('/')
			     })

	/*
	    console.log('Hellooooooooooooooooo!')
	    console.log(req.body)
	*/
    })

MongoClient.connect('mongodb://babyPero:testtest@ds217898.mlab.com:17898/test-project', (err, client) => {
	if (err) return console.log(err)
		     db = client.db('test-project')
		     app.listen(3000, () => {
		     console.log('listening on 3000')
			 })

	})
