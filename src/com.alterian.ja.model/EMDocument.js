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
import DMUser from './DMUser';
import EMDocumentActivityType from './EMDocumentActivityType';
import EMDocumentType from './EMDocumentType';

/**
 * The EMDocument model module.
 * @module com.alterian.ja.model/EMDocument
 * @version 6.35.0
 */
class EMDocument {
    /**
     * Constructs a new <code>EMDocument</code>.
     * 
     * @alias module:com.alterian.ja.model/EMDocument
     */
    constructor() { 
        
        EMDocument.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EMDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/EMDocument} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/EMDocument} The populated <code>EMDocument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EMDocument();

            if (data.hasOwnProperty('CreatedBy')) {
                obj['CreatedBy'] = DMUser.constructFromObject(data['CreatedBy']);
            }
            if (data.hasOwnProperty('CreatedDate')) {
                obj['CreatedDate'] = ApiClient.convertToType(data['CreatedDate'], 'Date');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('FolderID')) {
                obj['FolderID'] = ApiClient.convertToType(data['FolderID'], 'Number');
            }
            if (data.hasOwnProperty('FolderPath')) {
                obj['FolderPath'] = ApiClient.convertToType(data['FolderPath'], 'String');
            }
            if (data.hasOwnProperty('HasThumbnail')) {
                obj['HasThumbnail'] = ApiClient.convertToType(data['HasThumbnail'], 'Boolean');
            }
            if (data.hasOwnProperty('ID')) {
                obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
            }
            if (data.hasOwnProperty('LastActivityBy')) {
                obj['LastActivityBy'] = DMUser.constructFromObject(data['LastActivityBy']);
            }
            if (data.hasOwnProperty('LastActivityDate')) {
                obj['LastActivityDate'] = ApiClient.convertToType(data['LastActivityDate'], 'Date');
            }
            if (data.hasOwnProperty('LastActivityType')) {
                obj['LastActivityType'] = EMDocumentActivityType.constructFromObject(data['LastActivityType']);
            }
            if (data.hasOwnProperty('LastModifiedBy')) {
                obj['LastModifiedBy'] = DMUser.constructFromObject(data['LastModifiedBy']);
            }
            if (data.hasOwnProperty('LastModifiedDate')) {
                obj['LastModifiedDate'] = ApiClient.convertToType(data['LastModifiedDate'], 'Date');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('SourceID')) {
                obj['SourceID'] = ApiClient.convertToType(data['SourceID'], 'Number');
            }
            if (data.hasOwnProperty('ThumbnailPath')) {
                obj['ThumbnailPath'] = ApiClient.convertToType(data['ThumbnailPath'], 'String');
            }
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = EMDocumentType.constructFromObject(data['Type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EMDocument</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EMDocument</code>.
     */
    static validateJSON(data) {
        // validate the optional field `CreatedBy`
        if (data['CreatedBy']) { // data not null
          DMUser.validateJSON(data['CreatedBy']);
        }
        // ensure the json data is a string
        if (data['Description'] && !(typeof data['Description'] === 'string' || data['Description'] instanceof String)) {
            throw new Error("Expected the field `Description` to be a primitive type in the JSON string but got " + data['Description']);
        }
        // ensure the json data is a string
        if (data['FolderPath'] && !(typeof data['FolderPath'] === 'string' || data['FolderPath'] instanceof String)) {
            throw new Error("Expected the field `FolderPath` to be a primitive type in the JSON string but got " + data['FolderPath']);
        }
        // validate the optional field `LastActivityBy`
        if (data['LastActivityBy']) { // data not null
          DMUser.validateJSON(data['LastActivityBy']);
        }
        // validate the optional field `LastModifiedBy`
        if (data['LastModifiedBy']) { // data not null
          DMUser.validateJSON(data['LastModifiedBy']);
        }
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['ThumbnailPath'] && !(typeof data['ThumbnailPath'] === 'string' || data['ThumbnailPath'] instanceof String)) {
            throw new Error("Expected the field `ThumbnailPath` to be a primitive type in the JSON string but got " + data['ThumbnailPath']);
        }

        return true;
    }


}



/**
 * @member {module:com.alterian.ja.model/DMUser} CreatedBy
 */
EMDocument.prototype['CreatedBy'] = undefined;

/**
 * 
 * @member {Date} CreatedDate
 */
EMDocument.prototype['CreatedDate'] = undefined;

/**
 * 
 * @member {String} Description
 */
EMDocument.prototype['Description'] = undefined;

/**
 * 
 * @member {Number} FolderID
 */
EMDocument.prototype['FolderID'] = undefined;

/**
 * 
 * @member {String} FolderPath
 */
EMDocument.prototype['FolderPath'] = undefined;

/**
 * 
 * @member {Boolean} HasThumbnail
 */
EMDocument.prototype['HasThumbnail'] = undefined;

/**
 * 
 * @member {Number} ID
 */
EMDocument.prototype['ID'] = undefined;

/**
 * @member {module:com.alterian.ja.model/DMUser} LastActivityBy
 */
EMDocument.prototype['LastActivityBy'] = undefined;

/**
 * 
 * @member {Date} LastActivityDate
 */
EMDocument.prototype['LastActivityDate'] = undefined;

/**
 * @member {module:com.alterian.ja.model/EMDocumentActivityType} LastActivityType
 */
EMDocument.prototype['LastActivityType'] = undefined;

/**
 * @member {module:com.alterian.ja.model/DMUser} LastModifiedBy
 */
EMDocument.prototype['LastModifiedBy'] = undefined;

/**
 * 
 * @member {Date} LastModifiedDate
 */
EMDocument.prototype['LastModifiedDate'] = undefined;

/**
 * 
 * @member {String} Name
 */
EMDocument.prototype['Name'] = undefined;

/**
 * 
 * @member {Number} SourceID
 */
EMDocument.prototype['SourceID'] = undefined;

/**
 * 
 * @member {String} ThumbnailPath
 */
EMDocument.prototype['ThumbnailPath'] = undefined;

/**
 * @member {module:com.alterian.ja.model/EMDocumentType} Type
 */
EMDocument.prototype['Type'] = undefined;






export default EMDocument;

