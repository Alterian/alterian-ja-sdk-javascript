# JourneyAnalyticsApi.EMDownloadMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ID** | **Number** | Unique ID of this mapping | [optional] 
**name** | **String** | Name of this mapping | [optional] 
**keyColumnId** | **Number** | Key column Id associated with this client | [optional] 
**keyColumnNameEx** | **String** | Key column NameEx - readonly | [optional] 
**responseTable** | **String** | Name of the response table | [optional] 
**contactTable** | **String** | Name of the contact table | [optional] 
**eMPrimarykeyId** | **Number** | Primary key for EM to which this EM Client is mapped | [optional] 
**eMUNCOutputLocation** | **String** | UNC path for hosted EM\\CM systems | [optional] 
**eMPrimaryKeyType** | **Number** | EM&#39;s primary key type | [optional] 
**datasourceId** | **Number** | Datasource Id associated with this client | [optional] 
**eMClient** | [**EMClient**](EMClient.md) |  | [optional] 
**eMClientID** | **Number** | EM Client ID of this mapping | [optional] 
**datasourceName** | **String** | Datasource Name - readonly | [optional] 
**ownerID** | **Number** | The owner\\creator of this EMMapping | [optional] 
**canEdit** | **Number** | Does the Mapping have edit permissions for this user - cannot set this value using this property | [optional] 
**isEnabled** | **Boolean** | Is mapping enabled | [optional] 
**emPrimaryKeyName** | **String** | EM Primary Key Name | [optional] 
**gDCTable** | **String** | Name of the table which will store data collection information for this primary key | [optional] 
**preferencesTable** | **String** | Name of the table which will store Preference OptIn\\OptOut data | [optional] 


