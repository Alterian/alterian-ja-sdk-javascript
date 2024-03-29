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
 * The GetDatasourceRequest model module.
 * @module com.alterian.ja.model/GetDatasourceRequest
 * @version 6.35.0
 */
class GetDatasourceRequest {
    /**
     * Constructs a new <code>GetDatasourceRequest</code>.
     * @alias module:com.alterian.ja.model/GetDatasourceRequest
     */
    constructor() { 
        
        GetDatasourceRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetDatasourceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/GetDatasourceRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/GetDatasourceRequest} The populated <code>GetDatasourceRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDatasourceRequest();

            if (data.hasOwnProperty('DatasourceId')) {
                obj['DatasourceId'] = ApiClient.convertToType(data['DatasourceId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetDatasourceRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetDatasourceRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Id of the datasource to return
 * @member {Number} DatasourceId
 */
GetDatasourceRequest.prototype['DatasourceId'] = undefined;






export default GetDatasourceRequest;

