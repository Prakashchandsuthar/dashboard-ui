'use strict';

/**
 * @ngdoc function
 * @name dashboardUiApp.controller:ProspectsCtrl
 * @description
 * # ProspectsCtrl
 * Controller of the dashboardUiApp
 */
angular.module('dashboardApp')
  .controller('ProspectsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
