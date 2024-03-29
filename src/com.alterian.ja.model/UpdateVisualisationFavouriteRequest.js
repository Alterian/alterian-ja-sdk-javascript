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
 * The UpdateVisualisationFavouriteRequest model module.
 * @module com.alterian.ja.model/UpdateVisualisationFavouriteRequest
 * @version 6.35.0
 */
class UpdateVisualisationFavouriteRequest {
    /**
     * Constructs a new <code>UpdateVisualisationFavouriteRequest</code>.
     * @alias module:com.alterian.ja.model/UpdateVisualisationFavouriteRequest
     */
    constructor() { 
        
        UpdateVisualisationFavouriteRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateVisualisationFavouriteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/UpdateVisualisationFavouriteRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/UpdateVisualisationFavouriteRequest} The populated <code>UpdateVisualisationFavouriteRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateVisualisationFavouriteRequest();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('IsPublic')) {
                obj['IsPublic'] = ApiClient.convertToType(data['IsPublic'], 'Boolean');
            }
            if (data.hasOwnProperty('Json')) {
                obj['Json'] = ApiClient.convertToType(data['Json'], 'String');
            }
            if (data.hasOwnProperty('LastAccessed')) {
                obj['LastAccessed'] = ApiClient.convertToType(data['LastAccessed'], 'Date');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('QueueId')) {
                obj['QueueId'] = ApiClient.convertToType(data['QueueId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateVisualisationFavouriteRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateVisualisationFavouriteRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Json'] && !(typeof data['Json'] === 'string' || data['Json'] instanceof String)) {
            throw new Error("Expected the field `Json` to be a primitive type in the JSON string but got " + data['Json']);
        }
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }

        return true;
    }


}



/**
 * A valid visualisation favourite Id
 * @member {Number} Id
 */
UpdateVisualisationFavouriteRequest.prototype['Id'] = undefined;

/**
 * 
 * @member {Boolean} IsPublic
 */
UpdateVisualisationFavouriteRequest.prototype['IsPublic'] = undefined;

/**
 * 
 * @member {String} Json
 */
UpdateVisualisationFavouriteRequest.prototype['Json'] = undefined;

/**
 * 
 * @member {Date} LastAccessed
 */
UpdateVisualisationFavouriteRequest.prototype['LastAccessed'] = undefined;

/**
 * 
 * @member {String} Name
 */
UpdateVisualisationFavouriteRequest.prototype['Name'] = undefined;

/**
 * 
 * @member {Number} QueueId
 */
UpdateVisualisationFavouriteRequest.prototype['QueueId'] = undefined;






export default UpdateVisualisationFavouriteRequest;

