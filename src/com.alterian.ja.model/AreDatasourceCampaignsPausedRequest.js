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
 * The AreDatasourceCampaignsPausedRequest model module.
 * @module com.alterian.ja.model/AreDatasourceCampaignsPausedRequest
 * @version 6.35.0
 */
class AreDatasourceCampaignsPausedRequest {
    /**
     * Constructs a new <code>AreDatasourceCampaignsPausedRequest</code>.
     * @alias module:com.alterian.ja.model/AreDatasourceCampaignsPausedRequest
     */
    constructor() { 
        
        AreDatasourceCampaignsPausedRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AreDatasourceCampaignsPausedRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/AreDatasourceCampaignsPausedRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/AreDatasourceCampaignsPausedRequest} The populated <code>AreDatasourceCampaignsPausedRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AreDatasourceCampaignsPausedRequest();

            if (data.hasOwnProperty('DatasourceId')) {
                obj['DatasourceId'] = ApiClient.convertToType(data['DatasourceId'], 'Number');
            }
            if (data.hasOwnProperty('LogWatchTime')) {
                obj['LogWatchTime'] = ApiClient.convertToType(data['LogWatchTime'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AreDatasourceCampaignsPausedRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AreDatasourceCampaignsPausedRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The id of the datasource that you want to check for activity
 * @member {Number} DatasourceId
 */
AreDatasourceCampaignsPausedRequest.prototype['DatasourceId'] = undefined;

/**
 * How long (in seconds) should we watch for activity. Pass 0 if you do not want to watch for activity
 * @member {Number} LogWatchTime
 */
AreDatasourceCampaignsPausedRequest.prototype['LogWatchTime'] = undefined;






export default AreDatasourceCampaignsPausedRequest;

