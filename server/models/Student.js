const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  // srNo: Number,
  prn: String,
  studentName: String,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
