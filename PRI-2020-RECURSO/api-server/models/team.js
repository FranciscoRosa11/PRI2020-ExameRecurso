const mongoose = require('mongoose')

var teamSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    team: String,
    pitch1: Boolean,
    pitch2: Boolean,
    techPitch: Boolean,
    businessReport: Boolean,
    techReport: Boolean,
    nmembers: Number
  });

module.exports = mongoose.model('team', casSchema)