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
 * The GetDatasourceColumnRequest model module.
 * @module com.alterian.ja.model/GetDatasourceColumnRequest
 * @version 6.35.0
 */
class GetDatasourceColumnRequest {
    /**
     * Constructs a new <code>GetDatasourceColumnRequest</code>.
     * @alias module:com.alterian.ja.model/GetDatasourceColumnRequest
     */
    constructor() { 
        
        GetDatasourceColumnRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetDatasourceColumnRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/GetDatasourceColumnRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/GetDatasourceColumnRequest} The populated <code>GetDatasourceColumnRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDatasourceColumnRequest();

            if (data.hasOwnProperty('ColumnID')) {
                obj['ColumnID'] = ApiClient.convertToType(data['ColumnID'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetDatasourceColumnRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetDatasourceColumnRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Supply the ID of the column that you want to fetch the details of.
 * @member {Number} ColumnID
 */
GetDatasourceColumnRequest.prototype['ColumnID'] = undefined;






export default GetDatasourceColumnRequest;

