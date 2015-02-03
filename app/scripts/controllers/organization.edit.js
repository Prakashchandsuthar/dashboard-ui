'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationEditCtrl
 * @description
 * # OrganizationEditCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationEditCtrl', ['$scope','$stateParams',function ($scope, $stateParams) {
    console.log($stateParams);
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
