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
 * The EMDeleteListRequest model module.
 * @module com.alterian.ja.model/EMDeleteListRequest
 * @version 6.35.0
 */
class EMDeleteListRequest {
    /**
     * Constructs a new <code>EMDeleteListRequest</code>.
     * @alias module:com.alterian.ja.model/EMDeleteListRequest
     */
    constructor() { 
        
        EMDeleteListRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EMDeleteListRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/EMDeleteListRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/EMDeleteListRequest} The populated <code>EMDeleteListRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EMDeleteListRequest();

            if (data.hasOwnProperty('EMMappingId')) {
                obj['EMMappingId'] = ApiClient.convertToType(data['EMMappingId'], 'Number');
            }
            if (data.hasOwnProperty('ListId')) {
                obj['ListId'] = ApiClient.convertToType(data['ListId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EMDeleteListRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EMDeleteListRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * 
 * @member {Number} EMMappingId
 */
EMDeleteListRequest.prototype['EMMappingId'] = undefined;

/**
 * 
 * @member {Number} ListId
 */
EMDeleteListRequest.prototype['ListId'] = undefined;






export default EMDeleteListRequest;
