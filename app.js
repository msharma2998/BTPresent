var express                 = require("express"),
    mongoose                = require("mongoose"),
    Student                 = require("./models/student"),
    Teacher                 = require("./models/teacher"),
    Course                  = require("./models/course");
    University              = require("./models/university"),
    studentAttendance       = require("./models/studentattendance"),
    teacherAttendance       = require("./models/teacherattendance");

var app = express();
mongoose.connect("mongodb://localhost:27017/btpresent", {useNewUrlParser:true , useUnifiedTopology:true,useFindAndModify:false});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});