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

/**
 * The DecodeList model module.
 * @module com.alterian.ja.model/DecodeList
 * @version 6.35.0
 */
class DecodeList {
    /**
     * Constructs a new <code>DecodeList</code>.
     * 
     * @alias module:com.alterian.ja.model/DecodeList
     */
    constructor() { 
        
        DecodeList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DecodeList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/DecodeList} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/DecodeList} The populated <code>DecodeList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeList();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('Version')) {
                obj['Version'] = ApiClient.convertToType(data['Version'], 'Number');
            }
            if (data.hasOwnProperty('DefaultLabel')) {
                obj['DefaultLabel'] = ApiClient.convertToType(data['DefaultLabel'], 'String');
            }
            if (data.hasOwnProperty('SourceLabels')) {
                obj['SourceLabels'] = ApiClient.convertToType(data['SourceLabels'], ['String']);
            }
            if (data.hasOwnProperty('TargetLabels')) {
                obj['TargetLabels'] = ApiClient.convertToType(data['TargetLabels'], ['String']);
            }
            if (data.hasOwnProperty('Metadata')) {
                obj['Metadata'] = ApiClient.convertToType(data['Metadata'], 'String');
            }
            if (data.hasOwnProperty('PublishedVersions')) {
                obj['PublishedVersions'] = ApiClient.convertToType(data['PublishedVersions'], [ColumnPublishedTransform]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DecodeList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DecodeList</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['DefaultLabel'] && !(typeof data['DefaultLabel'] === 'string' || data['DefaultLabel'] instanceof String)) {
            throw new Error("Expected the field `DefaultLabel` to be a primitive type in the JSON string but got " + data['DefaultLabel']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['SourceLabels'])) {
            throw new Error("Expected the field `SourceLabels` to be an array in the JSON data but got " + data['SourceLabels']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['TargetLabels'])) {
            throw new Error("Expected the field `TargetLabels` to be an array in the JSON data but got " + data['TargetLabels']);
        }
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

        return true;
    }


}



/**
 * 
 * @member {String} Name
 */
DecodeList.prototype['Name'] = undefined;

/**
 * 
 * @member {Number} Id
 */
DecodeList.prototype['Id'] = undefined;

/**
 * 
 * @member {Number} Version
 */
DecodeList.prototype['Version'] = undefined;

/**
 * 
 * @member {String} DefaultLabel
 */
DecodeList.prototype['DefaultLabel'] = undefined;

/**
 * 
 * @member {Array.<String>} SourceLabels
 */
DecodeList.prototype['SourceLabels'] = undefined;

/**
 * 
 * @member {Array.<String>} TargetLabels
 */
DecodeList.prototype['TargetLabels'] = undefined;

/**
 * 
 * @member {String} Metadata
 */
DecodeList.prototype['Metadata'] = undefined;

/**
 * 
 * @member {Array.<module:com.alterian.ja.model/ColumnPublishedTransform>} PublishedVersions
 */
DecodeList.prototype['PublishedVersions'] = undefined;






export default DecodeList;

