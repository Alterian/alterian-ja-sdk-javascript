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
 * The DMDeliveryContext model module.
 * @module com.alterian.ja.model/DMDeliveryContext
 * @version 6.35.0
 */
class DMDeliveryContext {
    /**
     * Constructs a new <code>DMDeliveryContext</code>.
     * 
     * @alias module:com.alterian.ja.model/DMDeliveryContext
     */
    constructor() { 
        
        DMDeliveryContext.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DMDeliveryContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/DMDeliveryContext} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/DMDeliveryContext} The populated <code>DMDeliveryContext</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DMDeliveryContext();

            if (data.hasOwnProperty('ID')) {
                obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('VirtualMTA')) {
                obj['VirtualMTA'] = ApiClient.convertToType(data['VirtualMTA'], 'String');
            }
            if (data.hasOwnProperty('IP')) {
                obj['IP'] = ApiClient.convertToType(data['IP'], 'String');
            }
            if (data.hasOwnProperty('DefaultDC')) {
                obj['DefaultDC'] = ApiClient.convertToType(data['DefaultDC'], 'Boolean');
            }
            if (data.hasOwnProperty('VMTAIDs')) {
                obj['VMTAIDs'] = ApiClient.convertToType(data['VMTAIDs'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DMDeliveryContext</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DMDeliveryContext</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['VirtualMTA'] && !(typeof data['VirtualMTA'] === 'string' || data['VirtualMTA'] instanceof String)) {
            throw new Error("Expected the field `VirtualMTA` to be a primitive type in the JSON string but got " + data['VirtualMTA']);
        }
        // ensure the json data is a string
        if (data['IP'] && !(typeof data['IP'] === 'string' || data['IP'] instanceof String)) {
            throw new Error("Expected the field `IP` to be a primitive type in the JSON string but got " + data['IP']);
        }

        return true;
    }


}



/**
 * 
 * @member {Number} ID
 */
DMDeliveryContext.prototype['ID'] = undefined;

/**
 * 
 * @member {String} Name
 */
DMDeliveryContext.prototype['Name'] = undefined;

/**
 * 
 * @member {String} VirtualMTA
 */
DMDeliveryContext.prototype['VirtualMTA'] = undefined;

/**
 * 
 * @member {String} IP
 */
DMDeliveryContext.prototype['IP'] = undefined;

/**
 * 
 * @member {Boolean} DefaultDC
 */
DMDeliveryContext.prototype['DefaultDC'] = undefined;

/**
 * 
 * @member {Object} VMTAIDs
 */
DMDeliveryContext.prototype['VMTAIDs'] = undefined;






export default DMDeliveryContext;

