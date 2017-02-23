'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var isPlainObject = exports.isPlainObject = function isPlainObject(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !Array.isArray(obj);
};

var typeCheck = exports.typeCheck = function typeCheck(input, type) {
  return (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === type;
};