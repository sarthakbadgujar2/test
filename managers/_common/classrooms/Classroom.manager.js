const Classroom = require('./classroom.schema');

module.exports = {
    createClassroom: async (classroomData) => {
        const newClassroom = new Classroom(classroomData);
        await newClassroom.save();
        return newClassroom;
    },
    getClassroomsBySchool: async (schoolId) => {
        return await Classroom.find({ schoolId });
    },
    // More methods to update, delete classrooms...
};
