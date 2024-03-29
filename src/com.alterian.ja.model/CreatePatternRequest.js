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
 * The CreatePatternRequest model module.
 * @module com.alterian.ja.model/CreatePatternRequest
 * @version 6.35.0
 */
class CreatePatternRequest {
    /**
     * Constructs a new <code>CreatePatternRequest</code>.
     * @alias module:com.alterian.ja.model/CreatePatternRequest
     */
    constructor() { 
        
        CreatePatternRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreatePatternRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/CreatePatternRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/CreatePatternRequest} The populated <code>CreatePatternRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePatternRequest();

            if (data.hasOwnProperty('EventStreamId')) {
                obj['EventStreamId'] = ApiClient.convertToType(data['EventStreamId'], 'Number');
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
     * Validates the JSON data with respect to <code>CreatePatternRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreatePatternRequest</code>.
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
 * Event stream to create pattern definition against
 * @member {Number} EventStreamId
 */
CreatePatternRequest.prototype['EventStreamId'] = undefined;

/**
 * JSON describing the pattern e.g. {\"sequence\":{\"dedup:null\"}, \"detect\":{\"minrep\":100}}
 * @member {String} Settings
 */
CreatePatternRequest.prototype['Settings'] = undefined;

/**
 * 
 * @member {Date} SnapshotEnd
 */
CreatePatternRequest.prototype['SnapshotEnd'] = undefined;

/**
 * 
 * @member {Date} SnapshotStart
 */
CreatePatternRequest.prototype['SnapshotStart'] = undefined;






export default CreatePatternRequest;

