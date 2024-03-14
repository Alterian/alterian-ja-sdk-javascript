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
* Enum class DMEditorType.
* @enum {}
* @readonly
*/
export default class DMEditorType {
    
        /**
         * value: 0
         * @const
         */
        "DMET_STRING" = 0;

    
        /**
         * value: 1
         * @const
         */
        "DMET_TEXT" = 1;

    
        /**
         * value: 2
         * @const
         */
        "DMET_HTML" = 2;

    
        /**
         * value: 3
         * @const
         */
        "DMET_DATE" = 3;

    
        /**
         * value: 4
         * @const
         */
        "DMET_COMBO" = 4;

    

    /**
    * Returns a <code>DMEditorType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:com.alterian.ja.model/DMEditorType} The enum <code>DMEditorType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
