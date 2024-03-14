# JourneyAnalyticsApi.SystemApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemIdentifier**](SystemApi.md#getSystemIdentifier) | **POST** /GetSystemIdentifier | Returns back the system identifier for this CM system
[**getSystemSettings**](SystemApi.md#getSystemSettings) | **POST** /GetSystemSettings | Returns the system settings that are common to all clients
[**updateSystemSetting**](SystemApi.md#updateSystemSetting) | **POST** /UpdateSystemSetting | Updates one of the system settings (those that are common to all clients)



## getSystemIdentifier

> GetDataSourceEngineUserNameDefaultResponse getSystemIdentifier()

Returns back the system identifier for this CM system

Returns back the system identifier for this CM system

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.SystemApi();
apiInstance.getSystemIdentifier().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetDataSourceEngineUserNameDefaultResponse**](GetDataSourceEngineUserNameDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSystemSettings

> GetClientSettingsDefaultResponse getSystemSettings()

Returns the system settings that are common to all clients

Returns the system settings that are common to all clients

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.SystemApi();
apiInstance.getSystemSettings().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetClientSettingsDefaultResponse**](GetClientSettingsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSystemSetting

> AUTHChangePasswordDefaultResponse updateSystemSetting(updateSystemSettingRequest)

Updates one of the system settings (those that are common to all clients)

Updates one of the system settings (those that are common to all clients)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.SystemApi();
let updateSystemSettingRequest = new JourneyAnalyticsApi.UpdateSystemSettingRequest(); // UpdateSystemSettingRequest | Updates one of the system settings (those that are common to all clients)
apiInstance.updateSystemSetting(updateSystemSettingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateSystemSettingRequest** | [**UpdateSystemSettingRequest**](UpdateSystemSettingRequest.md)| Updates one of the system settings (those that are common to all clients) | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

