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
    instance = new JourneyAnalyticsApi.SaveDecodeListRequest();
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

  describe('SaveDecodeListRequest', function() {
    it('should create an instance of SaveDecodeListRequest', function() {
      // uncomment below and update the code to test SaveDecodeListRequest
      //var instance = new JourneyAnalyticsApi.SaveDecodeListRequest();
      //expect(instance).to.be.a(JourneyAnalyticsApi.SaveDecodeListRequest);
    });

    it('should have the property copyVersion (base name: "CopyVersion")', function() {
      // uncomment below and update the code to test the property copyVersion
      //var instance = new JourneyAnalyticsApi.SaveDecodeListRequest();
      //expect(instance).to.be();
    });

    it('should have the property createCopy (base name: "CreateCopy")', function() {
      // uncomment below and update the code to test the property createCopy
      //var instance = new JourneyAnalyticsApi.SaveDecodeListRequest();
      //expect(instance).to.be();
    });

    it('should have the property defaultLabel (base name: "DefaultLabel")', function() {
      // uncomment below and update the code to test the property defaultLabel
      //var instance = new JourneyAnalyticsApi.SaveDecodeListRequest();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "Id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new JourneyAnalyticsApi.SaveDecodeListRequest();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "Metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new JourneyAnalyticsApi.SaveDecodeListRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new JourneyAnalyticsApi.SaveDecodeListRequest();
      //expect(instance).to.be();
    });

    it('should have the property replaceExisting (base name: "ReplaceExisting")', function() {
      // uncomment below and update the code to test the property replaceExisting
      //var instance = new JourneyAnalyticsApi.SaveDecodeListRequest();
      //expect(instance).to.be();
    });

    it('should have the property sourceLabels (base name: "SourceLabels")', function() {
      // uncomment below and update the code to test the property sourceLabels
      //var instance = new JourneyAnalyticsApi.SaveDecodeListRequest();
      //expect(instance).to.be();
    });

    it('should have the property targetLabels (base name: "TargetLabels")', function() {
      // uncomment below and update the code to test the property targetLabels
      //var instance = new JourneyAnalyticsApi.SaveDecodeListRequest();
      //expect(instance).to.be();
    });

  });

}));
