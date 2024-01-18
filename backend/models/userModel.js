const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please add a First Name']
    }, 
    lastName: {
        type: String,
        required: [true, 'Please add a Last Name']
    },    
    email: {
        type: String,
        required: [true, 'Please add an email address'],
        unique: true
    },    
    password: {
        type: String,
        required: [true, 'Please add a password']
    },    
} , {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);