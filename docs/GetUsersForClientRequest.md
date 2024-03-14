# JourneyAnalyticsApi.GetUsersForClientRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **Number** | ClientId for which you would like to see users. | [optional] 
**cursor** | [**APICursor**](APICursor.md) |  | [optional] 
**folderId** | **Number** | Optionally get just the users in this folder. Provide NULL to list all users, but see IncludeChildren below | [optional] 
**groupId** | **Number** | Optionally get just the users in this group. Provide NULL to list all users | [optional] 
**includeChildren** | **Boolean** | If a folderID is supplied, show users in the supplied folder and all its subfolders. If a folderID is not supplied, show all users in all folders (true), or no folders (false) | [optional] 
**includeDisabled** | **Boolean** | Include disabled users in the result | [optional] 


