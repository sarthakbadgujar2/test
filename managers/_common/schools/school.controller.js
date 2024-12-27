const School = require('./school.model');

module.exports.getSchools = async (req, res) => {
  try {
    const schools = await School.find();
    res.status(200).json(schools);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getSchoolById = async (req, res) => {
  try {
    const school = await School.findById(req.params.id);
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }
    res.status(200).json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.createSchool = async (req, res) => {
  const school = new School({
    name: req.body.name,
    address: req.body.address,
  });

  try {
    const newSchool = await school.save();
    res.status(201).json(newSchool);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.updateSchool = async (req, res) => {
  try {
    const updatedSchool = await School.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name, address: req.body.address },
      { new: true }
    );
    if (!updatedSchool) {
      return res.status(404).json({ message: 'School not found' });
    }
    res.status(200).json(updatedSchool);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.deleteSchool = async (req, res) => {
  try {
    const deletedSchool = await School.findByIdAndDelete(req.params.id);
    if (!deletedSchool) {
      return res.status(404).json({ message: 'School not found' });
    }
    res.status(200).json({ message: 'School deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
