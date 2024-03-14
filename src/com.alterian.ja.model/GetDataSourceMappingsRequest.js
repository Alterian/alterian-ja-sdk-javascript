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
import APICursor from './APICursor';

/**
 * The GetDataSourceMappingsRequest model module.
 * @module com.alterian.ja.model/GetDataSourceMappingsRequest
 * @version 6.35.0
 */
class GetDataSourceMappingsRequest {
    /**
     * Constructs a new <code>GetDataSourceMappingsRequest</code>.
     * @alias module:com.alterian.ja.model/GetDataSourceMappingsRequest
     */
    constructor() { 
        
        GetDataSourceMappingsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetDataSourceMappingsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/GetDataSourceMappingsRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/GetDataSourceMappingsRequest} The populated <code>GetDataSourceMappingsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDataSourceMappingsRequest();

            if (data.hasOwnProperty('Cursor')) {
                obj['Cursor'] = APICursor.constructFromObject(data['Cursor']);
            }
            if (data.hasOwnProperty('DataSourceID')) {
                obj['DataSourceID'] = ApiClient.convertToType(data['DataSourceID'], 'Number');
            }
            if (data.hasOwnProperty('UserID')) {
                obj['UserID'] = ApiClient.convertToType(data['UserID'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetDataSourceMappingsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetDataSourceMappingsRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `Cursor`
        if (data['Cursor']) { // data not null
          APICursor.validateJSON(data['Cursor']);
        }

        return true;
    }


}



/**
 * @member {module:com.alterian.ja.model/APICursor} Cursor
 */
GetDataSourceMappingsRequest.prototype['Cursor'] = undefined;

/**
 * Get the datasource mappings for this datasource, send null for all datasources
 * @member {Number} DataSourceID
 */
GetDataSourceMappingsRequest.prototype['DataSourceID'] = undefined;

/**
 * Get the datasource mappings for this user; send null for all users
 * @member {Number} UserID
 */
GetDataSourceMappingsRequest.prototype['UserID'] = undefined;






export default GetDataSourceMappingsRequest;

