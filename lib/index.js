'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scrollzy = require('./core/scrollzy');

var _scrollzy2 = _interopRequireDefault(_scrollzy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Make it available in window */
if (typeof window !== 'undefined') {
  window.scrollzy = _scrollzy2.default;
}

exports.default = _scrollzy2.default;