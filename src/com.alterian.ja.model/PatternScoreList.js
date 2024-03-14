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
 * The PatternScoreList model module.
 * @module com.alterian.ja.model/PatternScoreList
 * @version 6.35.0
 */
class PatternScoreList {
    /**
     * Constructs a new <code>PatternScoreList</code>.
     * 
     * @alias module:com.alterian.ja.model/PatternScoreList
     */
    constructor() { 
        
        PatternScoreList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatternScoreList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/PatternScoreList} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/PatternScoreList} The populated <code>PatternScoreList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatternScoreList();

            if (data.hasOwnProperty('Items')) {
                obj['Items'] = ApiClient.convertToType(data['Items'], ['String']);
            }
            if (data.hasOwnProperty('Scores')) {
                obj['Scores'] = ApiClient.convertToType(data['Scores'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PatternScoreList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PatternScoreList</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['Items'])) {
            throw new Error("Expected the field `Items` to be an array in the JSON data but got " + data['Items']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Scores'])) {
            throw new Error("Expected the field `Scores` to be an array in the JSON data but got " + data['Scores']);
        }

        return true;
    }


}



/**
 * 
 * @member {Array.<String>} Items
 */
PatternScoreList.prototype['Items'] = undefined;

/**
 * 
 * @member {Array.<Number>} Scores
 */
PatternScoreList.prototype['Scores'] = undefined;






export default PatternScoreList;

