import $ from 'jquery'

'use strict'
class Scrollzy {
  constructor(opts) {
    this.opts = ({
      trigger: null,
      scrollTo: null,
      eventType: null,
      speed: null,
    }, opts)

    this.init()
  }

  init() {
    this.checkTrigger(this.opts.trigger)
    this.checkScrollTo(this.opts.scrollTo)
    this.checkSpeed(this.opts.speed)
    this.checkEventType(this.opts.eventType)

    this.setEventListener(
      this.opts.trigger,
      this.opts.scrollTo,
      this.opts.speed,
      this.opts.eventType
    )
  }

  setEventListener(trigger, scrollToElement, speed, eventType) {
    this.checkTrigger(trigger).on(this.checkEventType(eventType), () => {
      const $body = $('body, html')
      $body.animate({
        scrollTop: this.checkScrollTo(scrollToElement).offset().top
      }, parseInt(this.checkSpeed(speed)))
    })
  }

  checkTrigger(selector) {
    if (!selector) {
      throw new Error(`No trigger was selected.`)
    } else if (typeof selector !== 'string') {
      throw new Error(`Trigger should be a string, not a ${typeof selector}.`)
    }
    return $(selector)
  }

  checkScrollTo(scrollElement) {
    if (!scrollElement) {
      throw new Error(`No scrollElement selected.`)
    } else if (typeof scrollElement !== 'string') {
      throw new Error(`ScrollTo should be a string, not a ${typeof scrollElement}.`)
    }
    return $(scrollElement)
  }

  checkEventType(eType) {
    if (!eType) {
      this.opts.eventType = 'click'
    } else if (typeof eType !== 'string') {
      throw new Error(`EventType should be a string, not a ${typeof eType}.`)
    }
    return eType
  }

  checkSpeed(speed) {
    if (!speed) {
      this.opts.speed = 1000
    } else if (typeof speed !== 'number') {
      throw new Error(`Speed should be a number, not a ${typeof speed}.`)
    }
    return speed
  }
}

export const scrollzy = opts => new Scrollzy(opts);
