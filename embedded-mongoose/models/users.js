const mongoose = require('mongoose');

var addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: Number
});

var userSchema = new mongoose.Schema({
  name: String,
  addresses: [addressSchema]
});

var users = mongoose.model('Users', userSchema);

module.exports = users;
