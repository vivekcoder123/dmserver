const mongoose = require('mongoose');

const User = mongoose.Schema({
    name: String,
    location: String
}, {
    timestamps: true
});

module.exports = mongoose.model('user', User);