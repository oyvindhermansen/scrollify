'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _utils = require('../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleScrollzyEvent = function handleScrollzyEvent(event, scrollTo, speed) {
  var $body = (0, _jquery2.default)('body, html');

  $body.animate({
    scrollTop: scrollTo.offset().top
  }, speed);
};

var scrollzy = function scrollzy() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var trigger = options.trigger;
  var scrollTo = options.scrollTo;
  var eventType = options.eventType;
  var speed = options.speed;


  if (!(0, _utils.isPlainObject)(options)) {
    throw new Error('scrollzy only accepts a plain object as argument.');
  }

  /* set default values out of the options that need it.*/
  var initSpeed = speed ? speed : 500;
  var initEventType = eventType ? eventType : 'click';

  /* add error handling for certain options */
  if (!(0, _utils.typeCheck)(initSpeed, 'number')) {
    throw new Error('Expected speed to be a typeof number.');
  } else if (!(0, _utils.typeCheck)(initEventType, 'string')) {
    throw new Error('Expected event method to be a typeof string.');
  }

  trigger.on(initEventType, function (event) {
    handleScrollzyEvent(event, scrollTo, initSpeed);
  });
};

exports.default = scrollzy;