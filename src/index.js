'use strict'

import $ from 'jquery'

export default function scrollify(opts) {
  opts = ({
    selector: null,
    scrollTo: null,
    speed: 1000,
  }, opts)

  const $body = $('html, body')
  $body.on('click', opts.selector, () => {
    $body.animate({
      scrollTop: opts.scrollTo.offset().top
    }, parseInt(opts.speed))
  })
  return false
}
