"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var router = (0, _express.Router)();
router.post("/login", function (req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password;
});
router.post("/signup", function (req, res) {});
var _default = router;
exports["default"] = _default;