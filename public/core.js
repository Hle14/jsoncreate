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

		$scope.exp_display = "NOTHING!";
	};
}
$


function badgeController($scope, $http) {

	$scope.clicky1 = function()
	{
		$scope.exp_display = "HAPPY FUN TIME YAYYY";
	};

	$scope.clicky2 = function()
	{
		$scope.exp_display = "PROFESSOR GENKI1";
	};

	//THIS ENTIRE FUNCTION SHOULD MAYBE BE HANDLED SERVER-SIDE ??
	$scope.createBadge = function(){

		//generate a unique uid
		var d = new Date();
		//$scope.exp_display = "WA;LDAKFJAL;F";
		var uid = d.getUTCFullYear().toString() + d.getUTCMonth().toString() + d.getUTCDate().toString() + d.getUTCHours().toString() + d.getUTCMinutes().toString() + d.getUTCSeconds().toString();
		//$scope.exp_display = "WA;LDAKFJAL;F";
		//create identity object (json)
		//var hashed_email = crypto.createHash('md5').update(user.email).digest('hex');
		$scope.exp_display = "WA;LDAKFJAL;F";
		var identity = {
			"type": "email",
			"hashed": true,
			"identity": hashed_email
		};

		var host_url = "../../badges/badges/" + uid + ".json"; //dir used here may be wrong
		$scope.exp_display = "WA;LDAKFJAL;F";
		$scope.user.badgeClass = "../../badges/class.json"; //dir used here may be wrong

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
/*
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

