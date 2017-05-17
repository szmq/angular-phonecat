angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',

    /**
     * @ngdoc controller
     * @name phoneDetail.controller:phoneDetail
     * @param Phone {core.factory_phone} factory service
     * @description
     *   Handles phone details
     */

    controller: ['$routeParams', 'Phone',
      function PhoneDetailController($routeParams, Phone) {
        var self = this;

        /**
         * Phone info
         * @name phone
         * @type object
         * @memberof phoneDetail.controller:phoneDetail
         */
        self.phone = Phone.get({phoneId: $routeParams.phoneId},
                                function(phone) {
          self.setImage(phone.images[0]);
        });

        /**
         * Set main phone detail image
         * @function setImage
         * @memberof phoneDetail.controller:phoneDetail
         * @param {string} imageUrl Image url address
         */
        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      },
    ],
  });
