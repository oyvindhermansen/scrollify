# scrollzy

## Install

```
$ npm install scrollzy
```

## Usage

```javascript
import scrollzy from 'scrollzy'

scrollzy({
  trigger: $('#yourButton'),
  scrollTo: $('#scrollHere'),
  speed: 1000 // default
})
```
### Options
You can add 'eventType' as a key.
Default value of event is currently 'click'

```javascript
// Example
scrollzy({
  eventType: 'mouseover', // or whatever you like
  trigger: $('#yourButton'),
  scrollTo: $('#scrollHere'),
})
```
