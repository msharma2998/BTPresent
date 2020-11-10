"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllCoursesFromDb = exports.getUniversitiesFromDb = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _models = require("./models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getUniversitiesFromDb = function getUniversitiesFromDb() {
  return _models.University.find({}).then(function (universities) {
    return universities;
  })["catch"](function (err) {
    return null;
  });
};

exports.getUniversitiesFromDb = getUniversitiesFromDb;

var getAllCoursesFromDb = function getAllCoursesFromDb(university) {
  return _models.Course.find({
    univId: _mongoose["default"].Types.ObjectId(university)
  }).then(function (courses) {
    return courses;
  })["catch"](function (err) {
    console.log(err);
    return null;
  });
};

exports.getAllCoursesFromDb = getAllCoursesFromDb;