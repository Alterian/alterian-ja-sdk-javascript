# JourneyAnalyticsApi.GetEventRecordsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columnTransforms** | [**[EventStreamColumnTransform]**](EventStreamColumnTransform.md) | Applies the specified transforms to base the result on the transformed discrete values | [optional] 
**cursor** | [**APILastModifiedCursor**](APILastModifiedCursor.md) |  | [optional] 
**dataSourceId** | **Number** | Id of the datasource to which table belongs. | [optional] 
**eventDateTimeLower** | **Date** | Optionally filter by EventDateTime | [optional] 
**eventDateTimeUpper** | **Date** | Optionally filter by EventDateTime | [optional] 
**eventTypes** | **[String]** | List of event types to include (default to all) | [optional] 
**filters** | [**[ColumnMatchList]**](ColumnMatchList.md) | Additional columns to filter on | [optional] 
**initiatives** | **[String]** | List of initiatives to include (default to all) | [optional] 
**key** | **Number** | Optional Key value (the integer re-keyed value) | [optional] 
**tableNameEx** | **String** | Event Stream table (standard two part name ex) | [optional] 


