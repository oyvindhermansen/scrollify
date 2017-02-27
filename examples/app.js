var $ = require('jquery');
var scrollzy = require('../lib/index.js').default;

scrollzy({
  trigger: $('#trigger'),
  speed: 2000,
  scrollTo: $('#bottom'),
});
