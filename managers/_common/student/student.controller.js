const Student = require('./student.model');

module.exports = class StudentController {

    // Function to create a new student
    async createStudent(data) {
        try {

            console.log("hello from server",data)
            // const { name, age, grade, email } = data;
            // if (!name || !age || !grade || !email) {
            //     throw new Error("All fields are required");
            // }

            // // Check if a student with this email already exists
            // const existingStudent = await Student.findOne({ email });
            // if (existingStudent) {
            //     throw new Error("Student with this email already exists");
            // }

            // // Create a new student
            // const student = new Student({ name, age, grade, email });
            // await student.save();
            return { success: true };
        } catch (err) {
            return { success: false, message: err.message };
        }
    }
};
