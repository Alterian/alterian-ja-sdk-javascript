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
* Enum class ResourceType.
* @enum {}
* @readonly
*/
export default class ResourceType {
    
        /**
         * value: 1
         * @const
         */
        "Document" = 1;

    
        /**
         * value: 2
         * @const
         */
        "Campaign" = 2;

    
        /**
         * value: 3
         * @const
         */
        "Module" = 3;

    
        /**
         * value: 4
         * @const
         */
        "Folder" = 4;

    
        /**
         * value: 5
         * @const
         */
        "File" = 5;

    
        /**
         * value: 6
         * @const
         */
        "Node" = 6;

    
        /**
         * value: 7
         * @const
         */
        "Datasource" = 7;

    
        /**
         * value: 8
         * @const
         */
        "DatasourceDatabase" = 8;

    
        /**
         * value: 9
         * @const
         */
        "DatasourceTable" = 9;

    
        /**
         * value: 10
         * @const
         */
        "DatasourceColumn" = 10;

    
        /**
         * value: 11
         * @const
         */
        "UserOrGroup" = 11;

    
        /**
         * value: 12
         * @const
         */
        "NodeFolder" = 12;

    
        /**
         * value: 13
         * @const
         */
        "FTPSite" = 13;

    
        /**
         * value: 14
         * @const
         */
        "FTPSiteFolder" = 14;

    
        /**
         * value: 15
         * @const
         */
        "EMMappingFolder" = 15;

    
        /**
         * value: 16
         * @const
         */
        "EMMapping" = 16;

    
        /**
         * value: 17
         * @const
         */
        "ExternalAgentFolder" = 17;

    
        /**
         * value: 18
         * @const
         */
        "ExternalAgent" = 18;

    
        /**
         * value: 19
         * @const
         */
        "Metric" = 19;

    

    /**
    * Returns a <code>ResourceType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:com.alterian.ja.model/ResourceType} The enum <code>ResourceType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

