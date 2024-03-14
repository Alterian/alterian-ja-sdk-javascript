# JourneyAnalyticsApi.TemplateBuilderApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebSpoon**](TemplateBuilderApi.md#createWebSpoon) | **POST** /CreateWebSpoon | Creates an instance of Template Builder which will be unique to this system, the brand and user which calls the method.
[**deleteWebSpoon**](TemplateBuilderApi.md#deleteWebSpoon) | **POST** /DeleteWebSpoon | Removes a Template Builder instance
[**getWebSpoonAvailable**](TemplateBuilderApi.md#getWebSpoonAvailable) | **POST** /GetWebSpoonAvailable | Check to make sure Template Builder is available
[**getWebSpoonLoginUrl**](TemplateBuilderApi.md#getWebSpoonLoginUrl) | **POST** /GetWebSpoonLoginUrl | Get a URL valid for redirecting to the Template Builder instance; note, this will return nothing if the operational status is not \&quot;UP\&quot;
[**listWebSpoon**](TemplateBuilderApi.md#listWebSpoon) | **POST** /ListWebSpoon | Returns back the Template Builder instances which have been created for this system, brand and user (unique to that combination)



## createWebSpoon

> CreateWebSpoonDefaultResponse createWebSpoon(createWebSpoonRequest)

Creates an instance of Template Builder which will be unique to this system, the brand and user which calls the method.

Creates an instance of Template Builder which will be unique to this system, the brand and user which calls the method.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.TemplateBuilderApi();
let createWebSpoonRequest = new JourneyAnalyticsApi.CreateWebSpoonRequest(); // CreateWebSpoonRequest | Creates an instance of Template Builder which will be unique to this system, the brand and user which calls the method.
apiInstance.createWebSpoon(createWebSpoonRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWebSpoonRequest** | [**CreateWebSpoonRequest**](CreateWebSpoonRequest.md)| Creates an instance of Template Builder which will be unique to this system, the brand and user which calls the method. | 

### Return type

[**CreateWebSpoonDefaultResponse**](CreateWebSpoonDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWebSpoon

> AUTHChangePasswordDefaultResponse deleteWebSpoon(deleteWebSpoonRequest)

Removes a Template Builder instance

Removes a Template Builder instance

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.TemplateBuilderApi();
let deleteWebSpoonRequest = new JourneyAnalyticsApi.DeleteWebSpoonRequest(); // DeleteWebSpoonRequest | Removes a Template Builder instance
apiInstance.deleteWebSpoon(deleteWebSpoonRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteWebSpoonRequest** | [**DeleteWebSpoonRequest**](DeleteWebSpoonRequest.md)| Removes a Template Builder instance | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getWebSpoonAvailable

> AUTHChangePasswordDefaultResponse getWebSpoonAvailable()

Check to make sure Template Builder is available

Check to make sure Template Builder is available

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.TemplateBuilderApi();
apiInstance.getWebSpoonAvailable().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebSpoonLoginUrl

> GetDataSourceEngineUserNameDefaultResponse getWebSpoonLoginUrl(getWebSpoonLoginUrlRequest)

Get a URL valid for redirecting to the Template Builder instance; note, this will return nothing if the operational status is not \&quot;UP\&quot;

Get a URL valid for redirecting to the Template Builder instance; note, this will return nothing if the operational status is not \&quot;UP\&quot;

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.TemplateBuilderApi();
let getWebSpoonLoginUrlRequest = new JourneyAnalyticsApi.GetWebSpoonLoginUrlRequest(); // GetWebSpoonLoginUrlRequest | Get a URL valid for redirecting to the Template Builder instance; note, this will return nothing if the operational status is not \"UP\"
apiInstance.getWebSpoonLoginUrl(getWebSpoonLoginUrlRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getWebSpoonLoginUrlRequest** | [**GetWebSpoonLoginUrlRequest**](GetWebSpoonLoginUrlRequest.md)| Get a URL valid for redirecting to the Template Builder instance; note, this will return nothing if the operational status is not \&quot;UP\&quot; | 

### Return type

[**GetDataSourceEngineUserNameDefaultResponse**](GetDataSourceEngineUserNameDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listWebSpoon

> ListWebSpoonDefaultResponse listWebSpoon(listWebSpoonRequest)

Returns back the Template Builder instances which have been created for this system, brand and user (unique to that combination)

Returns back the Template Builder instances which have been created for this system, brand and user (unique to that combination)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.TemplateBuilderApi();
let listWebSpoonRequest = new JourneyAnalyticsApi.ListWebSpoonRequest(); // ListWebSpoonRequest | Returns back the Template Builder instances which have been created for this system, brand and user (unique to that combination)
apiInstance.listWebSpoon(listWebSpoonRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listWebSpoonRequest** | [**ListWebSpoonRequest**](ListWebSpoonRequest.md)| Returns back the Template Builder instances which have been created for this system, brand and user (unique to that combination) | 

### Return type

[**ListWebSpoonDefaultResponse**](ListWebSpoonDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

