# JourneyAnalyticsApi.PatternsApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPattern**](PatternsApi.md#createPattern) | **POST** /CreatePattern | Creates a Pattern definition to capture settings and record where any output is located. The actual detected patterns will not be populated until tasks are run against it
[**createPatternTasks**](PatternsApi.md#createPatternTasks) | **POST** /CreatePatternTasks | Creates a task to perform an action against a pattern definition
[**deletePattern**](PatternsApi.md#deletePattern) | **POST** /DeletePattern | Delete one or more pattern definitions
[**getPattern**](PatternsApi.md#getPattern) | **POST** /GetPattern | Get a pattern definition
[**getPatternRecords**](PatternsApi.md#getPatternRecords) | **POST** /GetPatternRecords | Get records from a pattern table
[**getPatternTasks**](PatternsApi.md#getPatternTasks) | **POST** /GetPatternTasks | Check on the status of pattern tasks
[**getPatterns**](PatternsApi.md#getPatterns) | **POST** /GetPatterns | Get one or more pattern definitions
[**getRepeatingPatternItemScores**](PatternsApi.md#getRepeatingPatternItemScores) | **POST** /GetRepeatingPatternItemScores | Gets the scores recorded against the underlying sequence items that are composed into patterns             Currently unscored items are returned with a zero score             Scores can either be recorded directly onto the Item labels themselves or they can be applied to the target labels (e.g. Journeys) that correspond to a specified decode &#39;alias&#39; transform that has been published to the pattern             and sits along-side the sequence item data
[**getRepeatingPatternItems**](PatternsApi.md#getRepeatingPatternItems) | **POST** /GetRepeatingPatternItems | Gets the underlying sequence items that can be composed into patterns along with any scores that have been used to calculate the MSI (direct or via decodes)             Initially, this will be all the distinct sequence items in the table             Once a pattern has been calculated and uploaded this will be filtered down to only those sequence items that appear in a pattern
[**requestCancelPatternTasks**](PatternsApi.md#requestCancelPatternTasks) | **POST** /RequestCancelPatternTasks | Requests cancellation of all tasks for a pattern. This may take some time to be actioned if the tasks are already running
[**updatePattern**](PatternsApi.md#updatePattern) | **POST** /UpdatePattern | Updates a Pattern definition.
[**updateRepeatingPatternItemScores**](PatternsApi.md#updateRepeatingPatternItemScores) | **POST** /UpdateRepeatingPatternItemScores | Update one or more of the scores maintained against the underlying sequence item labels that are composed into patterns             Scores can either be recorded directly onto the Item labels themselves or they can be applied to the target labels (e.g. Journeys) that correspond to a specified &#39;alias&#39; transform that sits along-side the sequence item data             Only one such decode alias can be scored at a time and when scores are applied they are applied from the alias first and then overridden with any score that has been stored againt the items themselves             If the scores are to be applied against a decode then its id and version must be specified             The scores are intended to denote the relative importance of items in a sequence. The label of the item with the highest score will serve as the overall label (MSI) for the sequence             Specifying zero for a score is the only way of &#39;unscoring&#39; it at present



## createPattern

> CreateClientDefaultResponse createPattern(createPatternRequest)

Creates a Pattern definition to capture settings and record where any output is located. The actual detected patterns will not be populated until tasks are run against it

Creates a Pattern definition to capture settings and record where any output is located. The actual detected patterns will not be populated until tasks are run against it

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PatternsApi();
let createPatternRequest = new JourneyAnalyticsApi.CreatePatternRequest(); // CreatePatternRequest | Creates a Pattern definition to capture settings and record where any output is located. The actual detected patterns will not be populated until tasks are run against it
apiInstance.createPattern(createPatternRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPatternRequest** | [**CreatePatternRequest**](CreatePatternRequest.md)| Creates a Pattern definition to capture settings and record where any output is located. The actual detected patterns will not be populated until tasks are run against it | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPatternTasks

> CreatePatternTasksDefaultResponse createPatternTasks(createPatternTasksRequest)

Creates a task to perform an action against a pattern definition

Creates a task to perform an action against a pattern definition

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PatternsApi();
let createPatternTasksRequest = new JourneyAnalyticsApi.CreatePatternTasksRequest(); // CreatePatternTasksRequest | Creates a task to perform an action against a pattern definition
apiInstance.createPatternTasks(createPatternTasksRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPatternTasksRequest** | [**CreatePatternTasksRequest**](CreatePatternTasksRequest.md)| Creates a task to perform an action against a pattern definition | 

### Return type

[**CreatePatternTasksDefaultResponse**](CreatePatternTasksDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePattern

> AUTHChangePasswordDefaultResponse deletePattern(deletePatternRequest)

Delete one or more pattern definitions

Delete one or more pattern definitions

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PatternsApi();
let deletePatternRequest = new JourneyAnalyticsApi.DeletePatternRequest(); // DeletePatternRequest | Delete one or more pattern definitions
apiInstance.deletePattern(deletePatternRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deletePatternRequest** | [**DeletePatternRequest**](DeletePatternRequest.md)| Delete one or more pattern definitions | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getPattern

> GetPatternDefaultResponse getPattern(getPatternRequest)

Get a pattern definition

Get a pattern definition

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PatternsApi();
let getPatternRequest = new JourneyAnalyticsApi.GetPatternRequest(); // GetPatternRequest | Get a pattern definition
apiInstance.getPattern(getPatternRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getPatternRequest** | [**GetPatternRequest**](GetPatternRequest.md)| Get a pattern definition | 

### Return type

[**GetPatternDefaultResponse**](GetPatternDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getPatternRecords

> GetEventRecordsDefaultResponse getPatternRecords(getPatternRecordsRequest)

Get records from a pattern table

Get records from a pattern table

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PatternsApi();
let getPatternRecordsRequest = new JourneyAnalyticsApi.GetPatternRecordsRequest(); // GetPatternRecordsRequest | Get records from a pattern table
apiInstance.getPatternRecords(getPatternRecordsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getPatternRecordsRequest** | [**GetPatternRecordsRequest**](GetPatternRecordsRequest.md)| Get records from a pattern table | 

### Return type

[**GetEventRecordsDefaultResponse**](GetEventRecordsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getPatternTasks

> CreatePatternTasksDefaultResponse getPatternTasks(getPatternTasksRequest)

Check on the status of pattern tasks

Check on the status of pattern tasks

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PatternsApi();
let getPatternTasksRequest = new JourneyAnalyticsApi.GetPatternTasksRequest(); // GetPatternTasksRequest | Check on the status of pattern tasks
apiInstance.getPatternTasks(getPatternTasksRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getPatternTasksRequest** | [**GetPatternTasksRequest**](GetPatternTasksRequest.md)| Check on the status of pattern tasks | 

### Return type

[**CreatePatternTasksDefaultResponse**](CreatePatternTasksDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getPatterns

> GetPatternsDefaultResponse getPatterns(getPatternsRequest)

Get one or more pattern definitions

Get one or more pattern definitions

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PatternsApi();
let getPatternsRequest = new JourneyAnalyticsApi.GetPatternsRequest(); // GetPatternsRequest | Get one or more pattern definitions
apiInstance.getPatterns(getPatternsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getPatternsRequest** | [**GetPatternsRequest**](GetPatternsRequest.md)| Get one or more pattern definitions | 

### Return type

[**GetPatternsDefaultResponse**](GetPatternsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRepeatingPatternItemScores

> GetRepeatingPatternItemScoresDefaultResponse getRepeatingPatternItemScores(getRepeatingPatternItemScoresRequest)

Gets the scores recorded against the underlying sequence items that are composed into patterns             Currently unscored items are returned with a zero score             Scores can either be recorded directly onto the Item labels themselves or they can be applied to the target labels (e.g. Journeys) that correspond to a specified decode &#39;alias&#39; transform that has been published to the pattern             and sits along-side the sequence item data

Gets the scores recorded against the underlying sequence items that are composed into patterns             Currently unscored items are returned with a zero score             Scores can either be recorded directly onto the Item labels themselves or they can be applied to the target labels (e.g. Journeys) that correspond to a specified decode &#39;alias&#39; transform that has been published to the pattern             and sits along-side the sequence item data

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PatternsApi();
let getRepeatingPatternItemScoresRequest = new JourneyAnalyticsApi.GetRepeatingPatternItemScoresRequest(); // GetRepeatingPatternItemScoresRequest | Gets the scores recorded against the underlying sequence items that are composed into patterns             Currently unscored items are returned with a zero score             Scores can either be recorded directly onto the Item labels themselves or they can be applied to the target labels (e.g. Journeys) that correspond to a specified decode 'alias' transform that has been published to the pattern             and sits along-side the sequence item data
apiInstance.getRepeatingPatternItemScores(getRepeatingPatternItemScoresRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getRepeatingPatternItemScoresRequest** | [**GetRepeatingPatternItemScoresRequest**](GetRepeatingPatternItemScoresRequest.md)| Gets the scores recorded against the underlying sequence items that are composed into patterns             Currently unscored items are returned with a zero score             Scores can either be recorded directly onto the Item labels themselves or they can be applied to the target labels (e.g. Journeys) that correspond to a specified decode &#39;alias&#39; transform that has been published to the pattern             and sits along-side the sequence item data | 

### Return type

[**GetRepeatingPatternItemScoresDefaultResponse**](GetRepeatingPatternItemScoresDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRepeatingPatternItems

> GetEventRecordsDefaultResponse getRepeatingPatternItems(getRepeatingPatternItemsRequest)

Gets the underlying sequence items that can be composed into patterns along with any scores that have been used to calculate the MSI (direct or via decodes)             Initially, this will be all the distinct sequence items in the table             Once a pattern has been calculated and uploaded this will be filtered down to only those sequence items that appear in a pattern

Gets the underlying sequence items that can be composed into patterns along with any scores that have been used to calculate the MSI (direct or via decodes)             Initially, this will be all the distinct sequence items in the table             Once a pattern has been calculated and uploaded this will be filtered down to only those sequence items that appear in a pattern

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PatternsApi();
let getRepeatingPatternItemsRequest = new JourneyAnalyticsApi.GetRepeatingPatternItemsRequest(); // GetRepeatingPatternItemsRequest | Gets the underlying sequence items that can be composed into patterns along with any scores that have been used to calculate the MSI (direct or via decodes)             Initially, this will be all the distinct sequence items in the table             Once a pattern has been calculated and uploaded this will be filtered down to only those sequence items that appear in a pattern
apiInstance.getRepeatingPatternItems(getRepeatingPatternItemsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getRepeatingPatternItemsRequest** | [**GetRepeatingPatternItemsRequest**](GetRepeatingPatternItemsRequest.md)| Gets the underlying sequence items that can be composed into patterns along with any scores that have been used to calculate the MSI (direct or via decodes)             Initially, this will be all the distinct sequence items in the table             Once a pattern has been calculated and uploaded this will be filtered down to only those sequence items that appear in a pattern | 

### Return type

[**GetEventRecordsDefaultResponse**](GetEventRecordsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## requestCancelPatternTasks

> AUTHChangePasswordDefaultResponse requestCancelPatternTasks(requestCancelPatternTasksRequest)

Requests cancellation of all tasks for a pattern. This may take some time to be actioned if the tasks are already running

Requests cancellation of all tasks for a pattern. This may take some time to be actioned if the tasks are already running

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PatternsApi();
let requestCancelPatternTasksRequest = new JourneyAnalyticsApi.RequestCancelPatternTasksRequest(); // RequestCancelPatternTasksRequest | Requests cancellation of all tasks for a pattern. This may take some time to be actioned if the tasks are already running
apiInstance.requestCancelPatternTasks(requestCancelPatternTasksRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestCancelPatternTasksRequest** | [**RequestCancelPatternTasksRequest**](RequestCancelPatternTasksRequest.md)| Requests cancellation of all tasks for a pattern. This may take some time to be actioned if the tasks are already running | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePattern

> AUTHChangePasswordDefaultResponse updatePattern(updatePatternRequest)

Updates a Pattern definition.

Updates a Pattern definition.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PatternsApi();
let updatePatternRequest = new JourneyAnalyticsApi.UpdatePatternRequest(); // UpdatePatternRequest | Updates a Pattern definition.
apiInstance.updatePattern(updatePatternRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePatternRequest** | [**UpdatePatternRequest**](UpdatePatternRequest.md)| Updates a Pattern definition. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRepeatingPatternItemScores

> AUTHChangePasswordDefaultResponse updateRepeatingPatternItemScores(updateRepeatingPatternItemScoresRequest)

Update one or more of the scores maintained against the underlying sequence item labels that are composed into patterns             Scores can either be recorded directly onto the Item labels themselves or they can be applied to the target labels (e.g. Journeys) that correspond to a specified &#39;alias&#39; transform that sits along-side the sequence item data             Only one such decode alias can be scored at a time and when scores are applied they are applied from the alias first and then overridden with any score that has been stored againt the items themselves             If the scores are to be applied against a decode then its id and version must be specified             The scores are intended to denote the relative importance of items in a sequence. The label of the item with the highest score will serve as the overall label (MSI) for the sequence             Specifying zero for a score is the only way of &#39;unscoring&#39; it at present

Update one or more of the scores maintained against the underlying sequence item labels that are composed into patterns             Scores can either be recorded directly onto the Item labels themselves or they can be applied to the target labels (e.g. Journeys) that correspond to a specified &#39;alias&#39; transform that sits along-side the sequence item data             Only one such decode alias can be scored at a time and when scores are applied they are applied from the alias first and then overridden with any score that has been stored againt the items themselves             If the scores are to be applied against a decode then its id and version must be specified             The scores are intended to denote the relative importance of items in a sequence. The label of the item with the highest score will serve as the overall label (MSI) for the sequence             Specifying zero for a score is the only way of &#39;unscoring&#39; it at present

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PatternsApi();
let updateRepeatingPatternItemScoresRequest = new JourneyAnalyticsApi.UpdateRepeatingPatternItemScoresRequest(); // UpdateRepeatingPatternItemScoresRequest | Update one or more of the scores maintained against the underlying sequence item labels that are composed into patterns             Scores can either be recorded directly onto the Item labels themselves or they can be applied to the target labels (e.g. Journeys) that correspond to a specified 'alias' transform that sits along-side the sequence item data             Only one such decode alias can be scored at a time and when scores are applied they are applied from the alias first and then overridden with any score that has been stored againt the items themselves             If the scores are to be applied against a decode then its id and version must be specified             The scores are intended to denote the relative importance of items in a sequence. The label of the item with the highest score will serve as the overall label (MSI) for the sequence             Specifying zero for a score is the only way of 'unscoring' it at present
apiInstance.updateRepeatingPatternItemScores(updateRepeatingPatternItemScoresRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateRepeatingPatternItemScoresRequest** | [**UpdateRepeatingPatternItemScoresRequest**](UpdateRepeatingPatternItemScoresRequest.md)| Update one or more of the scores maintained against the underlying sequence item labels that are composed into patterns             Scores can either be recorded directly onto the Item labels themselves or they can be applied to the target labels (e.g. Journeys) that correspond to a specified &#39;alias&#39; transform that sits along-side the sequence item data             Only one such decode alias can be scored at a time and when scores are applied they are applied from the alias first and then overridden with any score that has been stored againt the items themselves             If the scores are to be applied against a decode then its id and version must be specified             The scores are intended to denote the relative importance of items in a sequence. The label of the item with the highest score will serve as the overall label (MSI) for the sequence             Specifying zero for a score is the only way of &#39;unscoring&#39; it at present | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

