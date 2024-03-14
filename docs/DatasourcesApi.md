# JourneyAnalyticsApi.DatasourcesApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**areDatasourceCampaignsPaused**](DatasourcesApi.md#areDatasourceCampaignsPaused) | **POST** /AreDatasourceCampaignsPaused | Pausing a datasource can take a while, as the campaigns and metrics in this datasource will need to complete their current action before pausing.              The @see(PauseDatasourceCampaigns) call will return immediately, but this method should be called repeatedly until the list of ID&#39;s returned is empty.             Note that the id&#39;s returned are the list of campaigns and metrics which are still running, and can be used in @see(GetCampaign) or @see(GetMetric) to get further details about the              campaign(s)/metric(s) that are preventing the datasource from pausing.
[**areDatasourceJobsComplete**](DatasourcesApi.md#areDatasourceJobsComplete) | **POST** /AreDatasourceJobsComplete | Finishing off any in-progress jobs on a datasource can take a while, as the SEV loaders and archivers in this datasource will need to complete their current action before exiting.              The @see(MarkDatasourceAsPendingDisable) call will return immediately, but this method should be called repeatedly until the list of ID&#39;s returned is empty.             Note that the id&#39;s returned are the list of active jobs which are still running
[**createDataSourceMapping**](DatasourcesApi.md#createDataSourceMapping) | **POST** /CreateDataSourceMapping | Add in a @see(DatasourceUserMapping).
[**createDatasource**](DatasourcesApi.md#createDatasource) | **POST** /CreateDatasource | Creates an engine datasource configured to point at the specified server and project.
[**deleteDataSourceMapping**](DatasourcesApi.md#deleteDataSourceMapping) | **POST** /DeleteDataSourceMapping | Remove a @see(DatasourceUserMapping) from the system.  Once this is done, the particular @see(ALUser) will return back to using SYSTEM as the engine User
[**deleteDatasource**](DatasourcesApi.md#deleteDatasource) | **POST** /DeleteDatasource | Deletes a datasource.  Please note that any document which accesses this datasource might not be able to opened.  This method will fail if there are any campaigns which are active against this datasource.
[**deleteFieldTransformList**](DatasourcesApi.md#deleteFieldTransformList) | **POST** /DeleteFieldTransformList | Delete all versions of the specified transformation list
[**deleteTransform**](DatasourcesApi.md#deleteTransform) | **POST** /DeleteTransform | Delete all versions of the specified transform
[**disableDatasource**](DatasourcesApi.md#disableDatasource) | **POST** /DisableDatasource | Marks a datasource as disabled and invisible.  Typically used as part of the load process.  Please note that once you mark a datasource as disabled, anything which relies upon it will cease to function so make sure you pause campaigns first using @see(PauseDatasourceCampaigns) and verify all campaign activity has ceased with @see(AreDatasourceCampaignsPaused)
[**enableDatasource**](DatasourcesApi.md#enableDatasource) | **POST** /EnableDatasource | Marks a datasource as enabled and visible.  This makes the datasource available for immediate usage.  You can optionally ask the engine listener service to refresh this datasource upon next poll.  Useful for doing a dataload.
[**exportFieldTransformList**](DatasourcesApi.md#exportFieldTransformList) | **GET** /ExportFieldTransformList | Export a list of field transforms for use in transforming discrete values
[**getDataSourceAttributes**](DatasourcesApi.md#getDataSourceAttributes) | **POST** /GetDataSourceAttributes | Get a list of the attributes which can be applied to the given type of datasource.
[**getDataSourceEngineUserName**](DatasourcesApi.md#getDataSourceEngineUserName) | **POST** /GetDataSourceEngineUserName | Given a userID and datasourceID, return back the engine user name which should be used whilst connecting
[**getDataSourceItems**](DatasourcesApi.md#getDataSourceItems) | **POST** /GetDataSourceItems | Allows you to search for data source objects, inclusing datasource, database, table and columns.
[**getDataSourceMappings**](DatasourcesApi.md#getDataSourceMappings) | **POST** /GetDataSourceMappings | Return back the @see(DatasourceUserMapping)s in the system
[**getDataSourceTypes**](DatasourcesApi.md#getDataSourceTypes) | **POST** /GetDataSourceTypes | Return back a list of @see(ALDataSourceType) for use with @see(ALDataSource)s.
[**getDataSourceUsers**](DatasourcesApi.md#getDataSourceUsers) | **POST** /GetDataSourceUsers | Requests a list of users from a particular @see(ALDataSource).  This call currently only functions against an Engine @see(ALDataSource).
[**getDataSources**](DatasourcesApi.md#getDataSources) | **POST** /GetDataSources | Returns back a list of @see(ALDataSource)s from the system
[**getDatasource**](DatasourcesApi.md#getDatasource) | **POST** /GetDatasource | Retrieves the top level data for a datasource.  Does not fully populate the datasource.  This is useful for getting things like the project, server and last refresh date.
[**getDatasourceColumn**](DatasourcesApi.md#getDatasourceColumn) | **POST** /GetDatasourceColumn | Fetch the details of one column from the system.
[**getDatasourceColumns**](DatasourcesApi.md#getDatasourceColumns) | **POST** /GetDatasourceColumns | Fetch a list of columns from the system.
[**getDatasourceDatabases**](DatasourcesApi.md#getDatasourceDatabases) | **POST** /GetDatasourceDatabases | Fetch a list of databases from the system.
[**getDatasourceFieldTypes**](DatasourcesApi.md#getDatasourceFieldTypes) | **POST** /GetDatasourceFieldTypes | Fetch a list of the available types of field that are supported
[**getDatasourceTables**](DatasourcesApi.md#getDatasourceTables) | **POST** /GetDatasourceTables | Fetch a list of tables from the system.
[**getDecodeList**](DatasourcesApi.md#getDecodeList) | **POST** /GetDecodeList | Get a specified decode list
[**getFieldTransformList**](DatasourcesApi.md#getFieldTransformList) | **POST** /GetFieldTransformList | Get a list of field transforms for use in transforming discrete values
[**getFieldTransformLists**](DatasourcesApi.md#getFieldTransformLists) | **POST** /GetFieldTransformLists | Get the basic details for all available transform lists (Name, Id, (Max) Version- but not Metadata or JSON transforms)
[**getProcessStatus**](DatasourcesApi.md#getProcessStatus) | **POST** /GetProcessStatus | Gets the status of a process which was queued.  Note that once the process is finished, you may only get the status once and each call thereafter will return NotFound.
[**getTransforms**](DatasourcesApi.md#getTransforms) | **POST** /GetTransforms | Get the basic details for all available transforms (Name, Id, (Max) Version, Type) and which versions have actually been published
[**markDatasourceAsPendingDisable**](DatasourcesApi.md#markDatasourceAsPendingDisable) | **POST** /MarkDatasourceAsPendingDisable | Mark a data source as pending disable. This will cause any active SEV threads to exit upon their next iteration, which can take a while.              Clients should then call @see(AreDatasourceJobsComplete) to check that the datasource is idle before continuing to perform the actual disable, and can call @see(DisableDatasource)
[**pauseDatasourceCampaigns**](DatasourcesApi.md#pauseDatasourceCampaigns) | **POST** /PauseDatasourceCampaigns | Pause the campaigns in this datasource. This will request all the campaigns that use this datasource to be paused, which can take a while.              Clients should then call @see(AreDatasourceCampaignsPaused) to check that the datasource is idle before continuing, and can call @see(ResumeDatasourceCampaigns)
[**refreshDatasource**](DatasourcesApi.md#refreshDatasource) | **POST** /RefreshDatasource | Requests an immediate refresh of an engine datasource.  Call @see(GetProcessStatus) to determine when the refresh has finished or check the LastRefresh date on the datasource.
[**resumeDatasourceCampaigns**](DatasourcesApi.md#resumeDatasourceCampaigns) | **POST** /ResumeDatasourceCampaigns | Resume the campaigns in this datasource. This is the opposite of @see(PauseDatasourceCampaigns), and only campaigns that were paused by that method will be resumed. Campaigns that             were paused manually will not be resumed.
[**saveDecodeList**](DatasourcesApi.md#saveDecodeList) | **POST** /SaveDecodeList | Save a list of decodes
[**saveFieldTransformList**](DatasourcesApi.md#saveFieldTransformList) | **POST** /SaveFieldTransformList | Save a list of field transforms for use in transforming discrete values
[**updateDataSourceMapping**](DatasourcesApi.md#updateDataSourceMapping) | **POST** /UpdateDataSourceMapping | Updates a @see(DatasourceUserMapping) to map it to another engine user name.
[**updateDatasource**](DatasourcesApi.md#updateDatasource) | **POST** /UpdateDatasource | Updates an @see(ALDataSource) with the data which is provided.  Please note that the only properties which are relevant are IsEnabled, IsVisible, Name, LastRefresh and attributes.



## areDatasourceCampaignsPaused

> AreDatasourceCampaignsPausedDefaultResponse areDatasourceCampaignsPaused(areDatasourceCampaignsPausedRequest)

Pausing a datasource can take a while, as the campaigns and metrics in this datasource will need to complete their current action before pausing.              The @see(PauseDatasourceCampaigns) call will return immediately, but this method should be called repeatedly until the list of ID&#39;s returned is empty.             Note that the id&#39;s returned are the list of campaigns and metrics which are still running, and can be used in @see(GetCampaign) or @see(GetMetric) to get further details about the              campaign(s)/metric(s) that are preventing the datasource from pausing.

Pausing a datasource can take a while, as the campaigns and metrics in this datasource will need to complete their current action before pausing.              The @see(PauseDatasourceCampaigns) call will return immediately, but this method should be called repeatedly until the list of ID&#39;s returned is empty.             Note that the id&#39;s returned are the list of campaigns and metrics which are still running, and can be used in @see(GetCampaign) or @see(GetMetric) to get further details about the              campaign(s)/metric(s) that are preventing the datasource from pausing.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let areDatasourceCampaignsPausedRequest = new JourneyAnalyticsApi.AreDatasourceCampaignsPausedRequest(); // AreDatasourceCampaignsPausedRequest | Pausing a datasource can take a while, as the campaigns and metrics in this datasource will need to complete their current action before pausing.              The @see(PauseDatasourceCampaigns) call will return immediately, but this method should be called repeatedly until the list of ID's returned is empty.             Note that the id's returned are the list of campaigns and metrics which are still running, and can be used in @see(GetCampaign) or @see(GetMetric) to get further details about the              campaign(s)/metric(s) that are preventing the datasource from pausing.
apiInstance.areDatasourceCampaignsPaused(areDatasourceCampaignsPausedRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **areDatasourceCampaignsPausedRequest** | [**AreDatasourceCampaignsPausedRequest**](AreDatasourceCampaignsPausedRequest.md)| Pausing a datasource can take a while, as the campaigns and metrics in this datasource will need to complete their current action before pausing.              The @see(PauseDatasourceCampaigns) call will return immediately, but this method should be called repeatedly until the list of ID&#39;s returned is empty.             Note that the id&#39;s returned are the list of campaigns and metrics which are still running, and can be used in @see(GetCampaign) or @see(GetMetric) to get further details about the              campaign(s)/metric(s) that are preventing the datasource from pausing. | 

### Return type

[**AreDatasourceCampaignsPausedDefaultResponse**](AreDatasourceCampaignsPausedDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## areDatasourceJobsComplete

> AreDatasourceCampaignsPausedDefaultResponse areDatasourceJobsComplete(areDatasourceJobsCompleteRequest)

Finishing off any in-progress jobs on a datasource can take a while, as the SEV loaders and archivers in this datasource will need to complete their current action before exiting.              The @see(MarkDatasourceAsPendingDisable) call will return immediately, but this method should be called repeatedly until the list of ID&#39;s returned is empty.             Note that the id&#39;s returned are the list of active jobs which are still running

Finishing off any in-progress jobs on a datasource can take a while, as the SEV loaders and archivers in this datasource will need to complete their current action before exiting.              The @see(MarkDatasourceAsPendingDisable) call will return immediately, but this method should be called repeatedly until the list of ID&#39;s returned is empty.             Note that the id&#39;s returned are the list of active jobs which are still running

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let areDatasourceJobsCompleteRequest = new JourneyAnalyticsApi.AreDatasourceJobsCompleteRequest(); // AreDatasourceJobsCompleteRequest | Finishing off any in-progress jobs on a datasource can take a while, as the SEV loaders and archivers in this datasource will need to complete their current action before exiting.              The @see(MarkDatasourceAsPendingDisable) call will return immediately, but this method should be called repeatedly until the list of ID's returned is empty.             Note that the id's returned are the list of active jobs which are still running
apiInstance.areDatasourceJobsComplete(areDatasourceJobsCompleteRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **areDatasourceJobsCompleteRequest** | [**AreDatasourceJobsCompleteRequest**](AreDatasourceJobsCompleteRequest.md)| Finishing off any in-progress jobs on a datasource can take a while, as the SEV loaders and archivers in this datasource will need to complete their current action before exiting.              The @see(MarkDatasourceAsPendingDisable) call will return immediately, but this method should be called repeatedly until the list of ID&#39;s returned is empty.             Note that the id&#39;s returned are the list of active jobs which are still running | 

### Return type

[**AreDatasourceCampaignsPausedDefaultResponse**](AreDatasourceCampaignsPausedDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDataSourceMapping

> AUTHChangePasswordDefaultResponse createDataSourceMapping(createDataSourceMappingRequest)

Add in a @see(DatasourceUserMapping).

Add in a @see(DatasourceUserMapping).

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let createDataSourceMappingRequest = new JourneyAnalyticsApi.CreateDataSourceMappingRequest(); // CreateDataSourceMappingRequest | Add in a @see(DatasourceUserMapping).
apiInstance.createDataSourceMapping(createDataSourceMappingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDataSourceMappingRequest** | [**CreateDataSourceMappingRequest**](CreateDataSourceMappingRequest.md)| Add in a @see(DatasourceUserMapping). | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDatasource

> CreateClientDefaultResponse createDatasource(createDatasourceRequest)

Creates an engine datasource configured to point at the specified server and project.

Creates an engine datasource configured to point at the specified server and project.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let createDatasourceRequest = new JourneyAnalyticsApi.CreateDatasourceRequest(); // CreateDatasourceRequest | Creates an engine datasource configured to point at the specified server and project.
apiInstance.createDatasource(createDatasourceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDatasourceRequest** | [**CreateDatasourceRequest**](CreateDatasourceRequest.md)| Creates an engine datasource configured to point at the specified server and project. | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDataSourceMapping

> AUTHChangePasswordDefaultResponse deleteDataSourceMapping(createDataSourceMappingRequest)

Remove a @see(DatasourceUserMapping) from the system.  Once this is done, the particular @see(ALUser) will return back to using SYSTEM as the engine User

Remove a @see(DatasourceUserMapping) from the system.  Once this is done, the particular @see(ALUser) will return back to using SYSTEM as the engine User

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let createDataSourceMappingRequest = new JourneyAnalyticsApi.CreateDataSourceMappingRequest(); // CreateDataSourceMappingRequest | Remove a @see(DatasourceUserMapping) from the system.  Once this is done, the particular @see(ALUser) will return back to using SYSTEM as the engine User
apiInstance.deleteDataSourceMapping(createDataSourceMappingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDataSourceMappingRequest** | [**CreateDataSourceMappingRequest**](CreateDataSourceMappingRequest.md)| Remove a @see(DatasourceUserMapping) from the system.  Once this is done, the particular @see(ALUser) will return back to using SYSTEM as the engine User | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDatasource

> AUTHChangePasswordDefaultResponse deleteDatasource(deleteDatasourceRequest)

Deletes a datasource.  Please note that any document which accesses this datasource might not be able to opened.  This method will fail if there are any campaigns which are active against this datasource.

Deletes a datasource.  Please note that any document which accesses this datasource might not be able to opened.  This method will fail if there are any campaigns which are active against this datasource.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let deleteDatasourceRequest = new JourneyAnalyticsApi.DeleteDatasourceRequest(); // DeleteDatasourceRequest | Deletes a datasource.  Please note that any document which accesses this datasource might not be able to opened.  This method will fail if there are any campaigns which are active against this datasource.
apiInstance.deleteDatasource(deleteDatasourceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteDatasourceRequest** | [**DeleteDatasourceRequest**](DeleteDatasourceRequest.md)| Deletes a datasource.  Please note that any document which accesses this datasource might not be able to opened.  This method will fail if there are any campaigns which are active against this datasource. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFieldTransformList

> AUTHChangePasswordDefaultResponse deleteFieldTransformList(deleteFieldTransformListRequest)

Delete all versions of the specified transformation list

Delete all versions of the specified transformation list

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let deleteFieldTransformListRequest = new JourneyAnalyticsApi.DeleteFieldTransformListRequest(); // DeleteFieldTransformListRequest | Delete all versions of the specified transformation list
apiInstance.deleteFieldTransformList(deleteFieldTransformListRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteFieldTransformListRequest** | [**DeleteFieldTransformListRequest**](DeleteFieldTransformListRequest.md)| Delete all versions of the specified transformation list | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTransform

> AUTHChangePasswordDefaultResponse deleteTransform(deleteTransformRequest)

Delete all versions of the specified transform

Delete all versions of the specified transform

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let deleteTransformRequest = new JourneyAnalyticsApi.DeleteTransformRequest(); // DeleteTransformRequest | Delete all versions of the specified transform
apiInstance.deleteTransform(deleteTransformRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteTransformRequest** | [**DeleteTransformRequest**](DeleteTransformRequest.md)| Delete all versions of the specified transform | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## disableDatasource

> AUTHChangePasswordDefaultResponse disableDatasource(disableDatasourceRequest)

Marks a datasource as disabled and invisible.  Typically used as part of the load process.  Please note that once you mark a datasource as disabled, anything which relies upon it will cease to function so make sure you pause campaigns first using @see(PauseDatasourceCampaigns) and verify all campaign activity has ceased with @see(AreDatasourceCampaignsPaused)

Marks a datasource as disabled and invisible.  Typically used as part of the load process.  Please note that once you mark a datasource as disabled, anything which relies upon it will cease to function so make sure you pause campaigns first using @see(PauseDatasourceCampaigns) and verify all campaign activity has ceased with @see(AreDatasourceCampaignsPaused)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let disableDatasourceRequest = new JourneyAnalyticsApi.DisableDatasourceRequest(); // DisableDatasourceRequest | Marks a datasource as disabled and invisible.  Typically used as part of the load process.  Please note that once you mark a datasource as disabled, anything which relies upon it will cease to function so make sure you pause campaigns first using @see(PauseDatasourceCampaigns) and verify all campaign activity has ceased with @see(AreDatasourceCampaignsPaused)
apiInstance.disableDatasource(disableDatasourceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disableDatasourceRequest** | [**DisableDatasourceRequest**](DisableDatasourceRequest.md)| Marks a datasource as disabled and invisible.  Typically used as part of the load process.  Please note that once you mark a datasource as disabled, anything which relies upon it will cease to function so make sure you pause campaigns first using @see(PauseDatasourceCampaigns) and verify all campaign activity has ceased with @see(AreDatasourceCampaignsPaused) | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## enableDatasource

> AUTHChangePasswordDefaultResponse enableDatasource(enableDatasourceRequest)

Marks a datasource as enabled and visible.  This makes the datasource available for immediate usage.  You can optionally ask the engine listener service to refresh this datasource upon next poll.  Useful for doing a dataload.

Marks a datasource as enabled and visible.  This makes the datasource available for immediate usage.  You can optionally ask the engine listener service to refresh this datasource upon next poll.  Useful for doing a dataload.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let enableDatasourceRequest = new JourneyAnalyticsApi.EnableDatasourceRequest(); // EnableDatasourceRequest | Marks a datasource as enabled and visible.  This makes the datasource available for immediate usage.  You can optionally ask the engine listener service to refresh this datasource upon next poll.  Useful for doing a dataload.
apiInstance.enableDatasource(enableDatasourceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enableDatasourceRequest** | [**EnableDatasourceRequest**](EnableDatasourceRequest.md)| Marks a datasource as enabled and visible.  This makes the datasource available for immediate usage.  You can optionally ask the engine listener service to refresh this datasource upon next poll.  Useful for doing a dataload. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## exportFieldTransformList

> File exportFieldTransformList(opts)

Export a list of field transforms for use in transforming discrete values

Export a list of field transforms for use in transforming discrete values

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let opts = {
  'id': 56, // Number | 
  'version': 56 // Number | 
};
apiInstance.exportFieldTransformList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | [optional] 
 **version** | **Number**|  | [optional] 

### Return type

**File**

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml


## getDataSourceAttributes

> GetDataSourceAttributesDefaultResponse getDataSourceAttributes(getDataSourceAttributesRequest)

Get a list of the attributes which can be applied to the given type of datasource.

Get a list of the attributes which can be applied to the given type of datasource.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let getDataSourceAttributesRequest = new JourneyAnalyticsApi.GetDataSourceAttributesRequest(); // GetDataSourceAttributesRequest | Get a list of the attributes which can be applied to the given type of datasource.
apiInstance.getDataSourceAttributes(getDataSourceAttributesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getDataSourceAttributesRequest** | [**GetDataSourceAttributesRequest**](GetDataSourceAttributesRequest.md)| Get a list of the attributes which can be applied to the given type of datasource. | 

### Return type

[**GetDataSourceAttributesDefaultResponse**](GetDataSourceAttributesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDataSourceEngineUserName

> GetDataSourceEngineUserNameDefaultResponse getDataSourceEngineUserName(getDataSourceEngineUserNameRequest)

Given a userID and datasourceID, return back the engine user name which should be used whilst connecting

Given a userID and datasourceID, return back the engine user name which should be used whilst connecting

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let getDataSourceEngineUserNameRequest = new JourneyAnalyticsApi.GetDataSourceEngineUserNameRequest(); // GetDataSourceEngineUserNameRequest | Given a userID and datasourceID, return back the engine user name which should be used whilst connecting
apiInstance.getDataSourceEngineUserName(getDataSourceEngineUserNameRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getDataSourceEngineUserNameRequest** | [**GetDataSourceEngineUserNameRequest**](GetDataSourceEngineUserNameRequest.md)| Given a userID and datasourceID, return back the engine user name which should be used whilst connecting | 

### Return type

[**GetDataSourceEngineUserNameDefaultResponse**](GetDataSourceEngineUserNameDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDataSourceItems

> GetDataSourceItemsDefaultResponse getDataSourceItems(getDataSourceItemsRequest)

Allows you to search for data source objects, inclusing datasource, database, table and columns.

Allows you to search for data source objects, inclusing datasource, database, table and columns.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let getDataSourceItemsRequest = new JourneyAnalyticsApi.GetDataSourceItemsRequest(); // GetDataSourceItemsRequest | Allows you to search for data source objects, inclusing datasource, database, table and columns.
apiInstance.getDataSourceItems(getDataSourceItemsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getDataSourceItemsRequest** | [**GetDataSourceItemsRequest**](GetDataSourceItemsRequest.md)| Allows you to search for data source objects, inclusing datasource, database, table and columns. | 

### Return type

[**GetDataSourceItemsDefaultResponse**](GetDataSourceItemsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDataSourceMappings

> GetDataSourceMappingsDefaultResponse getDataSourceMappings(getDataSourceMappingsRequest)

Return back the @see(DatasourceUserMapping)s in the system

Return back the @see(DatasourceUserMapping)s in the system

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let getDataSourceMappingsRequest = new JourneyAnalyticsApi.GetDataSourceMappingsRequest(); // GetDataSourceMappingsRequest | Return back the @see(DatasourceUserMapping)s in the system
apiInstance.getDataSourceMappings(getDataSourceMappingsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getDataSourceMappingsRequest** | [**GetDataSourceMappingsRequest**](GetDataSourceMappingsRequest.md)| Return back the @see(DatasourceUserMapping)s in the system | 

### Return type

[**GetDataSourceMappingsDefaultResponse**](GetDataSourceMappingsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDataSourceTypes

> GetDataSourceTypesDefaultResponse getDataSourceTypes(getClientSetsRequest)

Return back a list of @see(ALDataSourceType) for use with @see(ALDataSource)s.

Return back a list of @see(ALDataSourceType) for use with @see(ALDataSource)s.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let getClientSetsRequest = new JourneyAnalyticsApi.GetClientSetsRequest(); // GetClientSetsRequest | Return back a list of @see(ALDataSourceType) for use with @see(ALDataSource)s.
apiInstance.getDataSourceTypes(getClientSetsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getClientSetsRequest** | [**GetClientSetsRequest**](GetClientSetsRequest.md)| Return back a list of @see(ALDataSourceType) for use with @see(ALDataSource)s. | 

### Return type

[**GetDataSourceTypesDefaultResponse**](GetDataSourceTypesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDataSourceUsers

> GetDataSourceUsersDefaultResponse getDataSourceUsers(getDataSourceUsersRequest)

Requests a list of users from a particular @see(ALDataSource).  This call currently only functions against an Engine @see(ALDataSource).

Requests a list of users from a particular @see(ALDataSource).  This call currently only functions against an Engine @see(ALDataSource).

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let getDataSourceUsersRequest = new JourneyAnalyticsApi.GetDataSourceUsersRequest(); // GetDataSourceUsersRequest | Requests a list of users from a particular @see(ALDataSource).  This call currently only functions against an Engine @see(ALDataSource).
apiInstance.getDataSourceUsers(getDataSourceUsersRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getDataSourceUsersRequest** | [**GetDataSourceUsersRequest**](GetDataSourceUsersRequest.md)| Requests a list of users from a particular @see(ALDataSource).  This call currently only functions against an Engine @see(ALDataSource). | 

### Return type

[**GetDataSourceUsersDefaultResponse**](GetDataSourceUsersDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDataSources

> GetDataSourcesDefaultResponse getDataSources(getDataSourcesRequest)

Returns back a list of @see(ALDataSource)s from the system

Returns back a list of @see(ALDataSource)s from the system

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let getDataSourcesRequest = new JourneyAnalyticsApi.GetDataSourcesRequest(); // GetDataSourcesRequest | Returns back a list of @see(ALDataSource)s from the system
apiInstance.getDataSources(getDataSourcesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getDataSourcesRequest** | [**GetDataSourcesRequest**](GetDataSourcesRequest.md)| Returns back a list of @see(ALDataSource)s from the system | 

### Return type

[**GetDataSourcesDefaultResponse**](GetDataSourcesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDatasource

> GetDatasourceDefaultResponse getDatasource(getDatasourceRequest)

Retrieves the top level data for a datasource.  Does not fully populate the datasource.  This is useful for getting things like the project, server and last refresh date.

Retrieves the top level data for a datasource.  Does not fully populate the datasource.  This is useful for getting things like the project, server and last refresh date.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let getDatasourceRequest = new JourneyAnalyticsApi.GetDatasourceRequest(); // GetDatasourceRequest | Retrieves the top level data for a datasource.  Does not fully populate the datasource.  This is useful for getting things like the project, server and last refresh date.
apiInstance.getDatasource(getDatasourceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getDatasourceRequest** | [**GetDatasourceRequest**](GetDatasourceRequest.md)| Retrieves the top level data for a datasource.  Does not fully populate the datasource.  This is useful for getting things like the project, server and last refresh date. | 

### Return type

[**GetDatasourceDefaultResponse**](GetDatasourceDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDatasourceColumn

> GetDatasourceColumnDefaultResponse getDatasourceColumn(getDatasourceColumnRequest)

Fetch the details of one column from the system.

Fetch the details of one column from the system.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let getDatasourceColumnRequest = new JourneyAnalyticsApi.GetDatasourceColumnRequest(); // GetDatasourceColumnRequest | Fetch the details of one column from the system.
apiInstance.getDatasourceColumn(getDatasourceColumnRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getDatasourceColumnRequest** | [**GetDatasourceColumnRequest**](GetDatasourceColumnRequest.md)| Fetch the details of one column from the system. | 

### Return type

[**GetDatasourceColumnDefaultResponse**](GetDatasourceColumnDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDatasourceColumns

> GetDatasourceColumnsDefaultResponse getDatasourceColumns(getDatasourceColumnsRequest)

Fetch a list of columns from the system.

Fetch a list of columns from the system.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let getDatasourceColumnsRequest = new JourneyAnalyticsApi.GetDatasourceColumnsRequest(); // GetDatasourceColumnsRequest | Fetch a list of columns from the system.
apiInstance.getDatasourceColumns(getDatasourceColumnsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getDatasourceColumnsRequest** | [**GetDatasourceColumnsRequest**](GetDatasourceColumnsRequest.md)| Fetch a list of columns from the system. | 

### Return type

[**GetDatasourceColumnsDefaultResponse**](GetDatasourceColumnsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDatasourceDatabases

> GetDatasourceDatabasesDefaultResponse getDatasourceDatabases(getDatasourceDatabasesRequest)

Fetch a list of databases from the system.

Fetch a list of databases from the system.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let getDatasourceDatabasesRequest = new JourneyAnalyticsApi.GetDatasourceDatabasesRequest(); // GetDatasourceDatabasesRequest | Fetch a list of databases from the system.
apiInstance.getDatasourceDatabases(getDatasourceDatabasesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getDatasourceDatabasesRequest** | [**GetDatasourceDatabasesRequest**](GetDatasourceDatabasesRequest.md)| Fetch a list of databases from the system. | 

### Return type

[**GetDatasourceDatabasesDefaultResponse**](GetDatasourceDatabasesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDatasourceFieldTypes

> GetDatasourceFieldTypesDefaultResponse getDatasourceFieldTypes(getClientSetsRequest)

Fetch a list of the available types of field that are supported

Fetch a list of the available types of field that are supported

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let getClientSetsRequest = new JourneyAnalyticsApi.GetClientSetsRequest(); // GetClientSetsRequest | Fetch a list of the available types of field that are supported
apiInstance.getDatasourceFieldTypes(getClientSetsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getClientSetsRequest** | [**GetClientSetsRequest**](GetClientSetsRequest.md)| Fetch a list of the available types of field that are supported | 

### Return type

[**GetDatasourceFieldTypesDefaultResponse**](GetDatasourceFieldTypesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDatasourceTables

> GetDatasourceTablesDefaultResponse getDatasourceTables(getDatasourceTablesRequest)

Fetch a list of tables from the system.

Fetch a list of tables from the system.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let getDatasourceTablesRequest = new JourneyAnalyticsApi.GetDatasourceTablesRequest(); // GetDatasourceTablesRequest | Fetch a list of tables from the system.
apiInstance.getDatasourceTables(getDatasourceTablesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getDatasourceTablesRequest** | [**GetDatasourceTablesRequest**](GetDatasourceTablesRequest.md)| Fetch a list of tables from the system. | 

### Return type

[**GetDatasourceTablesDefaultResponse**](GetDatasourceTablesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDecodeList

> GetDecodeListDefaultResponse getDecodeList(getDecodeListRequest)

Get a specified decode list

Get a specified decode list

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let getDecodeListRequest = new JourneyAnalyticsApi.GetDecodeListRequest(); // GetDecodeListRequest | Get a specified decode list
apiInstance.getDecodeList(getDecodeListRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getDecodeListRequest** | [**GetDecodeListRequest**](GetDecodeListRequest.md)| Get a specified decode list | 

### Return type

[**GetDecodeListDefaultResponse**](GetDecodeListDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getFieldTransformList

> GetFieldTransformListDefaultResponse getFieldTransformList(getFieldTransformListRequest)

Get a list of field transforms for use in transforming discrete values

Get a list of field transforms for use in transforming discrete values

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let getFieldTransformListRequest = new JourneyAnalyticsApi.GetFieldTransformListRequest(); // GetFieldTransformListRequest | Get a list of field transforms for use in transforming discrete values
apiInstance.getFieldTransformList(getFieldTransformListRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getFieldTransformListRequest** | [**GetFieldTransformListRequest**](GetFieldTransformListRequest.md)| Get a list of field transforms for use in transforming discrete values | 

### Return type

[**GetFieldTransformListDefaultResponse**](GetFieldTransformListDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getFieldTransformLists

> GetFieldTransformListsDefaultResponse getFieldTransformLists(getClientSetsRequest)

Get the basic details for all available transform lists (Name, Id, (Max) Version- but not Metadata or JSON transforms)

Get the basic details for all available transform lists (Name, Id, (Max) Version- but not Metadata or JSON transforms)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let getClientSetsRequest = new JourneyAnalyticsApi.GetClientSetsRequest(); // GetClientSetsRequest | Get the basic details for all available transform lists (Name, Id, (Max) Version- but not Metadata or JSON transforms)
apiInstance.getFieldTransformLists(getClientSetsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getClientSetsRequest** | [**GetClientSetsRequest**](GetClientSetsRequest.md)| Get the basic details for all available transform lists (Name, Id, (Max) Version- but not Metadata or JSON transforms) | 

### Return type

[**GetFieldTransformListsDefaultResponse**](GetFieldTransformListsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getProcessStatus

> GetProcessStatusDefaultResponse getProcessStatus(getProcessStatusRequest)

Gets the status of a process which was queued.  Note that once the process is finished, you may only get the status once and each call thereafter will return NotFound.

Gets the status of a process which was queued.  Note that once the process is finished, you may only get the status once and each call thereafter will return NotFound.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let getProcessStatusRequest = new JourneyAnalyticsApi.GetProcessStatusRequest(); // GetProcessStatusRequest | Gets the status of a process which was queued.  Note that once the process is finished, you may only get the status once and each call thereafter will return NotFound.
apiInstance.getProcessStatus(getProcessStatusRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getProcessStatusRequest** | [**GetProcessStatusRequest**](GetProcessStatusRequest.md)| Gets the status of a process which was queued.  Note that once the process is finished, you may only get the status once and each call thereafter will return NotFound. | 

### Return type

[**GetProcessStatusDefaultResponse**](GetProcessStatusDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTransforms

> GetFieldTransformListsDefaultResponse getTransforms(getTransformsRequest)

Get the basic details for all available transforms (Name, Id, (Max) Version, Type) and which versions have actually been published

Get the basic details for all available transforms (Name, Id, (Max) Version, Type) and which versions have actually been published

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let getTransformsRequest = new JourneyAnalyticsApi.GetTransformsRequest(); // GetTransformsRequest | Get the basic details for all available transforms (Name, Id, (Max) Version, Type) and which versions have actually been published
apiInstance.getTransforms(getTransformsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getTransformsRequest** | [**GetTransformsRequest**](GetTransformsRequest.md)| Get the basic details for all available transforms (Name, Id, (Max) Version, Type) and which versions have actually been published | 

### Return type

[**GetFieldTransformListsDefaultResponse**](GetFieldTransformListsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## markDatasourceAsPendingDisable

> AUTHChangePasswordDefaultResponse markDatasourceAsPendingDisable(markDatasourceAsPendingDisableRequest)

Mark a data source as pending disable. This will cause any active SEV threads to exit upon their next iteration, which can take a while.              Clients should then call @see(AreDatasourceJobsComplete) to check that the datasource is idle before continuing to perform the actual disable, and can call @see(DisableDatasource)

Mark a data source as pending disable. This will cause any active SEV threads to exit upon their next iteration, which can take a while.              Clients should then call @see(AreDatasourceJobsComplete) to check that the datasource is idle before continuing to perform the actual disable, and can call @see(DisableDatasource)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let markDatasourceAsPendingDisableRequest = new JourneyAnalyticsApi.MarkDatasourceAsPendingDisableRequest(); // MarkDatasourceAsPendingDisableRequest | Mark a data source as pending disable. This will cause any active SEV threads to exit upon their next iteration, which can take a while.              Clients should then call @see(AreDatasourceJobsComplete) to check that the datasource is idle before continuing to perform the actual disable, and can call @see(DisableDatasource)
apiInstance.markDatasourceAsPendingDisable(markDatasourceAsPendingDisableRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **markDatasourceAsPendingDisableRequest** | [**MarkDatasourceAsPendingDisableRequest**](MarkDatasourceAsPendingDisableRequest.md)| Mark a data source as pending disable. This will cause any active SEV threads to exit upon their next iteration, which can take a while.              Clients should then call @see(AreDatasourceJobsComplete) to check that the datasource is idle before continuing to perform the actual disable, and can call @see(DisableDatasource) | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## pauseDatasourceCampaigns

> CreateClientDefaultResponse pauseDatasourceCampaigns(pauseDatasourceCampaignsRequest)

Pause the campaigns in this datasource. This will request all the campaigns that use this datasource to be paused, which can take a while.              Clients should then call @see(AreDatasourceCampaignsPaused) to check that the datasource is idle before continuing, and can call @see(ResumeDatasourceCampaigns)

Pause the campaigns in this datasource. This will request all the campaigns that use this datasource to be paused, which can take a while.              Clients should then call @see(AreDatasourceCampaignsPaused) to check that the datasource is idle before continuing, and can call @see(ResumeDatasourceCampaigns)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let pauseDatasourceCampaignsRequest = new JourneyAnalyticsApi.PauseDatasourceCampaignsRequest(); // PauseDatasourceCampaignsRequest | Pause the campaigns in this datasource. This will request all the campaigns that use this datasource to be paused, which can take a while.              Clients should then call @see(AreDatasourceCampaignsPaused) to check that the datasource is idle before continuing, and can call @see(ResumeDatasourceCampaigns)
apiInstance.pauseDatasourceCampaigns(pauseDatasourceCampaignsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pauseDatasourceCampaignsRequest** | [**PauseDatasourceCampaignsRequest**](PauseDatasourceCampaignsRequest.md)| Pause the campaigns in this datasource. This will request all the campaigns that use this datasource to be paused, which can take a while.              Clients should then call @see(AreDatasourceCampaignsPaused) to check that the datasource is idle before continuing, and can call @see(ResumeDatasourceCampaigns) | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## refreshDatasource

> CreateClientDefaultResponse refreshDatasource(refreshDatasourceRequest)

Requests an immediate refresh of an engine datasource.  Call @see(GetProcessStatus) to determine when the refresh has finished or check the LastRefresh date on the datasource.

Requests an immediate refresh of an engine datasource.  Call @see(GetProcessStatus) to determine when the refresh has finished or check the LastRefresh date on the datasource.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let refreshDatasourceRequest = new JourneyAnalyticsApi.RefreshDatasourceRequest(); // RefreshDatasourceRequest | Requests an immediate refresh of an engine datasource.  Call @see(GetProcessStatus) to determine when the refresh has finished or check the LastRefresh date on the datasource.
apiInstance.refreshDatasource(refreshDatasourceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refreshDatasourceRequest** | [**RefreshDatasourceRequest**](RefreshDatasourceRequest.md)| Requests an immediate refresh of an engine datasource.  Call @see(GetProcessStatus) to determine when the refresh has finished or check the LastRefresh date on the datasource. | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resumeDatasourceCampaigns

> AUTHChangePasswordDefaultResponse resumeDatasourceCampaigns(resumeDatasourceCampaignsRequest)

Resume the campaigns in this datasource. This is the opposite of @see(PauseDatasourceCampaigns), and only campaigns that were paused by that method will be resumed. Campaigns that             were paused manually will not be resumed.

Resume the campaigns in this datasource. This is the opposite of @see(PauseDatasourceCampaigns), and only campaigns that were paused by that method will be resumed. Campaigns that             were paused manually will not be resumed.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let resumeDatasourceCampaignsRequest = new JourneyAnalyticsApi.ResumeDatasourceCampaignsRequest(); // ResumeDatasourceCampaignsRequest | Resume the campaigns in this datasource. This is the opposite of @see(PauseDatasourceCampaigns), and only campaigns that were paused by that method will be resumed. Campaigns that             were paused manually will not be resumed.
apiInstance.resumeDatasourceCampaigns(resumeDatasourceCampaignsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resumeDatasourceCampaignsRequest** | [**ResumeDatasourceCampaignsRequest**](ResumeDatasourceCampaignsRequest.md)| Resume the campaigns in this datasource. This is the opposite of @see(PauseDatasourceCampaigns), and only campaigns that were paused by that method will be resumed. Campaigns that             were paused manually will not be resumed. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## saveDecodeList

> GetDecodeListDefaultResponse saveDecodeList(saveDecodeListRequest)

Save a list of decodes

Save a list of decodes

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let saveDecodeListRequest = new JourneyAnalyticsApi.SaveDecodeListRequest(); // SaveDecodeListRequest | Save a list of decodes
apiInstance.saveDecodeList(saveDecodeListRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **saveDecodeListRequest** | [**SaveDecodeListRequest**](SaveDecodeListRequest.md)| Save a list of decodes | 

### Return type

[**GetDecodeListDefaultResponse**](GetDecodeListDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## saveFieldTransformList

> GetFieldTransformListDefaultResponse saveFieldTransformList(saveFieldTransformListRequest)

Save a list of field transforms for use in transforming discrete values

Save a list of field transforms for use in transforming discrete values

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let saveFieldTransformListRequest = new JourneyAnalyticsApi.SaveFieldTransformListRequest(); // SaveFieldTransformListRequest | Save a list of field transforms for use in transforming discrete values
apiInstance.saveFieldTransformList(saveFieldTransformListRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **saveFieldTransformListRequest** | [**SaveFieldTransformListRequest**](SaveFieldTransformListRequest.md)| Save a list of field transforms for use in transforming discrete values | 

### Return type

[**GetFieldTransformListDefaultResponse**](GetFieldTransformListDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateDataSourceMapping

> AUTHChangePasswordDefaultResponse updateDataSourceMapping(createDataSourceMappingRequest)

Updates a @see(DatasourceUserMapping) to map it to another engine user name.

Updates a @see(DatasourceUserMapping) to map it to another engine user name.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let createDataSourceMappingRequest = new JourneyAnalyticsApi.CreateDataSourceMappingRequest(); // CreateDataSourceMappingRequest | Updates a @see(DatasourceUserMapping) to map it to another engine user name.
apiInstance.updateDataSourceMapping(createDataSourceMappingRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDataSourceMappingRequest** | [**CreateDataSourceMappingRequest**](CreateDataSourceMappingRequest.md)| Updates a @see(DatasourceUserMapping) to map it to another engine user name. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateDatasource

> AUTHChangePasswordDefaultResponse updateDatasource(updateDatasourceRequest)

Updates an @see(ALDataSource) with the data which is provided.  Please note that the only properties which are relevant are IsEnabled, IsVisible, Name, LastRefresh and attributes.

Updates an @see(ALDataSource) with the data which is provided.  Please note that the only properties which are relevant are IsEnabled, IsVisible, Name, LastRefresh and attributes.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.DatasourcesApi();
let updateDatasourceRequest = new JourneyAnalyticsApi.UpdateDatasourceRequest(); // UpdateDatasourceRequest | Updates an @see(ALDataSource) with the data which is provided.  Please note that the only properties which are relevant are IsEnabled, IsVisible, Name, LastRefresh and attributes.
apiInstance.updateDatasource(updateDatasourceRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateDatasourceRequest** | [**UpdateDatasourceRequest**](UpdateDatasourceRequest.md)| Updates an @see(ALDataSource) with the data which is provided.  Please note that the only properties which are relevant are IsEnabled, IsVisible, Name, LastRefresh and attributes. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

