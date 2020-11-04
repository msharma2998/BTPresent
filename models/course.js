var mongoose = require("mongoose");

var courseSchema = new mongoose.Schema({
    courseID : String,
    courseName : String,
    univID : 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "university"
    }   
});

module.exports = mongoose.model("course" , courseSchema);