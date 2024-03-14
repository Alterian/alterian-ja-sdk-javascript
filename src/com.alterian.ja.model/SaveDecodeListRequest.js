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
 * The SaveDecodeListRequest model module.
 * @module com.alterian.ja.model/SaveDecodeListRequest
 * @version 6.35.0
 */
class SaveDecodeListRequest {
    /**
     * Constructs a new <code>SaveDecodeListRequest</code>.
     * @alias module:com.alterian.ja.model/SaveDecodeListRequest
     */
    constructor() { 
        
        SaveDecodeListRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SaveDecodeListRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/SaveDecodeListRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/SaveDecodeListRequest} The populated <code>SaveDecodeListRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SaveDecodeListRequest();

            if (data.hasOwnProperty('CopyVersion')) {
                obj['CopyVersion'] = ApiClient.convertToType(data['CopyVersion'], 'Number');
            }
            if (data.hasOwnProperty('CreateCopy')) {
                obj['CreateCopy'] = ApiClient.convertToType(data['CreateCopy'], 'Boolean');
            }
            if (data.hasOwnProperty('DefaultLabel')) {
                obj['DefaultLabel'] = ApiClient.convertToType(data['DefaultLabel'], 'String');
            }
            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('Metadata')) {
                obj['Metadata'] = ApiClient.convertToType(data['Metadata'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('ReplaceExisting')) {
                obj['ReplaceExisting'] = ApiClient.convertToType(data['ReplaceExisting'], 'Boolean');
            }
            if (data.hasOwnProperty('SourceLabels')) {
                obj['SourceLabels'] = ApiClient.convertToType(data['SourceLabels'], ['String']);
            }
            if (data.hasOwnProperty('TargetLabels')) {
                obj['TargetLabels'] = ApiClient.convertToType(data['TargetLabels'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SaveDecodeListRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SaveDecodeListRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['DefaultLabel'] && !(typeof data['DefaultLabel'] === 'string' || data['DefaultLabel'] instanceof String)) {
            throw new Error("Expected the field `DefaultLabel` to be a primitive type in the JSON string but got " + data['DefaultLabel']);
        }
        // ensure the json data is a string
        if (data['Metadata'] && !(typeof data['Metadata'] === 'string' || data['Metadata'] instanceof String)) {
            throw new Error("Expected the field `Metadata` to be a primitive type in the JSON string but got " + data['Metadata']);
        }
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['SourceLabels'])) {
            throw new Error("Expected the field `SourceLabels` to be an array in the JSON data but got " + data['SourceLabels']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['TargetLabels'])) {
            throw new Error("Expected the field `TargetLabels` to be an array in the JSON data but got " + data['TargetLabels']);
        }

        return true;
    }


}



/**
 * When CreateCopy is true provides a version to copy from (or latest if set to NULL)
 * @member {Number} CopyVersion
 */
SaveDecodeListRequest.prototype['CopyVersion'] = undefined;

/**
 * When false allows rename for an existing list Id. When true provides 'Save As' functionality for the specified source id (a new name must be supplied) - note that ReplaceExisting determines whether any saved labels are copied across from the source
 * @member {Boolean} CreateCopy
 */
SaveDecodeListRequest.prototype['CreateCopy'] = undefined;

/**
 * Optional default label to be applied for any non-matched source labels. Note that the distinction between NULL and empty string is significant - NULL means remove the current default, Empty string causes existing value to be replace with empty string (==NULL in Engine)
 * @member {String} DefaultLabel
 */
SaveDecodeListRequest.prototype['DefaultLabel'] = undefined;

/**
 * Optional ID for use when updating an existing decode list
 * @member {Number} Id
 */
SaveDecodeListRequest.prototype['Id'] = undefined;

/**
 * JSON Blob used by the UI to store sampling settings / screen layout when editing the transform
 * @member {String} Metadata
 */
SaveDecodeListRequest.prototype['Metadata'] = undefined;

/**
 * Optional Name of the decode list (required for new lists)
 * @member {String} Name
 */
SaveDecodeListRequest.prototype['Name'] = undefined;

/**
 * Defaults to False meaning that the update acts in a 'cursored' mode - the UI can submit only the deltas and any existing decodes from the previous list version are preserved. When set to true then any existing decodes are completely replaced
 * @member {Boolean} ReplaceExisting
 */
SaveDecodeListRequest.prototype['ReplaceExisting'] = undefined;

/**
 * Source labels to be decoded. To map from NULL use empty string or NULL
 * @member {Array.<String>} SourceLabels
 */
SaveDecodeListRequest.prototype['SourceLabels'] = undefined;

/**
 * Decoded versions of the source labels. Note that the distinction between NULL and empty string is significant - NULL means remove any existing decode (default will still apply), Empty string causes existing value to be replace with empty string (==NULL in Engine)
 * @member {Array.<String>} TargetLabels
 */
SaveDecodeListRequest.prototype['TargetLabels'] = undefined;






export default SaveDecodeListRequest;

