var mongoose = require('mongoose');
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create schema and models here
});

mongoose.connect('mongodb://localhost/test');