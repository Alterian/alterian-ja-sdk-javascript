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
import PublishedTransformVersion from './PublishedTransformVersion';

/**
 * The FieldTransforms model module.
 * @module com.alterian.ja.model/FieldTransforms
 * @version 6.35.0
 */
class FieldTransforms {
    /**
     * Constructs a new <code>FieldTransforms</code>.
     * 
     * @alias module:com.alterian.ja.model/FieldTransforms
     */
    constructor() { 
        
        FieldTransforms.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FieldTransforms</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/FieldTransforms} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/FieldTransforms} The populated <code>FieldTransforms</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FieldTransforms();

            if (data.hasOwnProperty('FieldId')) {
                obj['FieldId'] = ApiClient.convertToType(data['FieldId'], 'Number');
            }
            if (data.hasOwnProperty('FieldTransformLists')) {
                obj['FieldTransformLists'] = ApiClient.convertToType(data['FieldTransformLists'], [PublishedTransformVersion]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FieldTransforms</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FieldTransforms</code>.
     */
    static validateJSON(data) {
        if (data['FieldTransformLists']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['FieldTransformLists'])) {
                throw new Error("Expected the field `FieldTransformLists` to be an array in the JSON data but got " + data['FieldTransformLists']);
            }
            // validate the optional field `FieldTransformLists` (array)
            for (const item of data['FieldTransformLists']) {
                PublishedTransformVersion.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * 
 * @member {Number} FieldId
 */
FieldTransforms.prototype['FieldId'] = undefined;

/**
 * 
 * @member {Array.<module:com.alterian.ja.model/PublishedTransformVersion>} FieldTransformLists
 */
FieldTransforms.prototype['FieldTransformLists'] = undefined;






export default FieldTransforms;
