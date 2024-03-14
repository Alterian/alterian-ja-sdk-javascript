# JourneyAnalyticsApi.CMTokenInformation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ID** | **Number** | Internal ID of the token | [optional] 
**loginID** | **String** | Authentication system&#39;s login ID for this token [if applicable] | [optional] 
**token** | **String** | Actual GUID of the token.  This is what you would use to pass to API methods. | [optional] 
**timezoneID** | **Number** | Timezone of the user associated with this token | [optional] 
**userID** | **Number** | User associated with this token | [optional] 
**clientID** | **Number** | Client associated with this token | [optional] 
**lastActivity** | **Date** | Last time this token was actually used for something | [optional] 
**created** | **Date** | When this token was created | [optional] 
**culture** | **String** | The culture of the user associated with this token | [optional] 
**isStatic** | **Boolean** | Is this token a static token?  If so, it won&#39;t be purged as part of the normal purge process | [optional] 
**isSAtoken** | **Boolean** | Is this an SA token?  If so, it will have access to more system admin functions. | [optional] 


