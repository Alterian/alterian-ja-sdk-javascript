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
 * The SankeyFavourite model module.
 * @module com.alterian.ja.model/SankeyFavourite
 * @version 6.35.0
 */
class SankeyFavourite {
    /**
     * Constructs a new <code>SankeyFavourite</code>.
     * Definition of a Sankey
     * @alias module:com.alterian.ja.model/SankeyFavourite
     */
    constructor() { 
        
        SankeyFavourite.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SankeyFavourite</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/SankeyFavourite} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/SankeyFavourite} The populated <code>SankeyFavourite</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SankeyFavourite();

            if (data.hasOwnProperty('ID')) {
                obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
            }
            if (data.hasOwnProperty('QueueId')) {
                obj['QueueId'] = ApiClient.convertToType(data['QueueId'], 'Number');
            }
            if (data.hasOwnProperty('UserId')) {
                obj['UserId'] = ApiClient.convertToType(data['UserId'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('EventTypes')) {
                obj['EventTypes'] = ApiClient.convertToType(data['EventTypes'], ['String']);
            }
            if (data.hasOwnProperty('Initiatives')) {
                obj['Initiatives'] = ApiClient.convertToType(data['Initiatives'], ['String']);
            }
            if (data.hasOwnProperty('StartDtTm')) {
                obj['StartDtTm'] = ApiClient.convertToType(data['StartDtTm'], 'Date');
            }
            if (data.hasOwnProperty('EndDtTm')) {
                obj['EndDtTm'] = ApiClient.convertToType(data['EndDtTm'], 'Date');
            }
            if (data.hasOwnProperty('PeriodInDays')) {
                obj['PeriodInDays'] = ApiClient.convertToType(data['PeriodInDays'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SankeyFavourite</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SankeyFavourite</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['EventTypes'])) {
            throw new Error("Expected the field `EventTypes` to be an array in the JSON data but got " + data['EventTypes']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Initiatives'])) {
            throw new Error("Expected the field `Initiatives` to be an array in the JSON data but got " + data['Initiatives']);
        }

        return true;
    }


}



/**
 * Initiative ID
 * @member {Number} ID
 */
SankeyFavourite.prototype['ID'] = undefined;

/**
 * Queue ID
 * @member {Number} QueueId
 */
SankeyFavourite.prototype['QueueId'] = undefined;

/**
 * User ID (Null for public)
 * @member {Number} UserId
 */
SankeyFavourite.prototype['UserId'] = undefined;

/**
 * Name of the Sankey Favourite
 * @member {String} Name
 */
SankeyFavourite.prototype['Name'] = undefined;

/**
 * Event Types
 * @member {Array.<String>} EventTypes
 */
SankeyFavourite.prototype['EventTypes'] = undefined;

/**
 * Initiatives
 * @member {Array.<String>} Initiatives
 */
SankeyFavourite.prototype['Initiatives'] = undefined;

/**
 * 
 * @member {Date} StartDtTm
 */
SankeyFavourite.prototype['StartDtTm'] = undefined;

/**
 * 
 * @member {Date} EndDtTm
 */
SankeyFavourite.prototype['EndDtTm'] = undefined;

/**
 * 
 * @member {Number} PeriodInDays
 */
SankeyFavourite.prototype['PeriodInDays'] = undefined;






export default SankeyFavourite;

