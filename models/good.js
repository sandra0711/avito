const mongoose = require('mongoose');

const goodSchema = new mongoose.Schema({
  title: String,
  about: String,
  price: String,
  image: String,
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group'},
});


module.exports = mongoose.model('Good', goodSchema);
