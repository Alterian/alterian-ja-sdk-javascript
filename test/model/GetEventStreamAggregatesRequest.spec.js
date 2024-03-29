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
    instance = new JourneyAnalyticsApi.GetEventStreamAggregatesRequest();
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

  describe('GetEventStreamAggregatesRequest', function() {
    it('should create an instance of GetEventStreamAggregatesRequest', function() {
      // uncomment below and update the code to test GetEventStreamAggregatesRequest
      //var instance = new JourneyAnalyticsApi.GetEventStreamAggregatesRequest();
      //expect(instance).to.be.a(JourneyAnalyticsApi.GetEventStreamAggregatesRequest);
    });

    it('should have the property columnTransforms (base name: "ColumnTransforms")', function() {
      // uncomment below and update the code to test the property columnTransforms
      //var instance = new JourneyAnalyticsApi.GetEventStreamAggregatesRequest();
      //expect(instance).to.be();
    });

    it('should have the property cursor (base name: "Cursor")', function() {
      // uncomment below and update the code to test the property cursor
      //var instance = new JourneyAnalyticsApi.GetEventStreamAggregatesRequest();
      //expect(instance).to.be();
    });

    it('should have the property dataSourceId (base name: "DataSourceId")', function() {
      // uncomment below and update the code to test the property dataSourceId
      //var instance = new JourneyAnalyticsApi.GetEventStreamAggregatesRequest();
      //expect(instance).to.be();
    });

    it('should have the property eventDateTimeLower (base name: "EventDateTimeLower")', function() {
      // uncomment below and update the code to test the property eventDateTimeLower
      //var instance = new JourneyAnalyticsApi.GetEventStreamAggregatesRequest();
      //expect(instance).to.be();
    });

    it('should have the property eventDateTimeUpper (base name: "EventDateTimeUpper")', function() {
      // uncomment below and update the code to test the property eventDateTimeUpper
      //var instance = new JourneyAnalyticsApi.GetEventStreamAggregatesRequest();
      //expect(instance).to.be();
    });

    it('should have the property eventStreamId (base name: "EventStreamId")', function() {
      // uncomment below and update the code to test the property eventStreamId
      //var instance = new JourneyAnalyticsApi.GetEventStreamAggregatesRequest();
      //expect(instance).to.be();
    });

    it('should have the property filters (base name: "Filters")', function() {
      // uncomment below and update the code to test the property filters
      //var instance = new JourneyAnalyticsApi.GetEventStreamAggregatesRequest();
      //expect(instance).to.be();
    });

    it('should have the property isDataRefreshRequired (base name: "IsDataRefreshRequired")', function() {
      // uncomment below and update the code to test the property isDataRefreshRequired
      //var instance = new JourneyAnalyticsApi.GetEventStreamAggregatesRequest();
      //expect(instance).to.be();
    });

    it('should have the property pattern (base name: "Pattern")', function() {
      // uncomment below and update the code to test the property pattern
      //var instance = new JourneyAnalyticsApi.GetEventStreamAggregatesRequest();
      //expect(instance).to.be();
    });

    it('should have the property tableNameEx (base name: "TableNameEx")', function() {
      // uncomment below and update the code to test the property tableNameEx
      //var instance = new JourneyAnalyticsApi.GetEventStreamAggregatesRequest();
      //expect(instance).to.be();
    });

  });

}));
