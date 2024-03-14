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
 * The EMSetEMServiceURLRequest model module.
 * @module com.alterian.ja.model/EMSetEMServiceURLRequest
 * @version 6.35.0
 */
class EMSetEMServiceURLRequest {
    /**
     * Constructs a new <code>EMSetEMServiceURLRequest</code>.
     * @alias module:com.alterian.ja.model/EMSetEMServiceURLRequest
     */
    constructor() { 
        
        EMSetEMServiceURLRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EMSetEMServiceURLRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/EMSetEMServiceURLRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/EMSetEMServiceURLRequest} The populated <code>EMSetEMServiceURLRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EMSetEMServiceURLRequest();

            if (data.hasOwnProperty('Url')) {
                obj['Url'] = ApiClient.convertToType(data['Url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EMSetEMServiceURLRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EMSetEMServiceURLRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Url'] && !(typeof data['Url'] === 'string' || data['Url'] instanceof String)) {
            throw new Error("Expected the field `Url` to be a primitive type in the JSON string but got " + data['Url']);
        }

        return true;
    }


}



/**
 * New EM service URL
 * @member {String} Url
 */
EMSetEMServiceURLRequest.prototype['Url'] = undefined;






export default EMSetEMServiceURLRequest;

