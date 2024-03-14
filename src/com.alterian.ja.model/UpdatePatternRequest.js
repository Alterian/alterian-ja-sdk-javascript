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
 * The UpdatePatternRequest model module.
 * @module com.alterian.ja.model/UpdatePatternRequest
 * @version 6.35.0
 */
class UpdatePatternRequest {
    /**
     * Constructs a new <code>UpdatePatternRequest</code>.
     * @alias module:com.alterian.ja.model/UpdatePatternRequest
     */
    constructor() { 
        
        UpdatePatternRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePatternRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/UpdatePatternRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/UpdatePatternRequest} The populated <code>UpdatePatternRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePatternRequest();

            if (data.hasOwnProperty('PatternId')) {
                obj['PatternId'] = ApiClient.convertToType(data['PatternId'], 'Number');
            }
            if (data.hasOwnProperty('Settings')) {
                obj['Settings'] = ApiClient.convertToType(data['Settings'], 'String');
            }
            if (data.hasOwnProperty('SnapshotEnd')) {
                obj['SnapshotEnd'] = ApiClient.convertToType(data['SnapshotEnd'], 'Date');
            }
            if (data.hasOwnProperty('SnapshotStart')) {
                obj['SnapshotStart'] = ApiClient.convertToType(data['SnapshotStart'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdatePatternRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdatePatternRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Settings'] && !(typeof data['Settings'] === 'string' || data['Settings'] instanceof String)) {
            throw new Error("Expected the field `Settings` to be a primitive type in the JSON string but got " + data['Settings']);
        }

        return true;
    }


}



/**
 * Pattern Id
 * @member {Number} PatternId
 */
UpdatePatternRequest.prototype['PatternId'] = undefined;

/**
 * JSON describing the pattern e.g. {\"detect\":{\"minrep\":100}}
 * @member {String} Settings
 */
UpdatePatternRequest.prototype['Settings'] = undefined;

/**
 * 
 * @member {Date} SnapshotEnd
 */
UpdatePatternRequest.prototype['SnapshotEnd'] = undefined;

/**
 * 
 * @member {Date} SnapshotStart
 */
UpdatePatternRequest.prototype['SnapshotStart'] = undefined;






export default UpdatePatternRequest;

