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

/**
 * The CreateEventStreamRequest model module.
 * @module com.alterian.ja.model/CreateEventStreamRequest
 * @version 6.35.0
 */
class CreateEventStreamRequest {
    /**
     * Constructs a new <code>CreateEventStreamRequest</code>.
     * @alias module:com.alterian.ja.model/CreateEventStreamRequest
     */
    constructor() { 
        
        CreateEventStreamRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateEventStreamRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/CreateEventStreamRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/CreateEventStreamRequest} The populated <code>CreateEventStreamRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateEventStreamRequest();

            if (data.hasOwnProperty('DDEClient')) {
                obj['DDEClient'] = ApiClient.convertToType(data['DDEClient'], 'String');
            }
            if (data.hasOwnProperty('DDESiteId')) {
                obj['DDESiteId'] = ApiClient.convertToType(data['DDESiteId'], 'Number');
            }
            if (data.hasOwnProperty('DDETarget')) {
                obj['DDETarget'] = ApiClient.convertToType(data['DDETarget'], 'String');
            }
            if (data.hasOwnProperty('EventStreamDatabase')) {
                obj['EventStreamDatabase'] = ApiClient.convertToType(data['EventStreamDatabase'], 'String');
            }
            if (data.hasOwnProperty('GroupId')) {
                obj['GroupId'] = ApiClient.convertToType(data['GroupId'], 'Number');
            }
            if (data.hasOwnProperty('IsFifoQueueRequired')) {
                obj['IsFifoQueueRequired'] = ApiClient.convertToType(data['IsFifoQueueRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Project')) {
                obj['Project'] = ApiClient.convertToType(data['Project'], 'String');
            }
            if (data.hasOwnProperty('QueueLockId')) {
                obj['QueueLockId'] = ApiClient.convertToType(data['QueueLockId'], 'String');
            }
            if (data.hasOwnProperty('Server')) {
                obj['Server'] = ApiClient.convertToType(data['Server'], 'String');
            }
            if (data.hasOwnProperty('SkipDefaultQueueSetup')) {
                obj['SkipDefaultQueueSetup'] = ApiClient.convertToType(data['SkipDefaultQueueSetup'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateEventStreamRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateEventStreamRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['DDEClient'] && !(typeof data['DDEClient'] === 'string' || data['DDEClient'] instanceof String)) {
            throw new Error("Expected the field `DDEClient` to be a primitive type in the JSON string but got " + data['DDEClient']);
        }
        // ensure the json data is a string
        if (data['DDETarget'] && !(typeof data['DDETarget'] === 'string' || data['DDETarget'] instanceof String)) {
            throw new Error("Expected the field `DDETarget` to be a primitive type in the JSON string but got " + data['DDETarget']);
        }
        // ensure the json data is a string
        if (data['EventStreamDatabase'] && !(typeof data['EventStreamDatabase'] === 'string' || data['EventStreamDatabase'] instanceof String)) {
            throw new Error("Expected the field `EventStreamDatabase` to be a primitive type in the JSON string but got " + data['EventStreamDatabase']);
        }
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['Project'] && !(typeof data['Project'] === 'string' || data['Project'] instanceof String)) {
            throw new Error("Expected the field `Project` to be a primitive type in the JSON string but got " + data['Project']);
        }
        // ensure the json data is a string
        if (data['QueueLockId'] && !(typeof data['QueueLockId'] === 'string' || data['QueueLockId'] instanceof String)) {
            throw new Error("Expected the field `QueueLockId` to be a primitive type in the JSON string but got " + data['QueueLockId']);
        }
        // ensure the json data is a string
        if (data['Server'] && !(typeof data['Server'] === 'string' || data['Server'] instanceof String)) {
            throw new Error("Expected the field `Server` to be a primitive type in the JSON string but got " + data['Server']);
        }

        return true;
    }


}



/**
 * Client in DDE in which you would like to create the event stream
 * @member {String} DDEClient
 */
CreateEventStreamRequest.prototype['DDEClient'] = undefined;

/**
 * An integer uniquely identifying the DDE system.  This site id is provided when it has been added via the SysAdminApp's AddDDESite command.
 * @member {Number} DDESiteId
 */
CreateEventStreamRequest.prototype['DDESiteId'] = undefined;

/**
 * Target within the DDE client in which you would like to create the event stream
 * @member {String} DDETarget
 */
CreateEventStreamRequest.prototype['DDETarget'] = undefined;

/**
 * Name of the engine database into which to place the event stream data
 * @member {String} EventStreamDatabase
 */
CreateEventStreamRequest.prototype['EventStreamDatabase'] = undefined;

/**
 * ID of group to associate the event stream data with
 * @member {Number} GroupId
 */
CreateEventStreamRequest.prototype['GroupId'] = undefined;

/**
 * (default false)
 * @member {Boolean} IsFifoQueueRequired
 */
CreateEventStreamRequest.prototype['IsFifoQueueRequired'] = undefined;

/**
 * Name of the event stream you would like to create
 * @member {String} Name
 */
CreateEventStreamRequest.prototype['Name'] = undefined;

/**
 * Engine project into which to place the Event tables
 * @member {String} Project
 */
CreateEventStreamRequest.prototype['Project'] = undefined;

/**
 * If the event stream is to be attached to an existing queue then the lock id must be specified. This pre-supposes that any existing consumer event stream has been deleted
 * @member {String} QueueLockId
 */
CreateEventStreamRequest.prototype['QueueLockId'] = undefined;

/**
 * Engine server on which to install the Event tables
 * @member {String} Server
 */
CreateEventStreamRequest.prototype['Server'] = undefined;

/**
 * If this is true then the AlterianCX_defaultQueue global parameter will not be set (default false)
 * @member {Boolean} SkipDefaultQueueSetup
 */
CreateEventStreamRequest.prototype['SkipDefaultQueueSetup'] = undefined;






export default CreateEventStreamRequest;
