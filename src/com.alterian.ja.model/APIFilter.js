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
import SearchPredicates from './SearchPredicates';

/**
 * The APIFilter model module.
 * @module com.alterian.ja.model/APIFilter
 * @version 6.35.0
 */
class APIFilter {
    /**
     * Constructs a new <code>APIFilter</code>.
     * 
     * @alias module:com.alterian.ja.model/APIFilter
     */
    constructor() { 
        
        APIFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>APIFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/APIFilter} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/APIFilter} The populated <code>APIFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new APIFilter();

            if (data.hasOwnProperty('Predicate')) {
                obj['Predicate'] = SearchPredicates.constructFromObject(data['Predicate']);
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
            }
            if (data.hasOwnProperty('DataSourceID')) {
                obj['DataSourceID'] = ApiClient.convertToType(data['DataSourceID'], 'Number');
            }
            if (data.hasOwnProperty('DatabaseID')) {
                obj['DatabaseID'] = ApiClient.convertToType(data['DatabaseID'], 'Number');
            }
            if (data.hasOwnProperty('TableID')) {
                obj['TableID'] = ApiClient.convertToType(data['TableID'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>APIFilter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>APIFilter</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Value'] && !(typeof data['Value'] === 'string' || data['Value'] instanceof String)) {
            throw new Error("Expected the field `Value` to be a primitive type in the JSON string but got " + data['Value']);
        }

        return true;
    }


}



/**
 * @member {module:com.alterian.ja.model/SearchPredicates} Predicate
 */
APIFilter.prototype['Predicate'] = undefined;

/**
 * 
 * @member {String} Value
 */
APIFilter.prototype['Value'] = undefined;

/**
 * 
 * @member {Number} DataSourceID
 */
APIFilter.prototype['DataSourceID'] = undefined;

/**
 * 
 * @member {Number} DatabaseID
 */
APIFilter.prototype['DatabaseID'] = undefined;

/**
 * 
 * @member {Number} TableID
 */
APIFilter.prototype['TableID'] = undefined;






export default APIFilter;
