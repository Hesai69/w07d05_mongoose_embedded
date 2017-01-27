const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = mongoose.Schema;
const logger = require('morgan');

var user = require('./models/users.js');
var author = require('./models/authors.js');

mongoose.connect("mongodb://localhost/embedded-docs")

var joe = new user({
  name: 'Joe Bookreader',
  addresses: [ {  street: '123 Fake Street',
                  city: 'Fake Town',
                  state: 'CA',
                  zip: '90210'
                },
                { street: '1 More Fake Street',
                  city: 'Fake Town',
                  state: 'CA',
                  zip: '90210'
                }
              ]
});

joe.save();

var tolkien = new author({
  name: 'J.R.R. Tolkien',
  age: 81,
  books: [{title: 'The Hobbit', year: 1937}, {title: 'The Lord of the Rings', year: 1954}]
});
//{title: 'The Hobbit', year: 1937}, {title: 'The Lord of the Rings', year: 1954}

tolkien.save();



var port = 3000;
app.listen(port, function(){
  console.log("listening on port " + port);
});
