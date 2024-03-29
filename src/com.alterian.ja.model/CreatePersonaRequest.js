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
import Persona from './Persona';

/**
 * The CreatePersonaRequest model module.
 * @module com.alterian.ja.model/CreatePersonaRequest
 * @version 6.35.0
 */
class CreatePersonaRequest {
    /**
     * Constructs a new <code>CreatePersonaRequest</code>.
     * @alias module:com.alterian.ja.model/CreatePersonaRequest
     */
    constructor() { 
        
        CreatePersonaRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreatePersonaRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/CreatePersonaRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/CreatePersonaRequest} The populated <code>CreatePersonaRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePersonaRequest();

            if (data.hasOwnProperty('Persona')) {
                obj['Persona'] = Persona.constructFromObject(data['Persona']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreatePersonaRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreatePersonaRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `Persona`
        if (data['Persona']) { // data not null
          Persona.validateJSON(data['Persona']);
        }

        return true;
    }


}



/**
 * @member {module:com.alterian.ja.model/Persona} Persona
 */
CreatePersonaRequest.prototype['Persona'] = undefined;






export default CreatePersonaRequest;

