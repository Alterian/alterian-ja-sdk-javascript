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
import ColumnMatchList from './ColumnMatchList';
import EventStreamAlignmentType from './EventStreamAlignmentType';
import EventStreamColumnTransform from './EventStreamColumnTransform';
import EventStreamPattern from './EventStreamPattern';

/**
 * The QueryEventStreamRequest model module.
 * @module com.alterian.ja.model/QueryEventStreamRequest
 * @version 6.35.0
 */
class QueryEventStreamRequest {
    /**
     * Constructs a new <code>QueryEventStreamRequest</code>.
     * @alias module:com.alterian.ja.model/QueryEventStreamRequest
     */
    constructor() { 
        
        QueryEventStreamRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QueryEventStreamRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/QueryEventStreamRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/QueryEventStreamRequest} The populated <code>QueryEventStreamRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QueryEventStreamRequest();

            if (data.hasOwnProperty('Alignment')) {
                obj['Alignment'] = EventStreamAlignmentType.constructFromObject(data['Alignment']);
            }
            if (data.hasOwnProperty('AlignmentEventName')) {
                obj['AlignmentEventName'] = ApiClient.convertToType(data['AlignmentEventName'], 'String');
            }
            if (data.hasOwnProperty('AlignmentSecondaryEventName')) {
                obj['AlignmentSecondaryEventName'] = ApiClient.convertToType(data['AlignmentSecondaryEventName'], 'String');
            }
            if (data.hasOwnProperty('ColumnTransforms')) {
                obj['ColumnTransforms'] = ApiClient.convertToType(data['ColumnTransforms'], [EventStreamColumnTransform]);
            }
            if (data.hasOwnProperty('ConversationTimeoutInSeconds')) {
                obj['ConversationTimeoutInSeconds'] = ApiClient.convertToType(data['ConversationTimeoutInSeconds'], 'Number');
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
            if (data.hasOwnProperty('IsDeduplicationRequired')) {
                obj['IsDeduplicationRequired'] = ApiClient.convertToType(data['IsDeduplicationRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('IsTimeoutEventsRequired')) {
                obj['IsTimeoutEventsRequired'] = ApiClient.convertToType(data['IsTimeoutEventsRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('MaxLength')) {
                obj['MaxLength'] = ApiClient.convertToType(data['MaxLength'], 'Number');
            }
            if (data.hasOwnProperty('Pattern')) {
                obj['Pattern'] = EventStreamPattern.constructFromObject(data['Pattern']);
            }
            if (data.hasOwnProperty('PrimaryEventColumnName')) {
                obj['PrimaryEventColumnName'] = ApiClient.convertToType(data['PrimaryEventColumnName'], 'String');
            }
            if (data.hasOwnProperty('SecondaryEventColumnName')) {
                obj['SecondaryEventColumnName'] = ApiClient.convertToType(data['SecondaryEventColumnName'], 'String');
            }
            if (data.hasOwnProperty('StreamKey')) {
                obj['StreamKey'] = ApiClient.convertToType(data['StreamKey'], 'String');
            }
            if (data.hasOwnProperty('StreamQuery')) {
                obj['StreamQuery'] = ApiClient.convertToType(data['StreamQuery'], 'String');
            }
            if (data.hasOwnProperty('TableNameEx')) {
                obj['TableNameEx'] = ApiClient.convertToType(data['TableNameEx'], 'String');
            }
            if (data.hasOwnProperty('TopN')) {
                obj['TopN'] = ApiClient.convertToType(data['TopN'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QueryEventStreamRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QueryEventStreamRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['AlignmentEventName'] && !(typeof data['AlignmentEventName'] === 'string' || data['AlignmentEventName'] instanceof String)) {
            throw new Error("Expected the field `AlignmentEventName` to be a primitive type in the JSON string but got " + data['AlignmentEventName']);
        }
        // ensure the json data is a string
        if (data['AlignmentSecondaryEventName'] && !(typeof data['AlignmentSecondaryEventName'] === 'string' || data['AlignmentSecondaryEventName'] instanceof String)) {
            throw new Error("Expected the field `AlignmentSecondaryEventName` to be a primitive type in the JSON string but got " + data['AlignmentSecondaryEventName']);
        }
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
        if (data['PrimaryEventColumnName'] && !(typeof data['PrimaryEventColumnName'] === 'string' || data['PrimaryEventColumnName'] instanceof String)) {
            throw new Error("Expected the field `PrimaryEventColumnName` to be a primitive type in the JSON string but got " + data['PrimaryEventColumnName']);
        }
        // ensure the json data is a string
        if (data['SecondaryEventColumnName'] && !(typeof data['SecondaryEventColumnName'] === 'string' || data['SecondaryEventColumnName'] instanceof String)) {
            throw new Error("Expected the field `SecondaryEventColumnName` to be a primitive type in the JSON string but got " + data['SecondaryEventColumnName']);
        }
        // ensure the json data is a string
        if (data['StreamKey'] && !(typeof data['StreamKey'] === 'string' || data['StreamKey'] instanceof String)) {
            throw new Error("Expected the field `StreamKey` to be a primitive type in the JSON string but got " + data['StreamKey']);
        }
        // ensure the json data is a string
        if (data['StreamQuery'] && !(typeof data['StreamQuery'] === 'string' || data['StreamQuery'] instanceof String)) {
            throw new Error("Expected the field `StreamQuery` to be a primitive type in the JSON string but got " + data['StreamQuery']);
        }
        // ensure the json data is a string
        if (data['TableNameEx'] && !(typeof data['TableNameEx'] === 'string' || data['TableNameEx'] instanceof String)) {
            throw new Error("Expected the field `TableNameEx` to be a primitive type in the JSON string but got " + data['TableNameEx']);
        }

        return true;
    }


}



/**
 * @member {module:com.alterian.ja.model/EventStreamAlignmentType} Alignment
 */
QueryEventStreamRequest.prototype['Alignment'] = undefined;

/**
 * If Alignment is set to Left/Right,then this is the primary event name that will be aligned to, with an empty string meaning alignment to NULL
 * @member {String} AlignmentEventName
 */
QueryEventStreamRequest.prototype['AlignmentEventName'] = undefined;

/**
 * If Alignment is set to Left/Right, and a secondary event column is specified then this is the secondary event name that will be aligned to, with an empty string meaning alignment to NULL
 * @member {String} AlignmentSecondaryEventName
 */
QueryEventStreamRequest.prototype['AlignmentSecondaryEventName'] = undefined;

/**
 * Applies the specified transforms to base the result on the transformed discrete values
 * @member {Array.<module:com.alterian.ja.model/EventStreamColumnTransform>} ColumnTransforms
 */
QueryEventStreamRequest.prototype['ColumnTransforms'] = undefined;

/**
 * Configures delay after which a new conversation is considered to have started - defaults to 1800s (30mins) when either StreamKey is set to Interaction or Timeout events are required
 * @member {Number} ConversationTimeoutInSeconds
 */
QueryEventStreamRequest.prototype['ConversationTimeoutInSeconds'] = undefined;

/**
 * Datasource ID
 * @member {Number} DataSourceId
 */
QueryEventStreamRequest.prototype['DataSourceId'] = undefined;

/**
 * Optionally filter by EventDateTime
 * @member {Date} EventDateTimeLower
 */
QueryEventStreamRequest.prototype['EventDateTimeLower'] = undefined;

/**
 * Optionally filter by EventDateTime
 * @member {Date} EventDateTimeUpper
 */
QueryEventStreamRequest.prototype['EventDateTimeUpper'] = undefined;

/**
 * Optionally invoke using an Event Stream ID instead of DataSourceId/TableNameEx. In this mode ColumnTransforms will be defaulted to those published against the columns of the Event Stream but can still be overridden if required
 * @member {Number} EventStreamId
 */
QueryEventStreamRequest.prototype['EventStreamId'] = undefined;

/**
 * List of event types to include (default to all)
 * @member {Array.<String>} EventTypes
 */
QueryEventStreamRequest.prototype['EventTypes'] = undefined;

/**
 * Additional columns to filter on
 * @member {Array.<module:com.alterian.ja.model/ColumnMatchList>} Filters
 */
QueryEventStreamRequest.prototype['Filters'] = undefined;

/**
 * List of initiatives to include (default to all)
 * @member {Array.<String>} Initiatives
 */
QueryEventStreamRequest.prototype['Initiatives'] = undefined;

/**
 * Indicate whether the request can be satisfied with an existing cached result or requires recreation with latest data (default false). Has no effect if PatternId is specified
 * @member {Boolean} IsDataRefreshRequired
 */
QueryEventStreamRequest.prototype['IsDataRefreshRequired'] = undefined;

/**
 * Indicates whether identical consecutive events in a stream are combined into a single event (default false)
 * @member {Boolean} IsDeduplicationRequired
 */
QueryEventStreamRequest.prototype['IsDeduplicationRequired'] = undefined;

/**
 * Optionally show Start/End conversation events
 * @member {Boolean} IsTimeoutEventsRequired
 */
QueryEventStreamRequest.prototype['IsTimeoutEventsRequired'] = undefined;

/**
 * Max number of interactions (default 5) to display per stream
 * @member {Number} MaxLength
 */
QueryEventStreamRequest.prototype['MaxLength'] = undefined;

/**
 * @member {module:com.alterian.ja.model/EventStreamPattern} Pattern
 */
QueryEventStreamRequest.prototype['Pattern'] = undefined;

/**
 * Optionally set the column name that contains the event names (defaults to Location)
 * @member {String} PrimaryEventColumnName
 */
QueryEventStreamRequest.prototype['PrimaryEventColumnName'] = undefined;

/**
 * Optionally set a secondary column name that can be used to further partition the events e.g. Channel
 * @member {String} SecondaryEventColumnName
 */
QueryEventStreamRequest.prototype['SecondaryEventColumnName'] = undefined;

/**
 * Optionally specify the key to be used for the Sankey - Visitor, Interaction etc (defaults to using the Visitor ID)
 * @member {String} StreamKey
 */
QueryEventStreamRequest.prototype['StreamKey'] = undefined;

/**
 * Specify rules for stream inclusion using stream query patterns e.g. Offer/_*_/Checkout would require a stream to have an offer event followed by a checkout event
 * @member {String} StreamQuery
 */
QueryEventStreamRequest.prototype['StreamQuery'] = undefined;

/**
 * Event Stream table (standard two part name ex)
 * @member {String} TableNameEx
 */
QueryEventStreamRequest.prototype['TableNameEx'] = undefined;

/**
 * Max number of events (default 5) to display in each interaction preferring highest count
 * @member {Number} TopN
 */
QueryEventStreamRequest.prototype['TopN'] = undefined;






export default QueryEventStreamRequest;

