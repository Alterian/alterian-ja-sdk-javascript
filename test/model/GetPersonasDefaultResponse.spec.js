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
    instance = new JourneyAnalyticsApi.GetPersonasDefaultResponse();
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

  describe('GetPersonasDefaultResponse', function() {
    it('should create an instance of GetPersonasDefaultResponse', function() {
      // uncomment below and update the code to test GetPersonasDefaultResponse
      //var instance = new JourneyAnalyticsApi.GetPersonasDefaultResponse();
      //expect(instance).to.be.a(JourneyAnalyticsApi.GetPersonasDefaultResponse);
    });

    it('should have the property statusCode (base name: "StatusCode")', function() {
      // uncomment below and update the code to test the property statusCode
      //var instance = new JourneyAnalyticsApi.GetPersonasDefaultResponse();
      //expect(instance).to.be();
    });

    it('should have the property debugMessage (base name: "DebugMessage")', function() {
      // uncomment below and update the code to test the property debugMessage
      //var instance = new JourneyAnalyticsApi.GetPersonasDefaultResponse();
      //expect(instance).to.be();
    });

    it('should have the property detail (base name: "Detail")', function() {
      // uncomment below and update the code to test the property detail
      //var instance = new JourneyAnalyticsApi.GetPersonasDefaultResponse();
      //expect(instance).to.be();
    });

    it('should have the property cursor (base name: "Cursor")', function() {
      // uncomment below and update the code to test the property cursor
      //var instance = new JourneyAnalyticsApi.GetPersonasDefaultResponse();
      //expect(instance).to.be();
    });

    it('should have the property result (base name: "Result")', function() {
      // uncomment below and update the code to test the property result
      //var instance = new JourneyAnalyticsApi.GetPersonasDefaultResponse();
      //expect(instance).to.be();
    });

  });

}));
