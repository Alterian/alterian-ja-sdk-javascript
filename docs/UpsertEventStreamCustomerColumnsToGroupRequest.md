# JourneyAnalyticsApi.UpsertEventStreamCustomerColumnsToGroupRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**[EventStreamCustomerField]**](EventStreamCustomerField.md) | A list of @see(EventStreamCustomerField) instances to upsert | [optional] 
**groupId** | **Number** | Id of the group of event streams you want to update, obtained via @see(GetEventStreams) | [optional] 
**keyColumnName** | **String** | In your list of columns, you must specify which column contains the key field for your customer (for instance, email address).  If you do not, the loader rule created will expect a cxid to be provided | [optional] 
**personaColumnName** | **String** | If your data is going to have persona data, specify the column which holds the persona information.  Note that personas must be separated by a pipe character if there are multiples | [optional] 


