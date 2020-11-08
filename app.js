var express                 = require("express"),
    mongoose                = require("mongoose");

var { student }             = require("./src/repo/models");
var { teacher }             = require("./src/repo/models");
var { course }              = require("./src/repo/models");
var { university }          = require("./src/repo/models");
var { studentattendance }   = require("./src/repo/models");
var { teacherattendance }   = require("./src/repo/models");
    
var authroutes = require("./src/router/auth");

var app = express();
mongoose.connect("mongodb://localhost:27017/btpresent", {useNewUrlParser:true , useUnifiedTopology:true,useFindAndModify:false});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

app.use(authroutes);