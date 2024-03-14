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
    instance = new JourneyAnalyticsApi.DMCreativeDTO();
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

  describe('DMCreativeDTO', function() {
    it('should create an instance of DMCreativeDTO', function() {
      // uncomment below and update the code to test DMCreativeDTO
      //var instance = new JourneyAnalyticsApi.DMCreativeDTO();
      //expect(instance).to.be.a(JourneyAnalyticsApi.DMCreativeDTO);
    });

    it('should have the property categoryId (base name: "CategoryId")', function() {
      // uncomment below and update the code to test the property categoryId
      //var instance = new JourneyAnalyticsApi.DMCreativeDTO();
      //expect(instance).to.be();
    });

    it('should have the property createdByUserId (base name: "CreatedByUserId")', function() {
      // uncomment below and update the code to test the property createdByUserId
      //var instance = new JourneyAnalyticsApi.DMCreativeDTO();
      //expect(instance).to.be();
    });

    it('should have the property createdByUserName (base name: "CreatedByUserName")', function() {
      // uncomment below and update the code to test the property createdByUserName
      //var instance = new JourneyAnalyticsApi.DMCreativeDTO();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "CreatedDate")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instance = new JourneyAnalyticsApi.DMCreativeDTO();
      //expect(instance).to.be();
    });

    it('should have the property creativeId (base name: "CreativeId")', function() {
      // uncomment below and update the code to test the property creativeId
      //var instance = new JourneyAnalyticsApi.DMCreativeDTO();
      //expect(instance).to.be();
    });

    it('should have the property creativeName (base name: "CreativeName")', function() {
      // uncomment below and update the code to test the property creativeName
      //var instance = new JourneyAnalyticsApi.DMCreativeDTO();
      //expect(instance).to.be();
    });

    it('should have the property documentId (base name: "DocumentId")', function() {
      // uncomment below and update the code to test the property documentId
      //var instance = new JourneyAnalyticsApi.DMCreativeDTO();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedByUserId (base name: "LastModifiedByUserId")', function() {
      // uncomment below and update the code to test the property lastModifiedByUserId
      //var instance = new JourneyAnalyticsApi.DMCreativeDTO();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedByUserName (base name: "LastModifiedByUserName")', function() {
      // uncomment below and update the code to test the property lastModifiedByUserName
      //var instance = new JourneyAnalyticsApi.DMCreativeDTO();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedDate (base name: "LastModifiedDate")', function() {
      // uncomment below and update the code to test the property lastModifiedDate
      //var instance = new JourneyAnalyticsApi.DMCreativeDTO();
      //expect(instance).to.be();
    });

    it('should have the property thumbnailPath (base name: "ThumbnailPath")', function() {
      // uncomment below and update the code to test the property thumbnailPath
      //var instance = new JourneyAnalyticsApi.DMCreativeDTO();
      //expect(instance).to.be();
    });

  });

}));
