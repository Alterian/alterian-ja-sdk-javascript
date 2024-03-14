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
import ColumnPublishedTransform from './ColumnPublishedTransform';
import TransformType from './TransformType';

/**
 * The Transform model module.
 * @module com.alterian.ja.model/Transform
 * @version 6.35.0
 */
class Transform {
    /**
     * Constructs a new <code>Transform</code>.
     * 
     * @alias module:com.alterian.ja.model/Transform
     */
    constructor() { 
        
        Transform.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Transform</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/Transform} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/Transform} The populated <code>Transform</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Transform();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('Version')) {
                obj['Version'] = ApiClient.convertToType(data['Version'], 'Number');
            }
            if (data.hasOwnProperty('TransformType')) {
                obj['TransformType'] = TransformType.constructFromObject(data['TransformType']);
            }
            if (data.hasOwnProperty('Metadata')) {
                obj['Metadata'] = ApiClient.convertToType(data['Metadata'], 'String');
            }
            if (data.hasOwnProperty('PublishedVersions')) {
                obj['PublishedVersions'] = ApiClient.convertToType(data['PublishedVersions'], [ColumnPublishedTransform]);
            }
            if (data.hasOwnProperty('JSONTransforms')) {
                obj['JSONTransforms'] = ApiClient.convertToType(data['JSONTransforms'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Transform</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Transform</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Metadata'] && !(typeof data['Metadata'] === 'string' || data['Metadata'] instanceof String)) {
            throw new Error("Expected the field `Metadata` to be a primitive type in the JSON string but got " + data['Metadata']);
        }
        if (data['PublishedVersions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['PublishedVersions'])) {
                throw new Error("Expected the field `PublishedVersions` to be an array in the JSON data but got " + data['PublishedVersions']);
            }
            // validate the optional field `PublishedVersions` (array)
            for (const item of data['PublishedVersions']) {
                ColumnPublishedTransform.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['JSONTransforms'] && !(typeof data['JSONTransforms'] === 'string' || data['JSONTransforms'] instanceof String)) {
            throw new Error("Expected the field `JSONTransforms` to be a primitive type in the JSON string but got " + data['JSONTransforms']);
        }
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }

        return true;
    }


}



/**
 * 
 * @member {Number} Id
 */
Transform.prototype['Id'] = undefined;

/**
 * 
 * @member {Number} Version
 */
Transform.prototype['Version'] = undefined;

/**
 * @member {module:com.alterian.ja.model/TransformType} TransformType
 */
Transform.prototype['TransformType'] = undefined;

/**
 * 
 * @member {String} Metadata
 */
Transform.prototype['Metadata'] = undefined;

/**
 * 
 * @member {Array.<module:com.alterian.ja.model/ColumnPublishedTransform>} PublishedVersions
 */
Transform.prototype['PublishedVersions'] = undefined;

/**
 * 
 * @member {String} JSONTransforms
 */
Transform.prototype['JSONTransforms'] = undefined;

/**
 * 
 * @member {String} Name
 */
Transform.prototype['Name'] = undefined;






export default Transform;
