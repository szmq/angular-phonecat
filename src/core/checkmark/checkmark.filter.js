/**
 * @ngdoc filter
 * @name core.checkmark
 * @description
 *   change true/false value to graphical sign
 */

angular.
  module('core').
  filter('checkmark', function() {
    /**
     * Return graphical equivalent of the value
     * @function function
     * @memberof core.checkmark
     * @param {boolean} input 'true' or 'false'
     * @return {string} true sign of false sing
     */
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });
