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
import AppliesToType from './AppliesToType';
import DataSourceAttributeTypes from './DataSourceAttributeTypes';

/**
 * The DatasourceAttribute model module.
 * @module com.alterian.ja.model/DatasourceAttribute
 * @version 6.35.0
 */
class DatasourceAttribute {
    /**
     * Constructs a new <code>DatasourceAttribute</code>.
     * 
     * @alias module:com.alterian.ja.model/DatasourceAttribute
     */
    constructor() { 
        
        DatasourceAttribute.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatasourceAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/DatasourceAttribute} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/DatasourceAttribute} The populated <code>DatasourceAttribute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatasourceAttribute();

            if (data.hasOwnProperty('ID')) {
                obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('AppliesTo')) {
                obj['AppliesTo'] = AppliesToType.constructFromObject(data['AppliesTo']);
            }
            if (data.hasOwnProperty('DatasourceTypeID')) {
                obj['DatasourceTypeID'] = ApiClient.convertToType(data['DatasourceTypeID'], 'Number');
            }
            if (data.hasOwnProperty('AttributeType')) {
                obj['AttributeType'] = DataSourceAttributeTypes.constructFromObject(data['AttributeType']);
            }
            if (data.hasOwnProperty('Required')) {
                obj['Required'] = ApiClient.convertToType(data['Required'], 'Boolean');
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DatasourceAttribute</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DatasourceAttribute</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['Value'] && !(typeof data['Value'] === 'string' || data['Value'] instanceof String)) {
            throw new Error("Expected the field `Value` to be a primitive type in the JSON string but got " + data['Value']);
        }
        // ensure the json data is a string
        if (data['Description'] && !(typeof data['Description'] === 'string' || data['Description'] instanceof String)) {
            throw new Error("Expected the field `Description` to be a primitive type in the JSON string but got " + data['Description']);
        }

        return true;
    }


}



/**
 * 
 * @member {Number} ID
 */
DatasourceAttribute.prototype['ID'] = undefined;

/**
 * 
 * @member {String} Name
 */
DatasourceAttribute.prototype['Name'] = undefined;

/**
 * @member {module:com.alterian.ja.model/AppliesToType} AppliesTo
 */
DatasourceAttribute.prototype['AppliesTo'] = undefined;

/**
 * 
 * @member {Number} DatasourceTypeID
 */
DatasourceAttribute.prototype['DatasourceTypeID'] = undefined;

/**
 * @member {module:com.alterian.ja.model/DataSourceAttributeTypes} AttributeType
 */
DatasourceAttribute.prototype['AttributeType'] = undefined;

/**
 * 
 * @member {Boolean} Required
 */
DatasourceAttribute.prototype['Required'] = undefined;

/**
 * 
 * @member {String} Value
 */
DatasourceAttribute.prototype['Value'] = undefined;

/**
 * 
 * @member {String} Description
 */
DatasourceAttribute.prototype['Description'] = undefined;






export default DatasourceAttribute;

