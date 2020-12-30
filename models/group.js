const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: String,
});


module.exports = mongoose.model('Group', groupSchema);
