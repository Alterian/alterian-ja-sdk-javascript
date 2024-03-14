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
import ALDatasourceJoinColumn from './ALDatasourceJoinColumn';

/**
 * The ALDatasourceJoin model module.
 * @module com.alterian.ja.model/ALDatasourceJoin
 * @version 6.35.0
 */
class ALDatasourceJoin {
    /**
     * Constructs a new <code>ALDatasourceJoin</code>.
     * 
     * @alias module:com.alterian.ja.model/ALDatasourceJoin
     */
    constructor() { 
        
        ALDatasourceJoin.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ALDatasourceJoin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/ALDatasourceJoin} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/ALDatasourceJoin} The populated <code>ALDatasourceJoin</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ALDatasourceJoin();

            if (data.hasOwnProperty('ID')) {
                obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
            }
            if (data.hasOwnProperty('TableID')) {
                obj['TableID'] = ApiClient.convertToType(data['TableID'], 'Number');
            }
            if (data.hasOwnProperty('ReferencedTableID')) {
                obj['ReferencedTableID'] = ApiClient.convertToType(data['ReferencedTableID'], 'Number');
            }
            if (data.hasOwnProperty('Columns')) {
                obj['Columns'] = ApiClient.convertToType(data['Columns'], [ALDatasourceJoinColumn]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ALDatasourceJoin</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ALDatasourceJoin</code>.
     */
    static validateJSON(data) {
        if (data['Columns']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['Columns'])) {
                throw new Error("Expected the field `Columns` to be an array in the JSON data but got " + data['Columns']);
            }
            // validate the optional field `Columns` (array)
            for (const item of data['Columns']) {
                ALDatasourceJoinColumn.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * 
 * @member {Number} ID
 */
ALDatasourceJoin.prototype['ID'] = undefined;

/**
 * 
 * @member {Number} TableID
 */
ALDatasourceJoin.prototype['TableID'] = undefined;

/**
 * 
 * @member {Number} ReferencedTableID
 */
ALDatasourceJoin.prototype['ReferencedTableID'] = undefined;

/**
 * 
 * @member {Array.<module:com.alterian.ja.model/ALDatasourceJoinColumn>} Columns
 */
ALDatasourceJoin.prototype['Columns'] = undefined;






export default ALDatasourceJoin;
