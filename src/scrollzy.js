'use strict'

import $ from 'jquery'

export default function scrollzy(opts) {
  opts = ({
    eventType: null,
    trigger: null,
    scrollTo: null,
    speed: null,
  }, opts)

  if (!opts.speed) {
    opts.speed = 1000
  }

  if (!opts.eventType) {
    opts.eventType = 'click'
  }

  opts.trigger.on(opts.eventType, () => {
    const $body = $('html, body')
    $body.animate({
      scrollTop: opts.scrollTo.offset().top
    }, parseInt(opts.speed))
  })
  return false
}
