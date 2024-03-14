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
 * The APILastModifiedCursor model module.
 * @module com.alterian.ja.model/APILastModifiedCursor
 * @version 6.35.0
 */
class APILastModifiedCursor {
    /**
     * Constructs a new <code>APILastModifiedCursor</code>.
     * 
     * @alias module:com.alterian.ja.model/APILastModifiedCursor
     */
    constructor() { 
        
        APILastModifiedCursor.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>APILastModifiedCursor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/APILastModifiedCursor} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/APILastModifiedCursor} The populated <code>APILastModifiedCursor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new APILastModifiedCursor();

            if (data.hasOwnProperty('LastModified')) {
                obj['LastModified'] = ApiClient.convertToType(data['LastModified'], 'Date');
            }
            if (data.hasOwnProperty('From')) {
                obj['From'] = ApiClient.convertToType(data['From'], 'Number');
            }
            if (data.hasOwnProperty('To')) {
                obj['To'] = ApiClient.convertToType(data['To'], 'Number');
            }
            if (data.hasOwnProperty('Total')) {
                obj['Total'] = ApiClient.convertToType(data['Total'], 'Number');
            }
            if (data.hasOwnProperty('SortDescending')) {
                obj['SortDescending'] = ApiClient.convertToType(data['SortDescending'], 'Boolean');
            }
            if (data.hasOwnProperty('SortProperty')) {
                obj['SortProperty'] = ApiClient.convertToType(data['SortProperty'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>APILastModifiedCursor</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>APILastModifiedCursor</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['SortProperty'] && !(typeof data['SortProperty'] === 'string' || data['SortProperty'] instanceof String)) {
            throw new Error("Expected the field `SortProperty` to be a primitive type in the JSON string but got " + data['SortProperty']);
        }

        return true;
    }


}



/**
 * Indicates when the data structure last changed
 * @member {Date} LastModified
 */
APILastModifiedCursor.prototype['LastModified'] = undefined;

/**
 * What is the first result that should be returned? Note that this is 0-based (0 is the very first row). If this value is not supplied then 0 is assumed.
 * @member {Number} From
 */
APILastModifiedCursor.prototype['From'] = undefined;

/**
 * What is the last result that should be returned? If this value is not supplied then all results are assumed. It is safe to provide a number that is larger than the total number of results.             available.
 * @member {Number} To
 */
APILastModifiedCursor.prototype['To'] = undefined;

/**
 * How many results are available in total? This is not used when passing the cursor to a method; it is populated (read only) when the cursor is returned from any method that uses a cursor.
 * @member {Number} Total
 */
APILastModifiedCursor.prototype['Total'] = undefined;

/**
 * If we want to sort the resulting list, do we want it sorted in descending order?  The default is ascending.
 * @member {Boolean} SortDescending
 */
APILastModifiedCursor.prototype['SortDescending'] = undefined;

/**
 * Property on the object by which you would like to sort.  If an invalid or null property is provided, default sorting will be applied as defined in each API method.
 * @member {String} SortProperty
 */
APILastModifiedCursor.prototype['SortProperty'] = undefined;






export default APILastModifiedCursor;

