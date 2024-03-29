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
 * The UpdateSystemSettingRequest model module.
 * @module com.alterian.ja.model/UpdateSystemSettingRequest
 * @version 6.35.0
 */
class UpdateSystemSettingRequest {
    /**
     * Constructs a new <code>UpdateSystemSettingRequest</code>.
     * @alias module:com.alterian.ja.model/UpdateSystemSettingRequest
     */
    constructor() { 
        
        UpdateSystemSettingRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateSystemSettingRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/UpdateSystemSettingRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/UpdateSystemSettingRequest} The populated <code>UpdateSystemSettingRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateSystemSettingRequest();

            if (data.hasOwnProperty('Key')) {
                obj['Key'] = ApiClient.convertToType(data['Key'], 'String');
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateSystemSettingRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateSystemSettingRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Key'] && !(typeof data['Key'] === 'string' || data['Key'] instanceof String)) {
            throw new Error("Expected the field `Key` to be a primitive type in the JSON string but got " + data['Key']);
        }
        // ensure the json data is a string
        if (data['Value'] && !(typeof data['Value'] === 'string' || data['Value'] instanceof String)) {
            throw new Error("Expected the field `Value` to be a primitive type in the JSON string but got " + data['Value']);
        }

        return true;
    }


}



/**
 * Setting to update e.g. \"SMTPHost\"
 * @member {String} Key
 */
UpdateSystemSettingRequest.prototype['Key'] = undefined;

/**
 * New value e.g.\"mysmtpserver.com\"
 * @member {String} Value
 */
UpdateSystemSettingRequest.prototype['Value'] = undefined;






export default UpdateSystemSettingRequest;

