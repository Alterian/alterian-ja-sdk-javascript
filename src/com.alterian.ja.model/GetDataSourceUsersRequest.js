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
 * The GetDataSourceUsersRequest model module.
 * @module com.alterian.ja.model/GetDataSourceUsersRequest
 * @version 6.35.0
 */
class GetDataSourceUsersRequest {
    /**
     * Constructs a new <code>GetDataSourceUsersRequest</code>.
     * @alias module:com.alterian.ja.model/GetDataSourceUsersRequest
     */
    constructor() { 
        
        GetDataSourceUsersRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetDataSourceUsersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/GetDataSourceUsersRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/GetDataSourceUsersRequest} The populated <code>GetDataSourceUsersRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDataSourceUsersRequest();

            if (data.hasOwnProperty('Cursor')) {
                obj['Cursor'] = APICursor.constructFromObject(data['Cursor']);
            }
            if (data.hasOwnProperty('DataSourceID')) {
                obj['DataSourceID'] = ApiClient.convertToType(data['DataSourceID'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetDataSourceUsersRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetDataSourceUsersRequest</code>.
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
GetDataSourceUsersRequest.prototype['Cursor'] = undefined;

/**
 * Datasource ID
 * @member {Number} DataSourceID
 */
GetDataSourceUsersRequest.prototype['DataSourceID'] = undefined;






export default GetDataSourceUsersRequest;

