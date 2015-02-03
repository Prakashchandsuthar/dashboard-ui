'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ProjectViewCtrl
 * @description
 * # ProjectViewCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ProjectViewCtrl', ['$scope','$stateParams',function ($scope, $stateParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
