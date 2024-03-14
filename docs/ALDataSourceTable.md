# JourneyAnalyticsApi.ALDataSourceTable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ID** | **Number** | Unique ID of the datasource | [optional] 
**name** | **String** | Name of the datasource [must be unique] | [optional] 
**nameEx** | **String** | Full name of this table, which includes in the datasource and the native name for the table in the pattern (datasource).[database].[table] | [optional] 
**enabled** | **Boolean** | Whether or not this datasource is enabled | [optional] 
**visible** | **Boolean** | Whether or not this datasource is visible | [optional] 
**accessView** | **Boolean** | Can the user view this datasource | [optional] 
**accessModify** | **Boolean** | Not currently used | [optional] 
**attributes** | [**[DatasourceAttribute]**](DatasourceAttribute.md) | Attributes for this datasource.  @see(DatasourceAttribute) | [optional] 
**databaseID** | **Number** | The ID of the database that this table belongs to. | [optional] 
**nativeName** | **String** | The fully qualified name as used by the underlying datasource type. | [optional] 
**columns** | [**[ALDataSourceColumn]**](ALDataSourceColumn.md) |  | [optional] 
**datasourceTypeID** | **Number** | What kind of datasource is this a table from?  See @see(GetDataSourceTypes) to fetch a list of the available datasource types. | [optional] 
**primaryKey** | [**ALDatasourcePrimaryKey**](ALDatasourcePrimaryKey.md) |  | [optional] 
**resolverTableID** | **Number** |  | [optional] 
**joins** | [**[ALDatasourceJoin]**](ALDatasourceJoin.md) | List which columns are part of any defined join between this table and linked tables. | [optional] 
**links** | [**[ALDatasourceLink]**](ALDatasourceLink.md) | What other tables can this table be linked to? | [optional] 
**fullNativeName** | **String** | The entire native name of this item -- usually includes database and table | [optional] 
**datasourceId** | **Number** | ID of the Datasource | [optional] 


