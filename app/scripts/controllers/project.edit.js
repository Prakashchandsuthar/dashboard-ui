'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ProjectEditCtrl
 * @description
 * # ProjectEditCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ProjectEditCtrl', ['$scope','$stateParams',function ($scope, $stateParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
