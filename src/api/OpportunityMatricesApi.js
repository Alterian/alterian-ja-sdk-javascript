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
import CreateBusinessGoalRequest from '../com.alterian.ja.model/CreateBusinessGoalRequest';
import CreateClientDefaultResponse from '../com.alterian.ja.model/CreateClientDefaultResponse';
import CreateInitiativeRequest from '../com.alterian.ja.model/CreateInitiativeRequest';
import CreateOpportunityRequest from '../com.alterian.ja.model/CreateOpportunityRequest';
import DeleteBusinessGoalRequest from '../com.alterian.ja.model/DeleteBusinessGoalRequest';
import DeleteInitiativeRequest from '../com.alterian.ja.model/DeleteInitiativeRequest';
import DeleteOpportunityRequest from '../com.alterian.ja.model/DeleteOpportunityRequest';
import GetBusinessGoalsDefaultResponse from '../com.alterian.ja.model/GetBusinessGoalsDefaultResponse';
import GetEventStreamInitiativesDefaultResponse from '../com.alterian.ja.model/GetEventStreamInitiativesDefaultResponse';
import GetEventStreamInitiativesRequest from '../com.alterian.ja.model/GetEventStreamInitiativesRequest';
import GetOpportunitiesDefaultResponse from '../com.alterian.ja.model/GetOpportunitiesDefaultResponse';
import GetOpportunityMatrixDefaultResponse from '../com.alterian.ja.model/GetOpportunityMatrixDefaultResponse';
import UpdateOpportunityMatrixRequest from '../com.alterian.ja.model/UpdateOpportunityMatrixRequest';

/**
* OpportunityMatrices service.
* @module api/OpportunityMatricesApi
* @version 6.35.0
*/
export default class OpportunityMatricesApi {

    /**
    * Constructs a new OpportunityMatricesApi. 
    * @alias module:api/OpportunityMatricesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a Business Goal
     * Create a Business Goal
     * @param {module:com.alterian.ja.model/CreateBusinessGoalRequest} createBusinessGoalRequest Create a Business Goal
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/CreateClientDefaultResponse} and HTTP response
     */
    createBusinessGoalWithHttpInfo(createBusinessGoalRequest) {
      let postBody = createBusinessGoalRequest;
      // verify the required parameter 'createBusinessGoalRequest' is set
      if (createBusinessGoalRequest === undefined || createBusinessGoalRequest === null) {
        throw new Error("Missing the required parameter 'createBusinessGoalRequest' when calling createBusinessGoal");
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
        '/CreateBusinessGoal', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Business Goal
     * Create a Business Goal
     * @param {module:com.alterian.ja.model/CreateBusinessGoalRequest} createBusinessGoalRequest Create a Business Goal
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/CreateClientDefaultResponse}
     */
    createBusinessGoal(createBusinessGoalRequest) {
      return this.createBusinessGoalWithHttpInfo(createBusinessGoalRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Business Initiative
     * Create a Business Initiative
     * @param {module:com.alterian.ja.model/CreateInitiativeRequest} createInitiativeRequest Create a Business Initiative
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/CreateClientDefaultResponse} and HTTP response
     */
    createInitiativeWithHttpInfo(createInitiativeRequest) {
      let postBody = createInitiativeRequest;
      // verify the required parameter 'createInitiativeRequest' is set
      if (createInitiativeRequest === undefined || createInitiativeRequest === null) {
        throw new Error("Missing the required parameter 'createInitiativeRequest' when calling createInitiative");
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
        '/CreateInitiative', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Business Initiative
     * Create a Business Initiative
     * @param {module:com.alterian.ja.model/CreateInitiativeRequest} createInitiativeRequest Create a Business Initiative
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/CreateClientDefaultResponse}
     */
    createInitiative(createInitiativeRequest) {
      return this.createInitiativeWithHttpInfo(createInitiativeRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create an opportunity
     * Create an opportunity
     * @param {module:com.alterian.ja.model/CreateOpportunityRequest} createOpportunityRequest Create an opportunity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/CreateClientDefaultResponse} and HTTP response
     */
    createOpportunityWithHttpInfo(createOpportunityRequest) {
      let postBody = createOpportunityRequest;
      // verify the required parameter 'createOpportunityRequest' is set
      if (createOpportunityRequest === undefined || createOpportunityRequest === null) {
        throw new Error("Missing the required parameter 'createOpportunityRequest' when calling createOpportunity");
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
        '/CreateOpportunity', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create an opportunity
     * Create an opportunity
     * @param {module:com.alterian.ja.model/CreateOpportunityRequest} createOpportunityRequest Create an opportunity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/CreateClientDefaultResponse}
     */
    createOpportunity(createOpportunityRequest) {
      return this.createOpportunityWithHttpInfo(createOpportunityRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Business Goal
     * Delete a Business Goal
     * @param {module:com.alterian.ja.model/DeleteBusinessGoalRequest} deleteBusinessGoalRequest Delete a Business Goal
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/AUTHChangePasswordDefaultResponse} and HTTP response
     */
    deleteBusinessGoalWithHttpInfo(deleteBusinessGoalRequest) {
      let postBody = deleteBusinessGoalRequest;
      // verify the required parameter 'deleteBusinessGoalRequest' is set
      if (deleteBusinessGoalRequest === undefined || deleteBusinessGoalRequest === null) {
        throw new Error("Missing the required parameter 'deleteBusinessGoalRequest' when calling deleteBusinessGoal");
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
        '/DeleteBusinessGoal', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a Business Goal
     * Delete a Business Goal
     * @param {module:com.alterian.ja.model/DeleteBusinessGoalRequest} deleteBusinessGoalRequest Delete a Business Goal
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/AUTHChangePasswordDefaultResponse}
     */
    deleteBusinessGoal(deleteBusinessGoalRequest) {
      return this.deleteBusinessGoalWithHttpInfo(deleteBusinessGoalRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Business Initiative
     * Delete a Business Initiative
     * @param {module:com.alterian.ja.model/DeleteInitiativeRequest} deleteInitiativeRequest Delete a Business Initiative
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/AUTHChangePasswordDefaultResponse} and HTTP response
     */
    deleteInitiativeWithHttpInfo(deleteInitiativeRequest) {
      let postBody = deleteInitiativeRequest;
      // verify the required parameter 'deleteInitiativeRequest' is set
      if (deleteInitiativeRequest === undefined || deleteInitiativeRequest === null) {
        throw new Error("Missing the required parameter 'deleteInitiativeRequest' when calling deleteInitiative");
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
        '/DeleteInitiative', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a Business Initiative
     * Delete a Business Initiative
     * @param {module:com.alterian.ja.model/DeleteInitiativeRequest} deleteInitiativeRequest Delete a Business Initiative
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/AUTHChangePasswordDefaultResponse}
     */
    deleteInitiative(deleteInitiativeRequest) {
      return this.deleteInitiativeWithHttpInfo(deleteInitiativeRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an opportunity
     * Delete an opportunity
     * @param {module:com.alterian.ja.model/DeleteOpportunityRequest} deleteOpportunityRequest Delete an opportunity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/AUTHChangePasswordDefaultResponse} and HTTP response
     */
    deleteOpportunityWithHttpInfo(deleteOpportunityRequest) {
      let postBody = deleteOpportunityRequest;
      // verify the required parameter 'deleteOpportunityRequest' is set
      if (deleteOpportunityRequest === undefined || deleteOpportunityRequest === null) {
        throw new Error("Missing the required parameter 'deleteOpportunityRequest' when calling deleteOpportunity");
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
        '/DeleteOpportunity', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an opportunity
     * Delete an opportunity
     * @param {module:com.alterian.ja.model/DeleteOpportunityRequest} deleteOpportunityRequest Delete an opportunity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/AUTHChangePasswordDefaultResponse}
     */
    deleteOpportunity(deleteOpportunityRequest) {
      return this.deleteOpportunityWithHttpInfo(deleteOpportunityRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the list of Business Goal
     * Get the list of Business Goal
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/GetBusinessGoalsDefaultResponse} and HTTP response
     */
    getBusinessGoalsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['TokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetBusinessGoalsDefaultResponse;
      return this.apiClient.callApi(
        '/GetBusinessGoals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the list of Business Goal
     * Get the list of Business Goal
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/GetBusinessGoalsDefaultResponse}
     */
    getBusinessGoals() {
      return this.getBusinessGoalsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get initiatives for an event stream
     * Get initiatives for an event stream
     * @param {module:com.alterian.ja.model/GetEventStreamInitiativesRequest} getEventStreamInitiativesRequest Get initiatives for an event stream
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/GetEventStreamInitiativesDefaultResponse} and HTTP response
     */
    getEventStreamInitiativesWithHttpInfo(getEventStreamInitiativesRequest) {
      let postBody = getEventStreamInitiativesRequest;
      // verify the required parameter 'getEventStreamInitiativesRequest' is set
      if (getEventStreamInitiativesRequest === undefined || getEventStreamInitiativesRequest === null) {
        throw new Error("Missing the required parameter 'getEventStreamInitiativesRequest' when calling getEventStreamInitiatives");
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
      let returnType = GetEventStreamInitiativesDefaultResponse;
      return this.apiClient.callApi(
        '/GetEventStreamInitiatives', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get initiatives for an event stream
     * Get initiatives for an event stream
     * @param {module:com.alterian.ja.model/GetEventStreamInitiativesRequest} getEventStreamInitiativesRequest Get initiatives for an event stream
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/GetEventStreamInitiativesDefaultResponse}
     */
    getEventStreamInitiatives(getEventStreamInitiativesRequest) {
      return this.getEventStreamInitiativesWithHttpInfo(getEventStreamInitiativesRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all current initiatives
     * Get all current initiatives
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/GetEventStreamInitiativesDefaultResponse} and HTTP response
     */
    getInitiativesWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['TokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetEventStreamInitiativesDefaultResponse;
      return this.apiClient.callApi(
        '/GetInitiatives', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all current initiatives
     * Get all current initiatives
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/GetEventStreamInitiativesDefaultResponse}
     */
    getInitiatives() {
      return this.getInitiativesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the list of opportunities
     * Get the list of opportunities
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/GetOpportunitiesDefaultResponse} and HTTP response
     */
    getOpportunitiesWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['TokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetOpportunitiesDefaultResponse;
      return this.apiClient.callApi(
        '/GetOpportunities', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the list of opportunities
     * Get the list of opportunities
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/GetOpportunitiesDefaultResponse}
     */
    getOpportunities() {
      return this.getOpportunitiesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets abbreviated details of all campaigns that are currently plotted on the opportunity matrix
     * Gets abbreviated details of all campaigns that are currently plotted on the opportunity matrix
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/GetOpportunityMatrixDefaultResponse} and HTTP response
     */
    getOpportunityMatrixWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['TokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetOpportunityMatrixDefaultResponse;
      return this.apiClient.callApi(
        '/GetOpportunityMatrix', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets abbreviated details of all campaigns that are currently plotted on the opportunity matrix
     * Gets abbreviated details of all campaigns that are currently plotted on the opportunity matrix
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/GetOpportunityMatrixDefaultResponse}
     */
    getOpportunityMatrix() {
      return this.getOpportunityMatrixWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Business Goal
     * Update a Business Goal
     * @param {module:com.alterian.ja.model/CreateBusinessGoalRequest} createBusinessGoalRequest Update a Business Goal
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/AUTHChangePasswordDefaultResponse} and HTTP response
     */
    updateBusinessGoalWithHttpInfo(createBusinessGoalRequest) {
      let postBody = createBusinessGoalRequest;
      // verify the required parameter 'createBusinessGoalRequest' is set
      if (createBusinessGoalRequest === undefined || createBusinessGoalRequest === null) {
        throw new Error("Missing the required parameter 'createBusinessGoalRequest' when calling updateBusinessGoal");
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
        '/UpdateBusinessGoal', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Business Goal
     * Update a Business Goal
     * @param {module:com.alterian.ja.model/CreateBusinessGoalRequest} createBusinessGoalRequest Update a Business Goal
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/AUTHChangePasswordDefaultResponse}
     */
    updateBusinessGoal(createBusinessGoalRequest) {
      return this.updateBusinessGoalWithHttpInfo(createBusinessGoalRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Business Initiative
     * Update a Business Initiative
     * @param {module:com.alterian.ja.model/CreateInitiativeRequest} createInitiativeRequest Update a Business Initiative
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/AUTHChangePasswordDefaultResponse} and HTTP response
     */
    updateInitiativeWithHttpInfo(createInitiativeRequest) {
      let postBody = createInitiativeRequest;
      // verify the required parameter 'createInitiativeRequest' is set
      if (createInitiativeRequest === undefined || createInitiativeRequest === null) {
        throw new Error("Missing the required parameter 'createInitiativeRequest' when calling updateInitiative");
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
        '/UpdateInitiative', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Business Initiative
     * Update a Business Initiative
     * @param {module:com.alterian.ja.model/CreateInitiativeRequest} createInitiativeRequest Update a Business Initiative
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/AUTHChangePasswordDefaultResponse}
     */
    updateInitiative(createInitiativeRequest) {
      return this.updateInitiativeWithHttpInfo(createInitiativeRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an Opportunity
     * Update an Opportunity
     * @param {module:com.alterian.ja.model/CreateOpportunityRequest} createOpportunityRequest Update an Opportunity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/AUTHChangePasswordDefaultResponse} and HTTP response
     */
    updateOpportunityWithHttpInfo(createOpportunityRequest) {
      let postBody = createOpportunityRequest;
      // verify the required parameter 'createOpportunityRequest' is set
      if (createOpportunityRequest === undefined || createOpportunityRequest === null) {
        throw new Error("Missing the required parameter 'createOpportunityRequest' when calling updateOpportunity");
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
        '/UpdateOpportunity', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an Opportunity
     * Update an Opportunity
     * @param {module:com.alterian.ja.model/CreateOpportunityRequest} createOpportunityRequest Update an Opportunity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/AUTHChangePasswordDefaultResponse}
     */
    updateOpportunity(createOpportunityRequest) {
      return this.updateOpportunityWithHttpInfo(createOpportunityRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Store all the details for every campaign that's now plotted on the opportunity matrix.
     * Store all the details for every campaign that's now plotted on the opportunity matrix.
     * @param {module:com.alterian.ja.model/UpdateOpportunityMatrixRequest} updateOpportunityMatrixRequest Store all the details for every campaign that's now plotted on the opportunity matrix.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.alterian.ja.model/AUTHChangePasswordDefaultResponse} and HTTP response
     */
    updateOpportunityMatrixWithHttpInfo(updateOpportunityMatrixRequest) {
      let postBody = updateOpportunityMatrixRequest;
      // verify the required parameter 'updateOpportunityMatrixRequest' is set
      if (updateOpportunityMatrixRequest === undefined || updateOpportunityMatrixRequest === null) {
        throw new Error("Missing the required parameter 'updateOpportunityMatrixRequest' when calling updateOpportunityMatrix");
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
        '/UpdateOpportunityMatrix', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Store all the details for every campaign that's now plotted on the opportunity matrix.
     * Store all the details for every campaign that's now plotted on the opportunity matrix.
     * @param {module:com.alterian.ja.model/UpdateOpportunityMatrixRequest} updateOpportunityMatrixRequest Store all the details for every campaign that's now plotted on the opportunity matrix.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.alterian.ja.model/AUTHChangePasswordDefaultResponse}
     */
    updateOpportunityMatrix(updateOpportunityMatrixRequest) {
      return this.updateOpportunityMatrixWithHttpInfo(updateOpportunityMatrixRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
