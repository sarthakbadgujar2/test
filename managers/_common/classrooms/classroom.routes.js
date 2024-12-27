const express = require('express');
const router = express.Router();
const ClassroomManager = require('./Classroom.manager');

// POST request to create a new classroom
router.post('/classrooms', async (req, res) => {
    try {
        const newClassroom = await ClassroomManager.createClassroom(req.body);
        res.status(201).json(newClassroom);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET request to fetch classrooms by school ID
router.get('/classrooms/:schoolId', async (req, res) => {
    try {
        const classrooms = await ClassroomManager.getClassroomsBySchool(req.params.schoolId);
        res.status(200).json(classrooms);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;
