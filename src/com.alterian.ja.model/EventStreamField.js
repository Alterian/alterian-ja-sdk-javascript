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
import PublishedTransformSummary from './PublishedTransformSummary';

/**
 * The EventStreamField model module.
 * @module com.alterian.ja.model/EventStreamField
 * @version 6.35.0
 */
class EventStreamField {
    /**
     * Constructs a new <code>EventStreamField</code>.
     * 
     * @alias module:com.alterian.ja.model/EventStreamField
     */
    constructor() { 
        
        EventStreamField.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventStreamField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/EventStreamField} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/EventStreamField} The populated <code>EventStreamField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventStreamField();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('DataType')) {
                obj['DataType'] = ApiClient.convertToType(data['DataType'], 'String');
            }
            if (data.hasOwnProperty('Width')) {
                obj['Width'] = ApiClient.convertToType(data['Width'], 'Number');
            }
            if (data.hasOwnProperty('IndexLevel')) {
                obj['IndexLevel'] = ApiClient.convertToType(data['IndexLevel'], 'Number');
            }
            if (data.hasOwnProperty('StorageHint')) {
                obj['StorageHint'] = ApiClient.convertToType(data['StorageHint'], 'String');
            }
            if (data.hasOwnProperty('IsKey')) {
                obj['IsKey'] = ApiClient.convertToType(data['IsKey'], 'Boolean');
            }
            if (data.hasOwnProperty('KeyName')) {
                obj['KeyName'] = ApiClient.convertToType(data['KeyName'], 'String');
            }
            if (data.hasOwnProperty('IsSystem')) {
                obj['IsSystem'] = ApiClient.convertToType(data['IsSystem'], 'Boolean');
            }
            if (data.hasOwnProperty('Precision')) {
                obj['Precision'] = ApiClient.convertToType(data['Precision'], 'Number');
            }
            if (data.hasOwnProperty('IsSankey')) {
                obj['IsSankey'] = ApiClient.convertToType(data['IsSankey'], 'Boolean');
            }
            if (data.hasOwnProperty('IsDeleted')) {
                obj['IsDeleted'] = ApiClient.convertToType(data['IsDeleted'], 'Boolean');
            }
            if (data.hasOwnProperty('NumDiscretes')) {
                obj['NumDiscretes'] = ApiClient.convertToType(data['NumDiscretes'], 'Number');
            }
            if (data.hasOwnProperty('FieldTransformLists')) {
                obj['FieldTransformLists'] = ApiClient.convertToType(data['FieldTransformLists'], [PublishedTransformSummary]);
            }
            if (data.hasOwnProperty('ColumnName')) {
                obj['ColumnName'] = ApiClient.convertToType(data['ColumnName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventStreamField</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventStreamField</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['DataType'] && !(typeof data['DataType'] === 'string' || data['DataType'] instanceof String)) {
            throw new Error("Expected the field `DataType` to be a primitive type in the JSON string but got " + data['DataType']);
        }
        // ensure the json data is a string
        if (data['StorageHint'] && !(typeof data['StorageHint'] === 'string' || data['StorageHint'] instanceof String)) {
            throw new Error("Expected the field `StorageHint` to be a primitive type in the JSON string but got " + data['StorageHint']);
        }
        // ensure the json data is a string
        if (data['KeyName'] && !(typeof data['KeyName'] === 'string' || data['KeyName'] instanceof String)) {
            throw new Error("Expected the field `KeyName` to be a primitive type in the JSON string but got " + data['KeyName']);
        }
        if (data['FieldTransformLists']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['FieldTransformLists'])) {
                throw new Error("Expected the field `FieldTransformLists` to be an array in the JSON data but got " + data['FieldTransformLists']);
            }
            // validate the optional field `FieldTransformLists` (array)
            for (const item of data['FieldTransformLists']) {
                PublishedTransformSummary.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['ColumnName'] && !(typeof data['ColumnName'] === 'string' || data['ColumnName'] instanceof String)) {
            throw new Error("Expected the field `ColumnName` to be a primitive type in the JSON string but got " + data['ColumnName']);
        }

        return true;
    }


}



/**
 * 
 * @member {Number} Id
 */
EventStreamField.prototype['Id'] = undefined;

/**
 * 
 * @member {String} Name
 */
EventStreamField.prototype['Name'] = undefined;

/**
 * 
 * @member {String} DataType
 */
EventStreamField.prototype['DataType'] = undefined;

/**
 * 
 * @member {Number} Width
 */
EventStreamField.prototype['Width'] = undefined;

/**
 * 
 * @member {Number} IndexLevel
 */
EventStreamField.prototype['IndexLevel'] = undefined;

/**
 * 
 * @member {String} StorageHint
 */
EventStreamField.prototype['StorageHint'] = undefined;

/**
 * 
 * @member {Boolean} IsKey
 */
EventStreamField.prototype['IsKey'] = undefined;

/**
 * 
 * @member {String} KeyName
 */
EventStreamField.prototype['KeyName'] = undefined;

/**
 * 
 * @member {Boolean} IsSystem
 */
EventStreamField.prototype['IsSystem'] = undefined;

/**
 * 
 * @member {Number} Precision
 */
EventStreamField.prototype['Precision'] = undefined;

/**
 * 
 * @member {Boolean} IsSankey
 */
EventStreamField.prototype['IsSankey'] = undefined;

/**
 * 
 * @member {Boolean} IsDeleted
 */
EventStreamField.prototype['IsDeleted'] = undefined;

/**
 * 
 * @member {Number} NumDiscretes
 */
EventStreamField.prototype['NumDiscretes'] = undefined;

/**
 * 
 * @member {Array.<module:com.alterian.ja.model/PublishedTransformSummary>} FieldTransformLists
 */
EventStreamField.prototype['FieldTransformLists'] = undefined;

/**
 * 
 * @member {String} ColumnName
 */
EventStreamField.prototype['ColumnName'] = undefined;






export default EventStreamField;

