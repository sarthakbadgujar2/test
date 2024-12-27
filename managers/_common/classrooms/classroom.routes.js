const express = require('express');
const router = express.Router();
const classroomController = require('./classroom.controller');

router.get('/classrooms', classroomController.getClassrooms);
router.get('/classrooms/:id', classroomController.getClassroomById);
router.post('/classrooms', classroomController.createClassroom);
router.put('/classrooms/:id', classroomController.updateClassroom);
router.delete('/classrooms/:id', classroomController.deleteClassroom);

module.exports = router;
