const express = require('express');
const router = express.Router();
const StudentManager = require('./Student.manager');

// POST request to create a new student
router.post('/students', async (req, res) => {
    try {
        const newStudent = await StudentManager.createStudent(req.body);
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET request to fetch students by classroom ID
router.get('/students/:classroomId', async (req, res) => {
    try {
        const students = await StudentManager.getStudentsByClassroom(req.params.classroomId);
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;
