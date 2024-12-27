const express = require('express');
const router = express.Router();
const schoolController = require('./school.controller');

router.get('/schools', schoolController.getSchools);
router.get('/schools/:id', schoolController.getSchoolById);
router.post('/schools', schoolController.createSchool);
router.put('/schools/:id', schoolController.updateSchool);
router.delete('/schools/:id', schoolController.deleteSchool);

module.exports = router;
