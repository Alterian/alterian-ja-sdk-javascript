# JourneyAnalyticsApi.CreatePatternTasksRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isReplace** | **Boolean** | When true, first request cancellation of any existing tasks which are dependent on any new of the new ones that have been submitted | [optional] 
**isSynchronousExecution** | **Boolean** | Process a short task synchronously and return the result. Currently only supported for Task &#39;Upload&#39; | [optional] 
**patternId** | **Number** | Pattern to run tasks against | [optional] 
**tasks** | [**[PatternTaskType]**](PatternTaskType.md) | Tasks to perform | [optional] 


