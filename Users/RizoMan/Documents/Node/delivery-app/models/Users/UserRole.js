const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    typeId: {
        type: Number,
        required: true,
        min: 0,
        maxlength: 2
    },
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    description: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    date :{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Role', roleSchema);