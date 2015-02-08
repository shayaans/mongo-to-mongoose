var mongoose = require('mongoose');
require('./model.js');
var Movie = require('./movieModel.js');



// Find a single movie by name.
Movie.findOne({ title: 'Thor' }, function(err, thor) {
  if (err) return console.error(err);
  console.dir(thor);
});

// Find all movies.
Movie.find(function(err, movies) {
  if (err) return console.error(err);
  console.dir(movies);
});

// Find all movies that have a credit cookie.
Movie.find({ hasCreditCookie: true }, function(err, movies) {
  if (err) return console.error(err);
  console.dir(movies);
});


// Use the helper as a static function of the compiled Movie model.
Movie.findAllWithCreditCookies(function(err, movies) {
  if (err) return console.error(err);
  console.dir(movies);
});