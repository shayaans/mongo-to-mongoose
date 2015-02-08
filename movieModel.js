mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
  title: { type: String }
  , rating: String
  , releaseYear: Number
  , hasCreditCookie: Boolean
});

movieSchema.statics.findAllWithCreditCookies = function(callback) {
  return this.find({ hasCreditCookie: true }, callback);
};


module.exports = mongoose.model('Movie', movieSchema);