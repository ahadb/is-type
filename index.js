(function(root) {
  'use strict';

/**
  * isType.js 1.0.0
  * https://github.com/ahadb/is
  * (c) 2016 Ahad Bokhari
  * isType may be freely distributed under the MIT license
*/

  const posInfinity = Number.POSITIVE_INFINITY;
  const negInfinity = Number.NEGATIVE_INFINITY;
  var root = this;
  var previousModule = root.isType;

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

  if (typeof module === 'object' && module && typeof module.exports === 'object') {
    module.exports = isType;
  } else {
    root.isType = root.$ = isType;
    if (typeof define === 'function' && define.amd) {
      define('isType', [], function() { return isType; });
    }
  }

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

  isType.nan = function(val) {
    return typeof val !== 'number';
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
    return ( (typeof val === 'function') || (typeof val === 'object') );
  };

}).call(this);
