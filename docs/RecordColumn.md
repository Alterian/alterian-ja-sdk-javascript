# JourneyAnalyticsApi.RecordColumn

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**handle** | **Number** | The Engine Handle | [optional] 
**nameEx** | **String** | The NameEx | [optional] 
**name** | **String** | The Short Name | [optional] 
**description** | **String** | The Description | [optional] 
**type** | **String** | The column type expressed as a textual description (as per Engine sheet) | [optional] 
**dataType** | [**ColumnDataType**](ColumnDataType.md) |  | [optional] 
**isIndexed** | **Boolean** |  | [optional] 
**isSortable** | **Boolean** | Flag indicating if the column is sortable | [optional] 
**width** | **Number** | Current maximum width of this column. | [optional] 
**recordCount** | **Number** | The total number of records in this column | [optional] 
**precision** | **Number** | Precision of this column, if it is a decimal type | [optional] 
**snapshot** | **Boolean** | Is this column a snapshotted column? | [optional] 
**deleteOnDataChange** | **Boolean** | Will this column get deleted on data change? | [optional] 
**numberofNulls** | **Number** | The number of nulls in this column; if the column is engineered, etc. and has not been calculated, this will be -1 | [optional] 


