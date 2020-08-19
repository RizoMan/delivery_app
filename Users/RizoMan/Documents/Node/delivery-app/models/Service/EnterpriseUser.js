const mongoose = require('mongoose');

const EnterpriseUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    lastName: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    // This is a enterprise suggestion/description of the position, 
    // but his credentials still been defined in the user Role
    position: { 
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    date: {
        type: Date,
        default: Date.now
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    }
});

module.exports = mongoose.model('EnterpriseUser', EnterpriseUserSchema);