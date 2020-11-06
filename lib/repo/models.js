"use strict";

var mongoose = require("mongoose");

var universitySchema = new mongoose.Schema({
  id: String,
  name: String
});
var courseSchema = new mongoose.Schema({
  courseID: String,
  courseName: String,
  univID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "university"
  }
});
var teacherSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "course"
  }],
  univID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "university"
  }
});
var studentSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  alternateEmail: String,
  enumber: String,
  MACaddress: String,
  password: String,
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "course"
  }],
  univID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "university"
  }
});
var studentAttendanceSchema = new mongoose.Schema({
  lectureDate: {
    type: Date,
    "default": Date.now
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course"
  },
  studentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student"
  }
});
var teacherAttendanceSchema = new mongoose.Schema({
  lectureDate: {
    type: Date,
    "default": Date.now
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course"
  },
  teacherID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher"
  }
});
var University = mongoose.model("university", universitySchema);
var Course = mongoose.model("course", courseSchema);
var Student = mongoose.model("student", studentSchema);
var Teacher = mongoose.model("teacher", teacherSchema);
var StudentAttendance = mongoose.model("studentAttendance", studentAttendanceSchema);
var TeacherAttendance = mongoose.model("teacherAttendance", teacherAttendanceSchema);
module.exports = {
  Student: Student,
  University: University,
  Course: Course,
  Teacher: Teacher,
  TeacherAttendance: TeacherAttendance,
  StudentAttendance: StudentAttendance
};