# JourneyAnalyticsApi.ALDataSourceDatabase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ID** | **Number** | Unique ID of the datasource | [optional] 
**name** | **String** | Name of the datasource [must be unique] | [optional] 
**nameEx** | **String** | Full name of this database, which includes in the datasource and the native name for the database in the pattern (datasource).[database] | [optional] 
**enabled** | **Boolean** | Whether or not this datasource is enabled | [optional] 
**visible** | **Boolean** | Whether or not this datasource is visible | [optional] 
**accessView** | **Boolean** | Can the user view this datasource | [optional] 
**accessModify** | **Boolean** | Not currently used | [optional] 
**attributes** | [**[DatasourceAttribute]**](DatasourceAttribute.md) | Attributes for this datasource.  @see(DatasourceAttribute) | [optional] 
**dataSourceID** | **Number** | The ID of the datasource that this database belongs to. | [optional] 
**nativeName** | **String** | The fully qualified name as used by the underlying datasource type. | [optional] 
**tables** | [**[ALDataSourceTable]**](ALDataSourceTable.md) |  | [optional] 
**datasourceTypeID** | **Number** | What kind of datasource is this a database from?  See @see(GetDataSourceTypes) to fetch a list of the available datasource types. | [optional] 
**fullNativeName** | **String** | Full native name for this; since this is a database, just returns the name | [optional] 


