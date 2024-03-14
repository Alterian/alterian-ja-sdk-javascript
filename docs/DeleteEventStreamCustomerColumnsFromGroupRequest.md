# JourneyAnalyticsApi.DeleteEventStreamCustomerColumnsFromGroupRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fieldNames** | **[String]** | A list of @see(EventStreamCustomerField) names to remove from the event stream | [optional] 
**groupId** | **Number** | Id of the group of event streams from which you wish to delete the attribute data | [optional] 
**keyColumnName** | **String** | In your list of columns, you must specify which column contains the key field for your customer (for instance, email address).  If you do not, the loader rule created will expect a cxid to be provided | [optional] 
**personaColumnName** | **String** | If your data is going to have persona data, specify the column which holds the persona information.  Note that personas must be separated by a pipe character if there are multiples | [optional] 


