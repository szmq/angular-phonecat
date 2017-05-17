'use strict';

angular.module('phonecatApp', [
  'ngAnimate',
  'phoneList',
  'phoneDetail',
  'core',
]);

require('./app.config.js');
require('./core/core.module.js');
require('./core/checkmark/checkmark.filter.js');
require('./core/phone/phone.module.js');
require('./core/phone/phone.service.js');
require('./phone-list/phone-list.module.js');
require('./phone-list/phone-list.component.js');
require('./phone-detail/phone-detail.module.js');
require('./phone-detail/phone-detail.component.js');
require('./app.animations.js');
