(() => {
  'use strict';

  /**!
   * is-type
   * a JavaScript library for testing a type of value
   *
   * @copyright 2016 Ahad Bokhari
   * @license MIT
   */

  const posInfinity = Number.POSITIVE_INFINITY;
  const negInfinity = Number.NEGATIVE_INFINITY;
  const root = this;
  let previousModule = root.isType;

  /**
   * Expose `isType`
   */

  const isType = {};

  isType.version = function() {
    return 0.01;
  };

  isType.noConflict = function() {
    root.isType = previousModule;
    return isType;
  };

  /**
   * isType.undefined
   * Test if `val` is undefined.
   *
   * @param {Mixed}
   * @return {Boolean} true if 'val' is undefined, false if not
   * @api public
   */

  isType.undefined = function(val) {
    return typeof val === 'undefined';
  };

  /**
   * isType.null
   * Test if `val` is null.
   *
   * @param {Mixed}
   * @return {Boolean} true if 'val' is null, false if not
   * @api public
   */

  isType.null = function(val) {
    return val === null;
  };

  /**
   * isType.NaN
   * Test if `val` is not a number.
   *
   * @param {Mixed}
   * @return {Boolean} true if 'val' is not a number, false if not
   * @api public
   */

  isType.nan = function(val) {
    return typeof val !== 'number';
  };

  /**
   * isType.number
   * Test if `val` is indeed a number.
   *
   * @param {Mixed}
   * @return {Boolean} true if 'val' is a number, false if not
   * @api public
   */

  isType.number = function(val) {
    return typeof val === 'number';
  };

  /**
   * isType.infinite
   * Test if `val` is an infinite number.
   *
   * @param {Mixed}
   * @return {Boolean} true if 'val' is an infinite number, false if not
   * @api public
   */

  isType.infinite = function(val) {
    if (val === posInfinity) {
      return true;
    }
    if (val === negInfinity) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * isType.object
   * Test if `val` is an object.
   *
   * @param {Mixed}
   * @return {Boolean} true if 'val' is an object (not primitive, ie: null), false if not
   * @api public
   */

  isType.object = function(val) {
    if (val === null) {
      return false;
    }
    return ((typeof val === 'function') || (typeof val === 'object'));
  };

  /**
   * isType.string
   * Test if `val` is a string.
   *
   * @param {Mixed}
   * @return {Boolean} true if 'val' is a string, false if not - supports template literals as well
   * @api public
   */

  isType.string = function(val) {
    return typeof val === 'string';
  };

  /**
   * isType.func
   * Test if `val` is a function.
   *
   * @param {Mixed}
   * @return {Boolean} true if 'val' is a function, false if not.
   * @api public
   */

  isType.func = function(val) {
    return !!(val && val.call && val.constructor && val.apply);
  };

  /**
   * isType.promise
   * Test if `val` is a promise.
   *
   * @param {Mixed}
   * @return {Boolean} true if 'val' is a promise, false if not.
   * @api public
   * @notes experimental
   */

  isType.promise = function(val) {
    return typeof val === 'object' && typeof val.then === 'function';
  };

  /**
   * isType.generator
   * Test if `val` is a promise.
   *
   * @param {Mixed}
   * @return {Boolean} true if 'val' is a promise, false if not.
   * @api public
   * @notes experimental
   */

  isType.generator = function(val) {
    // would be nice, but probably not possible since any function
    // can return an iterable object - doesn't matter if it's a
    // generator function or not
  };

  /**
   * isType.regex
   * Test if `val` is a promise.
   *
   * @param {Mixed}
   * @return {Boolean} true if 'val' is a regex, false if not.
   * @api public
   */

  isType.regex = function(val) {
    if (val instanceof RegExp) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * isType.date
   * Test if `val` is date obj.
   *
   * @param {Mixed}
   * @return {Boolean} true if 'val' is a date obj, false if not.
   * @api public
   */

  isType.date = function(val) {
    return val instanceof Date;
  };

  /**
   * isType.integer
   * Test if `val` is integer.
   *
   * @param {Mixed}
   * @return {Boolean} true if 'val' is a integer, false if not.
   * @api public
   */

  isType.integer = function(val) {
    return Number(val) === val && val % 1 === 0;
  };

  /**
   * isType.float
   * Test if `val` is float.
   *
   * @param {Mixed}
   * @return {Boolean} true if 'val' is a float, false if not.
   * @api public
   */

  isType.float = function(val) {
    return Number(val) === val && val % 1 !== 0;
  };

  /**
   * isType.symbol
   * Test if `val` is symbol.
   *
   * @param {Mixed}
   * @return {Boolean} true if 'val' is symbol, false if not.
   * @api public
   */

  isType.symbol = function(val) {
    return typeof val === 'symbol';
  };

  // expose in browser, node and AMD
  if (typeof module === 'object' && module && typeof module.exports === 'object') {
    module.exports = isType;
  } else {
    root.isType = root.is = isType;
    if (typeof define === 'function' && define.amd) {
      define('isType', [], function() { return isType; });
    }
  }

}).call(this);
