const user = require("../../../YelpCamp/models/user");
var { student } = require("./models");
var { teacher } = require("./models");

function authenticateTeacher(user)
{
    return new Promise((resolve,reject) => {
        teacher.find({ firstname : user.name , password: user.password},function(err,teacher)
        {
                resolve(teacher);
        });
    })
    
};

function authenticateStudent(user)
{
    return new Promise((resolve,reject) => {
        student.find({ firstname : user.name , password: user.password},function(err,student)
        {
            if(student != null)
            {   
                student.MACaddress = user.macAddress;
                student.save(function(err)
                {
                    if(!err)
                        resolve(student);
                });
            }
        });
    })    
};

module.exports = 
{
    authenticateTeacher : authenticateTeacher,
    authenticateStudent : authenticateStudent
}