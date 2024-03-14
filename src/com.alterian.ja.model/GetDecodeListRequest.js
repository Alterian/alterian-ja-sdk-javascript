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
 * The GetDecodeListRequest model module.
 * @module com.alterian.ja.model/GetDecodeListRequest
 * @version 6.35.0
 */
class GetDecodeListRequest {
    /**
     * Constructs a new <code>GetDecodeListRequest</code>.
     * @alias module:com.alterian.ja.model/GetDecodeListRequest
     */
    constructor() { 
        
        GetDecodeListRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetDecodeListRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/GetDecodeListRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/GetDecodeListRequest} The populated <code>GetDecodeListRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDecodeListRequest();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('Version')) {
                obj['Version'] = ApiClient.convertToType(data['Version'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetDecodeListRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetDecodeListRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * ID of the list
 * @member {Number} Id
 */
GetDecodeListRequest.prototype['Id'] = undefined;

/**
 * Version of the list (or NULL for latest version)
 * @member {Number} Version
 */
GetDecodeListRequest.prototype['Version'] = undefined;






export default GetDecodeListRequest;

