# JourneyAnalyticsApi.SequencePredictorResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**processQueueId** | **Number** | When run asynchronously this ID can be passed to GetProcessStatus to check for completion | [optional] 
**modelId** | **Number** | ID for generated Model | [optional] 
**engineModelName** | **String** | Name for generated Model in engine | [optional] 
**modelStatus** | **String** | XML summary of the results of the model build | [optional] 
**testAccuracy** | **Number** | Final test accuracy stat | [optional] 
**testlLoss** | **Number** | Final test loss stat | [optional] 
**predictionId** | **Number** | ID for generated prediction | [optional] 
**dataSourceId** | **Number** | Data source containing the prediction | [optional] 
**databaseName** | **String** | Database containing the prediction | [optional] 
**tableName** | **String** | Table containing the prediction | [optional] 


