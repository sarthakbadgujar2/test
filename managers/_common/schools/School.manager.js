const School = require('./school.schema');
const { name, email } = require('../_common/schema.models');

// Example CRUD methods for School entity
module.exports = {
    createSchool: async (schoolData) => {
        const newSchool = new School(schoolData);
        await newSchool.save();
        return newSchool;
    },
    getAllSchools: async () => {
        return await School.find();
    },
    getSchoolById: async (schoolId) => {
        return await School.findById(schoolId);
    },
    updateSchool: async (schoolId, updatedData) => {
        return await School.findByIdAndUpdate(schoolId, updatedData, { new: true });
    },
    deleteSchool: async (schoolId) => {
        return await School.findByIdAndDelete(schoolId);
    },
};
