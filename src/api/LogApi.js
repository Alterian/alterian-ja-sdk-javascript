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


import ApiClient from "../ApiClient";

/**
* Log service.
* @module api/LogApi
* @version 6.35.0
*/
export default class LogApi {

    /**
    * Constructs a new LogApi. 
    * @alias module:api/LogApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns back an excel file containing the alert log entries for a particular client
     * Returns back an excel file containing the alert log entries for a particular client
     * @param {Object} opts Optional parameters
     * @param {Number} [clientId] 
     * @param {Number} [from] 
     * @param {Boolean} [sortDesc] 
     * @param {String} [sortProperty] 
     * @param {Number} [to] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    downloadAlertsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'ClientId': opts['clientId'],
        'From': opts['from'],
        'SortDesc': opts['sortDesc'],
        'SortProperty': opts['sortProperty'],
        'To': opts['to']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['TokenAuth'];
      let contentTypes = [];
      let accepts = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
      let returnType = File;
      return this.apiClient.callApi(
        '/DownloadAlerts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns back an excel file containing the alert log entries for a particular client
     * Returns back an excel file containing the alert log entries for a particular client
     * @param {Object} opts Optional parameters
     * @param {Number} opts.clientId 
     * @param {Number} opts.from 
     * @param {Boolean} opts.sortDesc 
     * @param {String} opts.sortProperty 
     * @param {Number} opts.to 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */
    downloadAlerts(opts) {
      return this.downloadAlertsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
