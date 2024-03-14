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
    instance = new JourneyAnalyticsApi.AuthServerApi();
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

  describe('AuthServerApi', function() {
    describe('aUTHChangePassword', function() {
      it('should call aUTHChangePassword successfully', function(done) {
        //uncomment below and update the code to test aUTHChangePassword
        //instance.aUTHChangePassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aUTHCreateLogin', function() {
      it('should call aUTHCreateLogin successfully', function(done) {
        //uncomment below and update the code to test aUTHCreateLogin
        //instance.aUTHCreateLogin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aUTHDisableLogin', function() {
      it('should call aUTHDisableLogin successfully', function(done) {
        //uncomment below and update the code to test aUTHDisableLogin
        //instance.aUTHDisableLogin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aUTHEnableLogin', function() {
      it('should call aUTHEnableLogin successfully', function(done) {
        //uncomment below and update the code to test aUTHEnableLogin
        //instance.aUTHEnableLogin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aUTHExpirePassword', function() {
      it('should call aUTHExpirePassword successfully', function(done) {
        //uncomment below and update the code to test aUTHExpirePassword
        //instance.aUTHExpirePassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aUTHGetClientLogins', function() {
      it('should call aUTHGetClientLogins successfully', function(done) {
        //uncomment below and update the code to test aUTHGetClientLogins
        //instance.aUTHGetClientLogins(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aUTHGetLoginPasswordRules', function() {
      it('should call aUTHGetLoginPasswordRules successfully', function(done) {
        //uncomment below and update the code to test aUTHGetLoginPasswordRules
        //instance.aUTHGetLoginPasswordRules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aUTHGetLogins', function() {
      it('should call aUTHGetLogins successfully', function(done) {
        //uncomment below and update the code to test aUTHGetLogins
        //instance.aUTHGetLogins(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aUTHGetLoginsForUser', function() {
      it('should call aUTHGetLoginsForUser successfully', function(done) {
        //uncomment below and update the code to test aUTHGetLoginsForUser
        //instance.aUTHGetLoginsForUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aUTHRenameLogin', function() {
      it('should call aUTHRenameLogin successfully', function(done) {
        //uncomment below and update the code to test aUTHRenameLogin
        //instance.aUTHRenameLogin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aUTHSetLoginUserId', function() {
      it('should call aUTHSetLoginUserId successfully', function(done) {
        //uncomment below and update the code to test aUTHSetLoginUserId
        //instance.aUTHSetLoginUserId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aUTHUpdateLogin', function() {
      it('should call aUTHUpdateLogin successfully', function(done) {
        //uncomment below and update the code to test aUTHUpdateLogin
        //instance.aUTHUpdateLogin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
