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
import APILastModifiedCursor from './APILastModifiedCursor';
import ColumnMatchList from './ColumnMatchList';
import EventStreamAlignmentType from './EventStreamAlignmentType';
import EventStreamColumnTransform from './EventStreamColumnTransform';
import EventStreamPattern from './EventStreamPattern';

/**
 * The ExportEventStreamInteractionRequest model module.
 * @module com.alterian.ja.model/ExportEventStreamInteractionRequest
 * @version 6.35.0
 */
class ExportEventStreamInteractionRequest {
    /**
     * Constructs a new <code>ExportEventStreamInteractionRequest</code>.
     * @alias module:com.alterian.ja.model/ExportEventStreamInteractionRequest
     */
    constructor() { 
        
        ExportEventStreamInteractionRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExportEventStreamInteractionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/ExportEventStreamInteractionRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/ExportEventStreamInteractionRequest} The populated <code>ExportEventStreamInteractionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExportEventStreamInteractionRequest();

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
            if (data.hasOwnProperty('Cursor')) {
                obj['Cursor'] = APILastModifiedCursor.constructFromObject(data['Cursor']);
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
            if (data.hasOwnProperty('IncludeMatchedEvents')) {
                obj['IncludeMatchedEvents'] = ApiClient.convertToType(data['IncludeMatchedEvents'], 'Boolean');
            }
            if (data.hasOwnProperty('Initiatives')) {
                obj['Initiatives'] = ApiClient.convertToType(data['Initiatives'], ['String']);
            }
            if (data.hasOwnProperty('Interaction')) {
                obj['Interaction'] = ApiClient.convertToType(data['Interaction'], 'Number');
            }
            if (data.hasOwnProperty('IsDeduplicationRequired')) {
                obj['IsDeduplicationRequired'] = ApiClient.convertToType(data['IsDeduplicationRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('IsTimeoutEventsRequired')) {
                obj['IsTimeoutEventsRequired'] = ApiClient.convertToType(data['IsTimeoutEventsRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('MatchEvents')) {
                obj['MatchEvents'] = ApiClient.convertToType(data['MatchEvents'], ['String']);
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExportEventStreamInteractionRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExportEventStreamInteractionRequest</code>.
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
        // validate the optional field `Cursor`
        if (data['Cursor']) { // data not null
          APILastModifiedCursor.validateJSON(data['Cursor']);
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
        // ensure the json data is an array
        if (!Array.isArray(data['MatchEvents'])) {
            throw new Error("Expected the field `MatchEvents` to be an array in the JSON data but got " + data['MatchEvents']);
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
ExportEventStreamInteractionRequest.prototype['Alignment'] = undefined;

/**
 * Optional event name to align to. Requires Alignment to be set
 * @member {String} AlignmentEventName
 */
ExportEventStreamInteractionRequest.prototype['AlignmentEventName'] = undefined;

/**
 * If Alignment is set to Left/Right, and a secondary event column is specified then this is the secondary event name that will be aligned to, with an empty string meaning alignment to NULL
 * @member {String} AlignmentSecondaryEventName
 */
ExportEventStreamInteractionRequest.prototype['AlignmentSecondaryEventName'] = undefined;

/**
 * Applies the specified transforms to base the result on the transformed discrete values
 * @member {Array.<module:com.alterian.ja.model/EventStreamColumnTransform>} ColumnTransforms
 */
ExportEventStreamInteractionRequest.prototype['ColumnTransforms'] = undefined;

/**
 * Configures delay after which a new conversation is considered to have started - defaults to 1800s (30mins) when either StreamKey is set to Interaction or Timeout events are required
 * @member {Number} ConversationTimeoutInSeconds
 */
ExportEventStreamInteractionRequest.prototype['ConversationTimeoutInSeconds'] = undefined;

/**
 * @member {module:com.alterian.ja.model/APILastModifiedCursor} Cursor
 */
ExportEventStreamInteractionRequest.prototype['Cursor'] = undefined;

/**
 * Datasource ID
 * @member {Number} DataSourceId
 */
ExportEventStreamInteractionRequest.prototype['DataSourceId'] = undefined;

/**
 * Optionally filter by EventDateTime
 * @member {Date} EventDateTimeLower
 */
ExportEventStreamInteractionRequest.prototype['EventDateTimeLower'] = undefined;

/**
 * Optionally filter by EventDateTime
 * @member {Date} EventDateTimeUpper
 */
ExportEventStreamInteractionRequest.prototype['EventDateTimeUpper'] = undefined;

/**
 * Optionally invoke using an Event Stream ID instead of DataSourceId/TableNameEx. In this mode ColumnTransforms will be defaulted to those published against the columns of the Event Stream but can still be overridden if required
 * @member {Number} EventStreamId
 */
ExportEventStreamInteractionRequest.prototype['EventStreamId'] = undefined;

/**
 * List of event types to include (default to all)
 * @member {Array.<String>} EventTypes
 */
ExportEventStreamInteractionRequest.prototype['EventTypes'] = undefined;

/**
 * Additional columns to filter on
 * @member {Array.<module:com.alterian.ja.model/ColumnMatchList>} Filters
 */
ExportEventStreamInteractionRequest.prototype['Filters'] = undefined;

/**
 * Set to False to exclude all records that fall into specified match events (Defaults to True). Use this to get events in the 'other' category by passing all the displayed events and setting match to false
 * @member {Boolean} IncludeMatchedEvents
 */
ExportEventStreamInteractionRequest.prototype['IncludeMatchedEvents'] = undefined;

/**
 * List of initiatives to include (default to all)
 * @member {Array.<String>} Initiatives
 */
ExportEventStreamInteractionRequest.prototype['Initiatives'] = undefined;

/**
 * Interaction start point
 * @member {Number} Interaction
 */
ExportEventStreamInteractionRequest.prototype['Interaction'] = undefined;

/**
 * Indicates whether identical consecutive events in a stream are combined into a single event (default false)
 * @member {Boolean} IsDeduplicationRequired
 */
ExportEventStreamInteractionRequest.prototype['IsDeduplicationRequired'] = undefined;

/**
 * Optionally show Start/End conversation events
 * @member {Boolean} IsTimeoutEventsRequired
 */
ExportEventStreamInteractionRequest.prototype['IsTimeoutEventsRequired'] = undefined;

/**
 * Events to match in the specified interaction. Pass -1 to indicate the 'drop off' event and -3 to specify the padded ('no event') placeholder for right aligned streams
 * @member {Array.<String>} MatchEvents
 */
ExportEventStreamInteractionRequest.prototype['MatchEvents'] = undefined;

/**
 * @member {module:com.alterian.ja.model/EventStreamPattern} Pattern
 */
ExportEventStreamInteractionRequest.prototype['Pattern'] = undefined;

/**
 * Optionally set the column name that contains the event names (defaults to Location)
 * @member {String} PrimaryEventColumnName
 */
ExportEventStreamInteractionRequest.prototype['PrimaryEventColumnName'] = undefined;

/**
 * Optionally set a secondary column name that can be used to further partition the events e.g. Channel
 * @member {String} SecondaryEventColumnName
 */
ExportEventStreamInteractionRequest.prototype['SecondaryEventColumnName'] = undefined;

/**
 * Optionally specify the key to be used for the Sankey - Visitor, Interaction etc (defaults to using the Visitor ID)
 * @member {String} StreamKey
 */
ExportEventStreamInteractionRequest.prototype['StreamKey'] = undefined;

/**
 * Specify rules for stream inclusion using stream query patterns e.g. Offer/_*_/Checkout would require a stream to have an offer event followed by a checkout event
 * @member {String} StreamQuery
 */
ExportEventStreamInteractionRequest.prototype['StreamQuery'] = undefined;

/**
 * Event Stream table (standard two part name ex)
 * @member {String} TableNameEx
 */
ExportEventStreamInteractionRequest.prototype['TableNameEx'] = undefined;






export default ExportEventStreamInteractionRequest;
