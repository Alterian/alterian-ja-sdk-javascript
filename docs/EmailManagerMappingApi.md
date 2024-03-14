# JourneyAnalyticsApi.EmailManagerMappingApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEMMapping**](EmailManagerMappingApi.md#createEMMapping) | **POST** /CreateEMMapping | Added a new @see(EMUploadMapping) into the system, returning back the ID of the new mapping.  Note that @see(EMMapping)s must be uniquely named.
[**createEMSession**](EmailManagerMappingApi.md#createEMSession) | **POST** /CreateEMSession | Connects to a mapping&#39;s EM system and provides back the application details [including token and other settings]
[**deleteEMMapping**](EmailManagerMappingApi.md#deleteEMMapping) | **POST** /DeleteEMMapping | Deletes an @see(EMUploadMapping) from the system.  If a mapping which is currently in use is deleted, campaigns which rely upon it will cease to function.
[**getEMDownloadMappings**](EmailManagerMappingApi.md#getEMDownloadMappings) | **POST** /GetEMDownloadMappings | Return back a list of the @see(EMDownloadMapping)s which the token can view.
[**getEMMapping**](EmailManagerMappingApi.md#getEMMapping) | **POST** /GetEMMapping | Returns back a single @see(EMUploadMapping) by its ID.
[**getEMMappings**](EmailManagerMappingApi.md#getEMMappings) | **POST** /GetEMMappings | Return back a list of the @see(EMUploadMapping)s which the token can view.
[**moveEMMapping**](EmailManagerMappingApi.md#moveEMMapping) | **POST** /MoveEMMapping | Provides a way to easily move an @see(EMUploadMapping) from one folder to another.  Note that @see(EMMapping)s must be uniquely named within a folder.
[**renameEMMapping**](EmailManagerMappingApi.md#renameEMMapping) | **POST** /RenameEMMapping | Provides a way to easily rename an @see(EMUploadMapping).  Note that @see(EMMapping)s must be uniquely named.
[**updateEMMapping**](EmailManagerMappingApi.md#updateEMMapping) | **POST** /UpdateEMMapping | Updates an @see(EMUploadMapping) so you can change the name, folder, etc.  Note that @see(EMMapping)s must be uniquely named.



## createEMMapping

> CreateClientDefaultResponse createEMMapping(createEMMappingRequest)

Added a new @see(EMUploadMapping) into the system, returning back the ID of the new mapping.  Note that @see(EMMapping)s must be uniquely named.

Added a new @see(EMUploadMapping) into the system, returning back the ID of the new mapping.  Note that @see(EMMapping)s must be uniquely named.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EmailManagerMappingApi();
let createEMMappingRequest = new JourneyAnalyticsApi.CreateEMMappingRequest(); // CreateEMMappingRequest | Added a new @see(EMUploadMapping) into the system, returning back the ID of the new mapping.  Note that @see(EMMapping)s must be uniquely named.
apiInstance.createEMMapping(createEMMappingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEMMappingRequest** | [**CreateEMMappingRequest**](CreateEMMappingRequest.md)| Added a new @see(EMUploadMapping) into the system, returning back the ID of the new mapping.  Note that @see(EMMapping)s must be uniquely named. | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createEMSession

> CreateEMSessionDefaultResponse createEMSession(createEMSessionRequest)

Connects to a mapping&#39;s EM system and provides back the application details [including token and other settings]

Connects to a mapping&#39;s EM system and provides back the application details [including token and other settings]

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EmailManagerMappingApi();
let createEMSessionRequest = new JourneyAnalyticsApi.CreateEMSessionRequest(); // CreateEMSessionRequest | Connects to a mapping's EM system and provides back the application details [including token and other settings]
apiInstance.createEMSession(createEMSessionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEMSessionRequest** | [**CreateEMSessionRequest**](CreateEMSessionRequest.md)| Connects to a mapping&#39;s EM system and provides back the application details [including token and other settings] | 

### Return type

[**CreateEMSessionDefaultResponse**](CreateEMSessionDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEMMapping

> AUTHChangePasswordDefaultResponse deleteEMMapping(deleteEMMappingRequest)

Deletes an @see(EMUploadMapping) from the system.  If a mapping which is currently in use is deleted, campaigns which rely upon it will cease to function.

Deletes an @see(EMUploadMapping) from the system.  If a mapping which is currently in use is deleted, campaigns which rely upon it will cease to function.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EmailManagerMappingApi();
let deleteEMMappingRequest = new JourneyAnalyticsApi.DeleteEMMappingRequest(); // DeleteEMMappingRequest | Deletes an @see(EMUploadMapping) from the system.  If a mapping which is currently in use is deleted, campaigns which rely upon it will cease to function.
apiInstance.deleteEMMapping(deleteEMMappingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteEMMappingRequest** | [**DeleteEMMappingRequest**](DeleteEMMappingRequest.md)| Deletes an @see(EMUploadMapping) from the system.  If a mapping which is currently in use is deleted, campaigns which rely upon it will cease to function. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEMDownloadMappings

> GetEMDownloadMappingsDefaultResponse getEMDownloadMappings(getClientSetsRequest)

Return back a list of the @see(EMDownloadMapping)s which the token can view.

Return back a list of the @see(EMDownloadMapping)s which the token can view.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EmailManagerMappingApi();
let getClientSetsRequest = new JourneyAnalyticsApi.GetClientSetsRequest(); // GetClientSetsRequest | Return back a list of the @see(EMDownloadMapping)s which the token can view.
apiInstance.getEMDownloadMappings(getClientSetsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getClientSetsRequest** | [**GetClientSetsRequest**](GetClientSetsRequest.md)| Return back a list of the @see(EMDownloadMapping)s which the token can view. | 

### Return type

[**GetEMDownloadMappingsDefaultResponse**](GetEMDownloadMappingsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEMMapping

> GetEMMappingDefaultResponse getEMMapping(getEMMappingRequest)

Returns back a single @see(EMUploadMapping) by its ID.

Returns back a single @see(EMUploadMapping) by its ID.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EmailManagerMappingApi();
let getEMMappingRequest = new JourneyAnalyticsApi.GetEMMappingRequest(); // GetEMMappingRequest | Returns back a single @see(EMUploadMapping) by its ID.
apiInstance.getEMMapping(getEMMappingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getEMMappingRequest** | [**GetEMMappingRequest**](GetEMMappingRequest.md)| Returns back a single @see(EMUploadMapping) by its ID. | 

### Return type

[**GetEMMappingDefaultResponse**](GetEMMappingDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEMMappings

> GetEMMappingsDefaultResponse getEMMappings(getEMMappingsRequest)

Return back a list of the @see(EMUploadMapping)s which the token can view.

Return back a list of the @see(EMUploadMapping)s which the token can view.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EmailManagerMappingApi();
let getEMMappingsRequest = new JourneyAnalyticsApi.GetEMMappingsRequest(); // GetEMMappingsRequest | Return back a list of the @see(EMUploadMapping)s which the token can view.
apiInstance.getEMMappings(getEMMappingsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getEMMappingsRequest** | [**GetEMMappingsRequest**](GetEMMappingsRequest.md)| Return back a list of the @see(EMUploadMapping)s which the token can view. | 

### Return type

[**GetEMMappingsDefaultResponse**](GetEMMappingsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## moveEMMapping

> AUTHChangePasswordDefaultResponse moveEMMapping(moveEMMappingRequest)

Provides a way to easily move an @see(EMUploadMapping) from one folder to another.  Note that @see(EMMapping)s must be uniquely named within a folder.

Provides a way to easily move an @see(EMUploadMapping) from one folder to another.  Note that @see(EMMapping)s must be uniquely named within a folder.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EmailManagerMappingApi();
let moveEMMappingRequest = new JourneyAnalyticsApi.MoveEMMappingRequest(); // MoveEMMappingRequest | Provides a way to easily move an @see(EMUploadMapping) from one folder to another.  Note that @see(EMMapping)s must be uniquely named within a folder.
apiInstance.moveEMMapping(moveEMMappingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **moveEMMappingRequest** | [**MoveEMMappingRequest**](MoveEMMappingRequest.md)| Provides a way to easily move an @see(EMUploadMapping) from one folder to another.  Note that @see(EMMapping)s must be uniquely named within a folder. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## renameEMMapping

> AUTHChangePasswordDefaultResponse renameEMMapping(renameEMMappingRequest)

Provides a way to easily rename an @see(EMUploadMapping).  Note that @see(EMMapping)s must be uniquely named.

Provides a way to easily rename an @see(EMUploadMapping).  Note that @see(EMMapping)s must be uniquely named.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EmailManagerMappingApi();
let renameEMMappingRequest = new JourneyAnalyticsApi.RenameEMMappingRequest(); // RenameEMMappingRequest | Provides a way to easily rename an @see(EMUploadMapping).  Note that @see(EMMapping)s must be uniquely named.
apiInstance.renameEMMapping(renameEMMappingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **renameEMMappingRequest** | [**RenameEMMappingRequest**](RenameEMMappingRequest.md)| Provides a way to easily rename an @see(EMUploadMapping).  Note that @see(EMMapping)s must be uniquely named. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEMMapping

> AUTHChangePasswordDefaultResponse updateEMMapping(createEMMappingRequest)

Updates an @see(EMUploadMapping) so you can change the name, folder, etc.  Note that @see(EMMapping)s must be uniquely named.

Updates an @see(EMUploadMapping) so you can change the name, folder, etc.  Note that @see(EMMapping)s must be uniquely named.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EmailManagerMappingApi();
let createEMMappingRequest = new JourneyAnalyticsApi.CreateEMMappingRequest(); // CreateEMMappingRequest | Updates an @see(EMUploadMapping) so you can change the name, folder, etc.  Note that @see(EMMapping)s must be uniquely named.
apiInstance.updateEMMapping(createEMMappingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEMMappingRequest** | [**CreateEMMappingRequest**](CreateEMMappingRequest.md)| Updates an @see(EMUploadMapping) so you can change the name, folder, etc.  Note that @see(EMMapping)s must be uniquely named. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

