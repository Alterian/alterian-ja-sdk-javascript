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
import EMUploadMapping from './EMUploadMapping';

/**
 * The CreateEMMappingRequest model module.
 * @module com.alterian.ja.model/CreateEMMappingRequest
 * @version 6.35.0
 */
class CreateEMMappingRequest {
    /**
     * Constructs a new <code>CreateEMMappingRequest</code>.
     * @alias module:com.alterian.ja.model/CreateEMMappingRequest
     */
    constructor() { 
        
        CreateEMMappingRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateEMMappingRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/CreateEMMappingRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/CreateEMMappingRequest} The populated <code>CreateEMMappingRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateEMMappingRequest();

            if (data.hasOwnProperty('Mapping')) {
                obj['Mapping'] = EMUploadMapping.constructFromObject(data['Mapping']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateEMMappingRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateEMMappingRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `Mapping`
        if (data['Mapping']) { // data not null
          EMUploadMapping.validateJSON(data['Mapping']);
        }

        return true;
    }


}



/**
 * @member {module:com.alterian.ja.model/EMUploadMapping} Mapping
 */
CreateEMMappingRequest.prototype['Mapping'] = undefined;






export default CreateEMMappingRequest;

