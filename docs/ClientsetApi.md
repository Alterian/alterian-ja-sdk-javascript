# JourneyAnalyticsApi.ClientsetApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addClientToClientSet**](ClientsetApi.md#addClientToClientSet) | **POST** /AddClientToClientSet | Move a @see(ALClient) from it&#39;s current @see(ALClientSet) to another clientset
[**createClientSet**](ClientsetApi.md#createClientSet) | **POST** /CreateClientSet | Create a new @see(ALClientSet) within the system.
[**deleteClientSet**](ClientsetApi.md#deleteClientSet) | **POST** /DeleteClientSet | Remove the given @see(ALClientSet) from the system. This method will fail if any @see(ALClient) exists within the clientset - i.e. the clientset must be empty before deletion
[**getClientSets**](ClientsetApi.md#getClientSets) | **POST** /GetClientSets | List all the clientsets within the system



## addClientToClientSet

> AUTHChangePasswordDefaultResponse addClientToClientSet(addClientToClientSetRequest)

Move a @see(ALClient) from it&#39;s current @see(ALClientSet) to another clientset

Move a @see(ALClient) from it&#39;s current @see(ALClientSet) to another clientset

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.ClientsetApi();
let addClientToClientSetRequest = new JourneyAnalyticsApi.AddClientToClientSetRequest(); // AddClientToClientSetRequest | Move a @see(ALClient) from it's current @see(ALClientSet) to another clientset
apiInstance.addClientToClientSet(addClientToClientSetRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addClientToClientSetRequest** | [**AddClientToClientSetRequest**](AddClientToClientSetRequest.md)| Move a @see(ALClient) from it&#39;s current @see(ALClientSet) to another clientset | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createClientSet

> CreateClientDefaultResponse createClientSet(createClientSetRequest)

Create a new @see(ALClientSet) within the system.

Create a new @see(ALClientSet) within the system.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.ClientsetApi();
let createClientSetRequest = new JourneyAnalyticsApi.CreateClientSetRequest(); // CreateClientSetRequest | Create a new @see(ALClientSet) within the system.
apiInstance.createClientSet(createClientSetRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createClientSetRequest** | [**CreateClientSetRequest**](CreateClientSetRequest.md)| Create a new @see(ALClientSet) within the system. | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteClientSet

> AUTHChangePasswordDefaultResponse deleteClientSet(deleteClientSetRequest)

Remove the given @see(ALClientSet) from the system. This method will fail if any @see(ALClient) exists within the clientset - i.e. the clientset must be empty before deletion

Remove the given @see(ALClientSet) from the system. This method will fail if any @see(ALClient) exists within the clientset - i.e. the clientset must be empty before deletion

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.ClientsetApi();
let deleteClientSetRequest = new JourneyAnalyticsApi.DeleteClientSetRequest(); // DeleteClientSetRequest | Remove the given @see(ALClientSet) from the system. This method will fail if any @see(ALClient) exists within the clientset - i.e. the clientset must be empty before deletion
apiInstance.deleteClientSet(deleteClientSetRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteClientSetRequest** | [**DeleteClientSetRequest**](DeleteClientSetRequest.md)| Remove the given @see(ALClientSet) from the system. This method will fail if any @see(ALClient) exists within the clientset - i.e. the clientset must be empty before deletion | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getClientSets

> GetClientSetsDefaultResponse getClientSets(getClientSetsRequest)

List all the clientsets within the system

List all the clientsets within the system

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.ClientsetApi();
let getClientSetsRequest = new JourneyAnalyticsApi.GetClientSetsRequest(); // GetClientSetsRequest | List all the clientsets within the system
apiInstance.getClientSets(getClientSetsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getClientSetsRequest** | [**GetClientSetsRequest**](GetClientSetsRequest.md)| List all the clientsets within the system | 

### Return type

[**GetClientSetsDefaultResponse**](GetClientSetsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

