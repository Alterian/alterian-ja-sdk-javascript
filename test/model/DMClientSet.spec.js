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
    instance = new JourneyAnalyticsApi.DMClientSet();
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

  describe('DMClientSet', function() {
    it('should create an instance of DMClientSet', function() {
      // uncomment below and update the code to test DMClientSet
      //var instance = new JourneyAnalyticsApi.DMClientSet();
      //expect(instance).to.be.a(JourneyAnalyticsApi.DMClientSet);
    });

    it('should have the property ID (base name: "ID")', function() {
      // uncomment below and update the code to test the property ID
      //var instance = new JourneyAnalyticsApi.DMClientSet();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new JourneyAnalyticsApi.DMClientSet();
      //expect(instance).to.be();
    });

    it('should have the property sASeats (base name: "SASeats")', function() {
      // uncomment below and update the code to test the property sASeats
      //var instance = new JourneyAnalyticsApi.DMClientSet();
      //expect(instance).to.be();
    });

    it('should have the property defaultSettings (base name: "DefaultSettings")', function() {
      // uncomment below and update the code to test the property defaultSettings
      //var instance = new JourneyAnalyticsApi.DMClientSet();
      //expect(instance).to.be();
    });

    it('should have the property clients (base name: "Clients")', function() {
      // uncomment below and update the code to test the property clients
      //var instance = new JourneyAnalyticsApi.DMClientSet();
      //expect(instance).to.be();
    });

    it('should have the property vMTAs (base name: "VMTAs")', function() {
      // uncomment below and update the code to test the property vMTAs
      //var instance = new JourneyAnalyticsApi.DMClientSet();
      //expect(instance).to.be();
    });

    it('should have the property deliveryContexts (base name: "DeliveryContexts")', function() {
      // uncomment below and update the code to test the property deliveryContexts
      //var instance = new JourneyAnalyticsApi.DMClientSet();
      //expect(instance).to.be();
    });

  });

}));
