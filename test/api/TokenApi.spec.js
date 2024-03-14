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
    instance = new JourneyAnalyticsApi.TokenApi();
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

  describe('TokenApi', function() {
    describe('createImpersonationToken', function() {
      it('should call createImpersonationToken successfully', function(done) {
        //uncomment below and update the code to test createImpersonationToken
        //instance.createImpersonationToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createStaticToken', function() {
      it('should call createStaticToken successfully', function(done) {
        //uncomment below and update the code to test createStaticToken
        //instance.createStaticToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteStaticToken', function() {
      it('should call deleteStaticToken successfully', function(done) {
        //uncomment below and update the code to test deleteStaticToken
        //instance.deleteStaticToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTokens', function() {
      it('should call getTokens successfully', function(done) {
        //uncomment below and update the code to test getTokens
        //instance.getTokens(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateStaticToken', function() {
      it('should call updateStaticToken successfully', function(done) {
        //uncomment below and update the code to test updateStaticToken
        //instance.updateStaticToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
