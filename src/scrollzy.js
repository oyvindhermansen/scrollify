'use strict'

import $ from 'jquery'

export default function scrollzy(opts) {
  opts = ({
    event: null,
    selector: null,
    scrollTo: null,
    speed: null,
  }, opts)

  if (!opts.speed) {
    opts.speed = 1000
  }

  if (!opts.event) {
    opts.event = 'click'
  }

  opts.selector.on(opts.event, () => {
    const $body = $('html, body')
    $body.animate({
      scrollTop: opts.scrollTo.offset().top
    }, parseInt(opts.speed))
  })
  return false
}
