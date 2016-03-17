'use strict'

import $ from 'jquery'

export default function scrollzy(opts) {
  opts = ({
    selector: null,
    scrollTo: null,
    speed: null,
  }, opts)

  if (!opts.speed) {
    opts.speed = 1000
  }

  const $body = $('html, body')
  $body.on('click', opts.selector, () => {
    $body.animate({
      scrollTop: opts.scrollTo.offset().top
    }, parseInt(opts.speed))
  })
  return false
}
