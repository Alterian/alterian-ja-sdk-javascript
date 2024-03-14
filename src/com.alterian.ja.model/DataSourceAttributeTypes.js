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
* Enum class DataSourceAttributeTypes.
* @enum {}
* @readonly
*/
export default class DataSourceAttributeTypes {
    
        /**
         * value: 1
         * @const
         */
        "String" = 1;

    
        /**
         * value: 2
         * @const
         */
        "SQLConnectionString" = 2;

    
        /**
         * value: 3
         * @const
         */
        "Path" = 3;

    
        /**
         * value: 4
         * @const
         */
        "Integer" = 4;

    
        /**
         * value: 5
         * @const
         */
        "Boolean" = 5;

    
        /**
         * value: 6
         * @const
         */
        "LargeInteger" = 6;

    

    /**
    * Returns a <code>DataSourceAttributeTypes</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:com.alterian.ja.model/DataSourceAttributeTypes} The enum <code>DataSourceAttributeTypes</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

