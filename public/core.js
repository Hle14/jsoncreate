var goodEatsApi = angular.module('goodEatsApi', []);
var crypto = require('crypto');
var fs = require('fs');


function mainController($scope, $http) {
	$scope.formData = {};

	$scope.user = {};

	$scope.initialize = function() {
		$http.get('/api/restaurants')
			.success(function(data) {
				$scope.restaurants = data;
				console.log(data);
			})
			.error(function(data) {
				console.log("Error: " + data);
			});
	};
}

function badgeController($scope, $http) {

	//THIS ENTIRE FUNCTION SHOULD MAYBE BE HANDLED SERVER-SIDE ??
	$scope.createBadge = function(){
		console.log("YAYYY");
		//generate a unique uid
		var d = new Date();
		var uid = d.getUTCFullYear().toString() + d.getUTCMonth().toString() + d.getUTCDate().toString() + d.getUTCHours().toString() + d.getUTCMinutes().toString() + d.getUTCSeconds().toString();
		//create identity object (json)
		var hashed_email = crypto.createHash('md5').update(user.email).digest('hex');

		var identity = {
			"type": "email",
			"hashed": true,
			"identity": hashed_email
		};

		var host_url = "../../badges/badges/" + uid + ".json"; //dir used here may be wrong

		user.badgeClass = "../../badges/class.json"; //dir used here may be wrong
		//construct the assertion
		var assertion = {
			"uid": uid,
			"recipient": identity,
			"issuedOn": d,
			"badge": user.badgeClass,
			"verify": {
				"type": "hosted",
				"url": host_url
			}
		};

		var json_file = host_url;

		/*
		fs.writeFile(json_file, JSON.stringify(assertion, null, 4), function(err){
			if(err) {
				console.log(err);
			} else {
				console.log("JSON saved to " + json_file);
			}
		});
/*/
		$http.post('http://localhost:1337/requestBadge',assertion)
			.success(function{
				console.log("Success: " + json_file);
			})
			.error(function{
				console.log("Error: " + json_file)
			});
			//*/
	};
}

