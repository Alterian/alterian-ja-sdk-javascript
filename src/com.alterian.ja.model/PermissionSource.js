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
* Enum class PermissionSource.
* @enum {}
* @readonly
*/
export default class PermissionSource {
    
        /**
         * value: 0
         * @const
         */
        "SetOnSecurityID" = 0;

    
        /**
         * value: 1
         * @const
         */
        "GroupMemberShip" = 1;

    
        /**
         * value: 2
         * @const
         */
        "Folder" = 2;

    
        /**
         * value: 3
         * @const
         */
        "Unset" = 3;

    

    /**
    * Returns a <code>PermissionSource</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:com.alterian.ja.model/PermissionSource} The enum <code>PermissionSource</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

