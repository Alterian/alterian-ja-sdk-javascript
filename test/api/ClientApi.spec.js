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
    instance = new JourneyAnalyticsApi.ClientApi();
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

  describe('ClientApi', function() {
    describe('createClient', function() {
      it('should call createClient successfully', function(done) {
        //uncomment below and update the code to test createClient
        //instance.createClient(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createClientEx', function() {
      it('should call createClientEx successfully', function(done) {
        //uncomment below and update the code to test createClientEx
        //instance.createClientEx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteClient', function() {
      it('should call deleteClient successfully', function(done) {
        //uncomment below and update the code to test deleteClient
        //instance.deleteClient(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('disableClient', function() {
      it('should call disableClient successfully', function(done) {
        //uncomment below and update the code to test disableClient
        //instance.disableClient(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('enableClient', function() {
      it('should call enableClient successfully', function(done) {
        //uncomment below and update the code to test enableClient
        //instance.enableClient(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClientSettings', function() {
      it('should call getClientSettings successfully', function(done) {
        //uncomment below and update the code to test getClientSettings
        //instance.getClientSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClients', function() {
      it('should call getClients successfully', function(done) {
        //uncomment below and update the code to test getClients
        //instance.getClients(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCurrentClient', function() {
      it('should call getCurrentClient successfully', function(done) {
        //uncomment below and update the code to test getCurrentClient
        //instance.getCurrentClient(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateClientSettings', function() {
      it('should call updateClientSettings successfully', function(done) {
        //uncomment below and update the code to test updateClientSettings
        //instance.updateClientSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));