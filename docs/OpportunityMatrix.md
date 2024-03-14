# JourneyAnalyticsApi.OpportunityMatrix

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessGoalID** | **Number** | The Id of the story that this campaign is appearing in. Basically the Y coordinate of the matrix             If the Story has been deleted then the UI will not display this campaign | [optional] 
**opportunityID** | **Number** | The Id of the opportunity that this campaign is appearing in. Basically the X coordinate of the matrix             If the Opportunity has been deleted then the UI will not display this campaign | [optional] 
**documentID** | **Number** | The id of the campaign document that is referenced in the cell. Required when updating | [optional] 
**campaignName** | **String** | The name of the campaign in this cell. Read only, provided as a convenience for populating the Opportunity matrix UI | [optional] 
**campaignDescription** | **String** | The description of the campaign in this cell. Read only, provided as a convenience for populating the Opportunity matrix UI | [optional] 
**author** | **String** | The Author of the campaign in this cell. Read only, provided as a convenience for populating the Opportunity matrix UI | [optional] 
**lastUpdated** | **Date** | The Date/Time the campaign was last updated. Read only, provided as a convenience for populating the Opportunity matrix UI | [optional] 
**subType** | **String** | What kind of thing is this? Used to distinguish between Silverlight campaigns (&#x3D;\&quot;Campaign\&quot;) and Campaign360 (&#x3D;\&quot;Campaign.BuildACampaign\&quot;) objects when deeplinking | [optional] 


