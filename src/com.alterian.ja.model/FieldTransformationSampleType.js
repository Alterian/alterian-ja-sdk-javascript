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
* Enum class FieldTransformationSampleType.
* @enum {}
* @readonly
*/
export default class FieldTransformationSampleType {
    
        /**
         * value: 1
         * @const
         */
        "First" = 1;

    
        /**
         * value: 2
         * @const
         */
        "Last" = 2;

    
        /**
         * value: 3
         * @const
         */
        "Random" = 3;

    

    /**
    * Returns a <code>FieldTransformationSampleType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:com.alterian.ja.model/FieldTransformationSampleType} The enum <code>FieldTransformationSampleType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

