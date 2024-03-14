/**
 * Journey Analytics API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 6.35.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.JourneyAnalyticsApi);
  }
}(this, function(expect, JourneyAnalyticsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new JourneyAnalyticsApi.GetCurrentUserRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetCurrentUserRequest', function() {
    it('should create an instance of GetCurrentUserRequest', function() {
      // uncomment below and update the code to test GetCurrentUserRequest
      //var instance = new JourneyAnalyticsApi.GetCurrentUserRequest();
      //expect(instance).to.be.a(JourneyAnalyticsApi.GetCurrentUserRequest);
    });

    it('should have the property includeGroups (base name: "IncludeGroups")', function() {
      // uncomment below and update the code to test the property includeGroups
      //var instance = new JourneyAnalyticsApi.GetCurrentUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property includePermissions (base name: "IncludePermissions")', function() {
      // uncomment below and update the code to test the property includePermissions
      //var instance = new JourneyAnalyticsApi.GetCurrentUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property includeSettings (base name: "IncludeSettings")', function() {
      // uncomment below and update the code to test the property includeSettings
      //var instance = new JourneyAnalyticsApi.GetCurrentUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property includeTools (base name: "IncludeTools")', function() {
      // uncomment below and update the code to test the property includeTools
      //var instance = new JourneyAnalyticsApi.GetCurrentUserRequest();
      //expect(instance).to.be();
    });

  });

}));