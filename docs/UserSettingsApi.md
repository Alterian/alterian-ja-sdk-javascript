# JourneyAnalyticsApi.UserSettingsApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserSetting**](UserSettingsApi.md#getUserSetting) | **POST** /GetUserSetting | Returns back a value for a user setting
[**setUserSetting**](UserSettingsApi.md#setUserSetting) | **POST** /SetUserSetting | Sets a user setting to the provided value



## getUserSetting

> GetDataSourceEngineUserNameDefaultResponse getUserSetting(getUserSettingRequest)

Returns back a value for a user setting

Returns back a value for a user setting

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.UserSettingsApi();
let getUserSettingRequest = new JourneyAnalyticsApi.GetUserSettingRequest(); // GetUserSettingRequest | Returns back a value for a user setting
apiInstance.getUserSetting(getUserSettingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getUserSettingRequest** | [**GetUserSettingRequest**](GetUserSettingRequest.md)| Returns back a value for a user setting | 

### Return type

[**GetDataSourceEngineUserNameDefaultResponse**](GetDataSourceEngineUserNameDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setUserSetting

> AUTHChangePasswordDefaultResponse setUserSetting(setUserSettingRequest)

Sets a user setting to the provided value

Sets a user setting to the provided value

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.UserSettingsApi();
let setUserSettingRequest = new JourneyAnalyticsApi.SetUserSettingRequest(); // SetUserSettingRequest | Sets a user setting to the provided value
apiInstance.setUserSetting(setUserSettingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setUserSettingRequest** | [**SetUserSettingRequest**](SetUserSettingRequest.md)| Sets a user setting to the provided value | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

