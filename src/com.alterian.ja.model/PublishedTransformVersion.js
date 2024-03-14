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
 * The PublishedTransformVersion model module.
 * @module com.alterian.ja.model/PublishedTransformVersion
 * @version 6.35.0
 */
class PublishedTransformVersion {
    /**
     * Constructs a new <code>PublishedTransformVersion</code>.
     * 
     * @alias module:com.alterian.ja.model/PublishedTransformVersion
     */
    constructor() { 
        
        PublishedTransformVersion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PublishedTransformVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/PublishedTransformVersion} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/PublishedTransformVersion} The populated <code>PublishedTransformVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PublishedTransformVersion();

            if (data.hasOwnProperty('Alias')) {
                obj['Alias'] = ApiClient.convertToType(data['Alias'], 'String');
            }
            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('TransformId')) {
                obj['TransformId'] = ApiClient.convertToType(data['TransformId'], 'Number');
            }
            if (data.hasOwnProperty('Version')) {
                obj['Version'] = ApiClient.convertToType(data['Version'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PublishedTransformVersion</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PublishedTransformVersion</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Alias'] && !(typeof data['Alias'] === 'string' || data['Alias'] instanceof String)) {
            throw new Error("Expected the field `Alias` to be a primitive type in the JSON string but got " + data['Alias']);
        }

        return true;
    }


}



/**
 * Alias that applies when the transform is applied to a column
 * @member {String} Alias
 */
PublishedTransformVersion.prototype['Alias'] = undefined;

/**
 * Id of the Transform
 * @member {Number} Id
 */
PublishedTransformVersion.prototype['Id'] = undefined;

/**
 * 
 * @member {Number} TransformId
 */
PublishedTransformVersion.prototype['TransformId'] = undefined;

/**
 * Version of the Transform
 * @member {Number} Version
 */
PublishedTransformVersion.prototype['Version'] = undefined;






export default PublishedTransformVersion;

