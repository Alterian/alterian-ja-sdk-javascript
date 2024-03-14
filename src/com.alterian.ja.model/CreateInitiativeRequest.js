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
import Initiative from './Initiative';

/**
 * The CreateInitiativeRequest model module.
 * @module com.alterian.ja.model/CreateInitiativeRequest
 * @version 6.35.0
 */
class CreateInitiativeRequest {
    /**
     * Constructs a new <code>CreateInitiativeRequest</code>.
     * @alias module:com.alterian.ja.model/CreateInitiativeRequest
     */
    constructor() { 
        
        CreateInitiativeRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateInitiativeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/CreateInitiativeRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/CreateInitiativeRequest} The populated <code>CreateInitiativeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateInitiativeRequest();

            if (data.hasOwnProperty('Initiative')) {
                obj['Initiative'] = Initiative.constructFromObject(data['Initiative']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateInitiativeRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateInitiativeRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `Initiative`
        if (data['Initiative']) { // data not null
          Initiative.validateJSON(data['Initiative']);
        }

        return true;
    }


}



/**
 * @member {module:com.alterian.ja.model/Initiative} Initiative
 */
CreateInitiativeRequest.prototype['Initiative'] = undefined;






export default CreateInitiativeRequest;
