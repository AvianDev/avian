const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const infoSchema = new Schema({
    name: { type: String },
    email: { type: String },
    subject: { type: String },
    message: { type: String },

}, { timestamps: true });

module.exports = mongoose.model('Info', infoSchema);
