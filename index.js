(function(root) {

  /**
   * Expose `isType`
   */

  var isType = {};

  isType.version = function() {
    return 0.01;
  };

  if (typeof module === 'object' && module && typeof module.exports === 'object') {
    module.exports = isType;
  } else {
    root.isType = root.$ = isType;
    if (typeof define === 'function' && define.amd) {
      define('jquery', [], function() { return isType; });
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

})(this);
