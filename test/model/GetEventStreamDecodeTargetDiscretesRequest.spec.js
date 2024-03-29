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
    instance = new JourneyAnalyticsApi.GetEventStreamDecodeTargetDiscretesRequest();
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

  describe('GetEventStreamDecodeTargetDiscretesRequest', function() {
    it('should create an instance of GetEventStreamDecodeTargetDiscretesRequest', function() {
      // uncomment below and update the code to test GetEventStreamDecodeTargetDiscretesRequest
      //var instance = new JourneyAnalyticsApi.GetEventStreamDecodeTargetDiscretesRequest();
      //expect(instance).to.be.a(JourneyAnalyticsApi.GetEventStreamDecodeTargetDiscretesRequest);
    });

    it('should have the property baseListId (base name: "BaseListId")', function() {
      // uncomment below and update the code to test the property baseListId
      //var instance = new JourneyAnalyticsApi.GetEventStreamDecodeTargetDiscretesRequest();
      //expect(instance).to.be();
    });

    it('should have the property baseListVersion (base name: "BaseListVersion")', function() {
      // uncomment below and update the code to test the property baseListVersion
      //var instance = new JourneyAnalyticsApi.GetEventStreamDecodeTargetDiscretesRequest();
      //expect(instance).to.be();
    });

    it('should have the property columnName (base name: "ColumnName")', function() {
      // uncomment below and update the code to test the property columnName
      //var instance = new JourneyAnalyticsApi.GetEventStreamDecodeTargetDiscretesRequest();
      //expect(instance).to.be();
    });

    it('should have the property defaultLabel (base name: "DefaultLabel")', function() {
      // uncomment below and update the code to test the property defaultLabel
      //var instance = new JourneyAnalyticsApi.GetEventStreamDecodeTargetDiscretesRequest();
      //expect(instance).to.be();
    });

    it('should have the property eventDateTimeLower (base name: "EventDateTimeLower")', function() {
      // uncomment below and update the code to test the property eventDateTimeLower
      //var instance = new JourneyAnalyticsApi.GetEventStreamDecodeTargetDiscretesRequest();
      //expect(instance).to.be();
    });

    it('should have the property eventDateTimeUpper (base name: "EventDateTimeUpper")', function() {
      // uncomment below and update the code to test the property eventDateTimeUpper
      //var instance = new JourneyAnalyticsApi.GetEventStreamDecodeTargetDiscretesRequest();
      //expect(instance).to.be();
    });

    it('should have the property eventStreamId (base name: "EventStreamId")', function() {
      // uncomment below and update the code to test the property eventStreamId
      //var instance = new JourneyAnalyticsApi.GetEventStreamDecodeTargetDiscretesRequest();
      //expect(instance).to.be();
    });

    it('should have the property isDataRefreshRequired (base name: "IsDataRefreshRequired")', function() {
      // uncomment below and update the code to test the property isDataRefreshRequired
      //var instance = new JourneyAnalyticsApi.GetEventStreamDecodeTargetDiscretesRequest();
      //expect(instance).to.be();
    });

    it('should have the property isDefaultLabelConfigured (base name: "IsDefaultLabelConfigured")', function() {
      // uncomment below and update the code to test the property isDefaultLabelConfigured
      //var instance = new JourneyAnalyticsApi.GetEventStreamDecodeTargetDiscretesRequest();
      //expect(instance).to.be();
    });

    it('should have the property sourceLabels (base name: "SourceLabels")', function() {
      // uncomment below and update the code to test the property sourceLabels
      //var instance = new JourneyAnalyticsApi.GetEventStreamDecodeTargetDiscretesRequest();
      //expect(instance).to.be();
    });

    it('should have the property targetLabels (base name: "TargetLabels")', function() {
      // uncomment below and update the code to test the property targetLabels
      //var instance = new JourneyAnalyticsApi.GetEventStreamDecodeTargetDiscretesRequest();
      //expect(instance).to.be();
    });

  });

}));
