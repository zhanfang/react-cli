/**
 * pure render decorator immutable版
 */
'use strict'

import { is } from 'immutable'

function shallowEqual (objA, objB) {
  console.log(objA)
  console.log(objB)
  if(objA === objB || is(objA, objB)) {
    return true
  }
  console.log('immutable')
  return false
}

function shallowCompare (instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState)
}

function shouldComponentUpdate (nextProps, nextState) {
  return shallowCompare(this, nextProps, nextState)
}

function pureRenderDecorator (component) {
  component.prototype.shouldComponentUpdate = shouldComponentUpdate
}

module.exports = pureRenderDecorator