const mongoose = require('mongoose');
const { Schema } = mongoose;
const { name, email, age } = require('../_common/schema.models');

const studentSchema = new Schema({
    name,
    email,
    age,
    classroomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classroom',
    },
    // Add other student-specific fields here...
});

module.exports = mongoose.model('Student', studentSchema);
