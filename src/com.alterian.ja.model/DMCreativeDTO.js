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
 * The DMCreativeDTO model module.
 * @module com.alterian.ja.model/DMCreativeDTO
 * @version 6.35.0
 */
class DMCreativeDTO {
    /**
     * Constructs a new <code>DMCreativeDTO</code>.
     * 
     * @alias module:com.alterian.ja.model/DMCreativeDTO
     */
    constructor() { 
        
        DMCreativeDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DMCreativeDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/DMCreativeDTO} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/DMCreativeDTO} The populated <code>DMCreativeDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DMCreativeDTO();

            if (data.hasOwnProperty('CategoryId')) {
                obj['CategoryId'] = ApiClient.convertToType(data['CategoryId'], 'Number');
            }
            if (data.hasOwnProperty('CreatedByUserId')) {
                obj['CreatedByUserId'] = ApiClient.convertToType(data['CreatedByUserId'], 'Number');
            }
            if (data.hasOwnProperty('CreatedByUserName')) {
                obj['CreatedByUserName'] = ApiClient.convertToType(data['CreatedByUserName'], 'String');
            }
            if (data.hasOwnProperty('CreatedDate')) {
                obj['CreatedDate'] = ApiClient.convertToType(data['CreatedDate'], 'Date');
            }
            if (data.hasOwnProperty('CreativeId')) {
                obj['CreativeId'] = ApiClient.convertToType(data['CreativeId'], 'Number');
            }
            if (data.hasOwnProperty('CreativeName')) {
                obj['CreativeName'] = ApiClient.convertToType(data['CreativeName'], 'String');
            }
            if (data.hasOwnProperty('DocumentId')) {
                obj['DocumentId'] = ApiClient.convertToType(data['DocumentId'], 'Number');
            }
            if (data.hasOwnProperty('LastModifiedByUserId')) {
                obj['LastModifiedByUserId'] = ApiClient.convertToType(data['LastModifiedByUserId'], 'Number');
            }
            if (data.hasOwnProperty('LastModifiedByUserName')) {
                obj['LastModifiedByUserName'] = ApiClient.convertToType(data['LastModifiedByUserName'], 'String');
            }
            if (data.hasOwnProperty('LastModifiedDate')) {
                obj['LastModifiedDate'] = ApiClient.convertToType(data['LastModifiedDate'], 'Date');
            }
            if (data.hasOwnProperty('ThumbnailPath')) {
                obj['ThumbnailPath'] = ApiClient.convertToType(data['ThumbnailPath'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DMCreativeDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DMCreativeDTO</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['CreatedByUserName'] && !(typeof data['CreatedByUserName'] === 'string' || data['CreatedByUserName'] instanceof String)) {
            throw new Error("Expected the field `CreatedByUserName` to be a primitive type in the JSON string but got " + data['CreatedByUserName']);
        }
        // ensure the json data is a string
        if (data['CreativeName'] && !(typeof data['CreativeName'] === 'string' || data['CreativeName'] instanceof String)) {
            throw new Error("Expected the field `CreativeName` to be a primitive type in the JSON string but got " + data['CreativeName']);
        }
        // ensure the json data is a string
        if (data['LastModifiedByUserName'] && !(typeof data['LastModifiedByUserName'] === 'string' || data['LastModifiedByUserName'] instanceof String)) {
            throw new Error("Expected the field `LastModifiedByUserName` to be a primitive type in the JSON string but got " + data['LastModifiedByUserName']);
        }
        // ensure the json data is a string
        if (data['ThumbnailPath'] && !(typeof data['ThumbnailPath'] === 'string' || data['ThumbnailPath'] instanceof String)) {
            throw new Error("Expected the field `ThumbnailPath` to be a primitive type in the JSON string but got " + data['ThumbnailPath']);
        }

        return true;
    }


}



/**
 * 
 * @member {Number} CategoryId
 */
DMCreativeDTO.prototype['CategoryId'] = undefined;

/**
 * 
 * @member {Number} CreatedByUserId
 */
DMCreativeDTO.prototype['CreatedByUserId'] = undefined;

/**
 * 
 * @member {String} CreatedByUserName
 */
DMCreativeDTO.prototype['CreatedByUserName'] = undefined;

/**
 * 
 * @member {Date} CreatedDate
 */
DMCreativeDTO.prototype['CreatedDate'] = undefined;

/**
 * 
 * @member {Number} CreativeId
 */
DMCreativeDTO.prototype['CreativeId'] = undefined;

/**
 * 
 * @member {String} CreativeName
 */
DMCreativeDTO.prototype['CreativeName'] = undefined;

/**
 * 
 * @member {Number} DocumentId
 */
DMCreativeDTO.prototype['DocumentId'] = undefined;

/**
 * 
 * @member {Number} LastModifiedByUserId
 */
DMCreativeDTO.prototype['LastModifiedByUserId'] = undefined;

/**
 * 
 * @member {String} LastModifiedByUserName
 */
DMCreativeDTO.prototype['LastModifiedByUserName'] = undefined;

/**
 * 
 * @member {Date} LastModifiedDate
 */
DMCreativeDTO.prototype['LastModifiedDate'] = undefined;

/**
 * 
 * @member {String} ThumbnailPath
 */
DMCreativeDTO.prototype['ThumbnailPath'] = undefined;






export default DMCreativeDTO;

