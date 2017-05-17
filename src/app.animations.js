/**
 * @ngdoc animations
 * @name animations.phone
 * @description
 *   Animate module
 */

angular.
  module('phonecatApp').
  animation('.phone', function phoneAnimationFactory() {
    return {
      addClass: animateIn,
      removeClass: animateOut,
    };

    /**
     * Show animated element
     * @memberof animations.phone
     * @function animateIn
     * @param {object} element animated object
     * @param {string} className animated object class
     * @param {boolean} done state of animation
     * @return {function} Function execute element.stop()
     *                    if animation was cancelled
     */
    function animateIn(element, className, done) {
      if (className !== 'selected') return;

      element.
        css({
          display: 'block',
          position: 'absolute',
          top: 500,
          left: 0,
        }).
        animate({
          top: 0,
        }, done);

      return function animateInEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }

    /**
     * Hide animated element
     * @memberof animations.phone
     * @function animateOut
     * @param {object} element animated object
     * @param {string} className animated object class
     * @param {boolean} done state of animation
     * @return {function} Function execute element.stop()
     *                    if animation was cancelled
     */
    function animateOut(element, className, done) {
      if (className !== 'selected') return;

      element.
        css({
          position: 'absolute',
          top: 0,
          left: 0,
        }).
        animate({
          top: -500,
        }, done);

      return function animateOutEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }
  });
