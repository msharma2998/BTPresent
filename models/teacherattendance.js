var mongoose = require("mongoose");

var teacherattendanceSchema = new mongoose.Schema({
    lectureDate : Date,
    courses: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course"
    },
    teacherID : 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher"
    }   
});

module.exports = mongoose.model("teacherattendance" , teacherattendanceSchema);