# JourneyAnalyticsApi.EMProxyApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eMAbortDeployment**](EMProxyApi.md#eMAbortDeployment) | **POST** /EM_AbortDeployment | Proxy call to EM UserManager.asmx to abort a deployment
[**eMAuthenticate**](EMProxyApi.md#eMAuthenticate) | **POST** /EM_Authenticate | Proxy call to EM Authenticate.asmx             public string AuthenticateEx(string Login, string Password, string NewPassword, bool BumpExisting, DateTime LocalTime, DMPasswordFormat PasswordFormat)
[**eMDeleteList**](EMProxyApi.md#eMDeleteList) | **POST** /EM_DeleteList | Deletes a list
[**eMGetClientGroupUsers**](EMProxyApi.md#eMGetClientGroupUsers) | **POST** /EM_GetClientGroupUsers | Proxy call to EM UserManager.asmx             public DMUserCollection GetClientGroupUsers(string Token, DMClient Client, int GroupID)
[**eMGetClientGroups**](EMProxyApi.md#eMGetClientGroups) | **POST** /EM_GetClientGroups | Proxy call to the EM UserManager.asmx              DMGroupCollection GetClientGroups(string Token, DMClient Client, out DMNestedGroupCollection Nested)
[**eMGetClientInfo**](EMProxyApi.md#eMGetClientInfo) | **POST** /EM_GetClientInfo | Proxy call to EM Authenticate.asmx             public void GetClientInfo(string Token, out int ID, out string Name, out string ContentURL, out string Icon)
[**eMGetClientSets**](EMProxyApi.md#eMGetClientSets) | **POST** /EM_GetClientSets | Proxy call to EM ClientManager.asmx             public DMClientSetCollection GetClientSets(string Token)
[**eMGetCreative**](EMProxyApi.md#eMGetCreative) | **POST** /EM_GetCreative | Proxy call to get EM creative
[**eMGetCreativeFields**](EMProxyApi.md#eMGetCreativeFields) | **POST** /EM_GetCreativeFields | Proxy call to get EM creative fields
[**eMGetCreatives**](EMProxyApi.md#eMGetCreatives) | **POST** /EM_GetCreatives | Proxy call to get EM creatives
[**eMGetEMServiceURL**](EMProxyApi.md#eMGetEMServiceURL) | **POST** /EM_GetEMServiceURL | Returns back the EM Service URL for the siteID requested.
[**eMGetEmailValidationExpression**](EMProxyApi.md#eMGetEmailValidationExpression) | **POST** /EM_GetEmailValidationExpression | Return the regular expression string used to validate an email address. This is the same expression used by Email Manager.
[**eMGetFoldersLazy**](EMProxyApi.md#eMGetFoldersLazy) | **POST** /EM_GetFoldersLazy | Returns an object containing the list of folders in the specified folder, together with a string representation of the folder hierarchy.
[**eMGetInboundAddresses**](EMProxyApi.md#eMGetInboundAddresses) | **POST** /EM_GetInboundAddresses | Proxy call to get inbound addresses
[**eMGetTemplateContent**](EMProxyApi.md#eMGetTemplateContent) | **POST** /EM_GetTemplateContent | Proxy call to get EM template content
[**eMGetUsers**](EMProxyApi.md#eMGetUsers) | **POST** /EM_GetUsers | Proxy call to EM UserManager.asmx             public List(DMUser) GetUsers(string Token) Can use with existing EMToken or supply mapping Id for auto-login
[**eMIsSysAdmin**](EMProxyApi.md#eMIsSysAdmin) | **POST** /EM_IsSysAdmin | Proxy call to EM Authenticate.asmx             public bool IsSysAdmin(string Token)
[**eMLogOff**](EMProxyApi.md#eMLogOff) | **POST** /EM_LogOff | Proxy call to EM Authenticate.asmx             public void Logout(string Token)             Logs the user associated with the token provided out of the system.
[**eMPauseDeployment**](EMProxyApi.md#eMPauseDeployment) | **POST** /EM_PauseDeployment | Proxy call to EM UserManager.asmx to pause a deployment
[**eMPrimaryKeys**](EMProxyApi.md#eMPrimaryKeys) | **POST** /EM_PrimaryKeys | Returns back the primary keys for a specific EM client
[**eMSetEMServiceURL**](EMProxyApi.md#eMSetEMServiceURL) | **POST** /EM_SetEMServiceURL | Sets the URL used to connect to the EM instance
[**eMTestEMServiceURL**](EMProxyApi.md#eMTestEMServiceURL) | **POST** /EM_TestEMServiceURL | Tests the EM Service URL



## eMAbortDeployment

> AUTHChangePasswordDefaultResponse eMAbortDeployment(eMAbortDeploymentRequest)

Proxy call to EM UserManager.asmx to abort a deployment

Proxy call to EM UserManager.asmx to abort a deployment

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMAbortDeploymentRequest = new JourneyAnalyticsApi.EMAbortDeploymentRequest(); // EMAbortDeploymentRequest | Proxy call to EM UserManager.asmx to abort a deployment
apiInstance.eMAbortDeployment(eMAbortDeploymentRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMAbortDeploymentRequest** | [**EMAbortDeploymentRequest**](EMAbortDeploymentRequest.md)| Proxy call to EM UserManager.asmx to abort a deployment | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMAuthenticate

> GetDataSourceEngineUserNameDefaultResponse eMAuthenticate(eMAuthenticateRequest)

Proxy call to EM Authenticate.asmx             public string AuthenticateEx(string Login, string Password, string NewPassword, bool BumpExisting, DateTime LocalTime, DMPasswordFormat PasswordFormat)

Proxy call to EM Authenticate.asmx             public string AuthenticateEx(string Login, string Password, string NewPassword, bool BumpExisting, DateTime LocalTime, DMPasswordFormat PasswordFormat)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMAuthenticateRequest = new JourneyAnalyticsApi.EMAuthenticateRequest(); // EMAuthenticateRequest | Proxy call to EM Authenticate.asmx             public string AuthenticateEx(string Login, string Password, string NewPassword, bool BumpExisting, DateTime LocalTime, DMPasswordFormat PasswordFormat)
apiInstance.eMAuthenticate(eMAuthenticateRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMAuthenticateRequest** | [**EMAuthenticateRequest**](EMAuthenticateRequest.md)| Proxy call to EM Authenticate.asmx             public string AuthenticateEx(string Login, string Password, string NewPassword, bool BumpExisting, DateTime LocalTime, DMPasswordFormat PasswordFormat) | 

### Return type

[**GetDataSourceEngineUserNameDefaultResponse**](GetDataSourceEngineUserNameDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMDeleteList

> AUTHChangePasswordDefaultResponse eMDeleteList(eMDeleteListRequest)

Deletes a list

Deletes a list

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMDeleteListRequest = new JourneyAnalyticsApi.EMDeleteListRequest(); // EMDeleteListRequest | Deletes a list
apiInstance.eMDeleteList(eMDeleteListRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMDeleteListRequest** | [**EMDeleteListRequest**](EMDeleteListRequest.md)| Deletes a list | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMGetClientGroupUsers

> EMGetClientGroupUsersDefaultResponse eMGetClientGroupUsers(eMGetClientGroupUsersRequest)

Proxy call to EM UserManager.asmx             public DMUserCollection GetClientGroupUsers(string Token, DMClient Client, int GroupID)

Proxy call to EM UserManager.asmx             public DMUserCollection GetClientGroupUsers(string Token, DMClient Client, int GroupID)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMGetClientGroupUsersRequest = new JourneyAnalyticsApi.EMGetClientGroupUsersRequest(); // EMGetClientGroupUsersRequest | Proxy call to EM UserManager.asmx             public DMUserCollection GetClientGroupUsers(string Token, DMClient Client, int GroupID)
apiInstance.eMGetClientGroupUsers(eMGetClientGroupUsersRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMGetClientGroupUsersRequest** | [**EMGetClientGroupUsersRequest**](EMGetClientGroupUsersRequest.md)| Proxy call to EM UserManager.asmx             public DMUserCollection GetClientGroupUsers(string Token, DMClient Client, int GroupID) | 

### Return type

[**EMGetClientGroupUsersDefaultResponse**](EMGetClientGroupUsersDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMGetClientGroups

> EMGetClientGroupsDefaultResponse eMGetClientGroups(eMGetClientGroupsRequest)

Proxy call to the EM UserManager.asmx              DMGroupCollection GetClientGroups(string Token, DMClient Client, out DMNestedGroupCollection Nested)

Proxy call to the EM UserManager.asmx              DMGroupCollection GetClientGroups(string Token, DMClient Client, out DMNestedGroupCollection Nested)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMGetClientGroupsRequest = new JourneyAnalyticsApi.EMGetClientGroupsRequest(); // EMGetClientGroupsRequest | Proxy call to the EM UserManager.asmx              DMGroupCollection GetClientGroups(string Token, DMClient Client, out DMNestedGroupCollection Nested)
apiInstance.eMGetClientGroups(eMGetClientGroupsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMGetClientGroupsRequest** | [**EMGetClientGroupsRequest**](EMGetClientGroupsRequest.md)| Proxy call to the EM UserManager.asmx              DMGroupCollection GetClientGroups(string Token, DMClient Client, out DMNestedGroupCollection Nested) | 

### Return type

[**EMGetClientGroupsDefaultResponse**](EMGetClientGroupsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMGetClientInfo

> EMGetClientInfoDefaultResponse eMGetClientInfo(eMGetClientInfoRequest)

Proxy call to EM Authenticate.asmx             public void GetClientInfo(string Token, out int ID, out string Name, out string ContentURL, out string Icon)

Proxy call to EM Authenticate.asmx             public void GetClientInfo(string Token, out int ID, out string Name, out string ContentURL, out string Icon)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMGetClientInfoRequest = new JourneyAnalyticsApi.EMGetClientInfoRequest(); // EMGetClientInfoRequest | Proxy call to EM Authenticate.asmx             public void GetClientInfo(string Token, out int ID, out string Name, out string ContentURL, out string Icon)
apiInstance.eMGetClientInfo(eMGetClientInfoRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMGetClientInfoRequest** | [**EMGetClientInfoRequest**](EMGetClientInfoRequest.md)| Proxy call to EM Authenticate.asmx             public void GetClientInfo(string Token, out int ID, out string Name, out string ContentURL, out string Icon) | 

### Return type

[**EMGetClientInfoDefaultResponse**](EMGetClientInfoDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMGetClientSets

> EMGetClientSetsDefaultResponse eMGetClientSets(eMGetClientSetsRequest)

Proxy call to EM ClientManager.asmx             public DMClientSetCollection GetClientSets(string Token)

Proxy call to EM ClientManager.asmx             public DMClientSetCollection GetClientSets(string Token)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMGetClientSetsRequest = new JourneyAnalyticsApi.EMGetClientSetsRequest(); // EMGetClientSetsRequest | Proxy call to EM ClientManager.asmx             public DMClientSetCollection GetClientSets(string Token)
apiInstance.eMGetClientSets(eMGetClientSetsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMGetClientSetsRequest** | [**EMGetClientSetsRequest**](EMGetClientSetsRequest.md)| Proxy call to EM ClientManager.asmx             public DMClientSetCollection GetClientSets(string Token) | 

### Return type

[**EMGetClientSetsDefaultResponse**](EMGetClientSetsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMGetCreative

> EMGetCreativeDefaultResponse eMGetCreative(eMGetCreativeRequest)

Proxy call to get EM creative

Proxy call to get EM creative

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMGetCreativeRequest = new JourneyAnalyticsApi.EMGetCreativeRequest(); // EMGetCreativeRequest | Proxy call to get EM creative
apiInstance.eMGetCreative(eMGetCreativeRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMGetCreativeRequest** | [**EMGetCreativeRequest**](EMGetCreativeRequest.md)| Proxy call to get EM creative | 

### Return type

[**EMGetCreativeDefaultResponse**](EMGetCreativeDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMGetCreativeFields

> EMGetCreativeFieldsDefaultResponse eMGetCreativeFields(eMGetCreativeRequest)

Proxy call to get EM creative fields

Proxy call to get EM creative fields

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMGetCreativeRequest = new JourneyAnalyticsApi.EMGetCreativeRequest(); // EMGetCreativeRequest | Proxy call to get EM creative fields
apiInstance.eMGetCreativeFields(eMGetCreativeRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMGetCreativeRequest** | [**EMGetCreativeRequest**](EMGetCreativeRequest.md)| Proxy call to get EM creative fields | 

### Return type

[**EMGetCreativeFieldsDefaultResponse**](EMGetCreativeFieldsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMGetCreatives

> EMGetCreativesDefaultResponse eMGetCreatives(eMGetCreativesRequest)

Proxy call to get EM creatives

Proxy call to get EM creatives

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMGetCreativesRequest = new JourneyAnalyticsApi.EMGetCreativesRequest(); // EMGetCreativesRequest | Proxy call to get EM creatives
apiInstance.eMGetCreatives(eMGetCreativesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMGetCreativesRequest** | [**EMGetCreativesRequest**](EMGetCreativesRequest.md)| Proxy call to get EM creatives | 

### Return type

[**EMGetCreativesDefaultResponse**](EMGetCreativesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMGetEMServiceURL

> GetDataSourceEngineUserNameDefaultResponse eMGetEMServiceURL(eMGetEMServiceURLRequest)

Returns back the EM Service URL for the siteID requested.

Returns back the EM Service URL for the siteID requested.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMGetEMServiceURLRequest = new JourneyAnalyticsApi.EMGetEMServiceURLRequest(); // EMGetEMServiceURLRequest | Returns back the EM Service URL for the siteID requested.
apiInstance.eMGetEMServiceURL(eMGetEMServiceURLRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMGetEMServiceURLRequest** | [**EMGetEMServiceURLRequest**](EMGetEMServiceURLRequest.md)| Returns back the EM Service URL for the siteID requested. | 

### Return type

[**GetDataSourceEngineUserNameDefaultResponse**](GetDataSourceEngineUserNameDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMGetEmailValidationExpression

> GetDataSourceEngineUserNameDefaultResponse eMGetEmailValidationExpression()

Return the regular expression string used to validate an email address. This is the same expression used by Email Manager.

Return the regular expression string used to validate an email address. This is the same expression used by Email Manager.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
apiInstance.eMGetEmailValidationExpression().then((data) => {
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


## eMGetFoldersLazy

> EMGetFoldersLazyDefaultResponse eMGetFoldersLazy(eMGetFoldersLazyRequest)

Returns an object containing the list of folders in the specified folder, together with a string representation of the folder hierarchy.

Returns an object containing the list of folders in the specified folder, together with a string representation of the folder hierarchy.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMGetFoldersLazyRequest = new JourneyAnalyticsApi.EMGetFoldersLazyRequest(); // EMGetFoldersLazyRequest | Returns an object containing the list of folders in the specified folder, together with a string representation of the folder hierarchy.
apiInstance.eMGetFoldersLazy(eMGetFoldersLazyRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMGetFoldersLazyRequest** | [**EMGetFoldersLazyRequest**](EMGetFoldersLazyRequest.md)| Returns an object containing the list of folders in the specified folder, together with a string representation of the folder hierarchy. | 

### Return type

[**EMGetFoldersLazyDefaultResponse**](EMGetFoldersLazyDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMGetInboundAddresses

> EMGetInboundAddressesDefaultResponse eMGetInboundAddresses(eMGetInboundAddressesRequest)

Proxy call to get inbound addresses

Proxy call to get inbound addresses

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMGetInboundAddressesRequest = new JourneyAnalyticsApi.EMGetInboundAddressesRequest(); // EMGetInboundAddressesRequest | Proxy call to get inbound addresses
apiInstance.eMGetInboundAddresses(eMGetInboundAddressesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMGetInboundAddressesRequest** | [**EMGetInboundAddressesRequest**](EMGetInboundAddressesRequest.md)| Proxy call to get inbound addresses | 

### Return type

[**EMGetInboundAddressesDefaultResponse**](EMGetInboundAddressesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMGetTemplateContent

> GetDataSourceEngineUserNameDefaultResponse eMGetTemplateContent(eMGetTemplateContentRequest)

Proxy call to get EM template content

Proxy call to get EM template content

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMGetTemplateContentRequest = new JourneyAnalyticsApi.EMGetTemplateContentRequest(); // EMGetTemplateContentRequest | Proxy call to get EM template content
apiInstance.eMGetTemplateContent(eMGetTemplateContentRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMGetTemplateContentRequest** | [**EMGetTemplateContentRequest**](EMGetTemplateContentRequest.md)| Proxy call to get EM template content | 

### Return type

[**GetDataSourceEngineUserNameDefaultResponse**](GetDataSourceEngineUserNameDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMGetUsers

> EMGetClientGroupUsersDefaultResponse eMGetUsers(eMGetUsersRequest)

Proxy call to EM UserManager.asmx             public List(DMUser) GetUsers(string Token) Can use with existing EMToken or supply mapping Id for auto-login

Proxy call to EM UserManager.asmx             public List(DMUser) GetUsers(string Token) Can use with existing EMToken or supply mapping Id for auto-login

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMGetUsersRequest = new JourneyAnalyticsApi.EMGetUsersRequest(); // EMGetUsersRequest | Proxy call to EM UserManager.asmx             public List(DMUser) GetUsers(string Token) Can use with existing EMToken or supply mapping Id for auto-login
apiInstance.eMGetUsers(eMGetUsersRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMGetUsersRequest** | [**EMGetUsersRequest**](EMGetUsersRequest.md)| Proxy call to EM UserManager.asmx             public List(DMUser) GetUsers(string Token) Can use with existing EMToken or supply mapping Id for auto-login | 

### Return type

[**EMGetClientGroupUsersDefaultResponse**](EMGetClientGroupUsersDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMIsSysAdmin

> AUTHChangePasswordDefaultResponse eMIsSysAdmin(eMGetClientInfoRequest)

Proxy call to EM Authenticate.asmx             public bool IsSysAdmin(string Token)

Proxy call to EM Authenticate.asmx             public bool IsSysAdmin(string Token)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMGetClientInfoRequest = new JourneyAnalyticsApi.EMGetClientInfoRequest(); // EMGetClientInfoRequest | Proxy call to EM Authenticate.asmx             public bool IsSysAdmin(string Token)
apiInstance.eMIsSysAdmin(eMGetClientInfoRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMGetClientInfoRequest** | [**EMGetClientInfoRequest**](EMGetClientInfoRequest.md)| Proxy call to EM Authenticate.asmx             public bool IsSysAdmin(string Token) | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMLogOff

> AUTHChangePasswordDefaultResponse eMLogOff(eMLogOffRequest)

Proxy call to EM Authenticate.asmx             public void Logout(string Token)             Logs the user associated with the token provided out of the system.

Proxy call to EM Authenticate.asmx             public void Logout(string Token)             Logs the user associated with the token provided out of the system.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMLogOffRequest = new JourneyAnalyticsApi.EMLogOffRequest(); // EMLogOffRequest | Proxy call to EM Authenticate.asmx             public void Logout(string Token)             Logs the user associated with the token provided out of the system.
apiInstance.eMLogOff(eMLogOffRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMLogOffRequest** | [**EMLogOffRequest**](EMLogOffRequest.md)| Proxy call to EM Authenticate.asmx             public void Logout(string Token)             Logs the user associated with the token provided out of the system. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMPauseDeployment

> AUTHChangePasswordDefaultResponse eMPauseDeployment(eMPauseDeploymentRequest)

Proxy call to EM UserManager.asmx to pause a deployment

Proxy call to EM UserManager.asmx to pause a deployment

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMPauseDeploymentRequest = new JourneyAnalyticsApi.EMPauseDeploymentRequest(); // EMPauseDeploymentRequest | Proxy call to EM UserManager.asmx to pause a deployment
apiInstance.eMPauseDeployment(eMPauseDeploymentRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMPauseDeploymentRequest** | [**EMPauseDeploymentRequest**](EMPauseDeploymentRequest.md)| Proxy call to EM UserManager.asmx to pause a deployment | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMPrimaryKeys

> EMPrimaryKeysDefaultResponse eMPrimaryKeys(eMPrimaryKeysRequest)

Returns back the primary keys for a specific EM client

Returns back the primary keys for a specific EM client

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMPrimaryKeysRequest = new JourneyAnalyticsApi.EMPrimaryKeysRequest(); // EMPrimaryKeysRequest | Returns back the primary keys for a specific EM client
apiInstance.eMPrimaryKeys(eMPrimaryKeysRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMPrimaryKeysRequest** | [**EMPrimaryKeysRequest**](EMPrimaryKeysRequest.md)| Returns back the primary keys for a specific EM client | 

### Return type

[**EMPrimaryKeysDefaultResponse**](EMPrimaryKeysDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMSetEMServiceURL

> AUTHChangePasswordDefaultResponse eMSetEMServiceURL(eMSetEMServiceURLRequest)

Sets the URL used to connect to the EM instance

Sets the URL used to connect to the EM instance

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMSetEMServiceURLRequest = new JourneyAnalyticsApi.EMSetEMServiceURLRequest(); // EMSetEMServiceURLRequest | Sets the URL used to connect to the EM instance
apiInstance.eMSetEMServiceURL(eMSetEMServiceURLRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMSetEMServiceURLRequest** | [**EMSetEMServiceURLRequest**](EMSetEMServiceURLRequest.md)| Sets the URL used to connect to the EM instance | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eMTestEMServiceURL

> AUTHChangePasswordDefaultResponse eMTestEMServiceURL(eMTestEMServiceURLRequest)

Tests the EM Service URL

Tests the EM Service URL

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EMProxyApi();
let eMTestEMServiceURLRequest = new JourneyAnalyticsApi.EMTestEMServiceURLRequest(); // EMTestEMServiceURLRequest | Tests the EM Service URL
apiInstance.eMTestEMServiceURL(eMTestEMServiceURLRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eMTestEMServiceURLRequest** | [**EMTestEMServiceURLRequest**](EMTestEMServiceURLRequest.md)| Tests the EM Service URL | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

