var $ = require('jquery');
var scrollzy = require('../lib/scrollzy.js').default;

scrollzy({
  trigger: $('#trigger'),
  speed: 1000,
  scrollTo: $('#bottom'),
});
