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
import TransformType from './TransformType';

/**
 * The GetTransformsRequest model module.
 * @module com.alterian.ja.model/GetTransformsRequest
 * @version 6.35.0
 */
class GetTransformsRequest {
    /**
     * Constructs a new <code>GetTransformsRequest</code>.
     * @alias module:com.alterian.ja.model/GetTransformsRequest
     */
    constructor() { 
        
        GetTransformsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTransformsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/GetTransformsRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/GetTransformsRequest} The populated <code>GetTransformsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransformsRequest();

            if (data.hasOwnProperty('Cursor')) {
                obj['Cursor'] = APICursor.constructFromObject(data['Cursor']);
            }
            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('TransformType')) {
                obj['TransformType'] = TransformType.constructFromObject(data['TransformType']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetTransformsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetTransformsRequest</code>.
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
GetTransformsRequest.prototype['Cursor'] = undefined;

/**
 * Optionally fetch a single transform.
 * @member {Number} Id
 */
GetTransformsRequest.prototype['Id'] = undefined;

/**
 * @member {module:com.alterian.ja.model/TransformType} TransformType
 */
GetTransformsRequest.prototype['TransformType'] = undefined;






export default GetTransformsRequest;

