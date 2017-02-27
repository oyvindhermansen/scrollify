import $ from 'jquery';
import { isPlainObject, typeCheck } from '../utils/utils';

const handleScrollzyEvent = (event, scrollTo, speed) => {
  const $body = $('body, html');

  $body.animate(
    {
      scrollTop: scrollTo.offset().top
    },
    speed
  );
};

const scrollzy = (options = {}) => {
  const {
    trigger,
    scrollTo,
    eventType,
    speed
  } = options;

  if (!isPlainObject(options)) {
    throw new Error('scrollzy only accepts a plain object as argument.');
  }

  /* set default values out of the options that need it.*/
  const initSpeed = speed ? speed : 500;
  const initEventType = eventType ? eventType : 'click';

  /* add error handling for certain options */
  if (!typeCheck(initSpeed, 'number')) {
    throw new Error('Expected speed to be a typeof number.');
  } else if (!typeCheck(initEventType, 'string')) {
    throw new Error('Expected event method to be a typeof string.');
  }

  trigger.on(initEventType, event => {
    handleScrollzyEvent(event, scrollTo, initSpeed);
  });
};

export default scrollzy;
