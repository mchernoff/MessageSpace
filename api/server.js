const express = require("express");
const app = express();
const port = 3010;
const NeDB = require('nedb');
const bodyParser = require('body-parser');

const db = new NeDB({filename: 'db/nedb', autoload: true});
const jsonParser = bodyParser.json();
app.use(jsonParser);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.delete("/posts", (req, res) => {
	db.remove({}, { multi: true }, function (err, numRemoved) {});
	res.send();
});

app.delete("/posts/:id", (req, res) => {
	const { id } = req.params;
	db.remove({_id: id}, {}, (err, numRemoved) => {
		if(err){
			console.log(err);
			res.status(400).send(err);
		}
		res.send();
	});
});

app.get("/posts/:id", (req, res) => {
	const { id } = req.params;
	db.find({parentId:id}).sort({date: 1}).exec((err, result) => {
		if(err){
			console.log(err);
			res.status(400).send(err);
		}
		res.send(JSON.stringify({
			posts: result,
			count: result.length
		}));
	});		
});

app.get("/posts", (req, res) => {
	db.find({subpost:false}).sort({date: -1}).exec((err, result) => {
		if(err){
			console.log(err);
			res.status(400).send(err);
		}
		res.send(JSON.stringify({
			posts: result,
			count: result.length
		}));
	});
});

app.post("/posts", (req, res) => {
	let dt = new Date();
	let subpost = !!req.body.parentId;
	let post = {
		title: req.body.title,
		content: req.body.content,
		parentId: req.body.parentId,
		date: dt,
		subpost: subpost,
	};
	
	db.insert(post, function(err, newPost){
		if(err){
			console.log(err);
			return;
		}
		res.send(newPost);
	});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});