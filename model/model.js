const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: { required: true, type: String },
    surname: { required: true, type: String },
    age: { required: true, type: Number },
    phoneNumber: { required: true, type: String }
})

module.exports = mongoose.model('Data', dataSchema)