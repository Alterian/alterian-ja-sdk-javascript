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
import ResourceType from './ResourceType';

/**
 * The PermissionResource model module.
 * @module com.alterian.ja.model/PermissionResource
 * @version 6.35.0
 */
class PermissionResource {
    /**
     * Constructs a new <code>PermissionResource</code>.
     * 
     * @alias module:com.alterian.ja.model/PermissionResource
     */
    constructor() { 
        
        PermissionResource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/PermissionResource} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/PermissionResource} The populated <code>PermissionResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionResource();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('IsFolder')) {
                obj['IsFolder'] = ApiClient.convertToType(data['IsFolder'], 'Boolean');
            }
            if (data.hasOwnProperty('FolderResource')) {
                obj['FolderResource'] = ResourceType.constructFromObject(data['FolderResource']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PermissionResource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PermissionResource</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }

        return true;
    }


}



/**
 * Id of the permission, can be directly mapped to the enum @see(ResourceType)
 * @member {Number} Id
 */
PermissionResource.prototype['Id'] = undefined;

/**
 * Name of the resource
 * @member {String} Name
 */
PermissionResource.prototype['Name'] = undefined;

/**
 * Is this a folder permission?
 * @member {Boolean} IsFolder
 */
PermissionResource.prototype['IsFolder'] = undefined;

/**
 * @member {module:com.alterian.ja.model/ResourceType} FolderResource
 */
PermissionResource.prototype['FolderResource'] = undefined;






export default PermissionResource;

