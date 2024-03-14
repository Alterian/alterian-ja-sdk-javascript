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
 * The DeleteUserReassignAssetsRequest model module.
 * @module com.alterian.ja.model/DeleteUserReassignAssetsRequest
 * @version 6.35.0
 */
class DeleteUserReassignAssetsRequest {
    /**
     * Constructs a new <code>DeleteUserReassignAssetsRequest</code>.
     * @alias module:com.alterian.ja.model/DeleteUserReassignAssetsRequest
     */
    constructor() { 
        
        DeleteUserReassignAssetsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteUserReassignAssetsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/DeleteUserReassignAssetsRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/DeleteUserReassignAssetsRequest} The populated <code>DeleteUserReassignAssetsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteUserReassignAssetsRequest();

            if (data.hasOwnProperty('DeletedUserName')) {
                obj['DeletedUserName'] = ApiClient.convertToType(data['DeletedUserName'], 'String');
            }
            if (data.hasOwnProperty('DeleteLogin')) {
                obj['DeleteLogin'] = ApiClient.convertToType(data['DeleteLogin'], 'Boolean');
            }
            if (data.hasOwnProperty('ReassignedUserName')) {
                obj['ReassignedUserName'] = ApiClient.convertToType(data['ReassignedUserName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteUserReassignAssetsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteUserReassignAssetsRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['DeletedUserName'] && !(typeof data['DeletedUserName'] === 'string' || data['DeletedUserName'] instanceof String)) {
            throw new Error("Expected the field `DeletedUserName` to be a primitive type in the JSON string but got " + data['DeletedUserName']);
        }
        // ensure the json data is a string
        if (data['ReassignedUserName'] && !(typeof data['ReassignedUserName'] === 'string' || data['ReassignedUserName'] instanceof String)) {
            throw new Error("Expected the field `ReassignedUserName` to be a primitive type in the JSON string but got " + data['ReassignedUserName']);
        }

        return true;
    }


}



/**
 * Name of the user to delete
 * @member {String} DeletedUserName
 */
DeleteUserReassignAssetsRequest.prototype['DeletedUserName'] = undefined;

/**
 * flag to indicate whether associated login should be deleted
 * @member {Boolean} DeleteLogin
 */
DeleteUserReassignAssetsRequest.prototype['DeleteLogin'] = undefined;

/**
 * Name of the user to reassign assets to
 * @member {String} ReassignedUserName
 */
DeleteUserReassignAssetsRequest.prototype['ReassignedUserName'] = undefined;






export default DeleteUserReassignAssetsRequest;
