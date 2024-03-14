# JourneyAnalyticsApi.AuthServerApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aUTHChangePassword**](AuthServerApi.md#aUTHChangePassword) | **POST** /AUTH_ChangePassword | Set a new password for tthe specified login
[**aUTHCreateLogin**](AuthServerApi.md#aUTHCreateLogin) | **POST** /AUTH_CreateLogin | Creates a login and associates it with the client
[**aUTHDisableLogin**](AuthServerApi.md#aUTHDisableLogin) | **POST** /AUTH_DisableLogin | Disable the specified login
[**aUTHEnableLogin**](AuthServerApi.md#aUTHEnableLogin) | **POST** /AUTH_EnableLogin | Enable the specified login
[**aUTHExpirePassword**](AuthServerApi.md#aUTHExpirePassword) | **POST** /AUTH_ExpirePassword | Expire the password for the specified login
[**aUTHGetClientLogins**](AuthServerApi.md#aUTHGetClientLogins) | **POST** /AUTH_GetClientLogins | Get a list of logins from the authentication system which are currently assigned to the token&#39;s client
[**aUTHGetLoginPasswordRules**](AuthServerApi.md#aUTHGetLoginPasswordRules) | **POST** /AUTH_GetLoginPasswordRules | Request the password policy rules from the authentication system
[**aUTHGetLogins**](AuthServerApi.md#aUTHGetLogins) | **POST** /AUTH_GetLogins | Get a list of logins from the authentication system which are currently assigned to the token&#39;s client and have no user associated with them
[**aUTHGetLoginsForUser**](AuthServerApi.md#aUTHGetLoginsForUser) | **POST** /AUTH_GetLoginsForUser | Returns back the login(s) associated with a particular userid and siteid
[**aUTHRenameLogin**](AuthServerApi.md#aUTHRenameLogin) | **POST** /AUTH_RenameLogin | Rename the specified login
[**aUTHSetLoginUserId**](AuthServerApi.md#aUTHSetLoginUserId) | **POST** /AUTH_SetLoginUserId | Associates an auth system login with a CM user ID
[**aUTHUpdateLogin**](AuthServerApi.md#aUTHUpdateLogin) | **POST** /AUTH_UpdateLogin | Updates the important components of a login, use expire, etc. to expire or delete a login



## aUTHChangePassword

> AUTHChangePasswordDefaultResponse aUTHChangePassword(aUTHChangePasswordRequest)

Set a new password for tthe specified login

Set a new password for tthe specified login

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.AuthServerApi();
let aUTHChangePasswordRequest = new JourneyAnalyticsApi.AUTHChangePasswordRequest(); // AUTHChangePasswordRequest | Set a new password for tthe specified login
apiInstance.aUTHChangePassword(aUTHChangePasswordRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aUTHChangePasswordRequest** | [**AUTHChangePasswordRequest**](AUTHChangePasswordRequest.md)| Set a new password for tthe specified login | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## aUTHCreateLogin

> AUTHCreateLoginDefaultResponse aUTHCreateLogin(aUTHCreateLoginRequest)

Creates a login and associates it with the client

Creates a login and associates it with the client

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.AuthServerApi();
let aUTHCreateLoginRequest = new JourneyAnalyticsApi.AUTHCreateLoginRequest(); // AUTHCreateLoginRequest | Creates a login and associates it with the client
apiInstance.aUTHCreateLogin(aUTHCreateLoginRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aUTHCreateLoginRequest** | [**AUTHCreateLoginRequest**](AUTHCreateLoginRequest.md)| Creates a login and associates it with the client | 

### Return type

[**AUTHCreateLoginDefaultResponse**](AUTHCreateLoginDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## aUTHDisableLogin

> AUTHChangePasswordDefaultResponse aUTHDisableLogin(aUTHDisableLoginRequest)

Disable the specified login

Disable the specified login

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.AuthServerApi();
let aUTHDisableLoginRequest = new JourneyAnalyticsApi.AUTHDisableLoginRequest(); // AUTHDisableLoginRequest | Disable the specified login
apiInstance.aUTHDisableLogin(aUTHDisableLoginRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aUTHDisableLoginRequest** | [**AUTHDisableLoginRequest**](AUTHDisableLoginRequest.md)| Disable the specified login | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## aUTHEnableLogin

> AUTHChangePasswordDefaultResponse aUTHEnableLogin(aUTHDisableLoginRequest)

Enable the specified login

Enable the specified login

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.AuthServerApi();
let aUTHDisableLoginRequest = new JourneyAnalyticsApi.AUTHDisableLoginRequest(); // AUTHDisableLoginRequest | Enable the specified login
apiInstance.aUTHEnableLogin(aUTHDisableLoginRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aUTHDisableLoginRequest** | [**AUTHDisableLoginRequest**](AUTHDisableLoginRequest.md)| Enable the specified login | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## aUTHExpirePassword

> AUTHChangePasswordDefaultResponse aUTHExpirePassword(aUTHDisableLoginRequest)

Expire the password for the specified login

Expire the password for the specified login

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.AuthServerApi();
let aUTHDisableLoginRequest = new JourneyAnalyticsApi.AUTHDisableLoginRequest(); // AUTHDisableLoginRequest | Expire the password for the specified login
apiInstance.aUTHExpirePassword(aUTHDisableLoginRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aUTHDisableLoginRequest** | [**AUTHDisableLoginRequest**](AUTHDisableLoginRequest.md)| Expire the password for the specified login | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## aUTHGetClientLogins

> AUTHGetClientLoginsDefaultResponse aUTHGetClientLogins(aUTHGetClientLoginsRequest)

Get a list of logins from the authentication system which are currently assigned to the token&#39;s client

Get a list of logins from the authentication system which are currently assigned to the token&#39;s client

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.AuthServerApi();
let aUTHGetClientLoginsRequest = new JourneyAnalyticsApi.AUTHGetClientLoginsRequest(); // AUTHGetClientLoginsRequest | Get a list of logins from the authentication system which are currently assigned to the token's client
apiInstance.aUTHGetClientLogins(aUTHGetClientLoginsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aUTHGetClientLoginsRequest** | [**AUTHGetClientLoginsRequest**](AUTHGetClientLoginsRequest.md)| Get a list of logins from the authentication system which are currently assigned to the token&#39;s client | 

### Return type

[**AUTHGetClientLoginsDefaultResponse**](AUTHGetClientLoginsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## aUTHGetLoginPasswordRules

> AUTHGetLoginPasswordRulesDefaultResponse aUTHGetLoginPasswordRules(aUTHGetLoginPasswordRulesRequest)

Request the password policy rules from the authentication system

Request the password policy rules from the authentication system

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.AuthServerApi();
let aUTHGetLoginPasswordRulesRequest = new JourneyAnalyticsApi.AUTHGetLoginPasswordRulesRequest(); // AUTHGetLoginPasswordRulesRequest | Request the password policy rules from the authentication system
apiInstance.aUTHGetLoginPasswordRules(aUTHGetLoginPasswordRulesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aUTHGetLoginPasswordRulesRequest** | [**AUTHGetLoginPasswordRulesRequest**](AUTHGetLoginPasswordRulesRequest.md)| Request the password policy rules from the authentication system | 

### Return type

[**AUTHGetLoginPasswordRulesDefaultResponse**](AUTHGetLoginPasswordRulesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## aUTHGetLogins

> AUTHGetClientLoginsDefaultResponse aUTHGetLogins(aUTHGetLoginsRequest)

Get a list of logins from the authentication system which are currently assigned to the token&#39;s client and have no user associated with them

Get a list of logins from the authentication system which are currently assigned to the token&#39;s client and have no user associated with them

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.AuthServerApi();
let aUTHGetLoginsRequest = new JourneyAnalyticsApi.AUTHGetLoginsRequest(); // AUTHGetLoginsRequest | Get a list of logins from the authentication system which are currently assigned to the token's client and have no user associated with them
apiInstance.aUTHGetLogins(aUTHGetLoginsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aUTHGetLoginsRequest** | [**AUTHGetLoginsRequest**](AUTHGetLoginsRequest.md)| Get a list of logins from the authentication system which are currently assigned to the token&#39;s client and have no user associated with them | 

### Return type

[**AUTHGetClientLoginsDefaultResponse**](AUTHGetClientLoginsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## aUTHGetLoginsForUser

> AUTHGetClientLoginsDefaultResponse aUTHGetLoginsForUser(aUTHGetLoginsForUserRequest)

Returns back the login(s) associated with a particular userid and siteid

Returns back the login(s) associated with a particular userid and siteid

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.AuthServerApi();
let aUTHGetLoginsForUserRequest = new JourneyAnalyticsApi.AUTHGetLoginsForUserRequest(); // AUTHGetLoginsForUserRequest | Returns back the login(s) associated with a particular userid and siteid
apiInstance.aUTHGetLoginsForUser(aUTHGetLoginsForUserRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aUTHGetLoginsForUserRequest** | [**AUTHGetLoginsForUserRequest**](AUTHGetLoginsForUserRequest.md)| Returns back the login(s) associated with a particular userid and siteid | 

### Return type

[**AUTHGetClientLoginsDefaultResponse**](AUTHGetClientLoginsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## aUTHRenameLogin

> AUTHChangePasswordDefaultResponse aUTHRenameLogin(aUTHRenameLoginRequest)

Rename the specified login

Rename the specified login

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.AuthServerApi();
let aUTHRenameLoginRequest = new JourneyAnalyticsApi.AUTHRenameLoginRequest(); // AUTHRenameLoginRequest | Rename the specified login
apiInstance.aUTHRenameLogin(aUTHRenameLoginRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aUTHRenameLoginRequest** | [**AUTHRenameLoginRequest**](AUTHRenameLoginRequest.md)| Rename the specified login | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## aUTHSetLoginUserId

> AUTHChangePasswordDefaultResponse aUTHSetLoginUserId(aUTHSetLoginUserIdRequest)

Associates an auth system login with a CM user ID

Associates an auth system login with a CM user ID

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.AuthServerApi();
let aUTHSetLoginUserIdRequest = new JourneyAnalyticsApi.AUTHSetLoginUserIdRequest(); // AUTHSetLoginUserIdRequest | Associates an auth system login with a CM user ID
apiInstance.aUTHSetLoginUserId(aUTHSetLoginUserIdRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aUTHSetLoginUserIdRequest** | [**AUTHSetLoginUserIdRequest**](AUTHSetLoginUserIdRequest.md)| Associates an auth system login with a CM user ID | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## aUTHUpdateLogin

> AUTHChangePasswordDefaultResponse aUTHUpdateLogin(aUTHUpdateLoginRequest)

Updates the important components of a login, use expire, etc. to expire or delete a login

Updates the important components of a login, use expire, etc. to expire or delete a login

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.AuthServerApi();
let aUTHUpdateLoginRequest = new JourneyAnalyticsApi.AUTHUpdateLoginRequest(); // AUTHUpdateLoginRequest | Updates the important components of a login, use expire, etc. to expire or delete a login
apiInstance.aUTHUpdateLogin(aUTHUpdateLoginRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aUTHUpdateLoginRequest** | [**AUTHUpdateLoginRequest**](AUTHUpdateLoginRequest.md)| Updates the important components of a login, use expire, etc. to expire or delete a login | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

