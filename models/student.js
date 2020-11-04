var mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    alternateEmail : String,
    enumber : Number,
    MACaddress : String,
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

module.exports = mongoose.model("student" , studentSchema);