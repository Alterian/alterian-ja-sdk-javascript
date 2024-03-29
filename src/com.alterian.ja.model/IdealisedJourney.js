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
 * The IdealisedJourney model module.
 * @module com.alterian.ja.model/IdealisedJourney
 * @version 6.35.0
 */
class IdealisedJourney {
    /**
     * Constructs a new <code>IdealisedJourney</code>.
     * Definition of a Sankey
     * @alias module:com.alterian.ja.model/IdealisedJourney
     */
    constructor() { 
        
        IdealisedJourney.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IdealisedJourney</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/IdealisedJourney} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/IdealisedJourney} The populated <code>IdealisedJourney</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdealisedJourney();

            if (data.hasOwnProperty('ID')) {
                obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Json')) {
                obj['Json'] = ApiClient.convertToType(data['Json'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IdealisedJourney</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IdealisedJourney</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['Json'] && !(typeof data['Json'] === 'string' || data['Json'] instanceof String)) {
            throw new Error("Expected the field `Json` to be a primitive type in the JSON string but got " + data['Json']);
        }

        return true;
    }


}



/**
 * Idealised Journey ID
 * @member {Number} ID
 */
IdealisedJourney.prototype['ID'] = undefined;

/**
 * Name of the Idealised Journey
 * @member {String} Name
 */
IdealisedJourney.prototype['Name'] = undefined;

/**
 * Json
 * @member {String} Json
 */
IdealisedJourney.prototype['Json'] = undefined;






export default IdealisedJourney;

