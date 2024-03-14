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
 * The ALUserGroup model module.
 * @module com.alterian.ja.model/ALUserGroup
 * @version 6.35.0
 */
class ALUserGroup {
    /**
     * Constructs a new <code>ALUserGroup</code>.
     * A user is a unique profile of permissions and linked to a set of user login credentials. When a user logs in using those credentials, the permissions in the user profile are applied.
     * @alias module:com.alterian.ja.model/ALUserGroup
     */
    constructor() { 
        
        ALUserGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ALUserGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/ALUserGroup} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/ALUserGroup} The populated <code>ALUserGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ALUserGroup();

            if (data.hasOwnProperty('ID')) {
                obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Enabled')) {
                obj['Enabled'] = ApiClient.convertToType(data['Enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('Created')) {
                obj['Created'] = ApiClient.convertToType(data['Created'], 'Date');
            }
            if (data.hasOwnProperty('Modified')) {
                obj['Modified'] = ApiClient.convertToType(data['Modified'], 'Date');
            }
            if (data.hasOwnProperty('FolderID')) {
                obj['FolderID'] = ApiClient.convertToType(data['FolderID'], 'Number');
            }
            if (data.hasOwnProperty('Members')) {
                obj['Members'] = ApiClient.convertToType(data['Members'], [Object]);
            }
            if (data.hasOwnProperty('Groups')) {
                obj['Groups'] = ApiClient.convertToType(data['Groups'], [ALUserGroup]);
            }
            if (data.hasOwnProperty('FolderName')) {
                obj['FolderName'] = ApiClient.convertToType(data['FolderName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ALUserGroup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ALUserGroup</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['Description'] && !(typeof data['Description'] === 'string' || data['Description'] instanceof String)) {
            throw new Error("Expected the field `Description` to be a primitive type in the JSON string but got " + data['Description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Members'])) {
            throw new Error("Expected the field `Members` to be an array in the JSON data but got " + data['Members']);
        }
        if (data['Groups']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['Groups'])) {
                throw new Error("Expected the field `Groups` to be an array in the JSON data but got " + data['Groups']);
            }
            // validate the optional field `Groups` (array)
            for (const item of data['Groups']) {
                ALUserGroup.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['FolderName'] && !(typeof data['FolderName'] === 'string' || data['FolderName'] instanceof String)) {
            throw new Error("Expected the field `FolderName` to be a primitive type in the JSON string but got " + data['FolderName']);
        }

        return true;
    }


}



/**
 * 
 * @member {Number} ID
 */
ALUserGroup.prototype['ID'] = undefined;

/**
 * 
 * @member {String} Name
 */
ALUserGroup.prototype['Name'] = undefined;

/**
 * 
 * @member {String} Description
 */
ALUserGroup.prototype['Description'] = undefined;

/**
 * 
 * @member {Boolean} Enabled
 */
ALUserGroup.prototype['Enabled'] = undefined;

/**
 * 
 * @member {Date} Created
 */
ALUserGroup.prototype['Created'] = undefined;

/**
 * 
 * @member {Date} Modified
 */
ALUserGroup.prototype['Modified'] = undefined;

/**
 * 
 * @member {Number} FolderID
 */
ALUserGroup.prototype['FolderID'] = undefined;

/**
 * A list that can contain the groups or users that are immediate children of this group. I contain them.
 * @member {Array.<Object>} Members
 */
ALUserGroup.prototype['Members'] = undefined;

/**
 * The groups that are immediate parents of this group. They contain me.
 * @member {Array.<module:com.alterian.ja.model/ALUserGroup>} Groups
 */
ALUserGroup.prototype['Groups'] = undefined;

/**
 * 
 * @member {String} FolderName
 */
ALUserGroup.prototype['FolderName'] = undefined;






export default ALUserGroup;
