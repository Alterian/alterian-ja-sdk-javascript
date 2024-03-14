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
 * The ClearPermissionsRequest model module.
 * @module com.alterian.ja.model/ClearPermissionsRequest
 * @version 6.35.0
 */
class ClearPermissionsRequest {
    /**
     * Constructs a new <code>ClearPermissionsRequest</code>.
     * @alias module:com.alterian.ja.model/ClearPermissionsRequest
     */
    constructor() { 
        
        ClearPermissionsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClearPermissionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/ClearPermissionsRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/ClearPermissionsRequest} The populated <code>ClearPermissionsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClearPermissionsRequest();

            if (data.hasOwnProperty('IsGroup')) {
                obj['IsGroup'] = ApiClient.convertToType(data['IsGroup'], 'Boolean');
            }
            if (data.hasOwnProperty('ItemID')) {
                obj['ItemID'] = ApiClient.convertToType(data['ItemID'], 'Number');
            }
            if (data.hasOwnProperty('ItemType')) {
                obj['ItemType'] = ResourceType.constructFromObject(data['ItemType']);
            }
            if (data.hasOwnProperty('SecurityID')) {
                obj['SecurityID'] = ApiClient.convertToType(data['SecurityID'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ClearPermissionsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ClearPermissionsRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Is the security ID a group?
 * @member {Boolean} IsGroup
 */
ClearPermissionsRequest.prototype['IsGroup'] = undefined;

/**
 * Item on which to clear security
 * @member {Number} ItemID
 */
ClearPermissionsRequest.prototype['ItemID'] = undefined;

/**
 * @member {module:com.alterian.ja.model/ResourceType} ItemType
 */
ClearPermissionsRequest.prototype['ItemType'] = undefined;

/**
 * User or Group ID to clear security
 * @member {Number} SecurityID
 */
ClearPermissionsRequest.prototype['SecurityID'] = undefined;






export default ClearPermissionsRequest;

