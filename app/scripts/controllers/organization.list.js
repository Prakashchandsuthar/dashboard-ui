'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationListCtrl
 * @description
 * # OrganizationListCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationListCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
