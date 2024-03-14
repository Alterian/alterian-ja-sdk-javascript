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
 * The UpdateClientSettingsRequest model module.
 * @module com.alterian.ja.model/UpdateClientSettingsRequest
 * @version 6.35.0
 */
class UpdateClientSettingsRequest {
    /**
     * Constructs a new <code>UpdateClientSettingsRequest</code>.
     * @alias module:com.alterian.ja.model/UpdateClientSettingsRequest
     */
    constructor() { 
        
        UpdateClientSettingsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateClientSettingsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/UpdateClientSettingsRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/UpdateClientSettingsRequest} The populated <code>UpdateClientSettingsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateClientSettingsRequest();

            if (data.hasOwnProperty('ClientId')) {
                obj['ClientId'] = ApiClient.convertToType(data['ClientId'], 'Number');
            }
            if (data.hasOwnProperty('Settings')) {
                obj['Settings'] = ApiClient.convertToType(data['Settings'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateClientSettingsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateClientSettingsRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Id of client to return
 * @member {Number} ClientId
 */
UpdateClientSettingsRequest.prototype['ClientId'] = undefined;

/**
 * Updated client settings e.g.[ { \"Key\": \"activitylogbatchsize\", \"Value\": \"500\" } ]
 * @member {Object.<String, String>} Settings
 */
UpdateClientSettingsRequest.prototype['Settings'] = undefined;






export default UpdateClientSettingsRequest;

