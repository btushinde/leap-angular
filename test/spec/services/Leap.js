'use strict';

describe('Service: Leap', function () {

  // load the service's module
  beforeEach(module('gesturesApp'));

  // instantiate service
  var Leap;
  beforeEach(inject(function (_Leap_) {
    Leap = _Leap_;
  }));

  it('should do something', function () {
    expect(!!Leap).toBe(true);
  });

});
