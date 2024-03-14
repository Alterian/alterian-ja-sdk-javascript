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
    instance = new JourneyAnalyticsApi.SetPermissionsRequest();
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

  describe('SetPermissionsRequest', function() {
    it('should create an instance of SetPermissionsRequest', function() {
      // uncomment below and update the code to test SetPermissionsRequest
      //var instance = new JourneyAnalyticsApi.SetPermissionsRequest();
      //expect(instance).to.be.a(JourneyAnalyticsApi.SetPermissionsRequest);
    });

    it('should have the property isGroup (base name: "IsGroup")', function() {
      // uncomment below and update the code to test the property isGroup
      //var instance = new JourneyAnalyticsApi.SetPermissionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property itemID (base name: "ItemID")', function() {
      // uncomment below and update the code to test the property itemID
      //var instance = new JourneyAnalyticsApi.SetPermissionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property itemType (base name: "ItemType")', function() {
      // uncomment below and update the code to test the property itemType
      //var instance = new JourneyAnalyticsApi.SetPermissionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property permissions (base name: "Permissions")', function() {
      // uncomment below and update the code to test the property permissions
      //var instance = new JourneyAnalyticsApi.SetPermissionsRequest();
      //expect(instance).to.be();
    });

    it('should have the property securityID (base name: "SecurityID")', function() {
      // uncomment below and update the code to test the property securityID
      //var instance = new JourneyAnalyticsApi.SetPermissionsRequest();
      //expect(instance).to.be();
    });

  });

}));
