const Classroom = require('./classroom.model');

module.exports.getClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find();
    res.status(200).json(classrooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getClassroomById = async (req, res) => {
  try {
    const classroom = await Classroom.findById(req.params.id);
    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }
    res.status(200).json(classroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.createClassroom = async (req, res) => {
  const classroom = new Classroom({
    name: req.body.name,
    capacity: req.body.capacity,
    schoolId: req.body.schoolId,
  });

  try {
    const newClassroom = await classroom.save();
    res.status(201).json(newClassroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.updateClassroom = async (req, res) => {
  try {
    const updatedClassroom = await Classroom.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name, capacity: req.body.capacity },
      { new: true }
    );
    if (!updatedClassroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }
    res.status(200).json(updatedClassroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.deleteClassroom = async (req, res) => {
  try {
    const deletedClassroom = await Classroom.findByIdAndDelete(req.params.id);
    if (!deletedClassroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }
    res.status(200).json({ message: 'Classroom deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
