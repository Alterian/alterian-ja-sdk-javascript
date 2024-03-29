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
 * The GetGroupRequest model module.
 * @module com.alterian.ja.model/GetGroupRequest
 * @version 6.35.0
 */
class GetGroupRequest {
    /**
     * Constructs a new <code>GetGroupRequest</code>.
     * @alias module:com.alterian.ja.model/GetGroupRequest
     */
    constructor() { 
        
        GetGroupRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/GetGroupRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/GetGroupRequest} The populated <code>GetGroupRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupRequest();

            if (data.hasOwnProperty('GroupID')) {
                obj['GroupID'] = ApiClient.convertToType(data['GroupID'], 'Number');
            }
            if (data.hasOwnProperty('IncludeContainedGroups')) {
                obj['IncludeContainedGroups'] = ApiClient.convertToType(data['IncludeContainedGroups'], 'Boolean');
            }
            if (data.hasOwnProperty('IncludeMembership')) {
                obj['IncludeMembership'] = ApiClient.convertToType(data['IncludeMembership'], 'Boolean');
            }
            if (data.hasOwnProperty('IncludeUsers')) {
                obj['IncludeUsers'] = ApiClient.convertToType(data['IncludeUsers'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetGroupRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetGroupRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * ID of the group to get
 * @member {Number} GroupID
 */
GetGroupRequest.prototype['GroupID'] = undefined;

/**
 * Include the groups that this group directly contains [fill in the Groups portion of the Members property]
 * @member {Boolean} IncludeContainedGroups
 */
GetGroupRequest.prototype['IncludeContainedGroups'] = undefined;

/**
 * Include the groups to which this group is directly a member [fill in the Groups property]
 * @member {Boolean} IncludeMembership
 */
GetGroupRequest.prototype['IncludeMembership'] = undefined;

/**
 * Include the users that this group directly contains [fill in the Users portion of the Members property]
 * @member {Boolean} IncludeUsers
 */
GetGroupRequest.prototype['IncludeUsers'] = undefined;






export default GetGroupRequest;

