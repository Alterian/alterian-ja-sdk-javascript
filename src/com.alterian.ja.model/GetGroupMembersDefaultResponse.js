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
import APICursor from './APICursor';
import OperationResult from './OperationResult';

/**
 * The GetGroupMembersDefaultResponse model module.
 * @module com.alterian.ja.model/GetGroupMembersDefaultResponse
 * @version 6.35.0
 */
class GetGroupMembersDefaultResponse {
    /**
     * Constructs a new <code>GetGroupMembersDefaultResponse</code>.
     * @alias module:com.alterian.ja.model/GetGroupMembersDefaultResponse
     * @implements module:com.alterian.ja.model/OperationResult
     */
    constructor() { 
        OperationResult.initialize(this);
        GetGroupMembersDefaultResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupMembersDefaultResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/GetGroupMembersDefaultResponse} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/GetGroupMembersDefaultResponse} The populated <code>GetGroupMembersDefaultResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupMembersDefaultResponse();
            OperationResult.constructFromObject(data, obj);

            if (data.hasOwnProperty('StatusCode')) {
                obj['StatusCode'] = ApiClient.convertToType(data['StatusCode'], 'String');
            }
            if (data.hasOwnProperty('DebugMessage')) {
                obj['DebugMessage'] = ApiClient.convertToType(data['DebugMessage'], 'String');
            }
            if (data.hasOwnProperty('Detail')) {
                obj['Detail'] = ApiClient.convertToType(data['Detail'], [['String']]);
            }
            if (data.hasOwnProperty('Cursor')) {
                obj['Cursor'] = APICursor.constructFromObject(data['Cursor']);
            }
            if (data.hasOwnProperty('Result')) {
                obj['Result'] = ApiClient.convertToType(data['Result'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetGroupMembersDefaultResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetGroupMembersDefaultResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['StatusCode'] && !(typeof data['StatusCode'] === 'string' || data['StatusCode'] instanceof String)) {
            throw new Error("Expected the field `StatusCode` to be a primitive type in the JSON string but got " + data['StatusCode']);
        }
        // ensure the json data is a string
        if (data['DebugMessage'] && !(typeof data['DebugMessage'] === 'string' || data['DebugMessage'] instanceof String)) {
            throw new Error("Expected the field `DebugMessage` to be a primitive type in the JSON string but got " + data['DebugMessage']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Detail'])) {
            throw new Error("Expected the field `Detail` to be an array in the JSON data but got " + data['Detail']);
        }
        // validate the optional field `Cursor`
        if (data['Cursor']) { // data not null
          APICursor.validateJSON(data['Cursor']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Result'])) {
            throw new Error("Expected the field `Result` to be an array in the JSON data but got " + data['Result']);
        }

        return true;
    }


}



/**
 * A string constant representing the success or failure of the method call. See the status codes table below.
 * @member {String} StatusCode
 */
GetGroupMembersDefaultResponse.prototype['StatusCode'] = undefined;

/**
 * By default, an empty array []. Internal debug messages can be exposed by changing a configuration setting on the server, but be aware that this can leak internal implementation details such as stack calls or method names to the caller.
 * @member {String} DebugMessage
 */
GetGroupMembersDefaultResponse.prototype['DebugMessage'] = undefined;

/**
 * Optionally return additional information about this API call             This will typically contain the reason WHY a method failed (if it fails), warnings if success, and other bits of data that             are NOT part of the main result.
 * @member {Array.<Array.<String>>} Detail
 */
GetGroupMembersDefaultResponse.prototype['Detail'] = undefined;

/**
 * @member {module:com.alterian.ja.model/APICursor} Cursor
 */
GetGroupMembersDefaultResponse.prototype['Cursor'] = undefined;

/**
 * @member {Array.<Object>} Result
 */
GetGroupMembersDefaultResponse.prototype['Result'] = undefined;


// Implement OperationResult interface:
/**
 * A string constant representing the success or failure of the method call. See the status codes table below.
 * @member {String} StatusCode
 */
OperationResult.prototype['StatusCode'] = undefined;
/**
 * By default, an empty array []. Internal debug messages can be exposed by changing a configuration setting on the server, but be aware that this can leak internal implementation details such as stack calls or method names to the caller.
 * @member {String} DebugMessage
 */
OperationResult.prototype['DebugMessage'] = undefined;
/**
 * Optionally return additional information about this API call             This will typically contain the reason WHY a method failed (if it fails), warnings if success, and other bits of data that             are NOT part of the main result.
 * @member {Array.<Array.<String>>} Detail
 */
OperationResult.prototype['Detail'] = undefined;
/**
 * @member {module:com.alterian.ja.model/APICursor} Cursor
 */
OperationResult.prototype['Cursor'] = undefined;




export default GetGroupMembersDefaultResponse;

