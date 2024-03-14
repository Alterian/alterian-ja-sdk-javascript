# JourneyAnalyticsApi.ALDataSourceColumn

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ID** | **Number** | Unique ID of the datasource | [optional] 
**name** | **String** | Name of the datasource [must be unique] | [optional] 
**nameEx** | **String** | Full name of this column, which includes in the datasource and the native name for the column in the pattern (datasource).[database].[table].[column] | [optional] 
**enabled** | **Boolean** | Whether or not this datasource is enabled | [optional] 
**visible** | **Boolean** | Whether or not this datasource is visible | [optional] 
**accessView** | **Boolean** | Can the user view this datasource | [optional] 
**accessModify** | **Boolean** | Not currently used | [optional] 
**attributes** | [**[DatasourceAttribute]**](DatasourceAttribute.md) | Attributes for this datasource.  @see(DatasourceAttribute) | [optional] 
**tableID** | **Number** |  | [optional] 
**datasourceId** | **Number** |  | [optional] 
**nativeName** | **String** | The fully qualified name as used by the underlying datasource type. | [optional] 
**alchemyFieldTypeID** | **Number** | What type of data is contained within the column? Call @see(GetDatasourceFieldTypes) to fetch the mappings between this Type ID and name | [optional] 
**datasourceTypeID** | **Number** | What kind of datasource is this a column from?  See @see(GetDataSourceTypes) to fetch a list of the available datasource types. | [optional] 
**fullNativeName** | **String** | The entire native name of this item -- usually includes database, table and column name | [optional] 
**precision** | **Number** | If the column is a real type, this will be the precision, otherwise, it is meaningless | [optional] 


