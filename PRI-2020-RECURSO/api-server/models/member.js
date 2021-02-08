const mongoose = require('mongoose')

var memberScheam = new mongoose.Schema({
    id: {type: String, required: true},
    name: String,
    course: Boolean,
    scores: {type: Int16Array}
  });

module.exports = mongoose.model('member', casSchema)