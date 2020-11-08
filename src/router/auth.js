var express = require("express");
var router = express.Router;
var { validateUser } = require("../domain/auth");

router.post("/auth/login",function(req,res)
{
    var user = 
        {
            name : req.params.name,
            password : req.params.password,
            macAddress : req.params.macaddress,
            accountType : req.params.accType
        }
    validateUser(user).then((updateduser) =>{
        //return data using res parameter
    })
});

router.post("/auth/signup")

module.exports = router;