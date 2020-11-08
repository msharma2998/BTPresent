var { authenticateStudent } = require("../repo/auth");
var { authenticateTeacher } = require("../repo/auth");

function validate(user)
{
    return new Promise((resolve,reject) => {
        if(user.accountType == "student")
        {
            authenticateStudent(user).then((student) => {
                resolve(student);
            })
        }
        else if(user.accountType == "teacher")
        {
            authenticateTeacher(user).then((teacher) =>{
                resolve(teacher);
            })
        }
    })  
}

module.exports = 
{
    validateUser : validate
}