const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  userId : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: String,
  type: String,
  people: String,
  number: String,
  detail: String,
}, {
    timestamps: true,
});


module.exports = mongoose.model('Event', eventSchema);