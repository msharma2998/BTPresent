"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../domain/auth");

var router = (0, _express.Router)();
router.post("/login", function (req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password;
});
router.post("/signup", function (req, res) {
  var _req$body2 = req.body,
      accountType = _req$body2.accountType,
      fName = _req$body2.fName,
      lName = _req$body2.lName,
      password = _req$body2.password,
      university = _req$body2.university,
      email = _req$body2.email,
      altEmail = _req$body2.altEmail,
      enrollNo = _req$body2.enrollNo,
      macAddress = _req$body2.macAddress,
      courses = _req$body2.courses;
  console.log(enrollNo);
  (0, _auth.signUp)({
    accountType: accountType,
    fName: fName,
    lName: lName,
    password: password,
    university: university,
    email: email,
    altEmail: altEmail,
    enrollNo: enrollNo,
    macAddress: macAddress,
    courses: courses
  }).then(function (resp) {
    res.json(resp);
  });
});
var _default = router;
exports["default"] = _default;