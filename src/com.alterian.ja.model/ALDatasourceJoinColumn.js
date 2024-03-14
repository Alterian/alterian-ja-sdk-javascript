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
 * The ALDatasourceJoinColumn model module.
 * @module com.alterian.ja.model/ALDatasourceJoinColumn
 * @version 6.35.0
 */
class ALDatasourceJoinColumn {
    /**
     * Constructs a new <code>ALDatasourceJoinColumn</code>.
     * 
     * @alias module:com.alterian.ja.model/ALDatasourceJoinColumn
     */
    constructor() { 
        
        ALDatasourceJoinColumn.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ALDatasourceJoinColumn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/ALDatasourceJoinColumn} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/ALDatasourceJoinColumn} The populated <code>ALDatasourceJoinColumn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ALDatasourceJoinColumn();

            if (data.hasOwnProperty('JoinID')) {
                obj['JoinID'] = ApiClient.convertToType(data['JoinID'], 'Number');
            }
            if (data.hasOwnProperty('ColumnID')) {
                obj['ColumnID'] = ApiClient.convertToType(data['ColumnID'], 'Number');
            }
            if (data.hasOwnProperty('ReferencedColumnID')) {
                obj['ReferencedColumnID'] = ApiClient.convertToType(data['ReferencedColumnID'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ALDatasourceJoinColumn</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ALDatasourceJoinColumn</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * 
 * @member {Number} JoinID
 */
ALDatasourceJoinColumn.prototype['JoinID'] = undefined;

/**
 * 
 * @member {Number} ColumnID
 */
ALDatasourceJoinColumn.prototype['ColumnID'] = undefined;

/**
 * 
 * @member {Number} ReferencedColumnID
 */
ALDatasourceJoinColumn.prototype['ReferencedColumnID'] = undefined;






export default ALDatasourceJoinColumn;

