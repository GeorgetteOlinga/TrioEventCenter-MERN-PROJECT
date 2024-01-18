const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    
  firstName: String,
  lastName: String,
  email: String,
  date: String,
  type: String,
  people: String,
  number: String,
  detail: String,
}, {
    timestamps: true,
});


module.exports = mongoose.model('Event', eventSchema);