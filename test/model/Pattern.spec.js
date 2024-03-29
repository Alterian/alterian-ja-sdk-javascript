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
    instance = new JourneyAnalyticsApi.Pattern();
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

  describe('Pattern', function() {
    it('should create an instance of Pattern', function() {
      // uncomment below and update the code to test Pattern
      //var instance = new JourneyAnalyticsApi.Pattern();
      //expect(instance).to.be.a(JourneyAnalyticsApi.Pattern);
    });

    it('should have the property id (base name: "Id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new JourneyAnalyticsApi.Pattern();
      //expect(instance).to.be();
    });

    it('should have the property eventStreamId (base name: "EventStreamId")', function() {
      // uncomment below and update the code to test the property eventStreamId
      //var instance = new JourneyAnalyticsApi.Pattern();
      //expect(instance).to.be();
    });

    it('should have the property snapshotStart (base name: "SnapshotStart")', function() {
      // uncomment below and update the code to test the property snapshotStart
      //var instance = new JourneyAnalyticsApi.Pattern();
      //expect(instance).to.be();
    });

    it('should have the property snapshotEnd (base name: "SnapshotEnd")', function() {
      // uncomment below and update the code to test the property snapshotEnd
      //var instance = new JourneyAnalyticsApi.Pattern();
      //expect(instance).to.be();
    });

    it('should have the property settings (base name: "Settings")', function() {
      // uncomment below and update the code to test the property settings
      //var instance = new JourneyAnalyticsApi.Pattern();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "State")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new JourneyAnalyticsApi.Pattern();
      //expect(instance).to.be();
    });

    it('should have the property dataSourceId (base name: "DataSourceId")', function() {
      // uncomment below and update the code to test the property dataSourceId
      //var instance = new JourneyAnalyticsApi.Pattern();
      //expect(instance).to.be();
    });

    it('should have the property transforms (base name: "Transforms")', function() {
      // uncomment below and update the code to test the property transforms
      //var instance = new JourneyAnalyticsApi.Pattern();
      //expect(instance).to.be();
    });

  });

}));
