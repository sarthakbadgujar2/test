const mongoose = require('mongoose');
const { Schema } = mongoose;
const { name, email } = require('../_common/schema.models');

const schoolSchema = new Schema({
    name,
    email,
    address: {
        type: String,
        required: true,
        maxLength: 500,
    },
    // Add other school-specific fields here
});

module.exports = mongoose.model('School', schoolSchema);
