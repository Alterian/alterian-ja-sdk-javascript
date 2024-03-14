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
 * The CopyGroupRequest model module.
 * @module com.alterian.ja.model/CopyGroupRequest
 * @version 6.35.0
 */
class CopyGroupRequest {
    /**
     * Constructs a new <code>CopyGroupRequest</code>.
     * @alias module:com.alterian.ja.model/CopyGroupRequest
     */
    constructor() { 
        
        CopyGroupRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CopyGroupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/CopyGroupRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/CopyGroupRequest} The populated <code>CopyGroupRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CopyGroupRequest();

            if (data.hasOwnProperty('FolderID')) {
                obj['FolderID'] = ApiClient.convertToType(data['FolderID'], 'Number');
            }
            if (data.hasOwnProperty('GroupID')) {
                obj['GroupID'] = ApiClient.convertToType(data['GroupID'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CopyGroupRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CopyGroupRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Folder in which to place this group [an auto-number will be added to the name if placed into the same folder]
 * @member {Number} FolderID
 */
CopyGroupRequest.prototype['FolderID'] = undefined;

/**
 * ID of the group to copy
 * @member {Number} GroupID
 */
CopyGroupRequest.prototype['GroupID'] = undefined;






export default CopyGroupRequest;

