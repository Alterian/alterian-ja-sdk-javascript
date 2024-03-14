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
    instance = new JourneyAnalyticsApi.GetDataSourcesRequest();
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

  describe('GetDataSourcesRequest', function() {
    it('should create an instance of GetDataSourcesRequest', function() {
      // uncomment below and update the code to test GetDataSourcesRequest
      //var instance = new JourneyAnalyticsApi.GetDataSourcesRequest();
      //expect(instance).to.be.a(JourneyAnalyticsApi.GetDataSourcesRequest);
    });

    it('should have the property cursor (base name: "Cursor")', function() {
      // uncomment below and update the code to test the property cursor
      //var instance = new JourneyAnalyticsApi.GetDataSourcesRequest();
      //expect(instance).to.be();
    });

    it('should have the property datasourceTypeID (base name: "DatasourceTypeID")', function() {
      // uncomment below and update the code to test the property datasourceTypeID
      //var instance = new JourneyAnalyticsApi.GetDataSourcesRequest();
      //expect(instance).to.be();
    });

    it('should have the property fullyPopulate (base name: "FullyPopulate")', function() {
      // uncomment below and update the code to test the property fullyPopulate
      //var instance = new JourneyAnalyticsApi.GetDataSourcesRequest();
      //expect(instance).to.be();
    });

    it('should have the property includeDisabled (base name: "IncludeDisabled")', function() {
      // uncomment below and update the code to test the property includeDisabled
      //var instance = new JourneyAnalyticsApi.GetDataSourcesRequest();
      //expect(instance).to.be();
    });

    it('should have the property includeInvisible (base name: "IncludeInvisible")', function() {
      // uncomment below and update the code to test the property includeInvisible
      //var instance = new JourneyAnalyticsApi.GetDataSourcesRequest();
      //expect(instance).to.be();
    });

    it('should have the property minimalResults (base name: "MinimalResults")', function() {
      // uncomment below and update the code to test the property minimalResults
      //var instance = new JourneyAnalyticsApi.GetDataSourcesRequest();
      //expect(instance).to.be();
    });

    it('should have the property nameFilter (base name: "NameFilter")', function() {
      // uncomment below and update the code to test the property nameFilter
      //var instance = new JourneyAnalyticsApi.GetDataSourcesRequest();
      //expect(instance).to.be();
    });

  });

}));
