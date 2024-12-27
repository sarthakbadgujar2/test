const express = require('express');
const router = express.Router();
const classroomController = require('./classroom.controller');

router.get('/', classroomController.getClassrooms);
router.get('/:id', classroomController.getClassroomById);
router.post('/', classroomController.createClassroom);
router.put('/:id', classroomController.updateClassroom);
router.delete('/:id', classroomController.deleteClassroom);

module.exports = router;
