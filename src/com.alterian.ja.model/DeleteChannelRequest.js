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
 * The DeleteChannelRequest model module.
 * @module com.alterian.ja.model/DeleteChannelRequest
 * @version 6.35.0
 */
class DeleteChannelRequest {
    /**
     * Constructs a new <code>DeleteChannelRequest</code>.
     * @alias module:com.alterian.ja.model/DeleteChannelRequest
     */
    constructor() { 
        
        DeleteChannelRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteChannelRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/DeleteChannelRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/DeleteChannelRequest} The populated <code>DeleteChannelRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteChannelRequest();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteChannelRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteChannelRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Id of the @see(EventStreamChannel) to delete; obtained by calling @see(GetChannels)
 * @member {Number} Id
 */
DeleteChannelRequest.prototype['Id'] = undefined;






export default DeleteChannelRequest;

