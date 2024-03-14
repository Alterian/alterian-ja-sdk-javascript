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
import ALDataSourceTable from './ALDataSourceTable';
import DatasourceAttribute from './DatasourceAttribute';

/**
 * The ALDataSourceDatabase model module.
 * @module com.alterian.ja.model/ALDataSourceDatabase
 * @version 6.35.0
 */
class ALDataSourceDatabase {
    /**
     * Constructs a new <code>ALDataSourceDatabase</code>.
     * Represents a database in the system, which is a collection of tables.
     * @alias module:com.alterian.ja.model/ALDataSourceDatabase
     */
    constructor() { 
        
        ALDataSourceDatabase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ALDataSourceDatabase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/ALDataSourceDatabase} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/ALDataSourceDatabase} The populated <code>ALDataSourceDatabase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ALDataSourceDatabase();

            if (data.hasOwnProperty('ID')) {
                obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('NameEx')) {
                obj['NameEx'] = ApiClient.convertToType(data['NameEx'], 'String');
            }
            if (data.hasOwnProperty('Enabled')) {
                obj['Enabled'] = ApiClient.convertToType(data['Enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('Visible')) {
                obj['Visible'] = ApiClient.convertToType(data['Visible'], 'Boolean');
            }
            if (data.hasOwnProperty('AccessView')) {
                obj['AccessView'] = ApiClient.convertToType(data['AccessView'], 'Boolean');
            }
            if (data.hasOwnProperty('AccessModify')) {
                obj['AccessModify'] = ApiClient.convertToType(data['AccessModify'], 'Boolean');
            }
            if (data.hasOwnProperty('Attributes')) {
                obj['Attributes'] = ApiClient.convertToType(data['Attributes'], [DatasourceAttribute]);
            }
            if (data.hasOwnProperty('DataSourceID')) {
                obj['DataSourceID'] = ApiClient.convertToType(data['DataSourceID'], 'Number');
            }
            if (data.hasOwnProperty('NativeName')) {
                obj['NativeName'] = ApiClient.convertToType(data['NativeName'], 'String');
            }
            if (data.hasOwnProperty('Tables')) {
                obj['Tables'] = ApiClient.convertToType(data['Tables'], [ALDataSourceTable]);
            }
            if (data.hasOwnProperty('DatasourceTypeID')) {
                obj['DatasourceTypeID'] = ApiClient.convertToType(data['DatasourceTypeID'], 'Number');
            }
            if (data.hasOwnProperty('FullNativeName')) {
                obj['FullNativeName'] = ApiClient.convertToType(data['FullNativeName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ALDataSourceDatabase</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ALDataSourceDatabase</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['NameEx'] && !(typeof data['NameEx'] === 'string' || data['NameEx'] instanceof String)) {
            throw new Error("Expected the field `NameEx` to be a primitive type in the JSON string but got " + data['NameEx']);
        }
        if (data['Attributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['Attributes'])) {
                throw new Error("Expected the field `Attributes` to be an array in the JSON data but got " + data['Attributes']);
            }
            // validate the optional field `Attributes` (array)
            for (const item of data['Attributes']) {
                DatasourceAttribute.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['NativeName'] && !(typeof data['NativeName'] === 'string' || data['NativeName'] instanceof String)) {
            throw new Error("Expected the field `NativeName` to be a primitive type in the JSON string but got " + data['NativeName']);
        }
        if (data['Tables']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['Tables'])) {
                throw new Error("Expected the field `Tables` to be an array in the JSON data but got " + data['Tables']);
            }
            // validate the optional field `Tables` (array)
            for (const item of data['Tables']) {
                ALDataSourceTable.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['FullNativeName'] && !(typeof data['FullNativeName'] === 'string' || data['FullNativeName'] instanceof String)) {
            throw new Error("Expected the field `FullNativeName` to be a primitive type in the JSON string but got " + data['FullNativeName']);
        }

        return true;
    }


}



/**
 * Unique ID of the datasource
 * @member {Number} ID
 */
ALDataSourceDatabase.prototype['ID'] = undefined;

/**
 * Name of the datasource [must be unique]
 * @member {String} Name
 */
ALDataSourceDatabase.prototype['Name'] = undefined;

/**
 * Full name of this database, which includes in the datasource and the native name for the database in the pattern (datasource).[database]
 * @member {String} NameEx
 */
ALDataSourceDatabase.prototype['NameEx'] = undefined;

/**
 * Whether or not this datasource is enabled
 * @member {Boolean} Enabled
 */
ALDataSourceDatabase.prototype['Enabled'] = undefined;

/**
 * Whether or not this datasource is visible
 * @member {Boolean} Visible
 */
ALDataSourceDatabase.prototype['Visible'] = undefined;

/**
 * Can the user view this datasource
 * @member {Boolean} AccessView
 */
ALDataSourceDatabase.prototype['AccessView'] = undefined;

/**
 * Not currently used
 * @member {Boolean} AccessModify
 */
ALDataSourceDatabase.prototype['AccessModify'] = undefined;

/**
 * Attributes for this datasource.  @see(DatasourceAttribute)
 * @member {Array.<module:com.alterian.ja.model/DatasourceAttribute>} Attributes
 */
ALDataSourceDatabase.prototype['Attributes'] = undefined;

/**
 * The ID of the datasource that this database belongs to.
 * @member {Number} DataSourceID
 */
ALDataSourceDatabase.prototype['DataSourceID'] = undefined;

/**
 * The fully qualified name as used by the underlying datasource type.
 * @member {String} NativeName
 */
ALDataSourceDatabase.prototype['NativeName'] = undefined;

/**
 * 
 * @member {Array.<module:com.alterian.ja.model/ALDataSourceTable>} Tables
 */
ALDataSourceDatabase.prototype['Tables'] = undefined;

/**
 * What kind of datasource is this a database from?  See @see(GetDataSourceTypes) to fetch a list of the available datasource types.
 * @member {Number} DatasourceTypeID
 */
ALDataSourceDatabase.prototype['DatasourceTypeID'] = undefined;

/**
 * Full native name for this; since this is a database, just returns the name
 * @member {String} FullNativeName
 */
ALDataSourceDatabase.prototype['FullNativeName'] = undefined;






export default ALDataSourceDatabase;
