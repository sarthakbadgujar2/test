const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the student
const studentSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    grade: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now }
});

// Create the student model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
