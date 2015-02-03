'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationViewCtrl
 * @description
 * # OrganizationViewCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationViewCtrl',['$scope','$stateParams', function ($scope, $stateParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
