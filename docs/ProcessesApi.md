# JourneyAnalyticsApi.ProcessesApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProcessApplications**](ProcessesApi.md#getProcessApplications) | **POST** /GetProcessApplications | List all the applications that operate together to form the complete system. This list cannot be modified
[**getProcessEntries**](ProcessesApi.md#getProcessEntries) | **POST** /GetProcessEntries | Get the list of where each @see(ALProcessApplication) is currently located and it&#39;s last activity
[**updateProcessEntry**](ProcessesApi.md#updateProcessEntry) | **POST** /UpdateProcessEntry | Modify the location or settings of a particular instance of a @see(ALProcessApplication)



## getProcessApplications

> GetProcessApplicationsDefaultResponse getProcessApplications(getClientSetsRequest)

List all the applications that operate together to form the complete system. This list cannot be modified

List all the applications that operate together to form the complete system. This list cannot be modified

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.ProcessesApi();
let getClientSetsRequest = new JourneyAnalyticsApi.GetClientSetsRequest(); // GetClientSetsRequest | List all the applications that operate together to form the complete system. This list cannot be modified
apiInstance.getProcessApplications(getClientSetsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getClientSetsRequest** | [**GetClientSetsRequest**](GetClientSetsRequest.md)| List all the applications that operate together to form the complete system. This list cannot be modified | 

### Return type

[**GetProcessApplicationsDefaultResponse**](GetProcessApplicationsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getProcessEntries

> GetProcessEntriesDefaultResponse getProcessEntries(getProcessEntriesRequest)

Get the list of where each @see(ALProcessApplication) is currently located and it&#39;s last activity

Get the list of where each @see(ALProcessApplication) is currently located and it&#39;s last activity

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.ProcessesApi();
let getProcessEntriesRequest = new JourneyAnalyticsApi.GetProcessEntriesRequest(); // GetProcessEntriesRequest | Get the list of where each @see(ALProcessApplication) is currently located and it's last activity
apiInstance.getProcessEntries(getProcessEntriesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getProcessEntriesRequest** | [**GetProcessEntriesRequest**](GetProcessEntriesRequest.md)| Get the list of where each @see(ALProcessApplication) is currently located and it&#39;s last activity | 

### Return type

[**GetProcessEntriesDefaultResponse**](GetProcessEntriesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProcessEntry

> AUTHChangePasswordDefaultResponse updateProcessEntry(updateProcessEntryRequest)

Modify the location or settings of a particular instance of a @see(ALProcessApplication)

Modify the location or settings of a particular instance of a @see(ALProcessApplication)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.ProcessesApi();
let updateProcessEntryRequest = new JourneyAnalyticsApi.UpdateProcessEntryRequest(); // UpdateProcessEntryRequest | Modify the location or settings of a particular instance of a @see(ALProcessApplication)
apiInstance.updateProcessEntry(updateProcessEntryRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProcessEntryRequest** | [**UpdateProcessEntryRequest**](UpdateProcessEntryRequest.md)| Modify the location or settings of a particular instance of a @see(ALProcessApplication) | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

