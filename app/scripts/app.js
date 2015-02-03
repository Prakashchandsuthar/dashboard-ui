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
  .module('dashboardApp', [
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
      templateUrl:'views/dashboard.html',
      url: '/dashboard',
      controller:'DashboardCtrl'

    })
    .state('employees', {
      url:'/employees',
      templateUrl:'views/employee.html'
      //controller:''
    })
    .state('organizations', {
      url:'/organizations',
      templateUrl:'views/organization.html',
      controller:'OrganizationCtrl'
    })
    .state('organizations.list', {
      url:'/list',
      templateUrl:'views/organization.list.html',
      controller:'OrganizationListCtrl'
    })
    .state('organizations.view', {
      url:'/view/:orgId',
      templateUrl:'views/organization.view.html',
      controller:'OrganizationViewCtrl'
    })
    .state('organizations.edit', {
      url:'/edit/:orgId',
      templateUrl:'views/organization.edit.html',
      controller:'OrganizationEditCtrl'
    })
    .state('projects', {
      url:'/projects',
      templateUrl:'views/project.html',
      controller:'ProjectsCtrl'
    })
    .state('projects.edit', {
      url:'/edit/:orgId',
      templateUrl:'views/project.edit.html',
      controller:'ProjectsEditCtrl'
    })
    .state('projects.view', {
      url:'/view/:ordId',
      templateUrl:'views/project.view.html',
      controller:'ProjectsViewCtrl'
    })
    .state('projects.list', {
      url:'/list',
      templateUrl:'views/project.list.html',
      controller:'ProjectsListCtrl'
    })
    .state('prospects', {
      url:'/prospects',
      templateUrl:'views/prospects.html'
    })
}])

.run(['$state', function ($state){
    $state.go('dashboard');
  }]);
