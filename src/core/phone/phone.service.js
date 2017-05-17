/**
 * @ngdoc factory
 * @name core.factory:phone
 * @description
 *   Return resource from phones/
 */

angular.
  module('core.phone').
  factory('Phone', ['$resource',
    function($resource) {
      return $resource('phones/:phoneId.json', {}, {

        /**
         * Resource custom action
         * @function query
         * @memberof core.factory:Phone
         * @return {array} return array from phones/phones.json
         */
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true,
        },
      });
    },
  ]);
