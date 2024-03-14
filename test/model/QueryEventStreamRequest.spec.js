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
    instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
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

  describe('QueryEventStreamRequest', function() {
    it('should create an instance of QueryEventStreamRequest', function() {
      // uncomment below and update the code to test QueryEventStreamRequest
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be.a(JourneyAnalyticsApi.QueryEventStreamRequest);
    });

    it('should have the property alignment (base name: "Alignment")', function() {
      // uncomment below and update the code to test the property alignment
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property alignmentEventName (base name: "AlignmentEventName")', function() {
      // uncomment below and update the code to test the property alignmentEventName
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property alignmentSecondaryEventName (base name: "AlignmentSecondaryEventName")', function() {
      // uncomment below and update the code to test the property alignmentSecondaryEventName
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property columnTransforms (base name: "ColumnTransforms")', function() {
      // uncomment below and update the code to test the property columnTransforms
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property conversationTimeoutInSeconds (base name: "ConversationTimeoutInSeconds")', function() {
      // uncomment below and update the code to test the property conversationTimeoutInSeconds
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property dataSourceId (base name: "DataSourceId")', function() {
      // uncomment below and update the code to test the property dataSourceId
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property eventDateTimeLower (base name: "EventDateTimeLower")', function() {
      // uncomment below and update the code to test the property eventDateTimeLower
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property eventDateTimeUpper (base name: "EventDateTimeUpper")', function() {
      // uncomment below and update the code to test the property eventDateTimeUpper
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property eventStreamId (base name: "EventStreamId")', function() {
      // uncomment below and update the code to test the property eventStreamId
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property eventTypes (base name: "EventTypes")', function() {
      // uncomment below and update the code to test the property eventTypes
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property filters (base name: "Filters")', function() {
      // uncomment below and update the code to test the property filters
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property initiatives (base name: "Initiatives")', function() {
      // uncomment below and update the code to test the property initiatives
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property isDataRefreshRequired (base name: "IsDataRefreshRequired")', function() {
      // uncomment below and update the code to test the property isDataRefreshRequired
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property isDeduplicationRequired (base name: "IsDeduplicationRequired")', function() {
      // uncomment below and update the code to test the property isDeduplicationRequired
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property isTimeoutEventsRequired (base name: "IsTimeoutEventsRequired")', function() {
      // uncomment below and update the code to test the property isTimeoutEventsRequired
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxLength (base name: "MaxLength")', function() {
      // uncomment below and update the code to test the property maxLength
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property pattern (base name: "Pattern")', function() {
      // uncomment below and update the code to test the property pattern
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property primaryEventColumnName (base name: "PrimaryEventColumnName")', function() {
      // uncomment below and update the code to test the property primaryEventColumnName
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property secondaryEventColumnName (base name: "SecondaryEventColumnName")', function() {
      // uncomment below and update the code to test the property secondaryEventColumnName
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property streamKey (base name: "StreamKey")', function() {
      // uncomment below and update the code to test the property streamKey
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property streamQuery (base name: "StreamQuery")', function() {
      // uncomment below and update the code to test the property streamQuery
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property tableNameEx (base name: "TableNameEx")', function() {
      // uncomment below and update the code to test the property tableNameEx
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

    it('should have the property topN (base name: "TopN")', function() {
      // uncomment below and update the code to test the property topN
      //var instance = new JourneyAnalyticsApi.QueryEventStreamRequest();
      //expect(instance).to.be();
    });

  });

}));