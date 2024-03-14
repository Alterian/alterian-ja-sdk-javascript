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
 * The ColumnMatchList model module.
 * @module com.alterian.ja.model/ColumnMatchList
 * @version 6.35.0
 */
class ColumnMatchList {
    /**
     * Constructs a new <code>ColumnMatchList</code>.
     * 
     * @alias module:com.alterian.ja.model/ColumnMatchList
     */
    constructor() { 
        
        ColumnMatchList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ColumnMatchList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/ColumnMatchList} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/ColumnMatchList} The populated <code>ColumnMatchList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ColumnMatchList();

            if (data.hasOwnProperty('ColumnName')) {
                obj['ColumnName'] = ApiClient.convertToType(data['ColumnName'], 'String');
            }
            if (data.hasOwnProperty('ValueList')) {
                obj['ValueList'] = ApiClient.convertToType(data['ValueList'], ['String']);
            }
            if (data.hasOwnProperty('IsExclusionList')) {
                obj['IsExclusionList'] = ApiClient.convertToType(data['IsExclusionList'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ColumnMatchList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ColumnMatchList</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ColumnName'] && !(typeof data['ColumnName'] === 'string' || data['ColumnName'] instanceof String)) {
            throw new Error("Expected the field `ColumnName` to be a primitive type in the JSON string but got " + data['ColumnName']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['ValueList'])) {
            throw new Error("Expected the field `ValueList` to be an array in the JSON data but got " + data['ValueList']);
        }

        return true;
    }


}



/**
 * This may be different from the attribute name and can be determined from the ColumnName property of EventStreamField e.g. cat_Occupation for Occupation
 * @member {String} ColumnName
 */
ColumnMatchList.prototype['ColumnName'] = undefined;

/**
 * List of values to include/exclude from view e.g. Director, Manager etc
 * @member {Array.<String>} ValueList
 */
ColumnMatchList.prototype['ValueList'] = undefined;

/**
 * Whether to include or exclude the values from consideration. Default is false i.e. include the values
 * @member {Boolean} IsExclusionList
 */
ColumnMatchList.prototype['IsExclusionList'] = undefined;






export default ColumnMatchList;

