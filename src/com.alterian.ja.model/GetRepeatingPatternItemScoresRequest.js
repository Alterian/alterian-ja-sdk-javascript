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
 * The GetRepeatingPatternItemScoresRequest model module.
 * @module com.alterian.ja.model/GetRepeatingPatternItemScoresRequest
 * @version 6.35.0
 */
class GetRepeatingPatternItemScoresRequest {
    /**
     * Constructs a new <code>GetRepeatingPatternItemScoresRequest</code>.
     * @alias module:com.alterian.ja.model/GetRepeatingPatternItemScoresRequest
     */
    constructor() { 
        
        GetRepeatingPatternItemScoresRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRepeatingPatternItemScoresRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/GetRepeatingPatternItemScoresRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/GetRepeatingPatternItemScoresRequest} The populated <code>GetRepeatingPatternItemScoresRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRepeatingPatternItemScoresRequest();

            if (data.hasOwnProperty('DecodeId')) {
                obj['DecodeId'] = ApiClient.convertToType(data['DecodeId'], 'Number');
            }
            if (data.hasOwnProperty('DecodeVersion')) {
                obj['DecodeVersion'] = ApiClient.convertToType(data['DecodeVersion'], 'Number');
            }
            if (data.hasOwnProperty('PatternId')) {
                obj['PatternId'] = ApiClient.convertToType(data['PatternId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetRepeatingPatternItemScoresRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetRepeatingPatternItemScoresRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Optional. To retrieve scores recorded via a decode that has been published against the pattern
 * @member {Number} DecodeId
 */
GetRepeatingPatternItemScoresRequest.prototype['DecodeId'] = undefined;

/**
 * Optional. To retrieve scores recorded via a decode that has been published against the pattern
 * @member {Number} DecodeVersion
 */
GetRepeatingPatternItemScoresRequest.prototype['DecodeVersion'] = undefined;

/**
 * Pattern Id
 * @member {Number} PatternId
 */
GetRepeatingPatternItemScoresRequest.prototype['PatternId'] = undefined;






export default GetRepeatingPatternItemScoresRequest;
