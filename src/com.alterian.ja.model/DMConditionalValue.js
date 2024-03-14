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
 * The DMConditionalValue model module.
 * @module com.alterian.ja.model/DMConditionalValue
 * @version 6.35.0
 */
class DMConditionalValue {
    /**
     * Constructs a new <code>DMConditionalValue</code>.
     * 
     * @alias module:com.alterian.ja.model/DMConditionalValue
     */
    constructor() { 
        
        DMConditionalValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DMConditionalValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/DMConditionalValue} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/DMConditionalValue} The populated <code>DMConditionalValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DMConditionalValue();

            if (data.hasOwnProperty('Conditions')) {
                obj['Conditions'] = ApiClient.convertToType(data['Conditions'], Object);
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DMConditionalValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DMConditionalValue</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Value'] && !(typeof data['Value'] === 'string' || data['Value'] instanceof String)) {
            throw new Error("Expected the field `Value` to be a primitive type in the JSON string but got " + data['Value']);
        }

        return true;
    }


}



/**
 * 
 * @member {Object} Conditions
 */
DMConditionalValue.prototype['Conditions'] = undefined;

/**
 * 
 * @member {String} Value
 */
DMConditionalValue.prototype['Value'] = undefined;






export default DMConditionalValue;
