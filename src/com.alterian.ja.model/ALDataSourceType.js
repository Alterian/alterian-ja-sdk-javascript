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
 * The ALDataSourceType model module.
 * @module com.alterian.ja.model/ALDataSourceType
 * @version 6.35.0
 */
class ALDataSourceType {
    /**
     * Constructs a new <code>ALDataSourceType</code>.
     * Types of @see(ALDataSource) s  Use these types to filter out in which you are not interested.
     * @alias module:com.alterian.ja.model/ALDataSourceType
     */
    constructor() { 
        
        ALDataSourceType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ALDataSourceType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/ALDataSourceType} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/ALDataSourceType} The populated <code>ALDataSourceType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ALDataSourceType();

            if (data.hasOwnProperty('ID')) {
                obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ALDataSourceType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ALDataSourceType</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }

        return true;
    }


}



/**
 * 
 * @member {Number} ID
 */
ALDataSourceType.prototype['ID'] = undefined;

/**
 * 
 * @member {String} Name
 */
ALDataSourceType.prototype['Name'] = undefined;






export default ALDataSourceType;
