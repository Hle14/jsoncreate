//generate badge

//function that accepts arguments to put into assertion

var jf = require('jsonfile');
var file = '/assertions/data.json'; // '/assertions/' + username + '.json';

//newAssertion should take a json object containing all the necessary information
var newAssertion = function(){
	//
	var badge = {
		/*/create an object in json format 
		uid: Text,
		recipient: {
			identity: Text,
			type: identityType,
			hashed: Boolean,
			salt: Text
		},
		*/
	};

	jf.writeFile(file, badge, function(err){
		console.log(err);
	});


};