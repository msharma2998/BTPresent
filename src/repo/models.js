var mongoose = require("mongoose");

var universitySchema = new mongoose.Schema({
    id : String,
    name : String
});

var courseSchema = new mongoose.Schema({
    courseID : String,
    courseName : String,
    univID : 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "university"
    }   
});

var studentSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    alternateEmail : String,
    enumber : Number,
    MACaddress : String,
    password : String,
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "course"
        }
    ],
    univID : 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "university"
    }   
});

var teacherSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    password : String,
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "course"
        }
    ],
    univID : 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "university"
    }   
});

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

module.exports =
{
    university          : mongoose.model("university" , universitySchema),
    course              : mongoose.model("course" , courseSchema),
    student             : mongoose.model("student" , studentSchema),
    teacher             : mongoose.model("teacher" , teacherSchema),
    studentattendance   : mongoose.model("studentattendance" , studentattendanceSchema),
    teacherattendance   : mongoose.model("teacherattendance" , teacherattendanceSchema)
}