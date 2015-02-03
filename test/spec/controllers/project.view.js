'use strict';

describe('Controller: ProjectViewCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var ProjectViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectViewCtrl = $controller('ProjectViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
