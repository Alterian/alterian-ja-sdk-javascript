# JourneyAnalyticsApi.OpportunityMatricesApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBusinessGoal**](OpportunityMatricesApi.md#createBusinessGoal) | **POST** /CreateBusinessGoal | Create a Business Goal
[**createInitiative**](OpportunityMatricesApi.md#createInitiative) | **POST** /CreateInitiative | Create a Business Initiative
[**createOpportunity**](OpportunityMatricesApi.md#createOpportunity) | **POST** /CreateOpportunity | Create an opportunity
[**deleteBusinessGoal**](OpportunityMatricesApi.md#deleteBusinessGoal) | **POST** /DeleteBusinessGoal | Delete a Business Goal
[**deleteInitiative**](OpportunityMatricesApi.md#deleteInitiative) | **POST** /DeleteInitiative | Delete a Business Initiative
[**deleteOpportunity**](OpportunityMatricesApi.md#deleteOpportunity) | **POST** /DeleteOpportunity | Delete an opportunity
[**getBusinessGoals**](OpportunityMatricesApi.md#getBusinessGoals) | **POST** /GetBusinessGoals | Get the list of Business Goal
[**getEventStreamInitiatives**](OpportunityMatricesApi.md#getEventStreamInitiatives) | **POST** /GetEventStreamInitiatives | Get initiatives for an event stream
[**getInitiatives**](OpportunityMatricesApi.md#getInitiatives) | **POST** /GetInitiatives | Get all current initiatives
[**getOpportunities**](OpportunityMatricesApi.md#getOpportunities) | **POST** /GetOpportunities | Get the list of opportunities
[**getOpportunityMatrix**](OpportunityMatricesApi.md#getOpportunityMatrix) | **POST** /GetOpportunityMatrix | Gets abbreviated details of all campaigns that are currently plotted on the opportunity matrix
[**updateBusinessGoal**](OpportunityMatricesApi.md#updateBusinessGoal) | **POST** /UpdateBusinessGoal | Update a Business Goal
[**updateInitiative**](OpportunityMatricesApi.md#updateInitiative) | **POST** /UpdateInitiative | Update a Business Initiative
[**updateOpportunity**](OpportunityMatricesApi.md#updateOpportunity) | **POST** /UpdateOpportunity | Update an Opportunity
[**updateOpportunityMatrix**](OpportunityMatricesApi.md#updateOpportunityMatrix) | **POST** /UpdateOpportunityMatrix | Store all the details for every campaign that&#39;s now plotted on the opportunity matrix.



## createBusinessGoal

> CreateClientDefaultResponse createBusinessGoal(createBusinessGoalRequest)

Create a Business Goal

Create a Business Goal

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.OpportunityMatricesApi();
let createBusinessGoalRequest = new JourneyAnalyticsApi.CreateBusinessGoalRequest(); // CreateBusinessGoalRequest | Create a Business Goal
apiInstance.createBusinessGoal(createBusinessGoalRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBusinessGoalRequest** | [**CreateBusinessGoalRequest**](CreateBusinessGoalRequest.md)| Create a Business Goal | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createInitiative

> CreateClientDefaultResponse createInitiative(createInitiativeRequest)

Create a Business Initiative

Create a Business Initiative

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.OpportunityMatricesApi();
let createInitiativeRequest = new JourneyAnalyticsApi.CreateInitiativeRequest(); // CreateInitiativeRequest | Create a Business Initiative
apiInstance.createInitiative(createInitiativeRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createInitiativeRequest** | [**CreateInitiativeRequest**](CreateInitiativeRequest.md)| Create a Business Initiative | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOpportunity

> CreateClientDefaultResponse createOpportunity(createOpportunityRequest)

Create an opportunity

Create an opportunity

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.OpportunityMatricesApi();
let createOpportunityRequest = new JourneyAnalyticsApi.CreateOpportunityRequest(); // CreateOpportunityRequest | Create an opportunity
apiInstance.createOpportunity(createOpportunityRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOpportunityRequest** | [**CreateOpportunityRequest**](CreateOpportunityRequest.md)| Create an opportunity | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteBusinessGoal

> AUTHChangePasswordDefaultResponse deleteBusinessGoal(deleteBusinessGoalRequest)

Delete a Business Goal

Delete a Business Goal

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.OpportunityMatricesApi();
let deleteBusinessGoalRequest = new JourneyAnalyticsApi.DeleteBusinessGoalRequest(); // DeleteBusinessGoalRequest | Delete a Business Goal
apiInstance.deleteBusinessGoal(deleteBusinessGoalRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteBusinessGoalRequest** | [**DeleteBusinessGoalRequest**](DeleteBusinessGoalRequest.md)| Delete a Business Goal | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteInitiative

> AUTHChangePasswordDefaultResponse deleteInitiative(deleteInitiativeRequest)

Delete a Business Initiative

Delete a Business Initiative

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.OpportunityMatricesApi();
let deleteInitiativeRequest = new JourneyAnalyticsApi.DeleteInitiativeRequest(); // DeleteInitiativeRequest | Delete a Business Initiative
apiInstance.deleteInitiative(deleteInitiativeRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteInitiativeRequest** | [**DeleteInitiativeRequest**](DeleteInitiativeRequest.md)| Delete a Business Initiative | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOpportunity

> AUTHChangePasswordDefaultResponse deleteOpportunity(deleteOpportunityRequest)

Delete an opportunity

Delete an opportunity

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.OpportunityMatricesApi();
let deleteOpportunityRequest = new JourneyAnalyticsApi.DeleteOpportunityRequest(); // DeleteOpportunityRequest | Delete an opportunity
apiInstance.deleteOpportunity(deleteOpportunityRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteOpportunityRequest** | [**DeleteOpportunityRequest**](DeleteOpportunityRequest.md)| Delete an opportunity | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getBusinessGoals

> GetBusinessGoalsDefaultResponse getBusinessGoals()

Get the list of Business Goal

Get the list of Business Goal

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.OpportunityMatricesApi();
apiInstance.getBusinessGoals().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetBusinessGoalsDefaultResponse**](GetBusinessGoalsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventStreamInitiatives

> GetEventStreamInitiativesDefaultResponse getEventStreamInitiatives(getEventStreamInitiativesRequest)

Get initiatives for an event stream

Get initiatives for an event stream

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.OpportunityMatricesApi();
let getEventStreamInitiativesRequest = new JourneyAnalyticsApi.GetEventStreamInitiativesRequest(); // GetEventStreamInitiativesRequest | Get initiatives for an event stream
apiInstance.getEventStreamInitiatives(getEventStreamInitiativesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getEventStreamInitiativesRequest** | [**GetEventStreamInitiativesRequest**](GetEventStreamInitiativesRequest.md)| Get initiatives for an event stream | 

### Return type

[**GetEventStreamInitiativesDefaultResponse**](GetEventStreamInitiativesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getInitiatives

> GetEventStreamInitiativesDefaultResponse getInitiatives()

Get all current initiatives

Get all current initiatives

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.OpportunityMatricesApi();
apiInstance.getInitiatives().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetEventStreamInitiativesDefaultResponse**](GetEventStreamInitiativesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOpportunities

> GetOpportunitiesDefaultResponse getOpportunities()

Get the list of opportunities

Get the list of opportunities

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.OpportunityMatricesApi();
apiInstance.getOpportunities().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetOpportunitiesDefaultResponse**](GetOpportunitiesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOpportunityMatrix

> GetOpportunityMatrixDefaultResponse getOpportunityMatrix()

Gets abbreviated details of all campaigns that are currently plotted on the opportunity matrix

Gets abbreviated details of all campaigns that are currently plotted on the opportunity matrix

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.OpportunityMatricesApi();
apiInstance.getOpportunityMatrix().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetOpportunityMatrixDefaultResponse**](GetOpportunityMatrixDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateBusinessGoal

> AUTHChangePasswordDefaultResponse updateBusinessGoal(createBusinessGoalRequest)

Update a Business Goal

Update a Business Goal

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.OpportunityMatricesApi();
let createBusinessGoalRequest = new JourneyAnalyticsApi.CreateBusinessGoalRequest(); // CreateBusinessGoalRequest | Update a Business Goal
apiInstance.updateBusinessGoal(createBusinessGoalRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBusinessGoalRequest** | [**CreateBusinessGoalRequest**](CreateBusinessGoalRequest.md)| Update a Business Goal | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateInitiative

> AUTHChangePasswordDefaultResponse updateInitiative(createInitiativeRequest)

Update a Business Initiative

Update a Business Initiative

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.OpportunityMatricesApi();
let createInitiativeRequest = new JourneyAnalyticsApi.CreateInitiativeRequest(); // CreateInitiativeRequest | Update a Business Initiative
apiInstance.updateInitiative(createInitiativeRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createInitiativeRequest** | [**CreateInitiativeRequest**](CreateInitiativeRequest.md)| Update a Business Initiative | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOpportunity

> AUTHChangePasswordDefaultResponse updateOpportunity(createOpportunityRequest)

Update an Opportunity

Update an Opportunity

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.OpportunityMatricesApi();
let createOpportunityRequest = new JourneyAnalyticsApi.CreateOpportunityRequest(); // CreateOpportunityRequest | Update an Opportunity
apiInstance.updateOpportunity(createOpportunityRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOpportunityRequest** | [**CreateOpportunityRequest**](CreateOpportunityRequest.md)| Update an Opportunity | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOpportunityMatrix

> AUTHChangePasswordDefaultResponse updateOpportunityMatrix(updateOpportunityMatrixRequest)

Store all the details for every campaign that&#39;s now plotted on the opportunity matrix.

Store all the details for every campaign that&#39;s now plotted on the opportunity matrix.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.OpportunityMatricesApi();
let updateOpportunityMatrixRequest = new JourneyAnalyticsApi.UpdateOpportunityMatrixRequest(); // UpdateOpportunityMatrixRequest | Store all the details for every campaign that's now plotted on the opportunity matrix.
apiInstance.updateOpportunityMatrix(updateOpportunityMatrixRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateOpportunityMatrixRequest** | [**UpdateOpportunityMatrixRequest**](UpdateOpportunityMatrixRequest.md)| Store all the details for every campaign that&#39;s now plotted on the opportunity matrix. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

