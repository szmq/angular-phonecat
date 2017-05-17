angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',

    /**
    * @ngdoc controller
    * @name phoneList.controller:phoneList
    * @param Phone {core.factory_phone} factory service
    * @description
    *   Handles phone list
    */

    controller: ['Phone',
      function PhoneListController(Phone) {
        /**
         * Phone list
         * @name phones
         * @type array
         * @memberof phoneList.controller:phoneList
         */

        this.phones = Phone.query();

        /**
         * Phone list order by value [name or age]
         * @name orderProp
         * @type string
         * @memberof phoneList.controller:phoneList
         */

        this.orderProp = 'age';
      },
    ],
  });
