# JourneyAnalyticsApi.EventStreamsApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChannel**](EventStreamsApi.md#createChannel) | **POST** /CreateChannel | Create a channel colour mapping
[**createEventStream**](EventStreamsApi.md#createEventStream) | **POST** /CreateEventStream | Creates an event stream, including a datasource and a DDE queue
[**createEventStreamGroup**](EventStreamsApi.md#createEventStreamGroup) | **POST** /CreateEventStreamGroup | Creates an event stream group, including a datasource and a DDE queue for each target (dev/test/prod)
[**createIdealisedJourney**](EventStreamsApi.md#createIdealisedJourney) | **POST** /CreateIdealisedJourney | Create an Idealised Journey
[**createSankeyFavourite**](EventStreamsApi.md#createSankeyFavourite) | **POST** /CreateSankeyFavourite | Create a Sankey Favourite
[**createVisualisationFavourite**](EventStreamsApi.md#createVisualisationFavourite) | **POST** /CreateVisualisationFavourite | Create a Visualisation Favourite
[**deleteChannel**](EventStreamsApi.md#deleteChannel) | **POST** /DeleteChannel | Removed a channel and its associated colour from the channel list.
[**deleteEventStream**](EventStreamsApi.md#deleteEventStream) | **POST** /DeleteEventStream | Removes an event stream from the system, optionally purging and deleting the corresponding queue in DDE.  Also can delete the underlying data store if the number of rows in the data store is less than the number provided
[**deleteEventStreamCustomerColumns**](EventStreamsApi.md#deleteEventStreamCustomerColumns) | **POST** /DeleteEventStreamCustomerColumns | Mark for deletion the specified customer attribute columns for an @see(EventStream).             NOTE THAT THE ASSOCIATED ENGINE COLUMN AND DDE CACHE COLUMN WILL BE DELETED AND ANY DATA LOST PERMANENTLY.             Deletion of the column from Engine and the DDE cache is not synchronous so attempts to recreate the column may fail initially and require a different name to be specified.             Once marked for deletion the columns no longer contribute to the cap imposed by the max number of allowed columns.
[**deleteEventStreamCustomerColumnsFromGroup**](EventStreamsApi.md#deleteEventStreamCustomerColumnsFromGroup) | **POST** /DeleteEventStreamCustomerColumnsFromGroup | Mark for deletion the specified customer attribute columns for all @see(EventStream)s in a group.             NOTE THAT THE ASSOCIATED ENGINE COLUMN AND DDE CACHE COLUMN WILL BE DELETED AND ANY DATA LOST PERMANENTLY.             Deletion of the column from Engine and the DDE cache is not synchronous so attempts to recreate the column may fail initially and require a different name to be specified.             Once marked for deletion the columns no longer contribute to the cap imposed by the max number of allowed columns.
[**deleteEventStreamGroup**](EventStreamsApi.md#deleteEventStreamGroup) | **POST** /DeleteEventStreamGroup | Removes a group of event streams from the system, optionally purging and deleting the corresponding queues in DDE.
[**deleteIdealisedJourney**](EventStreamsApi.md#deleteIdealisedJourney) | **POST** /DeleteIdealisedJourney | Delete Idealised Journey&#39;s
[**deleteSankeyFavourites**](EventStreamsApi.md#deleteSankeyFavourites) | **POST** /DeleteSankeyFavourites | Delete a sankey favourite
[**deleteVisualisationFavourites**](EventStreamsApi.md#deleteVisualisationFavourites) | **POST** /DeleteVisualisationFavourites | Delete Visualisation favourite(s)
[**exportEventStreamInteraction**](EventStreamsApi.md#exportEventStreamInteraction) | **POST** /ExportEventStreamInteraction | Exports the domain of a particular node to return a sample of the CXID (VisitorId) values.             To get the results for \&quot;other\&quot; events pass all displayed events and set &#39;IncludeMatchedEvents&#39; to False.
[**getChannels**](EventStreamsApi.md#getChannels) | **POST** /GetChannels | Return back a list of channels and their associated colours
[**getEventRecords**](EventStreamsApi.md#getEventRecords) | **POST** /GetEventRecords | Obtain the event records from an event stream table that match the specified key
[**getEventStream**](EventStreamsApi.md#getEventStream) | **POST** /GetEventStream | Return back the full details of an @see(EventStream).  Ids are available from @see(GetEventStreams)
[**getEventStreamAggregates**](EventStreamsApi.md#getEventStreamAggregates) | **POST** /GetEventStreamAggregates | Get aggregate stats for an Event Stream.              Currently only supported for JD snapshots (simply because traditional sankey snapshots won&#39;t have the financial columns yet)
[**getEventStreamChannels**](EventStreamsApi.md#getEventStreamChannels) | **POST** /GetEventStreamChannels | Requests a list of the channels which the event stream has received.  Use this list to create channel colour mappings @see(CreateChannel).  Use @see(GetEventStreams) for a list of the available @see(EventStream)s
[**getEventStreamDecodeMappings**](EventStreamsApi.md#getEventStreamDecodeMappings) | **POST** /GetEventStreamDecodeMappings | Given an event stream this API will take an event stream column, sample the data using the specified dates, apply any published transform and then return a cursored list of the labels taking account any decodes that may have been specified             Note that this API does not use any published decode information, if a decode list is to be applied then it should be specified explicitly
[**getEventStreamDecodeTargetDiscretes**](EventStreamsApi.md#getEventStreamDecodeTargetDiscretes) | **POST** /GetEventStreamDecodeTargetDiscretes | Given an event stream this API will take an event stream column, sample the data using the specified dates, apply any published transform and then return a list of all the currently configured decode targets along with any counts             If a target does not appear in the sampled data it will be returned with a count of zero so it can be optionally filtered out of any picklist
[**getEventStreamDiscreteValues**](EventStreamsApi.md#getEventStreamDiscreteValues) | **POST** /GetEventStreamDiscreteValues | Obtain discrete values from an event stream table             Supports use of a snapshot table which should reduce the chances of us blowing the Engine discrete limit.             The first parameters constitute the sankey filters and thereby the starting set for discretes             It will also allow us to filter the values by the specified discrete filters             If the sankey filters return no data then an execption is thrown stating that \&quot;No data is available for the specified filters\&quot; as this is probably not what the user wants             If the discretes filter suppresses out all data in the sankey then no exception is raised but zero totals are returned
[**getEventStreamModels**](EventStreamsApi.md#getEventStreamModels) | **POST** /GetEventStreamModels | Retrieve available models
[**getEventStreams**](EventStreamsApi.md#getEventStreams) | **POST** /GetEventStreams | Returns back a list of event streams which exist in the system
[**getFieldTransformationDiscreteValues**](EventStreamsApi.md#getFieldTransformationDiscreteValues) | **POST** /GetFieldTransformationDiscreteValues | Apply a list of transforms to the discrete values of a column and return the new set of values and their frequencies             If JSONTransforms is not supplied then the results will simply be the discrete values present in the source column after any sample has been applied
[**getFieldTransformationMappings**](EventStreamsApi.md#getFieldTransformationMappings) | **POST** /GetFieldTransformationMappings | Apply a list of transforms and return information about the transformed value and frequency for each item in the starting set of values             If JSONCompareTransforms is specified then the starting set of values is the result of first applying these to these to the specified column             If JSONCompareTransforms is not specified then the starting set of values is the actual discrete values present in the column
[**getIdealisedJourneys**](EventStreamsApi.md#getIdealisedJourneys) | **POST** /GetIdealisedJourneys | Retrieve a list of Idealised Journeys
[**getSankeyFavourites**](EventStreamsApi.md#getSankeyFavourites) | **POST** /GetSankeyFavourites | Retrieve a list of Sankey Favourites
[**getVisualisationFavourites**](EventStreamsApi.md#getVisualisationFavourites) | **POST** /GetVisualisationFavourites | Retrieve a list of Visualisation Favourites
[**queryEventStream**](EventStreamsApi.md#queryEventStream) | **POST** /QueryEventStream | Queries the domain of selected event records that is represented by the date and event type filters, returning the list of events and graph of transition streams along with frequency counts.             Transitions will specify start and end points using indices into the list of events, along with some special values.             The &#39;Drop off&#39; points where a stream ends will be assigned an index of -1.             Any transition to an event that does not fall into the TopN specification will be assigned to an &#39;other events&#39; category with an index of -2.             Right aligned streams will be left-padded up to the MaxLength specification using a &#39;no event&#39; category with an index of -3.             If timeout events are required then the start of the sequence leading up to a timeout will be flagged with an index of -4 and the end with an index of -5.
[**queryEventStreamCount**](EventStreamsApi.md#queryEventStreamCount) | **POST** /QueryEventStreamCount | Take the domain of selected event records that is represented by the date filters, and count streams matching the agreed patterns represented by the CountType parameter
[**queryEventStreamInteraction**](EventStreamsApi.md#queryEventStreamInteraction) | **POST** /QueryEventStreamInteraction | Queries the domain of a particular node to return a sample of the CXID (VisitorId) values.             To get the results for \&quot;other\&quot; events pass all displayed events and set &#39;IncludeMatchedEvents&#39; to False.
[**queryEventStreamTransition**](EventStreamsApi.md#queryEventStreamTransition) | **POST** /QueryEventStreamTransition | Queries the domain from a particular node to another node to return a sample of the CXID (VisitorId) values.             To get the results for \&quot;other\&quot; events pass all displayed events and set &#39;IncludeMatchedEventsFrom&#39; / IncludeMatchedEventsTo to False.
[**runSequencePredictor**](EventStreamsApi.md#runSequencePredictor) | **POST** /RunSequencePredictor | Train and employ sequence prediction models for an event stream
[**updateChannel**](EventStreamsApi.md#updateChannel) | **POST** /UpdateChannel | Updates a channel, allowing you to change the name and colour
[**updateEventStreamFieldTransformLists**](EventStreamsApi.md#updateEventStreamFieldTransformLists) | **POST** /UpdateEventStreamFieldTransformLists | Publishes the specified transforms to the corresponding event stream columns             Any existing list for a column that matches on Transform Type and Alias will be replaced
[**updateIdealisedJourney**](EventStreamsApi.md#updateIdealisedJourney) | **POST** /UpdateIdealisedJourney | Update an Idealised Journey
[**updateSankeyFavourite**](EventStreamsApi.md#updateSankeyFavourite) | **POST** /UpdateSankeyFavourite | Update a SankeyFavourite
[**updateVisualisationFavourite**](EventStreamsApi.md#updateVisualisationFavourite) | **POST** /UpdateVisualisationFavourite | Update a Visualisation Favourite
[**upsertEventStreamCustomerColumns**](EventStreamsApi.md#upsertEventStreamCustomerColumns) | **POST** /UpsertEventStreamCustomerColumns | Add or update customer attribute columns for an @see(EventStream).             Only updates to column width (that are atomic and have no truncation risk) are currenty supported.              Width only needs to be specified for text or unicode columns.              The number of allowed columns is capped.              Customer attribute columns must maintain discrete cardinality to be used in the Sankey.              Names must meet Engine naming requirements.
[**upsertEventStreamCustomerColumnsToGroup**](EventStreamsApi.md#upsertEventStreamCustomerColumnsToGroup) | **POST** /UpsertEventStreamCustomerColumnsToGroup | Add or update customer attribute columns to the @see(EventStream)s in a group.             Only updates to column width (that are atomic and have no truncation risk) are currenty supported.              Width only needs to be specified for text or unicode columns.              The number of allowed columns is capped.              Customer attribute columns must maintain discrete cardinality to be used in the Sankey.              Names must meet Engine naming requirements.             There is some latency (up to 5 mins) between a column being created and the queue service starting to read the data unless the queue service is restarted



## createChannel

> CreateClientDefaultResponse createChannel(createChannelRequest)

Create a channel colour mapping

Create a channel colour mapping

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let createChannelRequest = new JourneyAnalyticsApi.CreateChannelRequest(); // CreateChannelRequest | Create a channel colour mapping
apiInstance.createChannel(createChannelRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createChannelRequest** | [**CreateChannelRequest**](CreateChannelRequest.md)| Create a channel colour mapping | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createEventStream

> CreateClientDefaultResponse createEventStream(createEventStreamRequest)

Creates an event stream, including a datasource and a DDE queue

Creates an event stream, including a datasource and a DDE queue

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let createEventStreamRequest = new JourneyAnalyticsApi.CreateEventStreamRequest(); // CreateEventStreamRequest | Creates an event stream, including a datasource and a DDE queue
apiInstance.createEventStream(createEventStreamRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEventStreamRequest** | [**CreateEventStreamRequest**](CreateEventStreamRequest.md)| Creates an event stream, including a datasource and a DDE queue | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createEventStreamGroup

> CreateClientDefaultResponse createEventStreamGroup(createEventStreamGroupRequest)

Creates an event stream group, including a datasource and a DDE queue for each target (dev/test/prod)

Creates an event stream group, including a datasource and a DDE queue for each target (dev/test/prod)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let createEventStreamGroupRequest = new JourneyAnalyticsApi.CreateEventStreamGroupRequest(); // CreateEventStreamGroupRequest | Creates an event stream group, including a datasource and a DDE queue for each target (dev/test/prod)
apiInstance.createEventStreamGroup(createEventStreamGroupRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEventStreamGroupRequest** | [**CreateEventStreamGroupRequest**](CreateEventStreamGroupRequest.md)| Creates an event stream group, including a datasource and a DDE queue for each target (dev/test/prod) | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createIdealisedJourney

> CreateClientDefaultResponse createIdealisedJourney(createIdealisedJourneyRequest)

Create an Idealised Journey

Create an Idealised Journey

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let createIdealisedJourneyRequest = new JourneyAnalyticsApi.CreateIdealisedJourneyRequest(); // CreateIdealisedJourneyRequest | Create an Idealised Journey
apiInstance.createIdealisedJourney(createIdealisedJourneyRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createIdealisedJourneyRequest** | [**CreateIdealisedJourneyRequest**](CreateIdealisedJourneyRequest.md)| Create an Idealised Journey | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSankeyFavourite

> CreateClientDefaultResponse createSankeyFavourite(createSankeyFavouriteRequest)

Create a Sankey Favourite

Create a Sankey Favourite

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let createSankeyFavouriteRequest = new JourneyAnalyticsApi.CreateSankeyFavouriteRequest(); // CreateSankeyFavouriteRequest | Create a Sankey Favourite
apiInstance.createSankeyFavourite(createSankeyFavouriteRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSankeyFavouriteRequest** | [**CreateSankeyFavouriteRequest**](CreateSankeyFavouriteRequest.md)| Create a Sankey Favourite | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createVisualisationFavourite

> CreateClientDefaultResponse createVisualisationFavourite(createVisualisationFavouriteRequest)

Create a Visualisation Favourite

Create a Visualisation Favourite

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let createVisualisationFavouriteRequest = new JourneyAnalyticsApi.CreateVisualisationFavouriteRequest(); // CreateVisualisationFavouriteRequest | Create a Visualisation Favourite
apiInstance.createVisualisationFavourite(createVisualisationFavouriteRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createVisualisationFavouriteRequest** | [**CreateVisualisationFavouriteRequest**](CreateVisualisationFavouriteRequest.md)| Create a Visualisation Favourite | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteChannel

> AUTHChangePasswordDefaultResponse deleteChannel(deleteChannelRequest)

Removed a channel and its associated colour from the channel list.

Removed a channel and its associated colour from the channel list.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let deleteChannelRequest = new JourneyAnalyticsApi.DeleteChannelRequest(); // DeleteChannelRequest | Removed a channel and its associated colour from the channel list.
apiInstance.deleteChannel(deleteChannelRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteChannelRequest** | [**DeleteChannelRequest**](DeleteChannelRequest.md)| Removed a channel and its associated colour from the channel list. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEventStream

> AUTHChangePasswordDefaultResponse deleteEventStream(deleteEventStreamRequest)

Removes an event stream from the system, optionally purging and deleting the corresponding queue in DDE.  Also can delete the underlying data store if the number of rows in the data store is less than the number provided

Removes an event stream from the system, optionally purging and deleting the corresponding queue in DDE.  Also can delete the underlying data store if the number of rows in the data store is less than the number provided

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let deleteEventStreamRequest = new JourneyAnalyticsApi.DeleteEventStreamRequest(); // DeleteEventStreamRequest | Removes an event stream from the system, optionally purging and deleting the corresponding queue in DDE.  Also can delete the underlying data store if the number of rows in the data store is less than the number provided
apiInstance.deleteEventStream(deleteEventStreamRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteEventStreamRequest** | [**DeleteEventStreamRequest**](DeleteEventStreamRequest.md)| Removes an event stream from the system, optionally purging and deleting the corresponding queue in DDE.  Also can delete the underlying data store if the number of rows in the data store is less than the number provided | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEventStreamCustomerColumns

> AUTHChangePasswordDefaultResponse deleteEventStreamCustomerColumns(deleteEventStreamCustomerColumnsRequest)

Mark for deletion the specified customer attribute columns for an @see(EventStream).             NOTE THAT THE ASSOCIATED ENGINE COLUMN AND DDE CACHE COLUMN WILL BE DELETED AND ANY DATA LOST PERMANENTLY.             Deletion of the column from Engine and the DDE cache is not synchronous so attempts to recreate the column may fail initially and require a different name to be specified.             Once marked for deletion the columns no longer contribute to the cap imposed by the max number of allowed columns.

Mark for deletion the specified customer attribute columns for an @see(EventStream).             NOTE THAT THE ASSOCIATED ENGINE COLUMN AND DDE CACHE COLUMN WILL BE DELETED AND ANY DATA LOST PERMANENTLY.             Deletion of the column from Engine and the DDE cache is not synchronous so attempts to recreate the column may fail initially and require a different name to be specified.             Once marked for deletion the columns no longer contribute to the cap imposed by the max number of allowed columns.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let deleteEventStreamCustomerColumnsRequest = new JourneyAnalyticsApi.DeleteEventStreamCustomerColumnsRequest(); // DeleteEventStreamCustomerColumnsRequest | Mark for deletion the specified customer attribute columns for an @see(EventStream).             NOTE THAT THE ASSOCIATED ENGINE COLUMN AND DDE CACHE COLUMN WILL BE DELETED AND ANY DATA LOST PERMANENTLY.             Deletion of the column from Engine and the DDE cache is not synchronous so attempts to recreate the column may fail initially and require a different name to be specified.             Once marked for deletion the columns no longer contribute to the cap imposed by the max number of allowed columns.
apiInstance.deleteEventStreamCustomerColumns(deleteEventStreamCustomerColumnsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteEventStreamCustomerColumnsRequest** | [**DeleteEventStreamCustomerColumnsRequest**](DeleteEventStreamCustomerColumnsRequest.md)| Mark for deletion the specified customer attribute columns for an @see(EventStream).             NOTE THAT THE ASSOCIATED ENGINE COLUMN AND DDE CACHE COLUMN WILL BE DELETED AND ANY DATA LOST PERMANENTLY.             Deletion of the column from Engine and the DDE cache is not synchronous so attempts to recreate the column may fail initially and require a different name to be specified.             Once marked for deletion the columns no longer contribute to the cap imposed by the max number of allowed columns. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEventStreamCustomerColumnsFromGroup

> AUTHChangePasswordDefaultResponse deleteEventStreamCustomerColumnsFromGroup(deleteEventStreamCustomerColumnsFromGroupRequest)

Mark for deletion the specified customer attribute columns for all @see(EventStream)s in a group.             NOTE THAT THE ASSOCIATED ENGINE COLUMN AND DDE CACHE COLUMN WILL BE DELETED AND ANY DATA LOST PERMANENTLY.             Deletion of the column from Engine and the DDE cache is not synchronous so attempts to recreate the column may fail initially and require a different name to be specified.             Once marked for deletion the columns no longer contribute to the cap imposed by the max number of allowed columns.

Mark for deletion the specified customer attribute columns for all @see(EventStream)s in a group.             NOTE THAT THE ASSOCIATED ENGINE COLUMN AND DDE CACHE COLUMN WILL BE DELETED AND ANY DATA LOST PERMANENTLY.             Deletion of the column from Engine and the DDE cache is not synchronous so attempts to recreate the column may fail initially and require a different name to be specified.             Once marked for deletion the columns no longer contribute to the cap imposed by the max number of allowed columns.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let deleteEventStreamCustomerColumnsFromGroupRequest = new JourneyAnalyticsApi.DeleteEventStreamCustomerColumnsFromGroupRequest(); // DeleteEventStreamCustomerColumnsFromGroupRequest | Mark for deletion the specified customer attribute columns for all @see(EventStream)s in a group.             NOTE THAT THE ASSOCIATED ENGINE COLUMN AND DDE CACHE COLUMN WILL BE DELETED AND ANY DATA LOST PERMANENTLY.             Deletion of the column from Engine and the DDE cache is not synchronous so attempts to recreate the column may fail initially and require a different name to be specified.             Once marked for deletion the columns no longer contribute to the cap imposed by the max number of allowed columns.
apiInstance.deleteEventStreamCustomerColumnsFromGroup(deleteEventStreamCustomerColumnsFromGroupRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteEventStreamCustomerColumnsFromGroupRequest** | [**DeleteEventStreamCustomerColumnsFromGroupRequest**](DeleteEventStreamCustomerColumnsFromGroupRequest.md)| Mark for deletion the specified customer attribute columns for all @see(EventStream)s in a group.             NOTE THAT THE ASSOCIATED ENGINE COLUMN AND DDE CACHE COLUMN WILL BE DELETED AND ANY DATA LOST PERMANENTLY.             Deletion of the column from Engine and the DDE cache is not synchronous so attempts to recreate the column may fail initially and require a different name to be specified.             Once marked for deletion the columns no longer contribute to the cap imposed by the max number of allowed columns. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEventStreamGroup

> AUTHChangePasswordDefaultResponse deleteEventStreamGroup(deleteEventStreamGroupRequest)

Removes a group of event streams from the system, optionally purging and deleting the corresponding queues in DDE.

Removes a group of event streams from the system, optionally purging and deleting the corresponding queues in DDE.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let deleteEventStreamGroupRequest = new JourneyAnalyticsApi.DeleteEventStreamGroupRequest(); // DeleteEventStreamGroupRequest | Removes a group of event streams from the system, optionally purging and deleting the corresponding queues in DDE.
apiInstance.deleteEventStreamGroup(deleteEventStreamGroupRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteEventStreamGroupRequest** | [**DeleteEventStreamGroupRequest**](DeleteEventStreamGroupRequest.md)| Removes a group of event streams from the system, optionally purging and deleting the corresponding queues in DDE. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteIdealisedJourney

> AUTHChangePasswordDefaultResponse deleteIdealisedJourney(deleteIdealisedJourneyRequest)

Delete Idealised Journey&#39;s

Delete Idealised Journey&#39;s

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let deleteIdealisedJourneyRequest = new JourneyAnalyticsApi.DeleteIdealisedJourneyRequest(); // DeleteIdealisedJourneyRequest | Delete Idealised Journey's
apiInstance.deleteIdealisedJourney(deleteIdealisedJourneyRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteIdealisedJourneyRequest** | [**DeleteIdealisedJourneyRequest**](DeleteIdealisedJourneyRequest.md)| Delete Idealised Journey&#39;s | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSankeyFavourites

> AUTHChangePasswordDefaultResponse deleteSankeyFavourites(deleteSankeyFavouritesRequest)

Delete a sankey favourite

Delete a sankey favourite

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let deleteSankeyFavouritesRequest = new JourneyAnalyticsApi.DeleteSankeyFavouritesRequest(); // DeleteSankeyFavouritesRequest | Delete a sankey favourite
apiInstance.deleteSankeyFavourites(deleteSankeyFavouritesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteSankeyFavouritesRequest** | [**DeleteSankeyFavouritesRequest**](DeleteSankeyFavouritesRequest.md)| Delete a sankey favourite | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteVisualisationFavourites

> AUTHChangePasswordDefaultResponse deleteVisualisationFavourites(deleteVisualisationFavouritesRequest)

Delete Visualisation favourite(s)

Delete Visualisation favourite(s)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let deleteVisualisationFavouritesRequest = new JourneyAnalyticsApi.DeleteVisualisationFavouritesRequest(); // DeleteVisualisationFavouritesRequest | Delete Visualisation favourite(s)
apiInstance.deleteVisualisationFavourites(deleteVisualisationFavouritesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteVisualisationFavouritesRequest** | [**DeleteVisualisationFavouritesRequest**](DeleteVisualisationFavouritesRequest.md)| Delete Visualisation favourite(s) | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## exportEventStreamInteraction

> File exportEventStreamInteraction(exportEventStreamInteractionRequest)

Exports the domain of a particular node to return a sample of the CXID (VisitorId) values.             To get the results for \&quot;other\&quot; events pass all displayed events and set &#39;IncludeMatchedEvents&#39; to False.

Exports the domain of a particular node to return a sample of the CXID (VisitorId) values.             To get the results for \&quot;other\&quot; events pass all displayed events and set &#39;IncludeMatchedEvents&#39; to False.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let exportEventStreamInteractionRequest = new JourneyAnalyticsApi.ExportEventStreamInteractionRequest(); // ExportEventStreamInteractionRequest | Exports the domain of a particular node to return a sample of the CXID (VisitorId) values.             To get the results for \"other\" events pass all displayed events and set 'IncludeMatchedEvents' to False.
apiInstance.exportEventStreamInteraction(exportEventStreamInteractionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportEventStreamInteractionRequest** | [**ExportEventStreamInteractionRequest**](ExportEventStreamInteractionRequest.md)| Exports the domain of a particular node to return a sample of the CXID (VisitorId) values.             To get the results for \&quot;other\&quot; events pass all displayed events and set &#39;IncludeMatchedEvents&#39; to False. | 

### Return type

**File**

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getChannels

> GetChannelsDefaultResponse getChannels()

Return back a list of channels and their associated colours

Return back a list of channels and their associated colours

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
apiInstance.getChannels().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetChannelsDefaultResponse**](GetChannelsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventRecords

> GetEventRecordsDefaultResponse getEventRecords(getEventRecordsRequest)

Obtain the event records from an event stream table that match the specified key

Obtain the event records from an event stream table that match the specified key

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let getEventRecordsRequest = new JourneyAnalyticsApi.GetEventRecordsRequest(); // GetEventRecordsRequest | Obtain the event records from an event stream table that match the specified key
apiInstance.getEventRecords(getEventRecordsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getEventRecordsRequest** | [**GetEventRecordsRequest**](GetEventRecordsRequest.md)| Obtain the event records from an event stream table that match the specified key | 

### Return type

[**GetEventRecordsDefaultResponse**](GetEventRecordsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEventStream

> GetEventStreamDefaultResponse getEventStream(getEventStreamRequest)

Return back the full details of an @see(EventStream).  Ids are available from @see(GetEventStreams)

Return back the full details of an @see(EventStream).  Ids are available from @see(GetEventStreams)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let getEventStreamRequest = new JourneyAnalyticsApi.GetEventStreamRequest(); // GetEventStreamRequest | Return back the full details of an @see(EventStream).  Ids are available from @see(GetEventStreams)
apiInstance.getEventStream(getEventStreamRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getEventStreamRequest** | [**GetEventStreamRequest**](GetEventStreamRequest.md)| Return back the full details of an @see(EventStream).  Ids are available from @see(GetEventStreams) | 

### Return type

[**GetEventStreamDefaultResponse**](GetEventStreamDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEventStreamAggregates

> GetEventRecordsDefaultResponse getEventStreamAggregates(getEventStreamAggregatesRequest)

Get aggregate stats for an Event Stream.              Currently only supported for JD snapshots (simply because traditional sankey snapshots won&#39;t have the financial columns yet)

Get aggregate stats for an Event Stream.              Currently only supported for JD snapshots (simply because traditional sankey snapshots won&#39;t have the financial columns yet)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let getEventStreamAggregatesRequest = new JourneyAnalyticsApi.GetEventStreamAggregatesRequest(); // GetEventStreamAggregatesRequest | Get aggregate stats for an Event Stream.              Currently only supported for JD snapshots (simply because traditional sankey snapshots won't have the financial columns yet)
apiInstance.getEventStreamAggregates(getEventStreamAggregatesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getEventStreamAggregatesRequest** | [**GetEventStreamAggregatesRequest**](GetEventStreamAggregatesRequest.md)| Get aggregate stats for an Event Stream.              Currently only supported for JD snapshots (simply because traditional sankey snapshots won&#39;t have the financial columns yet) | 

### Return type

[**GetEventRecordsDefaultResponse**](GetEventRecordsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEventStreamChannels

> GetDataSourceUsersDefaultResponse getEventStreamChannels(getEventStreamChannelsRequest)

Requests a list of the channels which the event stream has received.  Use this list to create channel colour mappings @see(CreateChannel).  Use @see(GetEventStreams) for a list of the available @see(EventStream)s

Requests a list of the channels which the event stream has received.  Use this list to create channel colour mappings @see(CreateChannel).  Use @see(GetEventStreams) for a list of the available @see(EventStream)s

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let getEventStreamChannelsRequest = new JourneyAnalyticsApi.GetEventStreamChannelsRequest(); // GetEventStreamChannelsRequest | Requests a list of the channels which the event stream has received.  Use this list to create channel colour mappings @see(CreateChannel).  Use @see(GetEventStreams) for a list of the available @see(EventStream)s
apiInstance.getEventStreamChannels(getEventStreamChannelsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getEventStreamChannelsRequest** | [**GetEventStreamChannelsRequest**](GetEventStreamChannelsRequest.md)| Requests a list of the channels which the event stream has received.  Use this list to create channel colour mappings @see(CreateChannel).  Use @see(GetEventStreams) for a list of the available @see(EventStream)s | 

### Return type

[**GetDataSourceUsersDefaultResponse**](GetDataSourceUsersDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEventStreamDecodeMappings

> GetEventStreamDecodeMappingsDefaultResponse getEventStreamDecodeMappings(getEventStreamDecodeMappingsRequest)

Given an event stream this API will take an event stream column, sample the data using the specified dates, apply any published transform and then return a cursored list of the labels taking account any decodes that may have been specified             Note that this API does not use any published decode information, if a decode list is to be applied then it should be specified explicitly

Given an event stream this API will take an event stream column, sample the data using the specified dates, apply any published transform and then return a cursored list of the labels taking account any decodes that may have been specified             Note that this API does not use any published decode information, if a decode list is to be applied then it should be specified explicitly

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let getEventStreamDecodeMappingsRequest = new JourneyAnalyticsApi.GetEventStreamDecodeMappingsRequest(); // GetEventStreamDecodeMappingsRequest | Given an event stream this API will take an event stream column, sample the data using the specified dates, apply any published transform and then return a cursored list of the labels taking account any decodes that may have been specified             Note that this API does not use any published decode information, if a decode list is to be applied then it should be specified explicitly
apiInstance.getEventStreamDecodeMappings(getEventStreamDecodeMappingsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getEventStreamDecodeMappingsRequest** | [**GetEventStreamDecodeMappingsRequest**](GetEventStreamDecodeMappingsRequest.md)| Given an event stream this API will take an event stream column, sample the data using the specified dates, apply any published transform and then return a cursored list of the labels taking account any decodes that may have been specified             Note that this API does not use any published decode information, if a decode list is to be applied then it should be specified explicitly | 

### Return type

[**GetEventStreamDecodeMappingsDefaultResponse**](GetEventStreamDecodeMappingsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEventStreamDecodeTargetDiscretes

> GetEventStreamDecodeTargetDiscretesDefaultResponse getEventStreamDecodeTargetDiscretes(getEventStreamDecodeTargetDiscretesRequest)

Given an event stream this API will take an event stream column, sample the data using the specified dates, apply any published transform and then return a list of all the currently configured decode targets along with any counts             If a target does not appear in the sampled data it will be returned with a count of zero so it can be optionally filtered out of any picklist

Given an event stream this API will take an event stream column, sample the data using the specified dates, apply any published transform and then return a list of all the currently configured decode targets along with any counts             If a target does not appear in the sampled data it will be returned with a count of zero so it can be optionally filtered out of any picklist

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let getEventStreamDecodeTargetDiscretesRequest = new JourneyAnalyticsApi.GetEventStreamDecodeTargetDiscretesRequest(); // GetEventStreamDecodeTargetDiscretesRequest | Given an event stream this API will take an event stream column, sample the data using the specified dates, apply any published transform and then return a list of all the currently configured decode targets along with any counts             If a target does not appear in the sampled data it will be returned with a count of zero so it can be optionally filtered out of any picklist
apiInstance.getEventStreamDecodeTargetDiscretes(getEventStreamDecodeTargetDiscretesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getEventStreamDecodeTargetDiscretesRequest** | [**GetEventStreamDecodeTargetDiscretesRequest**](GetEventStreamDecodeTargetDiscretesRequest.md)| Given an event stream this API will take an event stream column, sample the data using the specified dates, apply any published transform and then return a list of all the currently configured decode targets along with any counts             If a target does not appear in the sampled data it will be returned with a count of zero so it can be optionally filtered out of any picklist | 

### Return type

[**GetEventStreamDecodeTargetDiscretesDefaultResponse**](GetEventStreamDecodeTargetDiscretesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEventStreamDiscreteValues

> GetEventStreamDiscreteValuesDefaultResponse getEventStreamDiscreteValues(getEventStreamDiscreteValuesRequest)

Obtain discrete values from an event stream table             Supports use of a snapshot table which should reduce the chances of us blowing the Engine discrete limit.             The first parameters constitute the sankey filters and thereby the starting set for discretes             It will also allow us to filter the values by the specified discrete filters             If the sankey filters return no data then an execption is thrown stating that \&quot;No data is available for the specified filters\&quot; as this is probably not what the user wants             If the discretes filter suppresses out all data in the sankey then no exception is raised but zero totals are returned

Obtain discrete values from an event stream table             Supports use of a snapshot table which should reduce the chances of us blowing the Engine discrete limit.             The first parameters constitute the sankey filters and thereby the starting set for discretes             It will also allow us to filter the values by the specified discrete filters             If the sankey filters return no data then an execption is thrown stating that \&quot;No data is available for the specified filters\&quot; as this is probably not what the user wants             If the discretes filter suppresses out all data in the sankey then no exception is raised but zero totals are returned

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let getEventStreamDiscreteValuesRequest = new JourneyAnalyticsApi.GetEventStreamDiscreteValuesRequest(); // GetEventStreamDiscreteValuesRequest | Obtain discrete values from an event stream table             Supports use of a snapshot table which should reduce the chances of us blowing the Engine discrete limit.             The first parameters constitute the sankey filters and thereby the starting set for discretes             It will also allow us to filter the values by the specified discrete filters             If the sankey filters return no data then an execption is thrown stating that \"No data is available for the specified filters\" as this is probably not what the user wants             If the discretes filter suppresses out all data in the sankey then no exception is raised but zero totals are returned
apiInstance.getEventStreamDiscreteValues(getEventStreamDiscreteValuesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getEventStreamDiscreteValuesRequest** | [**GetEventStreamDiscreteValuesRequest**](GetEventStreamDiscreteValuesRequest.md)| Obtain discrete values from an event stream table             Supports use of a snapshot table which should reduce the chances of us blowing the Engine discrete limit.             The first parameters constitute the sankey filters and thereby the starting set for discretes             It will also allow us to filter the values by the specified discrete filters             If the sankey filters return no data then an execption is thrown stating that \&quot;No data is available for the specified filters\&quot; as this is probably not what the user wants             If the discretes filter suppresses out all data in the sankey then no exception is raised but zero totals are returned | 

### Return type

[**GetEventStreamDiscreteValuesDefaultResponse**](GetEventStreamDiscreteValuesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEventStreamModels

> GetEventStreamModelsDefaultResponse getEventStreamModels(getEventStreamModelsRequest)

Retrieve available models

Retrieve available models

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let getEventStreamModelsRequest = new JourneyAnalyticsApi.GetEventStreamModelsRequest(); // GetEventStreamModelsRequest | Retrieve available models
apiInstance.getEventStreamModels(getEventStreamModelsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getEventStreamModelsRequest** | [**GetEventStreamModelsRequest**](GetEventStreamModelsRequest.md)| Retrieve available models | 

### Return type

[**GetEventStreamModelsDefaultResponse**](GetEventStreamModelsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEventStreams

> GetEventStreamsDefaultResponse getEventStreams(getClientSetsRequest)

Returns back a list of event streams which exist in the system

Returns back a list of event streams which exist in the system

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let getClientSetsRequest = new JourneyAnalyticsApi.GetClientSetsRequest(); // GetClientSetsRequest | Returns back a list of event streams which exist in the system
apiInstance.getEventStreams(getClientSetsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getClientSetsRequest** | [**GetClientSetsRequest**](GetClientSetsRequest.md)| Returns back a list of event streams which exist in the system | 

### Return type

[**GetEventStreamsDefaultResponse**](GetEventStreamsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getFieldTransformationDiscreteValues

> GetEventStreamDecodeTargetDiscretesDefaultResponse getFieldTransformationDiscreteValues(getFieldTransformationDiscreteValuesRequest)

Apply a list of transforms to the discrete values of a column and return the new set of values and their frequencies             If JSONTransforms is not supplied then the results will simply be the discrete values present in the source column after any sample has been applied

Apply a list of transforms to the discrete values of a column and return the new set of values and their frequencies             If JSONTransforms is not supplied then the results will simply be the discrete values present in the source column after any sample has been applied

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let getFieldTransformationDiscreteValuesRequest = new JourneyAnalyticsApi.GetFieldTransformationDiscreteValuesRequest(); // GetFieldTransformationDiscreteValuesRequest | Apply a list of transforms to the discrete values of a column and return the new set of values and their frequencies             If JSONTransforms is not supplied then the results will simply be the discrete values present in the source column after any sample has been applied
apiInstance.getFieldTransformationDiscreteValues(getFieldTransformationDiscreteValuesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getFieldTransformationDiscreteValuesRequest** | [**GetFieldTransformationDiscreteValuesRequest**](GetFieldTransformationDiscreteValuesRequest.md)| Apply a list of transforms to the discrete values of a column and return the new set of values and their frequencies             If JSONTransforms is not supplied then the results will simply be the discrete values present in the source column after any sample has been applied | 

### Return type

[**GetEventStreamDecodeTargetDiscretesDefaultResponse**](GetEventStreamDecodeTargetDiscretesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getFieldTransformationMappings

> GetFieldTransformationMappingsDefaultResponse getFieldTransformationMappings(getFieldTransformationMappingsRequest)

Apply a list of transforms and return information about the transformed value and frequency for each item in the starting set of values             If JSONCompareTransforms is specified then the starting set of values is the result of first applying these to these to the specified column             If JSONCompareTransforms is not specified then the starting set of values is the actual discrete values present in the column

Apply a list of transforms and return information about the transformed value and frequency for each item in the starting set of values             If JSONCompareTransforms is specified then the starting set of values is the result of first applying these to these to the specified column             If JSONCompareTransforms is not specified then the starting set of values is the actual discrete values present in the column

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let getFieldTransformationMappingsRequest = new JourneyAnalyticsApi.GetFieldTransformationMappingsRequest(); // GetFieldTransformationMappingsRequest | Apply a list of transforms and return information about the transformed value and frequency for each item in the starting set of values             If JSONCompareTransforms is specified then the starting set of values is the result of first applying these to these to the specified column             If JSONCompareTransforms is not specified then the starting set of values is the actual discrete values present in the column
apiInstance.getFieldTransformationMappings(getFieldTransformationMappingsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getFieldTransformationMappingsRequest** | [**GetFieldTransformationMappingsRequest**](GetFieldTransformationMappingsRequest.md)| Apply a list of transforms and return information about the transformed value and frequency for each item in the starting set of values             If JSONCompareTransforms is specified then the starting set of values is the result of first applying these to these to the specified column             If JSONCompareTransforms is not specified then the starting set of values is the actual discrete values present in the column | 

### Return type

[**GetFieldTransformationMappingsDefaultResponse**](GetFieldTransformationMappingsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getIdealisedJourneys

> GetIdealisedJourneysDefaultResponse getIdealisedJourneys()

Retrieve a list of Idealised Journeys

Retrieve a list of Idealised Journeys

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
apiInstance.getIdealisedJourneys().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetIdealisedJourneysDefaultResponse**](GetIdealisedJourneysDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSankeyFavourites

> GetSankeyFavouritesDefaultResponse getSankeyFavourites(getSankeyFavouritesRequest)

Retrieve a list of Sankey Favourites

Retrieve a list of Sankey Favourites

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let getSankeyFavouritesRequest = new JourneyAnalyticsApi.GetSankeyFavouritesRequest(); // GetSankeyFavouritesRequest | Retrieve a list of Sankey Favourites
apiInstance.getSankeyFavourites(getSankeyFavouritesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getSankeyFavouritesRequest** | [**GetSankeyFavouritesRequest**](GetSankeyFavouritesRequest.md)| Retrieve a list of Sankey Favourites | 

### Return type

[**GetSankeyFavouritesDefaultResponse**](GetSankeyFavouritesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getVisualisationFavourites

> GetVisualisationFavouritesDefaultResponse getVisualisationFavourites()

Retrieve a list of Visualisation Favourites

Retrieve a list of Visualisation Favourites

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
apiInstance.getVisualisationFavourites().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetVisualisationFavouritesDefaultResponse**](GetVisualisationFavouritesDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryEventStream

> QueryEventStreamDefaultResponse queryEventStream(queryEventStreamRequest)

Queries the domain of selected event records that is represented by the date and event type filters, returning the list of events and graph of transition streams along with frequency counts.             Transitions will specify start and end points using indices into the list of events, along with some special values.             The &#39;Drop off&#39; points where a stream ends will be assigned an index of -1.             Any transition to an event that does not fall into the TopN specification will be assigned to an &#39;other events&#39; category with an index of -2.             Right aligned streams will be left-padded up to the MaxLength specification using a &#39;no event&#39; category with an index of -3.             If timeout events are required then the start of the sequence leading up to a timeout will be flagged with an index of -4 and the end with an index of -5.

Queries the domain of selected event records that is represented by the date and event type filters, returning the list of events and graph of transition streams along with frequency counts.             Transitions will specify start and end points using indices into the list of events, along with some special values.             The &#39;Drop off&#39; points where a stream ends will be assigned an index of -1.             Any transition to an event that does not fall into the TopN specification will be assigned to an &#39;other events&#39; category with an index of -2.             Right aligned streams will be left-padded up to the MaxLength specification using a &#39;no event&#39; category with an index of -3.             If timeout events are required then the start of the sequence leading up to a timeout will be flagged with an index of -4 and the end with an index of -5.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let queryEventStreamRequest = new JourneyAnalyticsApi.QueryEventStreamRequest(); // QueryEventStreamRequest | Queries the domain of selected event records that is represented by the date and event type filters, returning the list of events and graph of transition streams along with frequency counts.             Transitions will specify start and end points using indices into the list of events, along with some special values.             The 'Drop off' points where a stream ends will be assigned an index of -1.             Any transition to an event that does not fall into the TopN specification will be assigned to an 'other events' category with an index of -2.             Right aligned streams will be left-padded up to the MaxLength specification using a 'no event' category with an index of -3.             If timeout events are required then the start of the sequence leading up to a timeout will be flagged with an index of -4 and the end with an index of -5.
apiInstance.queryEventStream(queryEventStreamRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryEventStreamRequest** | [**QueryEventStreamRequest**](QueryEventStreamRequest.md)| Queries the domain of selected event records that is represented by the date and event type filters, returning the list of events and graph of transition streams along with frequency counts.             Transitions will specify start and end points using indices into the list of events, along with some special values.             The &#39;Drop off&#39; points where a stream ends will be assigned an index of -1.             Any transition to an event that does not fall into the TopN specification will be assigned to an &#39;other events&#39; category with an index of -2.             Right aligned streams will be left-padded up to the MaxLength specification using a &#39;no event&#39; category with an index of -3.             If timeout events are required then the start of the sequence leading up to a timeout will be flagged with an index of -4 and the end with an index of -5. | 

### Return type

[**QueryEventStreamDefaultResponse**](QueryEventStreamDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## queryEventStreamCount

> QueryEventStreamCountDefaultResponse queryEventStreamCount(queryEventStreamCountRequest)

Take the domain of selected event records that is represented by the date filters, and count streams matching the agreed patterns represented by the CountType parameter

Take the domain of selected event records that is represented by the date filters, and count streams matching the agreed patterns represented by the CountType parameter

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let queryEventStreamCountRequest = new JourneyAnalyticsApi.QueryEventStreamCountRequest(); // QueryEventStreamCountRequest | Take the domain of selected event records that is represented by the date filters, and count streams matching the agreed patterns represented by the CountType parameter
apiInstance.queryEventStreamCount(queryEventStreamCountRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryEventStreamCountRequest** | [**QueryEventStreamCountRequest**](QueryEventStreamCountRequest.md)| Take the domain of selected event records that is represented by the date filters, and count streams matching the agreed patterns represented by the CountType parameter | 

### Return type

[**QueryEventStreamCountDefaultResponse**](QueryEventStreamCountDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## queryEventStreamInteraction

> GetEventRecordsDefaultResponse queryEventStreamInteraction(exportEventStreamInteractionRequest)

Queries the domain of a particular node to return a sample of the CXID (VisitorId) values.             To get the results for \&quot;other\&quot; events pass all displayed events and set &#39;IncludeMatchedEvents&#39; to False.

Queries the domain of a particular node to return a sample of the CXID (VisitorId) values.             To get the results for \&quot;other\&quot; events pass all displayed events and set &#39;IncludeMatchedEvents&#39; to False.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let exportEventStreamInteractionRequest = new JourneyAnalyticsApi.ExportEventStreamInteractionRequest(); // ExportEventStreamInteractionRequest | Queries the domain of a particular node to return a sample of the CXID (VisitorId) values.             To get the results for \"other\" events pass all displayed events and set 'IncludeMatchedEvents' to False.
apiInstance.queryEventStreamInteraction(exportEventStreamInteractionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportEventStreamInteractionRequest** | [**ExportEventStreamInteractionRequest**](ExportEventStreamInteractionRequest.md)| Queries the domain of a particular node to return a sample of the CXID (VisitorId) values.             To get the results for \&quot;other\&quot; events pass all displayed events and set &#39;IncludeMatchedEvents&#39; to False. | 

### Return type

[**GetEventRecordsDefaultResponse**](GetEventRecordsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## queryEventStreamTransition

> GetEventRecordsDefaultResponse queryEventStreamTransition(queryEventStreamTransitionRequest)

Queries the domain from a particular node to another node to return a sample of the CXID (VisitorId) values.             To get the results for \&quot;other\&quot; events pass all displayed events and set &#39;IncludeMatchedEventsFrom&#39; / IncludeMatchedEventsTo to False.

Queries the domain from a particular node to another node to return a sample of the CXID (VisitorId) values.             To get the results for \&quot;other\&quot; events pass all displayed events and set &#39;IncludeMatchedEventsFrom&#39; / IncludeMatchedEventsTo to False.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let queryEventStreamTransitionRequest = new JourneyAnalyticsApi.QueryEventStreamTransitionRequest(); // QueryEventStreamTransitionRequest | Queries the domain from a particular node to another node to return a sample of the CXID (VisitorId) values.             To get the results for \"other\" events pass all displayed events and set 'IncludeMatchedEventsFrom' / IncludeMatchedEventsTo to False.
apiInstance.queryEventStreamTransition(queryEventStreamTransitionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryEventStreamTransitionRequest** | [**QueryEventStreamTransitionRequest**](QueryEventStreamTransitionRequest.md)| Queries the domain from a particular node to another node to return a sample of the CXID (VisitorId) values.             To get the results for \&quot;other\&quot; events pass all displayed events and set &#39;IncludeMatchedEventsFrom&#39; / IncludeMatchedEventsTo to False. | 

### Return type

[**GetEventRecordsDefaultResponse**](GetEventRecordsDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## runSequencePredictor

> RunSequencePredictorDefaultResponse runSequencePredictor(runSequencePredictorRequest)

Train and employ sequence prediction models for an event stream

Train and employ sequence prediction models for an event stream

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let runSequencePredictorRequest = new JourneyAnalyticsApi.RunSequencePredictorRequest(); // RunSequencePredictorRequest | Train and employ sequence prediction models for an event stream
apiInstance.runSequencePredictor(runSequencePredictorRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runSequencePredictorRequest** | [**RunSequencePredictorRequest**](RunSequencePredictorRequest.md)| Train and employ sequence prediction models for an event stream | 

### Return type

[**RunSequencePredictorDefaultResponse**](RunSequencePredictorDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateChannel

> AUTHChangePasswordDefaultResponse updateChannel(updateChannelRequest)

Updates a channel, allowing you to change the name and colour

Updates a channel, allowing you to change the name and colour

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let updateChannelRequest = new JourneyAnalyticsApi.UpdateChannelRequest(); // UpdateChannelRequest | Updates a channel, allowing you to change the name and colour
apiInstance.updateChannel(updateChannelRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateChannelRequest** | [**UpdateChannelRequest**](UpdateChannelRequest.md)| Updates a channel, allowing you to change the name and colour | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEventStreamFieldTransformLists

> AUTHChangePasswordDefaultResponse updateEventStreamFieldTransformLists(updateEventStreamFieldTransformListsRequest)

Publishes the specified transforms to the corresponding event stream columns             Any existing list for a column that matches on Transform Type and Alias will be replaced

Publishes the specified transforms to the corresponding event stream columns             Any existing list for a column that matches on Transform Type and Alias will be replaced

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let updateEventStreamFieldTransformListsRequest = new JourneyAnalyticsApi.UpdateEventStreamFieldTransformListsRequest(); // UpdateEventStreamFieldTransformListsRequest | Publishes the specified transforms to the corresponding event stream columns             Any existing list for a column that matches on Transform Type and Alias will be replaced
apiInstance.updateEventStreamFieldTransformLists(updateEventStreamFieldTransformListsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateEventStreamFieldTransformListsRequest** | [**UpdateEventStreamFieldTransformListsRequest**](UpdateEventStreamFieldTransformListsRequest.md)| Publishes the specified transforms to the corresponding event stream columns             Any existing list for a column that matches on Transform Type and Alias will be replaced | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateIdealisedJourney

> AUTHChangePasswordDefaultResponse updateIdealisedJourney(updateIdealisedJourneyRequest)

Update an Idealised Journey

Update an Idealised Journey

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let updateIdealisedJourneyRequest = new JourneyAnalyticsApi.UpdateIdealisedJourneyRequest(); // UpdateIdealisedJourneyRequest | Update an Idealised Journey
apiInstance.updateIdealisedJourney(updateIdealisedJourneyRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateIdealisedJourneyRequest** | [**UpdateIdealisedJourneyRequest**](UpdateIdealisedJourneyRequest.md)| Update an Idealised Journey | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSankeyFavourite

> AUTHChangePasswordDefaultResponse updateSankeyFavourite(updateSankeyFavouriteRequest)

Update a SankeyFavourite

Update a SankeyFavourite

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let updateSankeyFavouriteRequest = new JourneyAnalyticsApi.UpdateSankeyFavouriteRequest(); // UpdateSankeyFavouriteRequest | Update a SankeyFavourite
apiInstance.updateSankeyFavourite(updateSankeyFavouriteRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateSankeyFavouriteRequest** | [**UpdateSankeyFavouriteRequest**](UpdateSankeyFavouriteRequest.md)| Update a SankeyFavourite | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateVisualisationFavourite

> AUTHChangePasswordDefaultResponse updateVisualisationFavourite(updateVisualisationFavouriteRequest)

Update a Visualisation Favourite

Update a Visualisation Favourite

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let updateVisualisationFavouriteRequest = new JourneyAnalyticsApi.UpdateVisualisationFavouriteRequest(); // UpdateVisualisationFavouriteRequest | Update a Visualisation Favourite
apiInstance.updateVisualisationFavourite(updateVisualisationFavouriteRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateVisualisationFavouriteRequest** | [**UpdateVisualisationFavouriteRequest**](UpdateVisualisationFavouriteRequest.md)| Update a Visualisation Favourite | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## upsertEventStreamCustomerColumns

> AUTHChangePasswordDefaultResponse upsertEventStreamCustomerColumns(upsertEventStreamCustomerColumnsRequest)

Add or update customer attribute columns for an @see(EventStream).             Only updates to column width (that are atomic and have no truncation risk) are currenty supported.              Width only needs to be specified for text or unicode columns.              The number of allowed columns is capped.              Customer attribute columns must maintain discrete cardinality to be used in the Sankey.              Names must meet Engine naming requirements.

Add or update customer attribute columns for an @see(EventStream).             Only updates to column width (that are atomic and have no truncation risk) are currenty supported.              Width only needs to be specified for text or unicode columns.              The number of allowed columns is capped.              Customer attribute columns must maintain discrete cardinality to be used in the Sankey.              Names must meet Engine naming requirements.

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let upsertEventStreamCustomerColumnsRequest = new JourneyAnalyticsApi.UpsertEventStreamCustomerColumnsRequest(); // UpsertEventStreamCustomerColumnsRequest | Add or update customer attribute columns for an @see(EventStream).             Only updates to column width (that are atomic and have no truncation risk) are currenty supported.              Width only needs to be specified for text or unicode columns.              The number of allowed columns is capped.              Customer attribute columns must maintain discrete cardinality to be used in the Sankey.              Names must meet Engine naming requirements.
apiInstance.upsertEventStreamCustomerColumns(upsertEventStreamCustomerColumnsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upsertEventStreamCustomerColumnsRequest** | [**UpsertEventStreamCustomerColumnsRequest**](UpsertEventStreamCustomerColumnsRequest.md)| Add or update customer attribute columns for an @see(EventStream).             Only updates to column width (that are atomic and have no truncation risk) are currenty supported.              Width only needs to be specified for text or unicode columns.              The number of allowed columns is capped.              Customer attribute columns must maintain discrete cardinality to be used in the Sankey.              Names must meet Engine naming requirements. | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## upsertEventStreamCustomerColumnsToGroup

> AUTHChangePasswordDefaultResponse upsertEventStreamCustomerColumnsToGroup(upsertEventStreamCustomerColumnsToGroupRequest)

Add or update customer attribute columns to the @see(EventStream)s in a group.             Only updates to column width (that are atomic and have no truncation risk) are currenty supported.              Width only needs to be specified for text or unicode columns.              The number of allowed columns is capped.              Customer attribute columns must maintain discrete cardinality to be used in the Sankey.              Names must meet Engine naming requirements.             There is some latency (up to 5 mins) between a column being created and the queue service starting to read the data unless the queue service is restarted

Add or update customer attribute columns to the @see(EventStream)s in a group.             Only updates to column width (that are atomic and have no truncation risk) are currenty supported.              Width only needs to be specified for text or unicode columns.              The number of allowed columns is capped.              Customer attribute columns must maintain discrete cardinality to be used in the Sankey.              Names must meet Engine naming requirements.             There is some latency (up to 5 mins) between a column being created and the queue service starting to read the data unless the queue service is restarted

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.EventStreamsApi();
let upsertEventStreamCustomerColumnsToGroupRequest = new JourneyAnalyticsApi.UpsertEventStreamCustomerColumnsToGroupRequest(); // UpsertEventStreamCustomerColumnsToGroupRequest | Add or update customer attribute columns to the @see(EventStream)s in a group.             Only updates to column width (that are atomic and have no truncation risk) are currenty supported.              Width only needs to be specified for text or unicode columns.              The number of allowed columns is capped.              Customer attribute columns must maintain discrete cardinality to be used in the Sankey.              Names must meet Engine naming requirements.             There is some latency (up to 5 mins) between a column being created and the queue service starting to read the data unless the queue service is restarted
apiInstance.upsertEventStreamCustomerColumnsToGroup(upsertEventStreamCustomerColumnsToGroupRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upsertEventStreamCustomerColumnsToGroupRequest** | [**UpsertEventStreamCustomerColumnsToGroupRequest**](UpsertEventStreamCustomerColumnsToGroupRequest.md)| Add or update customer attribute columns to the @see(EventStream)s in a group.             Only updates to column width (that are atomic and have no truncation risk) are currenty supported.              Width only needs to be specified for text or unicode columns.              The number of allowed columns is capped.              Customer attribute columns must maintain discrete cardinality to be used in the Sankey.              Names must meet Engine naming requirements.             There is some latency (up to 5 mins) between a column being created and the queue service starting to read the data unless the queue service is restarted | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

