# JourneyAnalyticsApi.UsersApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyUser**](UsersApi.md#copyUser) | **POST** /CopyUser | Copy a user
[**createUser**](UsersApi.md#createUser) | **POST** /CreateUser | Add a new user to the specified @see(ALClient)
[**deleteUser**](UsersApi.md#deleteUser) | **POST** /DeleteUser | Delete a user
[**deleteUserReassignAssets**](UsersApi.md#deleteUserReassignAssets) | **POST** /DeleteUserReassignAssets | Deletes a user and reassigns their documents, files and folders to another user
[**getCultures**](UsersApi.md#getCultures) | **POST** /GetCultures | Get a list of cultures [for use with the @see(ALUser) ]
[**getCurrentUser**](UsersApi.md#getCurrentUser) | **POST** /GetCurrentUser | Return back the current user [based upon their token]
[**getTimeZones**](UsersApi.md#getTimeZones) | **POST** /GetTimeZones | Get a list of the timezones [for use with the @see(ALUser) ]
[**getUser**](UsersApi.md#getUser) | **POST** /GetUser | Given a UserID, get the rest of the details for that user.
[**getUsers**](UsersApi.md#getUsers) | **POST** /GetUsers | List the users within the current @see(ALClient), optionally filtering the set returned.
[**getUsersForClient**](UsersApi.md#getUsersForClient) | **POST** /GetUsersForClient | List the users within the specified client, optionally filtering the set returned.
[**updateUser**](UsersApi.md#updateUser) | **POST** /UpdateUser | Given an existing @see(ALUser) object save it to the database             Note that the object will normally have been retrieved by @see(GetUser), and that only fields which are set will be updated in the database



## copyUser

> CreateClientDefaultResponse copyUser(copyUserRequest)

Copy a user

Copy a user

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.UsersApi();
let copyUserRequest = new JourneyAnalyticsApi.CopyUserRequest(); // CopyUserRequest | Copy a user
apiInstance.copyUser(copyUserRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **copyUserRequest** | [**CopyUserRequest**](CopyUserRequest.md)| Copy a user | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createUser

> CreateClientDefaultResponse createUser(createUserRequest)

Add a new user to the specified @see(ALClient)

Add a new user to the specified @see(ALClient)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.UsersApi();
let createUserRequest = new JourneyAnalyticsApi.CreateUserRequest(); // CreateUserRequest | Add a new user to the specified @see(ALClient)
apiInstance.createUser(createUserRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUserRequest** | [**CreateUserRequest**](CreateUserRequest.md)| Add a new user to the specified @see(ALClient) | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUser

> AUTHChangePasswordDefaultResponse deleteUser(deleteUserRequest)

Delete a user

Delete a user

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.UsersApi();
let deleteUserRequest = new JourneyAnalyticsApi.DeleteUserRequest(); // DeleteUserRequest | Delete a user
apiInstance.deleteUser(deleteUserRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteUserRequest** | [**DeleteUserRequest**](DeleteUserRequest.md)| Delete a user | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUserReassignAssets

> AUTHChangePasswordDefaultResponse deleteUserReassignAssets(deleteUserReassignAssetsRequest)

Deletes a user and reassigns their documents, files and folders to another user

Deletes a user and reassigns their documents, files and folders to another user

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.UsersApi();
let deleteUserReassignAssetsRequest = new JourneyAnalyticsApi.DeleteUserReassignAssetsRequest(); // DeleteUserReassignAssetsRequest | Deletes a user and reassigns their documents, files and folders to another user
apiInstance.deleteUserReassignAssets(deleteUserReassignAssetsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteUserReassignAssetsRequest** | [**DeleteUserReassignAssetsRequest**](DeleteUserReassignAssetsRequest.md)| Deletes a user and reassigns their documents, files and folders to another user | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCultures

> GetCulturesDefaultResponse getCultures(getClientSetsRequest)

Get a list of cultures [for use with the @see(ALUser) ]

Get a list of cultures [for use with the @see(ALUser) ]

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.UsersApi();
let getClientSetsRequest = new JourneyAnalyticsApi.GetClientSetsRequest(); // GetClientSetsRequest | Get a list of cultures [for use with the @see(ALUser) ]
apiInstance.getCultures(getClientSetsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getClientSetsRequest** | [**GetClientSetsRequest**](GetClientSetsRequest.md)| Get a list of cultures [for use with the @see(ALUser) ] | 

### Return type

[**GetCulturesDefaultResponse**](GetCulturesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCurrentUser

> GetCurrentUserDefaultResponse getCurrentUser(getCurrentUserRequest)

Return back the current user [based upon their token]

Return back the current user [based upon their token]

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.UsersApi();
let getCurrentUserRequest = new JourneyAnalyticsApi.GetCurrentUserRequest(); // GetCurrentUserRequest | Return back the current user [based upon their token]
apiInstance.getCurrentUser(getCurrentUserRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getCurrentUserRequest** | [**GetCurrentUserRequest**](GetCurrentUserRequest.md)| Return back the current user [based upon their token] | 

### Return type

[**GetCurrentUserDefaultResponse**](GetCurrentUserDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTimeZones

> GetTimeZonesDefaultResponse getTimeZones(getClientSetsRequest)

Get a list of the timezones [for use with the @see(ALUser) ]

Get a list of the timezones [for use with the @see(ALUser) ]

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.UsersApi();
let getClientSetsRequest = new JourneyAnalyticsApi.GetClientSetsRequest(); // GetClientSetsRequest | Get a list of the timezones [for use with the @see(ALUser) ]
apiInstance.getTimeZones(getClientSetsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getClientSetsRequest** | [**GetClientSetsRequest**](GetClientSetsRequest.md)| Get a list of the timezones [for use with the @see(ALUser) ] | 

### Return type

[**GetTimeZonesDefaultResponse**](GetTimeZonesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getUser

> GetCurrentUserDefaultResponse getUser(getUserRequest)

Given a UserID, get the rest of the details for that user.

Given a UserID, get the rest of the details for that user.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.UsersApi();
let getUserRequest = new JourneyAnalyticsApi.GetUserRequest(); // GetUserRequest | Given a UserID, get the rest of the details for that user.
apiInstance.getUser(getUserRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getUserRequest** | [**GetUserRequest**](GetUserRequest.md)| Given a UserID, get the rest of the details for that user. | 

### Return type

[**GetCurrentUserDefaultResponse**](GetCurrentUserDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getUsers

> GetUsersDefaultResponse getUsers(getUsersRequest)

List the users within the current @see(ALClient), optionally filtering the set returned.

List the users within the current @see(ALClient), optionally filtering the set returned.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.UsersApi();
let getUsersRequest = new JourneyAnalyticsApi.GetUsersRequest(); // GetUsersRequest | List the users within the current @see(ALClient), optionally filtering the set returned.
apiInstance.getUsers(getUsersRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getUsersRequest** | [**GetUsersRequest**](GetUsersRequest.md)| List the users within the current @see(ALClient), optionally filtering the set returned. | 

### Return type

[**GetUsersDefaultResponse**](GetUsersDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getUsersForClient

> GetUsersDefaultResponse getUsersForClient(getUsersForClientRequest)

List the users within the specified client, optionally filtering the set returned.

List the users within the specified client, optionally filtering the set returned.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.UsersApi();
let getUsersForClientRequest = new JourneyAnalyticsApi.GetUsersForClientRequest(); // GetUsersForClientRequest | List the users within the specified client, optionally filtering the set returned.
apiInstance.getUsersForClient(getUsersForClientRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getUsersForClientRequest** | [**GetUsersForClientRequest**](GetUsersForClientRequest.md)| List the users within the specified client, optionally filtering the set returned. | 

### Return type

[**GetUsersDefaultResponse**](GetUsersDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUser

> AUTHChangePasswordDefaultResponse updateUser(createUserRequest)

Given an existing @see(ALUser) object save it to the database             Note that the object will normally have been retrieved by @see(GetUser), and that only fields which are set will be updated in the database

Given an existing @see(ALUser) object save it to the database             Note that the object will normally have been retrieved by @see(GetUser), and that only fields which are set will be updated in the database

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.UsersApi();
let createUserRequest = new JourneyAnalyticsApi.CreateUserRequest(); // CreateUserRequest | Given an existing @see(ALUser) object save it to the database             Note that the object will normally have been retrieved by @see(GetUser), and that only fields which are set will be updated in the database
apiInstance.updateUser(createUserRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUserRequest** | [**CreateUserRequest**](CreateUserRequest.md)| Given an existing @see(ALUser) object save it to the database             Note that the object will normally have been retrieved by @see(GetUser), and that only fields which are set will be updated in the database | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

