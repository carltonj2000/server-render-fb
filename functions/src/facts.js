"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFacts;

var _isomorphicFetch = require("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = "https://server-render.firebaseapp.com/facts.json";

function getFacts() {
  return (0, _isomorphicFetch2.default)(url).then(function (res) {
    return res.json();
  });
}