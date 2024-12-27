const mongoose = require('mongoose');
const { Schema } = mongoose;
const { name } = require('../_common/schema.models');

const classroomSchema = new Schema({
    name,
    gradeLevel: {
        type: String,
        required: true,
    },
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School',
    },
    // Other classroom-specific fields...
});

module.exports = mongoose.model('Classroom', classroomSchema);
