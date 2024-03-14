# JourneyAnalyticsApi.TokenApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createImpersonationToken**](TokenApi.md#createImpersonationToken) | **POST** /CreateImpersonationToken | Using an SA token, create an impersonation token for the specific client and, optionally, user
[**createStaticToken**](TokenApi.md#createStaticToken) | **POST** /CreateStaticToken | Create a static token for API usage
[**deleteStaticToken**](TokenApi.md#deleteStaticToken) | **POST** /DeleteStaticToken | Remove a static token.  Any automation or other application which is using this token will cease to function.
[**getTokens**](TokenApi.md#getTokens) | **POST** /GetTokens | Request a list of tokens.
[**updateStaticToken**](TokenApi.md#updateStaticToken) | **POST** /UpdateStaticToken | Change the UserID mapping for a static token



## createImpersonationToken

> AUTHCreateLoginDefaultResponse createImpersonationToken(createImpersonationTokenRequest)

Using an SA token, create an impersonation token for the specific client and, optionally, user

Using an SA token, create an impersonation token for the specific client and, optionally, user

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.TokenApi();
let createImpersonationTokenRequest = new JourneyAnalyticsApi.CreateImpersonationTokenRequest(); // CreateImpersonationTokenRequest | Using an SA token, create an impersonation token for the specific client and, optionally, user
apiInstance.createImpersonationToken(createImpersonationTokenRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createImpersonationTokenRequest** | [**CreateImpersonationTokenRequest**](CreateImpersonationTokenRequest.md)| Using an SA token, create an impersonation token for the specific client and, optionally, user | 

### Return type

[**AUTHCreateLoginDefaultResponse**](AUTHCreateLoginDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createStaticToken

> AUTHCreateLoginDefaultResponse createStaticToken(createStaticTokenRequest)

Create a static token for API usage

Create a static token for API usage

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.TokenApi();
let createStaticTokenRequest = new JourneyAnalyticsApi.CreateStaticTokenRequest(); // CreateStaticTokenRequest | Create a static token for API usage
apiInstance.createStaticToken(createStaticTokenRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createStaticTokenRequest** | [**CreateStaticTokenRequest**](CreateStaticTokenRequest.md)| Create a static token for API usage | 

### Return type

[**AUTHCreateLoginDefaultResponse**](AUTHCreateLoginDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteStaticToken

> AUTHChangePasswordDefaultResponse deleteStaticToken(deleteStaticTokenRequest)

Remove a static token.  Any automation or other application which is using this token will cease to function.

Remove a static token.  Any automation or other application which is using this token will cease to function.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.TokenApi();
let deleteStaticTokenRequest = new JourneyAnalyticsApi.DeleteStaticTokenRequest(); // DeleteStaticTokenRequest | Remove a static token.  Any automation or other application which is using this token will cease to function.
apiInstance.deleteStaticToken(deleteStaticTokenRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteStaticTokenRequest** | [**DeleteStaticTokenRequest**](DeleteStaticTokenRequest.md)| Remove a static token.  Any automation or other application which is using this token will cease to function. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTokens

> GetTokensDefaultResponse getTokens(getTokensRequest)

Request a list of tokens.

Request a list of tokens.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.TokenApi();
let getTokensRequest = new JourneyAnalyticsApi.GetTokensRequest(); // GetTokensRequest | Request a list of tokens.
apiInstance.getTokens(getTokensRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getTokensRequest** | [**GetTokensRequest**](GetTokensRequest.md)| Request a list of tokens. | 

### Return type

[**GetTokensDefaultResponse**](GetTokensDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateStaticToken

> AUTHChangePasswordDefaultResponse updateStaticToken(updateStaticTokenRequest)

Change the UserID mapping for a static token

Change the UserID mapping for a static token

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.TokenApi();
let updateStaticTokenRequest = new JourneyAnalyticsApi.UpdateStaticTokenRequest(); // UpdateStaticTokenRequest | Change the UserID mapping for a static token
apiInstance.updateStaticToken(updateStaticTokenRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateStaticTokenRequest** | [**UpdateStaticTokenRequest**](UpdateStaticTokenRequest.md)| Change the UserID mapping for a static token | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

