"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _info = require("../domain/info");

var router = (0, _express.Router)();
router.get("/universities", function (req, res) {
  (0, _info.getAllUniversities)().then(function (universities) {
    return res.json(universities);
  });
});
router.get("/courses/:university", function (req, res) {
  var university = req.params.university;
  (0, _info.getAllCourses)(university).then(function (courses) {
    return res.json(courses);
  });
});
var _default = router;
exports["default"] = _default;