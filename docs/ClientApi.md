# JourneyAnalyticsApi.ClientApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createClient**](ClientApi.md#createClient) | **POST** /CreateClient | Create a new @see(ALClient), with it&#39;s own unique database and set of users.
[**createClientEx**](ClientApi.md#createClientEx) | **POST** /CreateClientEx | Create a new @see(ALClient), with it&#39;s own unique database and set of users.             Additionally creates an example user / group with relevant permissions to design campaign factory campaigns.
[**deleteClient**](ClientApi.md#deleteClient) | **POST** /DeleteClient | Deletes a @see(ALClient).  Removes the client&#39;s database.  Note that the client must be disabled with @see(DisableClient) before calling this.
[**disableClient**](ClientApi.md#disableClient) | **POST** /DisableClient | Mark an individual @see(ALClient) as disabled. Disabled clients will not allow users to log on, documents will not be processed etc.
[**enableClient**](ClientApi.md#enableClient) | **POST** /EnableClient | Mark an individual @see(ALClient) as enabled. Enabled clients allow users to log on, documents will be processed etc.
[**getClientSettings**](ClientApi.md#getClientSettings) | **POST** /GetClientSettings | Returns the settings for the specified Client
[**getClients**](ClientApi.md#getClients) | **POST** /GetClients | Return a list of clients that match the supplied (optional) filters.
[**getCurrentClient**](ClientApi.md#getCurrentClient) | **POST** /GetCurrentClient | Returns back the client for the current token
[**updateClientSettings**](ClientApi.md#updateClientSettings) | **POST** /UpdateClientSettings | Updates the settings for the specified client. Warning: This API deletes any settings not included in the update request



## createClient

> CreateClientDefaultResponse createClient(createClientRequest)

Create a new @see(ALClient), with it&#39;s own unique database and set of users.

Create a new @see(ALClient), with it&#39;s own unique database and set of users.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.ClientApi();
let createClientRequest = new JourneyAnalyticsApi.CreateClientRequest(); // CreateClientRequest | Create a new @see(ALClient), with it's own unique database and set of users.
apiInstance.createClient(createClientRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createClientRequest** | [**CreateClientRequest**](CreateClientRequest.md)| Create a new @see(ALClient), with it&#39;s own unique database and set of users. | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createClientEx

> CreateClientDefaultResponse createClientEx(createClientRequest)

Create a new @see(ALClient), with it&#39;s own unique database and set of users.             Additionally creates an example user / group with relevant permissions to design campaign factory campaigns.

Create a new @see(ALClient), with it&#39;s own unique database and set of users.             Additionally creates an example user / group with relevant permissions to design campaign factory campaigns.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.ClientApi();
let createClientRequest = new JourneyAnalyticsApi.CreateClientRequest(); // CreateClientRequest | Create a new @see(ALClient), with it's own unique database and set of users.             Additionally creates an example user / group with relevant permissions to design campaign factory campaigns.
apiInstance.createClientEx(createClientRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createClientRequest** | [**CreateClientRequest**](CreateClientRequest.md)| Create a new @see(ALClient), with it&#39;s own unique database and set of users.             Additionally creates an example user / group with relevant permissions to design campaign factory campaigns. | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteClient

> AUTHChangePasswordDefaultResponse deleteClient(deleteClientRequest)

Deletes a @see(ALClient).  Removes the client&#39;s database.  Note that the client must be disabled with @see(DisableClient) before calling this.

Deletes a @see(ALClient).  Removes the client&#39;s database.  Note that the client must be disabled with @see(DisableClient) before calling this.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.ClientApi();
let deleteClientRequest = new JourneyAnalyticsApi.DeleteClientRequest(); // DeleteClientRequest | Deletes a @see(ALClient).  Removes the client's database.  Note that the client must be disabled with @see(DisableClient) before calling this.
apiInstance.deleteClient(deleteClientRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteClientRequest** | [**DeleteClientRequest**](DeleteClientRequest.md)| Deletes a @see(ALClient).  Removes the client&#39;s database.  Note that the client must be disabled with @see(DisableClient) before calling this. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## disableClient

> AUTHChangePasswordDefaultResponse disableClient(disableClientRequest)

Mark an individual @see(ALClient) as disabled. Disabled clients will not allow users to log on, documents will not be processed etc.

Mark an individual @see(ALClient) as disabled. Disabled clients will not allow users to log on, documents will not be processed etc.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.ClientApi();
let disableClientRequest = new JourneyAnalyticsApi.DisableClientRequest(); // DisableClientRequest | Mark an individual @see(ALClient) as disabled. Disabled clients will not allow users to log on, documents will not be processed etc.
apiInstance.disableClient(disableClientRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disableClientRequest** | [**DisableClientRequest**](DisableClientRequest.md)| Mark an individual @see(ALClient) as disabled. Disabled clients will not allow users to log on, documents will not be processed etc. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## enableClient

> AUTHChangePasswordDefaultResponse enableClient(disableClientRequest)

Mark an individual @see(ALClient) as enabled. Enabled clients allow users to log on, documents will be processed etc.

Mark an individual @see(ALClient) as enabled. Enabled clients allow users to log on, documents will be processed etc.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.ClientApi();
let disableClientRequest = new JourneyAnalyticsApi.DisableClientRequest(); // DisableClientRequest | Mark an individual @see(ALClient) as enabled. Enabled clients allow users to log on, documents will be processed etc.
apiInstance.enableClient(disableClientRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disableClientRequest** | [**DisableClientRequest**](DisableClientRequest.md)| Mark an individual @see(ALClient) as enabled. Enabled clients allow users to log on, documents will be processed etc. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getClientSettings

> GetClientSettingsDefaultResponse getClientSettings(getClientSettingsRequest)

Returns the settings for the specified Client

Returns the settings for the specified Client

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.ClientApi();
let getClientSettingsRequest = new JourneyAnalyticsApi.GetClientSettingsRequest(); // GetClientSettingsRequest | Returns the settings for the specified Client
apiInstance.getClientSettings(getClientSettingsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getClientSettingsRequest** | [**GetClientSettingsRequest**](GetClientSettingsRequest.md)| Returns the settings for the specified Client | 

### Return type

[**GetClientSettingsDefaultResponse**](GetClientSettingsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getClients

> GetBrandsDefaultResponse getClients(getClientsRequest)

Return a list of clients that match the supplied (optional) filters.

Return a list of clients that match the supplied (optional) filters.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.ClientApi();
let getClientsRequest = new JourneyAnalyticsApi.GetClientsRequest(); // GetClientsRequest | Return a list of clients that match the supplied (optional) filters.
apiInstance.getClients(getClientsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getClientsRequest** | [**GetClientsRequest**](GetClientsRequest.md)| Return a list of clients that match the supplied (optional) filters. | 

### Return type

[**GetBrandsDefaultResponse**](GetBrandsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCurrentClient

> GetCurrentClientDefaultResponse getCurrentClient()

Returns back the client for the current token

Returns back the client for the current token

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.ClientApi();
apiInstance.getCurrentClient().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetCurrentClientDefaultResponse**](GetCurrentClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateClientSettings

> AUTHChangePasswordDefaultResponse updateClientSettings(updateClientSettingsRequest)

Updates the settings for the specified client. Warning: This API deletes any settings not included in the update request

Updates the settings for the specified client. Warning: This API deletes any settings not included in the update request

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.ClientApi();
let updateClientSettingsRequest = new JourneyAnalyticsApi.UpdateClientSettingsRequest(); // UpdateClientSettingsRequest | Updates the settings for the specified client. Warning: This API deletes any settings not included in the update request
apiInstance.updateClientSettings(updateClientSettingsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateClientSettingsRequest** | [**UpdateClientSettingsRequest**](UpdateClientSettingsRequest.md)| Updates the settings for the specified client. Warning: This API deletes any settings not included in the update request | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

