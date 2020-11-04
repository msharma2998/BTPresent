var mongoose = require("mongoose");

var teacherSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    password :
    {
        salt: String,
        hash: String
    } ,
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

module.exports = mongoose.model("teacher" , teacherSchema);