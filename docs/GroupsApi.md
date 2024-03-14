# JourneyAnalyticsApi.GroupsApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyGroup**](GroupsApi.md#copyGroup) | **POST** /CopyGroup | Copy a group from one folder to another
[**createGroup**](GroupsApi.md#createGroup) | **POST** /CreateGroup | Create a group
[**deleteGroup**](GroupsApi.md#deleteGroup) | **POST** /DeleteGroup | Delete a group
[**getGroup**](GroupsApi.md#getGroup) | **POST** /GetGroup | Get a group object
[**getGroupMembers**](GroupsApi.md#getGroupMembers) | **POST** /GetGroupMembers | Get the members of a particular group
[**getGroups**](GroupsApi.md#getGroups) | **POST** /GetGroups | List groups in the client
[**updateGroup**](GroupsApi.md#updateGroup) | **POST** /UpdateGroup | Update a group



## copyGroup

> CreateClientDefaultResponse copyGroup(copyGroupRequest)

Copy a group from one folder to another

Copy a group from one folder to another

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.GroupsApi();
let copyGroupRequest = new JourneyAnalyticsApi.CopyGroupRequest(); // CopyGroupRequest | Copy a group from one folder to another
apiInstance.copyGroup(copyGroupRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **copyGroupRequest** | [**CopyGroupRequest**](CopyGroupRequest.md)| Copy a group from one folder to another | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createGroup

> CreateClientDefaultResponse createGroup(createGroupRequest)

Create a group

Create a group

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.GroupsApi();
let createGroupRequest = new JourneyAnalyticsApi.CreateGroupRequest(); // CreateGroupRequest | Create a group
apiInstance.createGroup(createGroupRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGroupRequest** | [**CreateGroupRequest**](CreateGroupRequest.md)| Create a group | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteGroup

> AUTHChangePasswordDefaultResponse deleteGroup(deleteGroupRequest)

Delete a group

Delete a group

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.GroupsApi();
let deleteGroupRequest = new JourneyAnalyticsApi.DeleteGroupRequest(); // DeleteGroupRequest | Delete a group
apiInstance.deleteGroup(deleteGroupRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteGroupRequest** | [**DeleteGroupRequest**](DeleteGroupRequest.md)| Delete a group | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getGroup

> GetGroupDefaultResponse getGroup(getGroupRequest)

Get a group object

Get a group object

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.GroupsApi();
let getGroupRequest = new JourneyAnalyticsApi.GetGroupRequest(); // GetGroupRequest | Get a group object
apiInstance.getGroup(getGroupRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getGroupRequest** | [**GetGroupRequest**](GetGroupRequest.md)| Get a group object | 

### Return type

[**GetGroupDefaultResponse**](GetGroupDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getGroupMembers

> GetGroupMembersDefaultResponse getGroupMembers(getGroupMembersRequest)

Get the members of a particular group

Get the members of a particular group

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.GroupsApi();
let getGroupMembersRequest = new JourneyAnalyticsApi.GetGroupMembersRequest(); // GetGroupMembersRequest | Get the members of a particular group
apiInstance.getGroupMembers(getGroupMembersRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getGroupMembersRequest** | [**GetGroupMembersRequest**](GetGroupMembersRequest.md)| Get the members of a particular group | 

### Return type

[**GetGroupMembersDefaultResponse**](GetGroupMembersDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getGroups

> GetGroupsDefaultResponse getGroups(getGroupsRequest)

List groups in the client

List groups in the client

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.GroupsApi();
let getGroupsRequest = new JourneyAnalyticsApi.GetGroupsRequest(); // GetGroupsRequest | List groups in the client
apiInstance.getGroups(getGroupsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getGroupsRequest** | [**GetGroupsRequest**](GetGroupsRequest.md)| List groups in the client | 

### Return type

[**GetGroupsDefaultResponse**](GetGroupsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateGroup

> AUTHChangePasswordDefaultResponse updateGroup(createGroupRequest)

Update a group

Update a group

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.GroupsApi();
let createGroupRequest = new JourneyAnalyticsApi.CreateGroupRequest(); // CreateGroupRequest | Update a group
apiInstance.updateGroup(createGroupRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGroupRequest** | [**CreateGroupRequest**](CreateGroupRequest.md)| Update a group | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

