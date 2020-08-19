const mongoose = require('mongoose');

const typeSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
        min: 5,
        max: 255
    },
    description:{
        type: String,
        required: true,
        min: 5,
        max: 255
    }
})

module.exports = mongoose.Model('Type', typeSchema);