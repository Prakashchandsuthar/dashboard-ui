'use strict';

/**
 * @ngdoc function
 * @name dashboardUiApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the dashboardUiApp
 */
angular.module('dashboardApp')
  .controller('ProjectCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
