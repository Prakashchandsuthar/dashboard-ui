'use strict';

/**
 * @ngdoc overview
 * @name dashboardUiApp
 * @description
 * # dashboardUiApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router'
  ])

.config(['$stateProvider',function($stateProvider){
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl:'views/dashboard.html'
    })
    .state('employee', {
      url:'/employee',
      templateUrl:'views/employee.html'
    })
    .state('organization', {
      url:'/organization',
      templateUrl:'views/organization.html'
    })
    .state('project', {
      url:'/project',
      templateUrl:'views/project.html'
    })
    .state('prospects', {
      url:'/prospects',
      templateUrl:'views/prospects.html'
    })
}])

.run(['$state', function ($state){
    $state.go('dashboard');
  }]);
