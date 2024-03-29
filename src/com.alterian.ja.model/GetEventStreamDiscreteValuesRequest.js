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
 * The GetEventStreamDiscreteValuesRequest model module.
 * @module com.alterian.ja.model/GetEventStreamDiscreteValuesRequest
 * @version 6.35.0
 */
class GetEventStreamDiscreteValuesRequest {
    /**
     * Constructs a new <code>GetEventStreamDiscreteValuesRequest</code>.
     * @alias module:com.alterian.ja.model/GetEventStreamDiscreteValuesRequest
     */
    constructor() { 
        
        GetEventStreamDiscreteValuesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetEventStreamDiscreteValuesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/GetEventStreamDiscreteValuesRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/GetEventStreamDiscreteValuesRequest} The populated <code>GetEventStreamDiscreteValuesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEventStreamDiscreteValuesRequest();

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
            if (data.hasOwnProperty('EventTypes')) {
                obj['EventTypes'] = ApiClient.convertToType(data['EventTypes'], ['String']);
            }
            if (data.hasOwnProperty('Filters')) {
                obj['Filters'] = ApiClient.convertToType(data['Filters'], [ColumnMatchList]);
            }
            if (data.hasOwnProperty('Initiatives')) {
                obj['Initiatives'] = ApiClient.convertToType(data['Initiatives'], ['String']);
            }
            if (data.hasOwnProperty('IsDataRefreshRequired')) {
                obj['IsDataRefreshRequired'] = ApiClient.convertToType(data['IsDataRefreshRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('Pattern')) {
                obj['Pattern'] = EventStreamPattern.constructFromObject(data['Pattern']);
            }
            if (data.hasOwnProperty('PrimaryDiscretesColumnName')) {
                obj['PrimaryDiscretesColumnName'] = ApiClient.convertToType(data['PrimaryDiscretesColumnName'], 'String');
            }
            if (data.hasOwnProperty('PrimaryDiscretesFilter')) {
                obj['PrimaryDiscretesFilter'] = ApiClient.convertToType(data['PrimaryDiscretesFilter'], 'String');
            }
            if (data.hasOwnProperty('SecondaryDiscretesColumnName')) {
                obj['SecondaryDiscretesColumnName'] = ApiClient.convertToType(data['SecondaryDiscretesColumnName'], 'String');
            }
            if (data.hasOwnProperty('SecondaryDiscretesFilter')) {
                obj['SecondaryDiscretesFilter'] = ApiClient.convertToType(data['SecondaryDiscretesFilter'], 'String');
            }
            if (data.hasOwnProperty('TableNameEx')) {
                obj['TableNameEx'] = ApiClient.convertToType(data['TableNameEx'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetEventStreamDiscreteValuesRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetEventStreamDiscreteValuesRequest</code>.
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
        // ensure the json data is an array
        if (!Array.isArray(data['EventTypes'])) {
            throw new Error("Expected the field `EventTypes` to be an array in the JSON data but got " + data['EventTypes']);
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
        // ensure the json data is an array
        if (!Array.isArray(data['Initiatives'])) {
            throw new Error("Expected the field `Initiatives` to be an array in the JSON data but got " + data['Initiatives']);
        }
        // validate the optional field `Pattern`
        if (data['Pattern']) { // data not null
          EventStreamPattern.validateJSON(data['Pattern']);
        }
        // ensure the json data is a string
        if (data['PrimaryDiscretesColumnName'] && !(typeof data['PrimaryDiscretesColumnName'] === 'string' || data['PrimaryDiscretesColumnName'] instanceof String)) {
            throw new Error("Expected the field `PrimaryDiscretesColumnName` to be a primitive type in the JSON string but got " + data['PrimaryDiscretesColumnName']);
        }
        // ensure the json data is a string
        if (data['PrimaryDiscretesFilter'] && !(typeof data['PrimaryDiscretesFilter'] === 'string' || data['PrimaryDiscretesFilter'] instanceof String)) {
            throw new Error("Expected the field `PrimaryDiscretesFilter` to be a primitive type in the JSON string but got " + data['PrimaryDiscretesFilter']);
        }
        // ensure the json data is a string
        if (data['SecondaryDiscretesColumnName'] && !(typeof data['SecondaryDiscretesColumnName'] === 'string' || data['SecondaryDiscretesColumnName'] instanceof String)) {
            throw new Error("Expected the field `SecondaryDiscretesColumnName` to be a primitive type in the JSON string but got " + data['SecondaryDiscretesColumnName']);
        }
        // ensure the json data is a string
        if (data['SecondaryDiscretesFilter'] && !(typeof data['SecondaryDiscretesFilter'] === 'string' || data['SecondaryDiscretesFilter'] instanceof String)) {
            throw new Error("Expected the field `SecondaryDiscretesFilter` to be a primitive type in the JSON string but got " + data['SecondaryDiscretesFilter']);
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
GetEventStreamDiscreteValuesRequest.prototype['ColumnTransforms'] = undefined;

/**
 * @member {module:com.alterian.ja.model/APICursor} Cursor
 */
GetEventStreamDiscreteValuesRequest.prototype['Cursor'] = undefined;

/**
 * Id of the datasource to which table belongs.
 * @member {Number} DataSourceId
 */
GetEventStreamDiscreteValuesRequest.prototype['DataSourceId'] = undefined;

/**
 * Optionally filter by EventDateTime
 * @member {Date} EventDateTimeLower
 */
GetEventStreamDiscreteValuesRequest.prototype['EventDateTimeLower'] = undefined;

/**
 * Optionally filter by EventDateTime
 * @member {Date} EventDateTimeUpper
 */
GetEventStreamDiscreteValuesRequest.prototype['EventDateTimeUpper'] = undefined;

/**
 * Optionally invoke using an Event Stream ID instead of DataSourceId/TableNameEx. In this mode ColumnTransforms will be defaulted to those published against the columns of the Event Stream but can still be overridden if required
 * @member {Number} EventStreamId
 */
GetEventStreamDiscreteValuesRequest.prototype['EventStreamId'] = undefined;

/**
 * List of event types to include (default to all)
 * @member {Array.<String>} EventTypes
 */
GetEventStreamDiscreteValuesRequest.prototype['EventTypes'] = undefined;

/**
 * Additional columns to filter on
 * @member {Array.<module:com.alterian.ja.model/ColumnMatchList>} Filters
 */
GetEventStreamDiscreteValuesRequest.prototype['Filters'] = undefined;

/**
 * List of initiatives to include (default to all)
 * @member {Array.<String>} Initiatives
 */
GetEventStreamDiscreteValuesRequest.prototype['Initiatives'] = undefined;

/**
 * Indicate whether the request can be satisfied with an existing cached result or requires recreation with latest data (default false). Has no effect if PatternId is specified
 * @member {Boolean} IsDataRefreshRequired
 */
GetEventStreamDiscreteValuesRequest.prototype['IsDataRefreshRequired'] = undefined;

/**
 * @member {module:com.alterian.ja.model/EventStreamPattern} Pattern
 */
GetEventStreamDiscreteValuesRequest.prototype['Pattern'] = undefined;

/**
 * Optionally set the column name that is the primary source of discrete values (defaults to Location)
 * @member {String} PrimaryDiscretesColumnName
 */
GetEventStreamDiscreteValuesRequest.prototype['PrimaryDiscretesColumnName'] = undefined;

/**
 * Optionally set a literal value or NSQL wildcard filter to further restrict the number of primary discrete values considered (e.g. MyEvent or %AllTheseEvents or EventsBeginningWith*)
 * @member {String} PrimaryDiscretesFilter
 */
GetEventStreamDiscreteValuesRequest.prototype['PrimaryDiscretesFilter'] = undefined;

/**
 * Optionally set a secondary column name that can be used to further partition the discrete values e.g. Channel
 * @member {String} SecondaryDiscretesColumnName
 */
GetEventStreamDiscreteValuesRequest.prototype['SecondaryDiscretesColumnName'] = undefined;

/**
 * Optionally set a literal value or NSQL wildcard filter to further restrict the number of secondary discrete values considered (e.g. MyEvent or %AllTheseEvents or EventsBeginningWith*)
 * @member {String} SecondaryDiscretesFilter
 */
GetEventStreamDiscreteValuesRequest.prototype['SecondaryDiscretesFilter'] = undefined;

/**
 * Event Stream table (standard two part name ex)
 * @member {String} TableNameEx
 */
GetEventStreamDiscreteValuesRequest.prototype['TableNameEx'] = undefined;






export default GetEventStreamDiscreteValuesRequest;

