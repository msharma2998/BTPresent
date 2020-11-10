"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllCourses = exports.getAllUniversities = void 0;

var _info = require("../repo/info");

var getAllUniversities = function getAllUniversities() {
  return (0, _info.getUniversitiesFromDb)().then(function (universities) {
    console.log(universities);
    if (universities == null) return [];
    return universities.map(function (university) {
      return {
        id: university._id,
        name: university.name
      };
    });
  });
};

exports.getAllUniversities = getAllUniversities;

var getAllCourses = function getAllCourses(university) {
  return (0, _info.getAllCoursesFromDb)(university).then(function (courses) {
    if (courses == null) return [];
    return courses.map(function (course) {
      return {
        id: course._id,
        name: course.courseName
      };
    });
  });
};

exports.getAllCourses = getAllCourses;