var mongoose                = require("mongoose");

var universitySchema = new mongoose.Schema({
    id : String,
    name : String
});

module.exports = mongoose.model("university" , universitySchema);