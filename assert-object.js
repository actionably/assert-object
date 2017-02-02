'use strict'

const assert = require('assert')
const stringify = require('json-stable-stringify')

class AssertObject {
  /*
  * Uses a stable stringify to compare so that errors are easier to read.
  */
  equal(expectedObject, actualObject, message) {
    assert.equal(stringify(expectedObject, {space: 2}), stringify(actualObject, {space: 2}), message)
  }
}

module.exports = new AssertObject()
