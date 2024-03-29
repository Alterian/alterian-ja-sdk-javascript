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
 * The GetBrandTokenRequest model module.
 * @module com.alterian.ja.model/GetBrandTokenRequest
 * @version 6.35.0
 */
class GetBrandTokenRequest {
    /**
     * Constructs a new <code>GetBrandTokenRequest</code>.
     * @alias module:com.alterian.ja.model/GetBrandTokenRequest
     */
    constructor() { 
        
        GetBrandTokenRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetBrandTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/GetBrandTokenRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/GetBrandTokenRequest} The populated <code>GetBrandTokenRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBrandTokenRequest();

            if (data.hasOwnProperty('BrandId')) {
                obj['BrandId'] = ApiClient.convertToType(data['BrandId'], 'Number');
            }
            if (data.hasOwnProperty('UserId')) {
                obj['UserId'] = ApiClient.convertToType(data['UserId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetBrandTokenRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetBrandTokenRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Brand you would like a token to access, you must not be denied access.
 * @member {Number} BrandId
 */
GetBrandTokenRequest.prototype['BrandId'] = undefined;

/**
 * If you would like to impersonate a user, provide the id.  Note, you must be granted permissions to impersonate.  If you do not pass a value, you can call other methods which do not require a user id such as the Brand methods
 * @member {Number} UserId
 */
GetBrandTokenRequest.prototype['UserId'] = undefined;






export default GetBrandTokenRequest;

