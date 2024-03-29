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
import ColumnMatchList from './ColumnMatchList';
import EventStreamColumnTransform from './EventStreamColumnTransform';
import EventStreamPattern from './EventStreamPattern';

/**
 * The GetEventStreamAggregatesRequest model module.
 * @module com.alterian.ja.model/GetEventStreamAggregatesRequest
 * @version 6.35.0
 */
class GetEventStreamAggregatesRequest {
    /**
     * Constructs a new <code>GetEventStreamAggregatesRequest</code>.
     * @alias module:com.alterian.ja.model/GetEventStreamAggregatesRequest
     */
    constructor() { 
        
        GetEventStreamAggregatesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetEventStreamAggregatesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/GetEventStreamAggregatesRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/GetEventStreamAggregatesRequest} The populated <code>GetEventStreamAggregatesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEventStreamAggregatesRequest();

            if (data.hasOwnProperty('ColumnTransforms')) {
                obj['ColumnTransforms'] = ApiClient.convertToType(data['ColumnTransforms'], [EventStreamColumnTransform]);
            }
            if (data.hasOwnProperty('Cursor')) {
                obj['Cursor'] = APICursor.constructFromObject(data['Cursor']);
            }
            if (data.hasOwnProperty('DataSourceId')) {
                obj['DataSourceId'] = ApiClient.convertToType(data['DataSourceId'], 'Number');
            }
            if (data.hasOwnProperty('EventDateTimeLower')) {
                obj['EventDateTimeLower'] = ApiClient.convertToType(data['EventDateTimeLower'], 'Date');
            }
            if (data.hasOwnProperty('EventDateTimeUpper')) {
                obj['EventDateTimeUpper'] = ApiClient.convertToType(data['EventDateTimeUpper'], 'Date');
            }
            if (data.hasOwnProperty('EventStreamId')) {
                obj['EventStreamId'] = ApiClient.convertToType(data['EventStreamId'], 'Number');
            }
            if (data.hasOwnProperty('Filters')) {
                obj['Filters'] = ApiClient.convertToType(data['Filters'], [ColumnMatchList]);
            }
            if (data.hasOwnProperty('IsDataRefreshRequired')) {
                obj['IsDataRefreshRequired'] = ApiClient.convertToType(data['IsDataRefreshRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('Pattern')) {
                obj['Pattern'] = EventStreamPattern.constructFromObject(data['Pattern']);
            }
            if (data.hasOwnProperty('TableNameEx')) {
                obj['TableNameEx'] = ApiClient.convertToType(data['TableNameEx'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetEventStreamAggregatesRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetEventStreamAggregatesRequest</code>.
     */
    static validateJSON(data) {
        if (data['ColumnTransforms']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['ColumnTransforms'])) {
                throw new Error("Expected the field `ColumnTransforms` to be an array in the JSON data but got " + data['ColumnTransforms']);
            }
            // validate the optional field `ColumnTransforms` (array)
            for (const item of data['ColumnTransforms']) {
                EventStreamColumnTransform.validateJSON(item);
            };
        }
        // validate the optional field `Cursor`
        if (data['Cursor']) { // data not null
          APICursor.validateJSON(data['Cursor']);
        }
        if (data['Filters']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['Filters'])) {
                throw new Error("Expected the field `Filters` to be an array in the JSON data but got " + data['Filters']);
            }
            // validate the optional field `Filters` (array)
            for (const item of data['Filters']) {
                ColumnMatchList.validateJSON(item);
            };
        }
        // validate the optional field `Pattern`
        if (data['Pattern']) { // data not null
          EventStreamPattern.validateJSON(data['Pattern']);
        }
        // ensure the json data is a string
        if (data['TableNameEx'] && !(typeof data['TableNameEx'] === 'string' || data['TableNameEx'] instanceof String)) {
            throw new Error("Expected the field `TableNameEx` to be a primitive type in the JSON string but got " + data['TableNameEx']);
        }

        return true;
    }


}



/**
 * Applies the specified transforms to base the result on the transformed discrete values
 * @member {Array.<module:com.alterian.ja.model/EventStreamColumnTransform>} ColumnTransforms
 */
GetEventStreamAggregatesRequest.prototype['ColumnTransforms'] = undefined;

/**
 * @member {module:com.alterian.ja.model/APICursor} Cursor
 */
GetEventStreamAggregatesRequest.prototype['Cursor'] = undefined;

/**
 * Datasource ID
 * @member {Number} DataSourceId
 */
GetEventStreamAggregatesRequest.prototype['DataSourceId'] = undefined;

/**
 * Optionally filter by EventDateTime
 * @member {Date} EventDateTimeLower
 */
GetEventStreamAggregatesRequest.prototype['EventDateTimeLower'] = undefined;

/**
 * Optionally filter by EventDateTime
 * @member {Date} EventDateTimeUpper
 */
GetEventStreamAggregatesRequest.prototype['EventDateTimeUpper'] = undefined;

/**
 * Optionally invoke using an Event Stream ID instead of DataSourceId/TableNameEx. In this mode ColumnTransforms will be defaulted to those published against the columns of the Event Stream but can still be overridden if required
 * @member {Number} EventStreamId
 */
GetEventStreamAggregatesRequest.prototype['EventStreamId'] = undefined;

/**
 * Additional columns to filter on
 * @member {Array.<module:com.alterian.ja.model/ColumnMatchList>} Filters
 */
GetEventStreamAggregatesRequest.prototype['Filters'] = undefined;

/**
 * Indicate whether the request can be satisfied with an existing cached result or requires recreation with latest data (default false). Has no effect if PatternId is specified
 * @member {Boolean} IsDataRefreshRequired
 */
GetEventStreamAggregatesRequest.prototype['IsDataRefreshRequired'] = undefined;

/**
 * @member {module:com.alterian.ja.model/EventStreamPattern} Pattern
 */
GetEventStreamAggregatesRequest.prototype['Pattern'] = undefined;

/**
 * Event Stream table (standard two part name ex)
 * @member {String} TableNameEx
 */
GetEventStreamAggregatesRequest.prototype['TableNameEx'] = undefined;






export default GetEventStreamAggregatesRequest;

