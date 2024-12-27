const Student = require('./student.schema');

module.exports = {
    createStudent: async (studentData) => {
        const newStudent = new Student(studentData);
        await newStudent.save();
        return newStudent;
    },
    getStudentsByClassroom: async (classroomId) => {
        return await Student.find({ classroomId });
    },
    // More methods for updating, deleting students...
};
