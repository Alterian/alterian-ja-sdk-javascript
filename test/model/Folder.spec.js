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
    instance = new JourneyAnalyticsApi.Folder();
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

  describe('Folder', function() {
    it('should create an instance of Folder', function() {
      // uncomment below and update the code to test Folder
      //var instance = new JourneyAnalyticsApi.Folder();
      //expect(instance).to.be.a(JourneyAnalyticsApi.Folder);
    });

    it('should have the property ID (base name: "ID")', function() {
      // uncomment below and update the code to test the property ID
      //var instance = new JourneyAnalyticsApi.Folder();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new JourneyAnalyticsApi.Folder();
      //expect(instance).to.be();
    });

    it('should have the property subFolders (base name: "SubFolders")', function() {
      // uncomment below and update the code to test the property subFolders
      //var instance = new JourneyAnalyticsApi.Folder();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "Items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new JourneyAnalyticsApi.Folder();
      //expect(instance).to.be();
    });

    it('should have the property system (base name: "System")', function() {
      // uncomment below and update the code to test the property system
      //var instance = new JourneyAnalyticsApi.Folder();
      //expect(instance).to.be();
    });

    it('should have the property parentID (base name: "ParentID")', function() {
      // uncomment below and update the code to test the property parentID
      //var instance = new JourneyAnalyticsApi.Folder();
      //expect(instance).to.be();
    });

    it('should have the property accessView (base name: "AccessView")', function() {
      // uncomment below and update the code to test the property accessView
      //var instance = new JourneyAnalyticsApi.Folder();
      //expect(instance).to.be();
    });

    it('should have the property accessModify (base name: "AccessModify")', function() {
      // uncomment below and update the code to test the property accessModify
      //var instance = new JourneyAnalyticsApi.Folder();
      //expect(instance).to.be();
    });

    it('should have the property ownerID (base name: "OwnerID")', function() {
      // uncomment below and update the code to test the property ownerID
      //var instance = new JourneyAnalyticsApi.Folder();
      //expect(instance).to.be();
    });

    it('should have the property hidden (base name: "Hidden")', function() {
      // uncomment below and update the code to test the property hidden
      //var instance = new JourneyAnalyticsApi.Folder();
      //expect(instance).to.be();
    });

    it('should have the property ancestorFolderIDs (base name: "AncestorFolderIDs")', function() {
      // uncomment below and update the code to test the property ancestorFolderIDs
      //var instance = new JourneyAnalyticsApi.Folder();
      //expect(instance).to.be();
    });

    it('should have the property childCount (base name: "ChildCount")', function() {
      // uncomment below and update the code to test the property childCount
      //var instance = new JourneyAnalyticsApi.Folder();
      //expect(instance).to.be();
    });

  });

}));
