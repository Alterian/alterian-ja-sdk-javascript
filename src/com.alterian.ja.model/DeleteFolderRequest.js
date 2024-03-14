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
 * The DeleteFolderRequest model module.
 * @module com.alterian.ja.model/DeleteFolderRequest
 * @version 6.35.0
 */
class DeleteFolderRequest {
    /**
     * Constructs a new <code>DeleteFolderRequest</code>.
     * @alias module:com.alterian.ja.model/DeleteFolderRequest
     */
    constructor() { 
        
        DeleteFolderRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteFolderRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/DeleteFolderRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/DeleteFolderRequest} The populated <code>DeleteFolderRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteFolderRequest();

            if (data.hasOwnProperty('ID')) {
                obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteFolderRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteFolderRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * ID of the folder to delete
 * @member {Number} ID
 */
DeleteFolderRequest.prototype['ID'] = undefined;






export default DeleteFolderRequest;

