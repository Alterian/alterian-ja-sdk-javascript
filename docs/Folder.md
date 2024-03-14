# JourneyAnalyticsApi.Folder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ID** | **Number** | ID of the folder; always unique | [optional] 
**name** | **String** | Name of the folder; only unique within a ParentID and FolderType | [optional] 
**subFolders** | [**[Folder]**](Folder.md) | GUI helper property; not filled in by the API | [optional] 
**items** | **[Object]** | GUI helper property; not filled in by the API | [optional] 
**system** | **Boolean** | Is this a system folder?  You can&#39;t delete system folders | [optional] 
**parentID** | **Number** | Parent of this folder; null means it is a root folder | [optional] 
**accessView** | **Boolean** | Can the user view this folder | [optional] 
**accessModify** | **Boolean** | Can the user modify this folder in some way [rename, etc.] | [optional] 
**ownerID** | **Number** | The owner of this folder.  This typically starts out as the creator of the folder. | [optional] 
**hidden** | **Boolean** | Has this folder been flagged as \&quot;hidden\&quot; | [optional] 
**ancestorFolderIDs** | **[Number]** | The ids of all the folders under the root that are ancestors of this one, ordered from parent to child             Only populated by the GetFolder API | [optional] 
**childCount** | **Number** | Count of the folders immediate children | [optional] 


