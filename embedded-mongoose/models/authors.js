const mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  title: String,
  year: Number
});

var authorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  books: [bookSchema]
});

var authors = mongoose.model('Authors', authorSchema);

module.exports = authors;
