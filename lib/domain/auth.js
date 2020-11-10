"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUp = void 0;

var _auth = require("../repo/auth");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var signUp = function signUp(_ref) {
  var accountType = _ref.accountType,
      fName = _ref.fName,
      lName = _ref.lName,
      password = _ref.password,
      university = _ref.university,
      email = _ref.email,
      altEmail = _ref.altEmail,
      enrollNo = _ref.enrollNo,
      macAddress = _ref.macAddress,
      courses = _ref.courses;
  return _bcrypt["default"].hash(password, 10).then(function (hash) {
    password = hash;
    var signUpPromise = accountType === "STUDENT" ? (0, _auth.signUpStudent)({
      fName: fName,
      lName: lName,
      password: password,
      university: university,
      email: email,
      altEmail: altEmail,
      enrollNo: enrollNo,
      macAddress: macAddress,
      courses: courses
    }) : (0, _auth.signUpTeacher)({
      fName: fName,
      lName: lName,
      password: password,
      university: university,
      courses: courses,
      email: email
    });
    return signUpPromise.then(function (response) {
      if (response === null) return {
        message: "There was some error, please try again later"
      };

      var token = _jsonwebtoken["default"].sign(response, process.env.JWT_SECRET, {
        expiresIn: 15 * 60
      });

      return {
        token: token
      };
    });
  });
};

exports.signUp = signUp;