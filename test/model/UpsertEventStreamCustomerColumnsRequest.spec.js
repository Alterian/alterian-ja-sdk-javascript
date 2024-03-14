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
    instance = new JourneyAnalyticsApi.UpsertEventStreamCustomerColumnsRequest();
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

  describe('UpsertEventStreamCustomerColumnsRequest', function() {
    it('should create an instance of UpsertEventStreamCustomerColumnsRequest', function() {
      // uncomment below and update the code to test UpsertEventStreamCustomerColumnsRequest
      //var instance = new JourneyAnalyticsApi.UpsertEventStreamCustomerColumnsRequest();
      //expect(instance).to.be.a(JourneyAnalyticsApi.UpsertEventStreamCustomerColumnsRequest);
    });

    it('should have the property fields (base name: "Fields")', function() {
      // uncomment below and update the code to test the property fields
      //var instance = new JourneyAnalyticsApi.UpsertEventStreamCustomerColumnsRequest();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "Id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new JourneyAnalyticsApi.UpsertEventStreamCustomerColumnsRequest();
      //expect(instance).to.be();
    });

    it('should have the property keyColumnName (base name: "KeyColumnName")', function() {
      // uncomment below and update the code to test the property keyColumnName
      //var instance = new JourneyAnalyticsApi.UpsertEventStreamCustomerColumnsRequest();
      //expect(instance).to.be();
    });

    it('should have the property personaColumnName (base name: "PersonaColumnName")', function() {
      // uncomment below and update the code to test the property personaColumnName
      //var instance = new JourneyAnalyticsApi.UpsertEventStreamCustomerColumnsRequest();
      //expect(instance).to.be();
    });

  });

}));