const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema({
  id: String,
  name: String,
});

const courseSchema = new mongoose.Schema({
  courseID: String,
  courseName: String,
  univID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "university",
  },
});

const teacherSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
    },
  ],
  univID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "university",
  },
});

const studentSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  alternateEmail: String,
  enumber: String,
  MACaddress: String,
  password: String,
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
    },
  ],
  univID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "university",
  },
});

const studentAttendanceSchema = new mongoose.Schema({
  lectureDate: { type: Date, default: Date.now },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course",
  },
  studentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
  },
});

const teacherAttendanceSchema = new mongoose.Schema({
  lectureDate: { type: Date, default: Date.now },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course",
  },
  teacherID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher",
  },
});

const University = mongoose.model("university", universitySchema);
const Course = mongoose.model("course", courseSchema);
const Student = mongoose.model("student", studentSchema);
const Teacher = mongoose.model("teacher", teacherSchema);
const StudentAttendance = mongoose.model(
  "studentAttendance",
  studentAttendanceSchema
);
const TeacherAttendance = mongoose.model(
  "teacherAttendance",
  teacherAttendanceSchema
);

module.exports = {
  Student,
  University,
  Course,
  Teacher,
  TeacherAttendance,
  StudentAttendance,
};
