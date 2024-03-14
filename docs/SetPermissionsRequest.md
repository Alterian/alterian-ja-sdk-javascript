# JourneyAnalyticsApi.SetPermissionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isGroup** | **Boolean** | Is the security ID a group or a person? | [optional] 
**itemID** | **Number** | ID of the item on which to set permissions. This is NOT globally unique which is why you need to specify the ItemType. | [optional] 
**itemType** | [**ResourceType**](ResourceType.md) |  | [optional] 
**permissions** | [**[ALPermission]**](ALPermission.md) | Which permissions are being assigned or removed? And is an assigned permission being Allowed or Denied? | [optional] 
**securityID** | **Number** | User or Group ID of which to set the permissions | [optional] 


