# scrollzy

## Install

```
$ npm install scrollzy
```

## Usage

```javascript
import scrollzy from 'scrollzy'

scrollzy({
  selector: $('#yourButton'),
  scrollTo: $('#scrollHere'),
  speed: 1000 // default
})
```
### Options
You can add 'event' as a key.
Default value of event is currently 'click'

```javascript
// Example
scrollzy({
  event: 'mouseover', // or whatever you like
  selector: $('#yourButton'),
  scrollTo: $('#scrollHere'),
  speed: 1000 // default
})
```
