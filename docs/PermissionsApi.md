# JourneyAnalyticsApi.PermissionsApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clearPermissions**](PermissionsApi.md#clearPermissions) | **POST** /ClearPermissions | Clear the permissions for the specific security ID
[**getAvailablePermissions**](PermissionsApi.md#getAvailablePermissions) | **POST** /GetAvailablePermissions | Gets a list of the permissions; this is a simple list and does not include permission values, etc.
[**getGroupsWithPermission**](PermissionsApi.md#getGroupsWithPermission) | **POST** /GetGroupsWithPermission | List the groups which have been granted the specified permission
[**getPermissions**](PermissionsApi.md#getPermissions) | **POST** /GetPermissions | Given a particular item, fetch a list of permissions on that item for a given user or group.
[**getPermittedUsersAndGroups**](PermissionsApi.md#getPermittedUsersAndGroups) | **POST** /GetPermittedUsersAndGroups | List the users and groups which have direct or indirect access to the specified item
[**getResources**](PermissionsApi.md#getResources) | **POST** /GetResources | Gets a list of the resource types for permissions
[**getUsersWithPermission**](PermissionsApi.md#getUsersWithPermission) | **POST** /GetUsersWithPermission | List the users which have been granted the specified permission
[**setPermissions**](PermissionsApi.md#setPermissions) | **POST** /SetPermissions | Set permissions for a particular item and securityID
[**takeOwnershipPermission**](PermissionsApi.md#takeOwnershipPermission) | **POST** /TakeOwnershipPermission | Change the owner of a particular item from the current owner to somebody else



## clearPermissions

> AUTHChangePasswordDefaultResponse clearPermissions(clearPermissionsRequest)

Clear the permissions for the specific security ID

Clear the permissions for the specific security ID

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PermissionsApi();
let clearPermissionsRequest = new JourneyAnalyticsApi.ClearPermissionsRequest(); // ClearPermissionsRequest | Clear the permissions for the specific security ID
apiInstance.clearPermissions(clearPermissionsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clearPermissionsRequest** | [**ClearPermissionsRequest**](ClearPermissionsRequest.md)| Clear the permissions for the specific security ID | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAvailablePermissions

> GetAvailablePermissionsDefaultResponse getAvailablePermissions()

Gets a list of the permissions; this is a simple list and does not include permission values, etc.

Gets a list of the permissions; this is a simple list and does not include permission values, etc.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PermissionsApi();
apiInstance.getAvailablePermissions().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetAvailablePermissionsDefaultResponse**](GetAvailablePermissionsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGroupsWithPermission

> GetGroupsWithPermissionDefaultResponse getGroupsWithPermission(getGroupsWithPermissionRequest)

List the groups which have been granted the specified permission

List the groups which have been granted the specified permission

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PermissionsApi();
let getGroupsWithPermissionRequest = new JourneyAnalyticsApi.GetGroupsWithPermissionRequest(); // GetGroupsWithPermissionRequest | List the groups which have been granted the specified permission
apiInstance.getGroupsWithPermission(getGroupsWithPermissionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getGroupsWithPermissionRequest** | [**GetGroupsWithPermissionRequest**](GetGroupsWithPermissionRequest.md)| List the groups which have been granted the specified permission | 

### Return type

[**GetGroupsWithPermissionDefaultResponse**](GetGroupsWithPermissionDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getPermissions

> GetPermissionsDefaultResponse getPermissions(getPermissionsRequest)

Given a particular item, fetch a list of permissions on that item for a given user or group.

Given a particular item, fetch a list of permissions on that item for a given user or group.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PermissionsApi();
let getPermissionsRequest = new JourneyAnalyticsApi.GetPermissionsRequest(); // GetPermissionsRequest | Given a particular item, fetch a list of permissions on that item for a given user or group.
apiInstance.getPermissions(getPermissionsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getPermissionsRequest** | [**GetPermissionsRequest**](GetPermissionsRequest.md)| Given a particular item, fetch a list of permissions on that item for a given user or group. | 

### Return type

[**GetPermissionsDefaultResponse**](GetPermissionsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getPermittedUsersAndGroups

> GetGroupsWithPermissionDefaultResponse getPermittedUsersAndGroups(getPermittedUsersAndGroupsRequest)

List the users and groups which have direct or indirect access to the specified item

List the users and groups which have direct or indirect access to the specified item

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PermissionsApi();
let getPermittedUsersAndGroupsRequest = new JourneyAnalyticsApi.GetPermittedUsersAndGroupsRequest(); // GetPermittedUsersAndGroupsRequest | List the users and groups which have direct or indirect access to the specified item
apiInstance.getPermittedUsersAndGroups(getPermittedUsersAndGroupsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getPermittedUsersAndGroupsRequest** | [**GetPermittedUsersAndGroupsRequest**](GetPermittedUsersAndGroupsRequest.md)| List the users and groups which have direct or indirect access to the specified item | 

### Return type

[**GetGroupsWithPermissionDefaultResponse**](GetGroupsWithPermissionDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getResources

> GetResourcesDefaultResponse getResources()

Gets a list of the resource types for permissions

Gets a list of the resource types for permissions

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PermissionsApi();
apiInstance.getResources().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetResourcesDefaultResponse**](GetResourcesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsersWithPermission

> GetGroupsWithPermissionDefaultResponse getUsersWithPermission(getUsersWithPermissionRequest)

List the users which have been granted the specified permission

List the users which have been granted the specified permission

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PermissionsApi();
let getUsersWithPermissionRequest = new JourneyAnalyticsApi.GetUsersWithPermissionRequest(); // GetUsersWithPermissionRequest | List the users which have been granted the specified permission
apiInstance.getUsersWithPermission(getUsersWithPermissionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getUsersWithPermissionRequest** | [**GetUsersWithPermissionRequest**](GetUsersWithPermissionRequest.md)| List the users which have been granted the specified permission | 

### Return type

[**GetGroupsWithPermissionDefaultResponse**](GetGroupsWithPermissionDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setPermissions

> AUTHChangePasswordDefaultResponse setPermissions(setPermissionsRequest)

Set permissions for a particular item and securityID

Set permissions for a particular item and securityID

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PermissionsApi();
let setPermissionsRequest = new JourneyAnalyticsApi.SetPermissionsRequest(); // SetPermissionsRequest | Set permissions for a particular item and securityID
apiInstance.setPermissions(setPermissionsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setPermissionsRequest** | [**SetPermissionsRequest**](SetPermissionsRequest.md)| Set permissions for a particular item and securityID | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## takeOwnershipPermission

> AUTHChangePasswordDefaultResponse takeOwnershipPermission(takeOwnershipPermissionRequest)

Change the owner of a particular item from the current owner to somebody else

Change the owner of a particular item from the current owner to somebody else

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PermissionsApi();
let takeOwnershipPermissionRequest = new JourneyAnalyticsApi.TakeOwnershipPermissionRequest(); // TakeOwnershipPermissionRequest | Change the owner of a particular item from the current owner to somebody else
apiInstance.takeOwnershipPermission(takeOwnershipPermissionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **takeOwnershipPermissionRequest** | [**TakeOwnershipPermissionRequest**](TakeOwnershipPermissionRequest.md)| Change the owner of a particular item from the current owner to somebody else | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

