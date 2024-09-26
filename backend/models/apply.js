const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    location: { type: String },
    phone: { type: String },
    title: { type: String },
    cv: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);

