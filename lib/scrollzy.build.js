'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollzy;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollzy(opts) {
  opts = ({
    selector: null,
    scrollTo: null,
    speed: null
  }, opts);

  if (!opts.speed) {
    opts.speed = 1000;
  }

  var $body = (0, _jquery2.default)('html, body');
  $body.on('click', opts.selector, function () {
    $body.animate({
      scrollTop: opts.scrollTo.offset().top
    }, parseInt(opts.speed));
  });
  return false;
}
