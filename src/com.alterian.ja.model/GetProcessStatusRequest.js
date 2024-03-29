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
 * The GetProcessStatusRequest model module.
 * @module com.alterian.ja.model/GetProcessStatusRequest
 * @version 6.35.0
 */
class GetProcessStatusRequest {
    /**
     * Constructs a new <code>GetProcessStatusRequest</code>.
     * @alias module:com.alterian.ja.model/GetProcessStatusRequest
     */
    constructor() { 
        
        GetProcessStatusRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProcessStatusRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/GetProcessStatusRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/GetProcessStatusRequest} The populated <code>GetProcessStatusRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProcessStatusRequest();

            if (data.hasOwnProperty('ProcessId')) {
                obj['ProcessId'] = ApiClient.convertToType(data['ProcessId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetProcessStatusRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetProcessStatusRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Id of the status from the queueing call
 * @member {Number} ProcessId
 */
GetProcessStatusRequest.prototype['ProcessId'] = undefined;






export default GetProcessStatusRequest;

