if (!window.Promise) {
  var Promise = require('promise-polyfill')
  window.Promise = Promise
}

Object.assign = require('object-assign')
