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
import AUTHChangePasswordDefaultResponse from '../com.alterian.ja.model/AUTHChangePasswordDefaultResponse';
import CreateClientDefaultResponse from '../com.alterian.ja.model/CreateClientDefaultResponse';
import CreatePersonaRequest from '../com.alterian.ja.model/CreatePersonaRequest';
import DeletePersonaRequest from '../com.alterian.ja.model/DeletePersonaRequest';
import GetPersonaDefaultResponse from '../com.alterian.ja.model/GetPersonaDefaultResponse';
import GetPersonaRequest from '../com.alterian.ja.model/GetPersonaRequest';
import GetPersonasDefaultResponse from '../com.alterian.ja.model/GetPersonasDefaultResponse';
import GetPersonasRequest from '../com.alterian.ja.model/GetPersonasRequest';

/**
* Persona service.
* @module api/PersonaApi
* @version 6.35.0
*/
export default class PersonaApi {

    /**
    * Constructs a new PersonaApi. 
    * @alias module:api/PersonaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Creates a @see(Persona)
     * Creates a @see(Persona)
     * @param {module:com.alterian.ja.model/CreatePersonaRequest} createPersonaRequest Creates a @see(Persona)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/CreateClientDefaultResponse} and HTTP response
     */
    createPersonaWithHttpInfo(createPersonaRequest) {
      let postBody = createPersonaRequest;
      // verify the required parameter 'createPersonaRequest' is set
      if (createPersonaRequest === undefined || createPersonaRequest === null) {
        throw new Error("Missing the required parameter 'createPersonaRequest' when calling createPersona");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['TokenAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateClientDefaultResponse;
      return this.apiClient.callApi(
        '/CreatePersona', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a @see(Persona)
     * Creates a @see(Persona)
     * @param {module:com.alterian.ja.model/CreatePersonaRequest} createPersonaRequest Creates a @see(Persona)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/CreateClientDefaultResponse}
     */
    createPersona(createPersonaRequest) {
      return this.createPersonaWithHttpInfo(createPersonaRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a persona from the system
     * Deletes a persona from the system
     * @param {module:com.alterian.ja.model/DeletePersonaRequest} deletePersonaRequest Deletes a persona from the system
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/AUTHChangePasswordDefaultResponse} and HTTP response
     */
    deletePersonaWithHttpInfo(deletePersonaRequest) {
      let postBody = deletePersonaRequest;
      // verify the required parameter 'deletePersonaRequest' is set
      if (deletePersonaRequest === undefined || deletePersonaRequest === null) {
        throw new Error("Missing the required parameter 'deletePersonaRequest' when calling deletePersona");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['TokenAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AUTHChangePasswordDefaultResponse;
      return this.apiClient.callApi(
        '/DeletePersona', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a persona from the system
     * Deletes a persona from the system
     * @param {module:com.alterian.ja.model/DeletePersonaRequest} deletePersonaRequest Deletes a persona from the system
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/AUTHChangePasswordDefaultResponse}
     */
    deletePersona(deletePersonaRequest) {
      return this.deletePersonaWithHttpInfo(deletePersonaRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns back a single @see(Persona)
     * Returns back a single @see(Persona)
     * @param {module:com.alterian.ja.model/GetPersonaRequest} getPersonaRequest Returns back a single @see(Persona)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/GetPersonaDefaultResponse} and HTTP response
     */
    getPersonaWithHttpInfo(getPersonaRequest) {
      let postBody = getPersonaRequest;
      // verify the required parameter 'getPersonaRequest' is set
      if (getPersonaRequest === undefined || getPersonaRequest === null) {
        throw new Error("Missing the required parameter 'getPersonaRequest' when calling getPersona");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['TokenAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetPersonaDefaultResponse;
      return this.apiClient.callApi(
        '/GetPersona', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns back a single @see(Persona)
     * Returns back a single @see(Persona)
     * @param {module:com.alterian.ja.model/GetPersonaRequest} getPersonaRequest Returns back a single @see(Persona)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/GetPersonaDefaultResponse}
     */
    getPersona(getPersonaRequest) {
      return this.getPersonaWithHttpInfo(getPersonaRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns back a list of @see(Persona)
     * Returns back a list of @see(Persona)
     * @param {module:com.alterian.ja.model/GetPersonasRequest} getPersonasRequest Returns back a list of @see(Persona)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/GetPersonasDefaultResponse} and HTTP response
     */
    getPersonasWithHttpInfo(getPersonasRequest) {
      let postBody = getPersonasRequest;
      // verify the required parameter 'getPersonasRequest' is set
      if (getPersonasRequest === undefined || getPersonasRequest === null) {
        throw new Error("Missing the required parameter 'getPersonasRequest' when calling getPersonas");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['TokenAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetPersonasDefaultResponse;
      return this.apiClient.callApi(
        '/GetPersonas', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns back a list of @see(Persona)
     * Returns back a list of @see(Persona)
     * @param {module:com.alterian.ja.model/GetPersonasRequest} getPersonasRequest Returns back a list of @see(Persona)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/GetPersonasDefaultResponse}
     */
    getPersonas(getPersonasRequest) {
      return this.getPersonasWithHttpInfo(getPersonasRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates an @see(Persona)
     * Updates an @see(Persona)
     * @param {module:com.alterian.ja.model/CreatePersonaRequest} createPersonaRequest Updates an @see(Persona)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/AUTHChangePasswordDefaultResponse} and HTTP response
     */
    updatePersonaWithHttpInfo(createPersonaRequest) {
      let postBody = createPersonaRequest;
      // verify the required parameter 'createPersonaRequest' is set
      if (createPersonaRequest === undefined || createPersonaRequest === null) {
        throw new Error("Missing the required parameter 'createPersonaRequest' when calling updatePersona");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['TokenAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AUTHChangePasswordDefaultResponse;
      return this.apiClient.callApi(
        '/UpdatePersona', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates an @see(Persona)
     * Updates an @see(Persona)
     * @param {module:com.alterian.ja.model/CreatePersonaRequest} createPersonaRequest Updates an @see(Persona)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/AUTHChangePasswordDefaultResponse}
     */
    updatePersona(createPersonaRequest) {
      return this.updatePersonaWithHttpInfo(createPersonaRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}