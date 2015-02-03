'use strict';

describe('Controller: OrganizationViewCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var OrganizationViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrganizationViewCtrl = $controller('OrganizationViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
