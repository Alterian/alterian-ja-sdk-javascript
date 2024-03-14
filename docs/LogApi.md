# JourneyAnalyticsApi.LogApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadAlerts**](LogApi.md#downloadAlerts) | **GET** /DownloadAlerts | Returns back an excel file containing the alert log entries for a particular client



## downloadAlerts

> File downloadAlerts(opts)

Returns back an excel file containing the alert log entries for a particular client

Returns back an excel file containing the alert log entries for a particular client

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.LogApi();
let opts = {
  'clientId': 56, // Number | 
  'from': 56, // Number | 
  'sortDesc': true, // Boolean | 
  'sortProperty': "sortProperty_example", // String | 
  'to': 56 // Number | 
};
apiInstance.downloadAlerts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**|  | [optional] 
 **from** | **Number**|  | [optional] 
 **sortDesc** | **Boolean**|  | [optional] 
 **sortProperty** | **String**|  | [optional] 
 **to** | **Number**|  | [optional] 

### Return type

**File**

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet

