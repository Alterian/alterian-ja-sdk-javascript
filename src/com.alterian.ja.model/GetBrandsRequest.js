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
 * The GetBrandsRequest model module.
 * @module com.alterian.ja.model/GetBrandsRequest
 * @version 6.35.0
 */
class GetBrandsRequest {
    /**
     * Constructs a new <code>GetBrandsRequest</code>.
     * @alias module:com.alterian.ja.model/GetBrandsRequest
     */
    constructor() { 
        
        GetBrandsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetBrandsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/GetBrandsRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/GetBrandsRequest} The populated <code>GetBrandsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBrandsRequest();

            if (data.hasOwnProperty('LoginId')) {
                obj['LoginId'] = ApiClient.convertToType(data['LoginId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetBrandsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetBrandsRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['LoginId'] && !(typeof data['LoginId'] === 'string' || data['LoginId'] instanceof String)) {
            throw new Error("Expected the field `LoginId` to be a primitive type in the JSON string but got " + data['LoginId']);
        }

        return true;
    }


}



/**
 * 
 * @member {String} LoginId
 */
GetBrandsRequest.prototype['LoginId'] = undefined;






export default GetBrandsRequest;
