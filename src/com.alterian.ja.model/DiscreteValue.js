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
 * The DiscreteValue model module.
 * @module com.alterian.ja.model/DiscreteValue
 * @version 6.35.0
 */
class DiscreteValue {
    /**
     * Constructs a new <code>DiscreteValue</code>.
     * DiscreteValue.
     * @alias module:com.alterian.ja.model/DiscreteValue
     */
    constructor() { 
        
        DiscreteValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DiscreteValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/DiscreteValue} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/DiscreteValue} The populated <code>DiscreteValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DiscreteValue();

            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
            }
            if (data.hasOwnProperty('Count')) {
                obj['Count'] = ApiClient.convertToType(data['Count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DiscreteValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DiscreteValue</code>.
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
 * Value.
 * @member {String} Value
 */
DiscreteValue.prototype['Value'] = undefined;

/**
 * Count.
 * @member {Number} Count
 */
DiscreteValue.prototype['Count'] = undefined;






export default DiscreteValue;
