# JourneyAnalyticsApi.EventStream

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**groupId** | **Number** |  | [optional] 
**name** | **String** |  | [optional] 
**dataSourceId** | **Number** |  | [optional] 
**table** | **String** | Returns back the full name of the table which stored the event stream information (includes the database name) | [optional] 
**numRows** | **Number** |  | [optional] 
**isFIFO** | **Boolean** |  | [optional] 
**keys** | [**[EventStreamKey]**](EventStreamKey.md) |  | [optional] 
**models** | [**[EventStreamModel]**](EventStreamModel.md) |  | [optional] 
**dDEQueueName** | **String** |  | [optional] 
**dDESiteId** | **Number** |  | [optional] 
**creationDate** | **Date** |  | [optional] 
**queueLockId** | **String** |  | [optional] 
**databaseName** | **String** |  | [optional] 
**dDEClient** | **String** |  | [optional] 
**dDETarget** | **String** |  | [optional] 
**fields** | [**[EventStreamField]**](EventStreamField.md) |  | [optional] 
**patterns** | [**[Pattern]**](Pattern.md) |  | [optional] 
**status** | **Number** | Quick status on the stream.  Currently 0 &#x3D; created, -1 means there is a problem and 1 means the stream is pulling data | [optional] 
**queueURL** | **String** | URL for the queue, based upon your DDE instance details | [optional] 


