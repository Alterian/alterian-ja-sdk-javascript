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
* Enum class PatternState.
* @enum {}
* @readonly
*/
export default class PatternState {
    
        /**
         * value: 1
         * @const
         */
        "Uninitialized" = 1;

    
        /**
         * value: 2
         * @const
         */
        "DataPrepared" = 2;

    
        /**
         * value: 3
         * @const
         */
        "Calculated" = 3;

    
        /**
         * value: 4
         * @const
         */
        "Uploaded" = 4;

    

    /**
    * Returns a <code>PatternState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:com.alterian.ja.model/PatternState} The enum <code>PatternState</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
