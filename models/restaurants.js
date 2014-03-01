var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Restaurants');
//var dbConnection = mongoose.createConnection('localhost:27017','SearchMeDB'); //addition

/*
var validator = function(value,)
{
	User.findOne({})
};*/

var restaurant = new mongoose.Schema({
	name: String,
	address: String,
	dishes: [{
		name: String,
		levels: { type : Number, min : 0}
	}]
});

//module.exports = dbConnection.model('UserModel',userSchema);
module.exports = mongoose.model('restaurant',restaurantSchema);