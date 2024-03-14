# JourneyAnalyticsApi.ALDataSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ID** | **Number** | Unique ID of the datasource | [optional] 
**name** | **String** | Name of the datasource [must be unique] | [optional] 
**enabled** | **Boolean** | Whether or not this datasource is enabled | [optional] 
**visible** | **Boolean** | Whether or not this datasource is visible | [optional] 
**accessView** | **Boolean** | Can the user view this datasource | [optional] 
**accessModify** | **Boolean** | Not currently used | [optional] 
**attributes** | [**[DatasourceAttribute]**](DatasourceAttribute.md) | Attributes for this datasource.  @see(DatasourceAttribute) | [optional] 
**datasourceTypeID** | **Number** | @see(ALDataSourceType) of the datasource | [optional] 
**nameEx** | **String** | Full name of this datasource, in the pattern (datasource) | [optional] 
**databases** | [**[ALDataSourceDatabase]**](ALDataSourceDatabase.md) | @see(ALDataSourceDatabase)s for this datasource.  Not filled in unless you request the datasource to be fully populated | [optional] 
**lastRefresh** | **Date** | Last date the structure of this datasource was refreshed against the underlying system. | [optional] 
**fullNativeName** | **String** | Name of this datasource | [optional] 


