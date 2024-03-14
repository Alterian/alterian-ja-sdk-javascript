# JourneyAnalyticsApi.GetEventStreamDecodeTargetDiscretesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseListId** | **Number** | Optionally base the decodes on a specified decode list subject to any explicitly specified overrides | [optional] 
**baseListVersion** | **Number** | Optional list version (defaults to latest) | [optional] 
**columnName** | **String** | Column from the event stream to be decoded (defaults to Location) | [optional] 
**defaultLabel** | **String** | In conjunction with IsDefaultLabelConfigured this allows the API to override the default label from any specified base decode list. Pass NULL to remove an underlying list default and an empty string or space to override it to NULL | [optional] 
**eventDateTimeLower** | **Date** | Start of the date window for column values to be displayed and decoded | [optional] 
**eventDateTimeUpper** | **Date** | End of the date window for column values to be displayed and decoded | [optional] 
**eventStreamId** | **Number** | Event Stream Id | [optional] 
**isDataRefreshRequired** | **Boolean** | Force the source labels to be refreshed from the event stream data | [optional] 
**isDefaultLabelConfigured** | **Boolean** | Set this to true if DefaultLabel is being used. If set to false then the default label will be determined by any specified base decode list | [optional] 
**sourceLabels** | **[String]** | Specify any source labels that should be overriden on the specified base decode list | [optional] 
**targetLabels** | **[String]** | Specify the target labels that should override the specified base decode list. Pass NULL to remove an underlying list decode or an empty string to override it to NULL. Pass a NULL list to remove mappings for all the specified source labels | [optional] 


