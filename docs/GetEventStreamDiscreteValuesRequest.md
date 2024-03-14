# JourneyAnalyticsApi.GetEventStreamDiscreteValuesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columnTransforms** | [**[EventStreamColumnTransform]**](EventStreamColumnTransform.md) | Applies the specified transforms to base the result on the transformed discrete values | [optional] 
**cursor** | [**APICursor**](APICursor.md) |  | [optional] 
**dataSourceId** | **Number** | Id of the datasource to which table belongs. | [optional] 
**eventDateTimeLower** | **Date** | Optionally filter by EventDateTime | [optional] 
**eventDateTimeUpper** | **Date** | Optionally filter by EventDateTime | [optional] 
**eventStreamId** | **Number** | Optionally invoke using an Event Stream ID instead of DataSourceId/TableNameEx. In this mode ColumnTransforms will be defaulted to those published against the columns of the Event Stream but can still be overridden if required | [optional] 
**eventTypes** | **[String]** | List of event types to include (default to all) | [optional] 
**filters** | [**[ColumnMatchList]**](ColumnMatchList.md) | Additional columns to filter on | [optional] 
**initiatives** | **[String]** | List of initiatives to include (default to all) | [optional] 
**isDataRefreshRequired** | **Boolean** | Indicate whether the request can be satisfied with an existing cached result or requires recreation with latest data (default false). Has no effect if PatternId is specified | [optional] 
**pattern** | [**EventStreamPattern**](EventStreamPattern.md) |  | [optional] 
**primaryDiscretesColumnName** | **String** | Optionally set the column name that is the primary source of discrete values (defaults to Location) | [optional] 
**primaryDiscretesFilter** | **String** | Optionally set a literal value or NSQL wildcard filter to further restrict the number of primary discrete values considered (e.g. MyEvent or %AllTheseEvents or EventsBeginningWith*) | [optional] 
**secondaryDiscretesColumnName** | **String** | Optionally set a secondary column name that can be used to further partition the discrete values e.g. Channel | [optional] 
**secondaryDiscretesFilter** | **String** | Optionally set a literal value or NSQL wildcard filter to further restrict the number of secondary discrete values considered (e.g. MyEvent or %AllTheseEvents or EventsBeginningWith*) | [optional] 
**tableNameEx** | **String** | Event Stream table (standard two part name ex) | [optional] 


