'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollzy = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var Scrollzy = function () {
  function Scrollzy(opts) {
    _classCallCheck(this, Scrollzy);

    this.opts = ({
      trigger: null,
      scrollTo: null,
      eventType: null,
      speed: null
    }, opts);

    this.init();
  }

  _createClass(Scrollzy, [{
    key: 'init',
    value: function init() {
      this.checkTrigger(this.opts.trigger);
      this.checkScrollTo(this.opts.scrollTo);
      this.checkSpeed(this.opts.speed);
      this.checkEventType(this.opts.eventType);

      this.setEventListener(this.opts.trigger, this.opts.scrollTo, this.opts.speed, this.opts.eventType);
    }
  }, {
    key: 'setEventListener',
    value: function setEventListener(trigger, scrollToElement, speed, eventType) {
      var _this = this;

      this.checkTrigger(trigger).on(this.checkEventType(eventType), function () {
        var $body = (0, _jquery2.default)('body, html');
        $body.animate({
          scrollTop: _this.checkScrollTo(scrollToElement).offset().top
        }, parseInt(_this.checkSpeed(speed)));
      });
    }
  }, {
    key: 'checkTrigger',
    value: function checkTrigger(selector) {
      if (!selector) {
        throw new Error('No trigger was selected.');
      } else if (typeof selector !== 'string') {
        throw new Error('Trigger should be a string, not a ' + (typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) + '.');
      }
      return (0, _jquery2.default)(selector);
    }
  }, {
    key: 'checkScrollTo',
    value: function checkScrollTo(scrollElement) {
      if (!scrollElement) {
        throw new Error('No scrollElement selected.');
      } else if (typeof scrollElement !== 'string') {
        throw new Error('ScrollTo should be a string, not a ' + (typeof scrollElement === 'undefined' ? 'undefined' : _typeof(scrollElement)) + '.');
      }
      return (0, _jquery2.default)(scrollElement);
    }
  }, {
    key: 'checkEventType',
    value: function checkEventType(eType) {
      if (!eType) {
        this.opts.eventType = 'click';
      } else if (typeof eType !== 'string') {
        throw new Error('EventType should be a string, not a ' + (typeof eType === 'undefined' ? 'undefined' : _typeof(eType)) + '.');
      }
      return eType;
    }
  }, {
    key: 'checkSpeed',
    value: function checkSpeed(speed) {
      if (!speed) {
        this.opts.speed = 1000;
      } else if (typeof speed !== 'number') {
        throw new Error('Speed should be a number, not a ' + (typeof speed === 'undefined' ? 'undefined' : _typeof(speed)) + '.');
      }
      return speed;
    }
  }]);

  return Scrollzy;
}();

var scrollzy = exports.scrollzy = function scrollzy(opts) {
  return new Scrollzy(opts);
};
