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
 * The DMTimeZoneInfo model module.
 * @module com.alterian.ja.model/DMTimeZoneInfo
 * @version 6.35.0
 */
class DMTimeZoneInfo {
    /**
     * Constructs a new <code>DMTimeZoneInfo</code>.
     * 
     * @alias module:com.alterian.ja.model/DMTimeZoneInfo
     */
    constructor() { 
        
        DMTimeZoneInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DMTimeZoneInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/DMTimeZoneInfo} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/DMTimeZoneInfo} The populated <code>DMTimeZoneInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DMTimeZoneInfo();

            if (data.hasOwnProperty('TimeZoneID')) {
                obj['TimeZoneID'] = ApiClient.convertToType(data['TimeZoneID'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('DisplayName')) {
                obj['DisplayName'] = ApiClient.convertToType(data['DisplayName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DMTimeZoneInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DMTimeZoneInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['DisplayName'] && !(typeof data['DisplayName'] === 'string' || data['DisplayName'] instanceof String)) {
            throw new Error("Expected the field `DisplayName` to be a primitive type in the JSON string but got " + data['DisplayName']);
        }

        return true;
    }


}



/**
 * 
 * @member {Number} TimeZoneID
 */
DMTimeZoneInfo.prototype['TimeZoneID'] = undefined;

/**
 * 
 * @member {String} Name
 */
DMTimeZoneInfo.prototype['Name'] = undefined;

/**
 * 
 * @member {String} DisplayName
 */
DMTimeZoneInfo.prototype['DisplayName'] = undefined;






export default DMTimeZoneInfo;
