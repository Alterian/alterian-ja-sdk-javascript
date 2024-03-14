# JourneyAnalyticsApi.FolderApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFolder**](FolderApi.md#createFolder) | **POST** /CreateFolder | Create a @see(Folder)
[**deleteFolder**](FolderApi.md#deleteFolder) | **POST** /DeleteFolder | Delete a @see(Folder)
[**getFolder**](FolderApi.md#getFolder) | **POST** /GetFolder | Get a particular @see(Folder) by it&#39;s ID
[**getFolders**](FolderApi.md#getFolders) | **POST** /GetFolders | Obtain a list of @see(Folder)s
[**moveFolder**](FolderApi.md#moveFolder) | **POST** /MoveFolder | Move a @see(Folder) from one @see(Folder) to another
[**renameFolder**](FolderApi.md#renameFolder) | **POST** /RenameFolder | Rename a @see(Folder)



## createFolder

> CreateClientDefaultResponse createFolder(createFolderRequest)

Create a @see(Folder)

Create a @see(Folder)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.FolderApi();
let createFolderRequest = new JourneyAnalyticsApi.CreateFolderRequest(); // CreateFolderRequest | Create a @see(Folder)
apiInstance.createFolder(createFolderRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFolderRequest** | [**CreateFolderRequest**](CreateFolderRequest.md)| Create a @see(Folder) | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFolder

> AUTHChangePasswordDefaultResponse deleteFolder(deleteFolderRequest)

Delete a @see(Folder)

Delete a @see(Folder)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.FolderApi();
let deleteFolderRequest = new JourneyAnalyticsApi.DeleteFolderRequest(); // DeleteFolderRequest | Delete a @see(Folder)
apiInstance.deleteFolder(deleteFolderRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteFolderRequest** | [**DeleteFolderRequest**](DeleteFolderRequest.md)| Delete a @see(Folder) | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getFolder

> GetFolderDefaultResponse getFolder(getFolderRequest)

Get a particular @see(Folder) by it&#39;s ID

Get a particular @see(Folder) by it&#39;s ID

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.FolderApi();
let getFolderRequest = new JourneyAnalyticsApi.GetFolderRequest(); // GetFolderRequest | Get a particular @see(Folder) by it's ID
apiInstance.getFolder(getFolderRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getFolderRequest** | [**GetFolderRequest**](GetFolderRequest.md)| Get a particular @see(Folder) by it&#39;s ID | 

### Return type

[**GetFolderDefaultResponse**](GetFolderDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getFolders

> GetFoldersDefaultResponse getFolders(getFoldersRequest)

Obtain a list of @see(Folder)s

Obtain a list of @see(Folder)s

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.FolderApi();
let getFoldersRequest = new JourneyAnalyticsApi.GetFoldersRequest(); // GetFoldersRequest | Obtain a list of @see(Folder)s
apiInstance.getFolders(getFoldersRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getFoldersRequest** | [**GetFoldersRequest**](GetFoldersRequest.md)| Obtain a list of @see(Folder)s | 

### Return type

[**GetFoldersDefaultResponse**](GetFoldersDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## moveFolder

> AUTHChangePasswordDefaultResponse moveFolder(moveFolderRequest)

Move a @see(Folder) from one @see(Folder) to another

Move a @see(Folder) from one @see(Folder) to another

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.FolderApi();
let moveFolderRequest = new JourneyAnalyticsApi.MoveFolderRequest(); // MoveFolderRequest | Move a @see(Folder) from one @see(Folder) to another
apiInstance.moveFolder(moveFolderRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **moveFolderRequest** | [**MoveFolderRequest**](MoveFolderRequest.md)| Move a @see(Folder) from one @see(Folder) to another | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## renameFolder

> AUTHChangePasswordDefaultResponse renameFolder(renameFolderRequest)

Rename a @see(Folder)

Rename a @see(Folder)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.FolderApi();
let renameFolderRequest = new JourneyAnalyticsApi.RenameFolderRequest(); // RenameFolderRequest | Rename a @see(Folder)
apiInstance.renameFolder(renameFolderRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **renameFolderRequest** | [**RenameFolderRequest**](RenameFolderRequest.md)| Rename a @see(Folder) | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

