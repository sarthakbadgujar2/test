const express = require('express');
const router = express.Router();
const SchoolManager = require('./School.manager');

// POST request to create a new school
router.post('/schools', async (req, res) => {
    try {
        const newSchool = await SchoolManager.createSchool(req.body);
        res.status(201).json(newSchool);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET request to fetch all schools
router.get('/schools', async (req, res) => {
    try {
        const schools = await SchoolManager.getAllSchools();
        res.status(200).json(schools);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Additional routes for getting, updating, and deleting a school...
module.exports = router;
