"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _passportJwt = require("passport-jwt");

var _auth = require("../repo/auth");

var options = {};
options.secretOrKey = process.env.JWT_SECRET;
options.jwtFromRequest = _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken();

function _default(passport) {
  passport.use(new _passportJwt.Strategy(options, function (payload, done) {
    (0, _auth.searchById)(payload.id).then(function (result) {
      if (result == null) done(null, false);else done(null, result);
    })["catch"](function (err) {
      return done(err);
    });
  }));
}