'use strict';

/**
 * @ngdoc function
 * @name dashboardUiApp.controller:EmployeeCtrl
 * @description
 * # EmployeeCtrl
 * Controller of the dashboardUiApp
 */
angular.module('dashboardApp')
  .controller('EmployeeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
