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
    instance = new JourneyAnalyticsApi.DMOmnitureSettings();
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

  describe('DMOmnitureSettings', function() {
    it('should create an instance of DMOmnitureSettings', function() {
      // uncomment below and update the code to test DMOmnitureSettings
      //var instance = new JourneyAnalyticsApi.DMOmnitureSettings();
      //expect(instance).to.be.a(JourneyAnalyticsApi.DMOmnitureSettings);
    });

    it('should have the property enabled (base name: "Enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new JourneyAnalyticsApi.DMOmnitureSettings();
      //expect(instance).to.be();
    });

    it('should have the property integrationNum (base name: "IntegrationNum")', function() {
      // uncomment below and update the code to test the property integrationNum
      //var instance = new JourneyAnalyticsApi.DMOmnitureSettings();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "CompanyName")', function() {
      // uncomment below and update the code to test the property companyName
      //var instance = new JourneyAnalyticsApi.DMOmnitureSettings();
      //expect(instance).to.be();
    });

    it('should have the property reportSuite (base name: "ReportSuite")', function() {
      // uncomment below and update the code to test the property reportSuite
      //var instance = new JourneyAnalyticsApi.DMOmnitureSettings();
      //expect(instance).to.be();
    });

    it('should have the property remarketingSegPath (base name: "RemarketingSegPath")', function() {
      // uncomment below and update the code to test the property remarketingSegPath
      //var instance = new JourneyAnalyticsApi.DMOmnitureSettings();
      //expect(instance).to.be();
    });

    it('should have the property remarketingSeg (base name: "RemarketingSeg")', function() {
      // uncomment below and update the code to test the property remarketingSeg
      //var instance = new JourneyAnalyticsApi.DMOmnitureSettings();
      //expect(instance).to.be();
    });

    it('should have the property emailAddr (base name: "EmailAddr")', function() {
      // uncomment below and update the code to test the property emailAddr
      //var instance = new JourneyAnalyticsApi.DMOmnitureSettings();
      //expect(instance).to.be();
    });

  });

}));