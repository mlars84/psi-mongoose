//models are modules that define the schema

var mongoose = require('mongoose'); //require pulls in mongoose to this file
var Schema = mongoose.Scheme; // defines schema

// field names: type
var userSchema = new Schema({
  name: String,
  username: {type: String, unique: true},
  admin: Boolean,
  create_at: Date, // date type
  age: Number
});

// tell mongoose to make our collection
// give it a name and the schema we just created
// WARNING: lowercase and plural collection name ('users'), 1st param
var User = mongoose.model('users', userSchema);

module.exports = User;
