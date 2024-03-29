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
 * The GetUserRequest model module.
 * @module com.alterian.ja.model/GetUserRequest
 * @version 6.35.0
 */
class GetUserRequest {
    /**
     * Constructs a new <code>GetUserRequest</code>.
     * @alias module:com.alterian.ja.model/GetUserRequest
     */
    constructor() { 
        
        GetUserRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/GetUserRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/GetUserRequest} The populated <code>GetUserRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetUserRequest();

            if (data.hasOwnProperty('IncludeGroups')) {
                obj['IncludeGroups'] = ApiClient.convertToType(data['IncludeGroups'], 'Boolean');
            }
            if (data.hasOwnProperty('IncludePermissions')) {
                obj['IncludePermissions'] = ApiClient.convertToType(data['IncludePermissions'], 'Boolean');
            }
            if (data.hasOwnProperty('IncludeSettings')) {
                obj['IncludeSettings'] = ApiClient.convertToType(data['IncludeSettings'], 'Boolean');
            }
            if (data.hasOwnProperty('IncludeTools')) {
                obj['IncludeTools'] = ApiClient.convertToType(data['IncludeTools'], 'Boolean');
            }
            if (data.hasOwnProperty('UserID')) {
                obj['UserID'] = ApiClient.convertToType(data['UserID'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetUserRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetUserRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Include group membership
 * @member {Boolean} IncludeGroups
 */
GetUserRequest.prototype['IncludeGroups'] = undefined;

/**
 * Include user level permissions
 * @member {Boolean} IncludePermissions
 */
GetUserRequest.prototype['IncludePermissions'] = undefined;

/**
 * Include user settings
 * @member {Boolean} IncludeSettings
 */
GetUserRequest.prototype['IncludeSettings'] = undefined;

/**
 * Include tools to which the user has access
 * @member {Boolean} IncludeTools
 */
GetUserRequest.prototype['IncludeTools'] = undefined;

/**
 * ID of the @see(ALUser) to read
 * @member {Number} UserID
 */
GetUserRequest.prototype['UserID'] = undefined;






export default GetUserRequest;

