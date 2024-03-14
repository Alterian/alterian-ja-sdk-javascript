/**
 * Journey Analytics API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 6.35.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import APICursor from './APICursor';
import FieldTransformationSampleSettings from './FieldTransformationSampleSettings';
import MatchOptions from './MatchOptions';

/**
 * The GetFieldTransformationMappingsRequest model module.
 * @module com.alterian.ja.model/GetFieldTransformationMappingsRequest
 * @version 6.35.0
 */
class GetFieldTransformationMappingsRequest {
    /**
     * Constructs a new <code>GetFieldTransformationMappingsRequest</code>.
     * @alias module:com.alterian.ja.model/GetFieldTransformationMappingsRequest
     */
    constructor() { 
        
        GetFieldTransformationMappingsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFieldTransformationMappingsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/GetFieldTransformationMappingsRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/GetFieldTransformationMappingsRequest} The populated <code>GetFieldTransformationMappingsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFieldTransformationMappingsRequest();

            if (data.hasOwnProperty('ColumnNameEx')) {
                obj['ColumnNameEx'] = ApiClient.convertToType(data['ColumnNameEx'], 'String');
            }
            if (data.hasOwnProperty('Cursor')) {
                obj['Cursor'] = APICursor.constructFromObject(data['Cursor']);
            }
            if (data.hasOwnProperty('DataSourceId')) {
                obj['DataSourceId'] = ApiClient.convertToType(data['DataSourceId'], 'Number');
            }
            if (data.hasOwnProperty('IsDataRefreshRequired')) {
                obj['IsDataRefreshRequired'] = ApiClient.convertToType(data['IsDataRefreshRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('JSONCompareTransforms')) {
                obj['JSONCompareTransforms'] = ApiClient.convertToType(data['JSONCompareTransforms'], 'String');
            }
            if (data.hasOwnProperty('JSONTransforms')) {
                obj['JSONTransforms'] = ApiClient.convertToType(data['JSONTransforms'], 'String');
            }
            if (data.hasOwnProperty('PostFilter')) {
                obj['PostFilter'] = ApiClient.convertToType(data['PostFilter'], 'String');
            }
            if (data.hasOwnProperty('SampleSettings')) {
                obj['SampleSettings'] = FieldTransformationSampleSettings.constructFromObject(data['SampleSettings']);
            }
            if (data.hasOwnProperty('SourceFilter')) {
                obj['SourceFilter'] = ApiClient.convertToType(data['SourceFilter'], 'String');
            }
            if (data.hasOwnProperty('SourcePostMatch')) {
                obj['SourcePostMatch'] = MatchOptions.constructFromObject(data['SourcePostMatch']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetFieldTransformationMappingsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetFieldTransformationMappingsRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ColumnNameEx'] && !(typeof data['ColumnNameEx'] === 'string' || data['ColumnNameEx'] instanceof String)) {
            throw new Error("Expected the field `ColumnNameEx` to be a primitive type in the JSON string but got " + data['ColumnNameEx']);
        }
        // validate the optional field `Cursor`
        if (data['Cursor']) { // data not null
          APICursor.validateJSON(data['Cursor']);
        }
        // ensure the json data is a string
        if (data['JSONCompareTransforms'] && !(typeof data['JSONCompareTransforms'] === 'string' || data['JSONCompareTransforms'] instanceof String)) {
            throw new Error("Expected the field `JSONCompareTransforms` to be a primitive type in the JSON string but got " + data['JSONCompareTransforms']);
        }
        // ensure the json data is a string
        if (data['JSONTransforms'] && !(typeof data['JSONTransforms'] === 'string' || data['JSONTransforms'] instanceof String)) {
            throw new Error("Expected the field `JSONTransforms` to be a primitive type in the JSON string but got " + data['JSONTransforms']);
        }
        // ensure the json data is a string
        if (data['PostFilter'] && !(typeof data['PostFilter'] === 'string' || data['PostFilter'] instanceof String)) {
            throw new Error("Expected the field `PostFilter` to be a primitive type in the JSON string but got " + data['PostFilter']);
        }
        // validate the optional field `SampleSettings`
        if (data['SampleSettings']) { // data not null
          FieldTransformationSampleSettings.validateJSON(data['SampleSettings']);
        }
        // ensure the json data is a string
        if (data['SourceFilter'] && !(typeof data['SourceFilter'] === 'string' || data['SourceFilter'] instanceof String)) {
            throw new Error("Expected the field `SourceFilter` to be a primitive type in the JSON string but got " + data['SourceFilter']);
        }

        return true;
    }


}



/**
 * Source column to which transforms should be applied
 * @member {String} ColumnNameEx
 */
GetFieldTransformationMappingsRequest.prototype['ColumnNameEx'] = undefined;

/**
 * @member {module:com.alterian.ja.model/APICursor} Cursor
 */
GetFieldTransformationMappingsRequest.prototype['Cursor'] = undefined;

/**
 * Id of the datasource to which column belongs.
 * @member {Number} DataSourceId
 */
GetFieldTransformationMappingsRequest.prototype['DataSourceId'] = undefined;

/**
 * Indicate whether the request can be satisfied with an existing cached result or requires recreation with latest data (default false)
 * @member {Boolean} IsDataRefreshRequired
 */
GetFieldTransformationMappingsRequest.prototype['IsDataRefreshRequired'] = undefined;

/**
 * Optional JSON array of transforms to produce a revised starting set of values from the column
 * @member {String} JSONCompareTransforms
 */
GetFieldTransformationMappingsRequest.prototype['JSONCompareTransforms'] = undefined;

/**
 * JSON array of transform to be applied e.g. [{{\\\"FrequencyReplace\\\":{{\\\"@minimum\\\":8035,\\\"@replacement\\\":\\\"My Replacement\\\"}}}}]. Note that attributes must be prefixed with @
 * @member {String} JSONTransforms
 */
GetFieldTransformationMappingsRequest.prototype['JSONTransforms'] = undefined;

/**
 * Optional string to filter the post transform values by
 * @member {String} PostFilter
 */
GetFieldTransformationMappingsRequest.prototype['PostFilter'] = undefined;

/**
 * @member {module:com.alterian.ja.model/FieldTransformationSampleSettings} SampleSettings
 */
GetFieldTransformationMappingsRequest.prototype['SampleSettings'] = undefined;

/**
 * Optional string to filter the source values by
 * @member {String} SourceFilter
 */
GetFieldTransformationMappingsRequest.prototype['SourceFilter'] = undefined;

/**
 * @member {module:com.alterian.ja.model/MatchOptions} SourcePostMatch
 */
GetFieldTransformationMappingsRequest.prototype['SourcePostMatch'] = undefined;






export default GetFieldTransformationMappingsRequest;

