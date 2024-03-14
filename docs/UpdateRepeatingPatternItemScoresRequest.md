# JourneyAnalyticsApi.UpdateRepeatingPatternItemScoresRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decodeId** | **Number** | Optional. Only required if the scores are to be recorded against a transform | [optional] 
**decodeVersion** | **Number** | Optional. Only required if the scores are to be recorded against a transform | [optional] 
**items** | **[String]** | List of the sequence items to be re-scored | [optional] 
**patternId** | **Number** | Pattern Id | [optional] 
**replaceExistingScores** | **Boolean** | Defaults to False meaning that the update acts in a &#39;cursored&#39; mode - the UI can submit only the modified scores and any existing scores from the previous list version are preserved. When set to true then any existing scores are completely replaced | [optional] 
**scores** | **[Number]** | List of the scores (must have a 1:1 relationship with Items) | [optional] 


