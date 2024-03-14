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
 * The EventStreamKey model module.
 * @module com.alterian.ja.model/EventStreamKey
 * @version 6.35.0
 */
class EventStreamKey {
    /**
     * Constructs a new <code>EventStreamKey</code>.
     * 
     * @alias module:com.alterian.ja.model/EventStreamKey
     */
    constructor() { 
        
        EventStreamKey.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventStreamKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/EventStreamKey} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/EventStreamKey} The populated <code>EventStreamKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventStreamKey();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Key')) {
                obj['Key'] = ApiClient.convertToType(data['Key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventStreamKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventStreamKey</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['Key'] && !(typeof data['Key'] === 'string' || data['Key'] instanceof String)) {
            throw new Error("Expected the field `Key` to be a primitive type in the JSON string but got " + data['Key']);
        }

        return true;
    }


}



/**
 * 
 * @member {String} Name
 */
EventStreamKey.prototype['Name'] = undefined;

/**
 * 
 * @member {String} Key
 */
EventStreamKey.prototype['Key'] = undefined;






export default EventStreamKey;
