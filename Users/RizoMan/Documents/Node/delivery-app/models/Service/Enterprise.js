const mongoose = require('mongoose');

const enterpriseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 5,
        max: 255
    },
    subtitle: {
        type: String,
        required: true,
        min: 5,
        max: 255
    },
    description: {
        type: String,
        required: true,
        min: 5,
        max: 255
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Type'
    }

})

module.exports = mongoose.Model('Enterprise', enterpriseSchema);