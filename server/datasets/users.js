var mongoose = require('mongoose');
module.exports = mongoose.model('customers', {
    email: String,
    username: String,
    password: String,
    bio: String,
	following: [{userId: String}],
	followers: [{userId: String}]
});