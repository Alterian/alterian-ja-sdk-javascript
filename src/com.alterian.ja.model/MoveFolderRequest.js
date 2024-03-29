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
 * The MoveFolderRequest model module.
 * @module com.alterian.ja.model/MoveFolderRequest
 * @version 6.35.0
 */
class MoveFolderRequest {
    /**
     * Constructs a new <code>MoveFolderRequest</code>.
     * @alias module:com.alterian.ja.model/MoveFolderRequest
     */
    constructor() { 
        
        MoveFolderRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MoveFolderRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/MoveFolderRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/MoveFolderRequest} The populated <code>MoveFolderRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MoveFolderRequest();

            if (data.hasOwnProperty('FolderID')) {
                obj['FolderID'] = ApiClient.convertToType(data['FolderID'], 'Number');
            }
            if (data.hasOwnProperty('ParentID')) {
                obj['ParentID'] = ApiClient.convertToType(data['ParentID'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MoveFolderRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MoveFolderRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * ID of the folder to move
 * @member {Number} FolderID
 */
MoveFolderRequest.prototype['FolderID'] = undefined;

/**
 * New parent for the folder
 * @member {Number} ParentID
 */
MoveFolderRequest.prototype['ParentID'] = undefined;






export default MoveFolderRequest;

