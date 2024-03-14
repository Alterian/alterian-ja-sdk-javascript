# JourneyAnalyticsApi.BrandApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addLoginImpersonation**](BrandApi.md#addLoginImpersonation) | **POST** /AddLoginImpersonation | Allow a login to use the impersonation feature of GetBrandToken
[**addUserToBrands**](BrandApi.md#addUserToBrands) | **POST** /AddUserToBrands | Replicates a user from the brand associated with the current token to all brands in BrandIds to which the token has access
[**getBrandToken**](BrandApi.md#getBrandToken) | **POST** /GetBrandToken | Returns back a token used to access the brand provided.
[**getBrands**](BrandApi.md#getBrands) | **POST** /GetBrands | Returns back a list of brands which this login can access
[**getLoginBrandDefault**](BrandApi.md#getLoginBrandDefault) | **POST** /GetLoginBrandDefault | Returns back the brand default for the specified login
[**getLoginUserMapping**](BrandApi.md#getLoginUserMapping) | **POST** /GetLoginUserMapping | Look in the system for a login\\user mapping which matches the search criteria.  Note, if you do not provide either the login id or user id, it will return back the mapping for the token&#39;s login
[**getTokenDetails**](BrandApi.md#getTokenDetails) | **POST** /GetTokenDetails | Request details about a token.
[**removeLoginBrandDefault**](BrandApi.md#removeLoginBrandDefault) | **POST** /RemoveLoginBrandDefault | Removes a login brand default
[**removeLoginImpersonation**](BrandApi.md#removeLoginImpersonation) | **POST** /RemoveLoginImpersonation | Stop allowing a login from using the impersonation feature of GetBrandToken
[**removeLoginUserMapping**](BrandApi.md#removeLoginUserMapping) | **POST** /RemoveLoginUserMapping | Remove a login\\user mapping
[**setLoginBrandDefault**](BrandApi.md#setLoginBrandDefault) | **POST** /SetLoginBrandDefault | Sets a login&#39;s brand to the default brand specified
[**setLoginUserMapping**](BrandApi.md#setLoginUserMapping) | **POST** /SetLoginUserMapping | Sets the login\\user mapping



## addLoginImpersonation

> AUTHChangePasswordDefaultResponse addLoginImpersonation(addLoginImpersonationRequest)

Allow a login to use the impersonation feature of GetBrandToken

Allow a login to use the impersonation feature of GetBrandToken

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.BrandApi();
let addLoginImpersonationRequest = new JourneyAnalyticsApi.AddLoginImpersonationRequest(); // AddLoginImpersonationRequest | Allow a login to use the impersonation feature of GetBrandToken
apiInstance.addLoginImpersonation(addLoginImpersonationRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addLoginImpersonationRequest** | [**AddLoginImpersonationRequest**](AddLoginImpersonationRequest.md)| Allow a login to use the impersonation feature of GetBrandToken | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addUserToBrands

> AUTHChangePasswordDefaultResponse addUserToBrands(addUserToBrandsRequest)

Replicates a user from the brand associated with the current token to all brands in BrandIds to which the token has access

Replicates a user from the brand associated with the current token to all brands in BrandIds to which the token has access

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.BrandApi();
let addUserToBrandsRequest = new JourneyAnalyticsApi.AddUserToBrandsRequest(); // AddUserToBrandsRequest | Replicates a user from the brand associated with the current token to all brands in BrandIds to which the token has access
apiInstance.addUserToBrands(addUserToBrandsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addUserToBrandsRequest** | [**AddUserToBrandsRequest**](AddUserToBrandsRequest.md)| Replicates a user from the brand associated with the current token to all brands in BrandIds to which the token has access | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getBrandToken

> AUTHCreateLoginDefaultResponse getBrandToken(getBrandTokenRequest)

Returns back a token used to access the brand provided.

Returns back a token used to access the brand provided.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.BrandApi();
let getBrandTokenRequest = new JourneyAnalyticsApi.GetBrandTokenRequest(); // GetBrandTokenRequest | Returns back a token used to access the brand provided.
apiInstance.getBrandToken(getBrandTokenRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getBrandTokenRequest** | [**GetBrandTokenRequest**](GetBrandTokenRequest.md)| Returns back a token used to access the brand provided. | 

### Return type

[**AUTHCreateLoginDefaultResponse**](AUTHCreateLoginDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getBrands

> GetBrandsDefaultResponse getBrands(getBrandsRequest)

Returns back a list of brands which this login can access

Returns back a list of brands which this login can access

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.BrandApi();
let getBrandsRequest = new JourneyAnalyticsApi.GetBrandsRequest(); // GetBrandsRequest | Returns back a list of brands which this login can access
apiInstance.getBrands(getBrandsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getBrandsRequest** | [**GetBrandsRequest**](GetBrandsRequest.md)| Returns back a list of brands which this login can access | 

### Return type

[**GetBrandsDefaultResponse**](GetBrandsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getLoginBrandDefault

> GetLoginBrandDefaultDefaultResponse getLoginBrandDefault(getLoginBrandDefaultRequest)

Returns back the brand default for the specified login

Returns back the brand default for the specified login

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.BrandApi();
let getLoginBrandDefaultRequest = new JourneyAnalyticsApi.GetLoginBrandDefaultRequest(); // GetLoginBrandDefaultRequest | Returns back the brand default for the specified login
apiInstance.getLoginBrandDefault(getLoginBrandDefaultRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getLoginBrandDefaultRequest** | [**GetLoginBrandDefaultRequest**](GetLoginBrandDefaultRequest.md)| Returns back the brand default for the specified login | 

### Return type

[**GetLoginBrandDefaultDefaultResponse**](GetLoginBrandDefaultDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getLoginUserMapping

> GetLoginUserMappingDefaultResponse getLoginUserMapping(getLoginUserMappingRequest)

Look in the system for a login\\user mapping which matches the search criteria.  Note, if you do not provide either the login id or user id, it will return back the mapping for the token&#39;s login

Look in the system for a login\\user mapping which matches the search criteria.  Note, if you do not provide either the login id or user id, it will return back the mapping for the token&#39;s login

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.BrandApi();
let getLoginUserMappingRequest = new JourneyAnalyticsApi.GetLoginUserMappingRequest(); // GetLoginUserMappingRequest | Look in the system for a login\\user mapping which matches the search criteria.  Note, if you do not provide either the login id or user id, it will return back the mapping for the token's login
apiInstance.getLoginUserMapping(getLoginUserMappingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getLoginUserMappingRequest** | [**GetLoginUserMappingRequest**](GetLoginUserMappingRequest.md)| Look in the system for a login\\user mapping which matches the search criteria.  Note, if you do not provide either the login id or user id, it will return back the mapping for the token&#39;s login | 

### Return type

[**GetLoginUserMappingDefaultResponse**](GetLoginUserMappingDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTokenDetails

> GetTokenDetailsDefaultResponse getTokenDetails()

Request details about a token.

Request details about a token.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.BrandApi();
apiInstance.getTokenDetails().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetTokenDetailsDefaultResponse**](GetTokenDetailsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeLoginBrandDefault

> AUTHChangePasswordDefaultResponse removeLoginBrandDefault(removeLoginBrandDefaultRequest)

Removes a login brand default

Removes a login brand default

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.BrandApi();
let removeLoginBrandDefaultRequest = new JourneyAnalyticsApi.RemoveLoginBrandDefaultRequest(); // RemoveLoginBrandDefaultRequest | Removes a login brand default
apiInstance.removeLoginBrandDefault(removeLoginBrandDefaultRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **removeLoginBrandDefaultRequest** | [**RemoveLoginBrandDefaultRequest**](RemoveLoginBrandDefaultRequest.md)| Removes a login brand default | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeLoginImpersonation

> AUTHChangePasswordDefaultResponse removeLoginImpersonation(removeLoginImpersonationRequest)

Stop allowing a login from using the impersonation feature of GetBrandToken

Stop allowing a login from using the impersonation feature of GetBrandToken

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.BrandApi();
let removeLoginImpersonationRequest = new JourneyAnalyticsApi.RemoveLoginImpersonationRequest(); // RemoveLoginImpersonationRequest | Stop allowing a login from using the impersonation feature of GetBrandToken
apiInstance.removeLoginImpersonation(removeLoginImpersonationRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **removeLoginImpersonationRequest** | [**RemoveLoginImpersonationRequest**](RemoveLoginImpersonationRequest.md)| Stop allowing a login from using the impersonation feature of GetBrandToken | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeLoginUserMapping

> AUTHChangePasswordDefaultResponse removeLoginUserMapping(removeLoginUserMappingRequest)

Remove a login\\user mapping

Remove a login\\user mapping

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.BrandApi();
let removeLoginUserMappingRequest = new JourneyAnalyticsApi.RemoveLoginUserMappingRequest(); // RemoveLoginUserMappingRequest | Remove a login\\user mapping
apiInstance.removeLoginUserMapping(removeLoginUserMappingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **removeLoginUserMappingRequest** | [**RemoveLoginUserMappingRequest**](RemoveLoginUserMappingRequest.md)| Remove a login\\user mapping | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setLoginBrandDefault

> AUTHChangePasswordDefaultResponse setLoginBrandDefault(setLoginBrandDefaultRequest)

Sets a login&#39;s brand to the default brand specified

Sets a login&#39;s brand to the default brand specified

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.BrandApi();
let setLoginBrandDefaultRequest = new JourneyAnalyticsApi.SetLoginBrandDefaultRequest(); // SetLoginBrandDefaultRequest | Sets a login's brand to the default brand specified
apiInstance.setLoginBrandDefault(setLoginBrandDefaultRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setLoginBrandDefaultRequest** | [**SetLoginBrandDefaultRequest**](SetLoginBrandDefaultRequest.md)| Sets a login&#39;s brand to the default brand specified | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setLoginUserMapping

> AUTHChangePasswordDefaultResponse setLoginUserMapping(setLoginUserMappingRequest)

Sets the login\\user mapping

Sets the login\\user mapping

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.BrandApi();
let setLoginUserMappingRequest = new JourneyAnalyticsApi.SetLoginUserMappingRequest(); // SetLoginUserMappingRequest | Sets the login\\user mapping
apiInstance.setLoginUserMapping(setLoginUserMappingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setLoginUserMappingRequest** | [**SetLoginUserMappingRequest**](SetLoginUserMappingRequest.md)| Sets the login\\user mapping | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

