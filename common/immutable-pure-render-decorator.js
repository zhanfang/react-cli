/**
 * pure render decorator immutable版
 */
'use strict'

import { is } from 'immutable'

function shallowEqual (objA, objB) {
  console.log(objA)
  console.log(objB)
  if (objA === objB || is(objA, objB)) {
    return true
  }
  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false
  }

  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB)
  for (let i = 0; i< keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false
    }
  }
  console.log('immutable')
  return true
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