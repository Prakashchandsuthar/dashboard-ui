'use strict';

describe('Controller: ProspectsCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardUiApp'));

  var ProspectsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProspectsCtrl = $controller('ProspectsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
