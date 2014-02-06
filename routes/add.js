var data = require("../data.json");

exports.addFriend = function(req, res) {   
	
	var name = req.query.name;
	var description = req.query.description;
	var link = "http://lorempixel.com/400/400/people";

	var newFriend = {
			"name": name,
			"description": description,
			"imageURL": link
		}
	console.log("name is " + name + "; description is " + description + "; and link is " + link);
	console.log(newFriend);

	data["friends"].push(newFriend);


	// Your code goes here
	res.render('add', data);



		
	// <img src="http://lorempixel.com/400/400/people">
}