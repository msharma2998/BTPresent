var mongoose = require("mongoose");

var studentattendanceSchema = new mongoose.Schema({
    lectureDate : Date,
    courses: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course"
    },
    studentID : 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student"
    }   
});

module.exports = mongoose.model("studentattendance" , studentattendanceSchema);