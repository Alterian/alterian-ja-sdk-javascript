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
import PersonaLink from './PersonaLink';

/**
 * The Persona model module.
 * @module com.alterian.ja.model/Persona
 * @version 6.35.0
 */
class Persona {
    /**
     * Constructs a new <code>Persona</code>.
     * Provides data about a specific persona.               https://alterian.atlassian.net/l/cp/kQa2X8yb
     * @alias module:com.alterian.ja.model/Persona
     */
    constructor() { 
        
        Persona.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Persona</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/Persona} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/Persona} The populated <code>Persona</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Persona();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('Icon')) {
                obj['Icon'] = ApiClient.convertToType(data['Icon'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Created')) {
                obj['Created'] = ApiClient.convertToType(data['Created'], 'Date');
            }
            if (data.hasOwnProperty('Modified')) {
                obj['Modified'] = ApiClient.convertToType(data['Modified'], 'Date');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Hidden')) {
                obj['Hidden'] = ApiClient.convertToType(data['Hidden'], 'Boolean');
            }
            if (data.hasOwnProperty('Links')) {
                obj['Links'] = ApiClient.convertToType(data['Links'], [PersonaLink]);
            }
            if (data.hasOwnProperty('UsageCounter')) {
                obj['UsageCounter'] = ApiClient.convertToType(data['UsageCounter'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Persona</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Persona</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Icon'] && !(typeof data['Icon'] === 'string' || data['Icon'] instanceof String)) {
            throw new Error("Expected the field `Icon` to be a primitive type in the JSON string but got " + data['Icon']);
        }
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['Description'] && !(typeof data['Description'] === 'string' || data['Description'] instanceof String)) {
            throw new Error("Expected the field `Description` to be a primitive type in the JSON string but got " + data['Description']);
        }
        if (data['Links']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['Links'])) {
                throw new Error("Expected the field `Links` to be an array in the JSON data but got " + data['Links']);
            }
            // validate the optional field `Links` (array)
            for (const item of data['Links']) {
                PersonaLink.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Internal identifier for the persona
 * @member {Number} Id
 */
Persona.prototype['Id'] = undefined;

/**
 * Icon
 * @member {String} Icon
 */
Persona.prototype['Icon'] = undefined;

/**
 * Name of the persona
 * @member {String} Name
 */
Persona.prototype['Name'] = undefined;

/**
 * Date the persona was created
 * @member {Date} Created
 */
Persona.prototype['Created'] = undefined;

/**
 * Date the persona was last modified
 * @member {Date} Modified
 */
Persona.prototype['Modified'] = undefined;

/**
 * Description for the persona
 * @member {String} Description
 */
Persona.prototype['Description'] = undefined;

/**
 * Should this Persona be hidden by default in the UI (as an alternative to deleting it)
 * @member {Boolean} Hidden
 */
Persona.prototype['Hidden'] = undefined;

/**
 * Provides a link to other objects which this persona is being linked to (eg. playbooks, etc.)
 * @member {Array.<module:com.alterian.ja.model/PersonaLink>} Links
 */
Persona.prototype['Links'] = undefined;

/**
 * As events flow through the system, if this persona is detected in the inbound event stream, the usage counter will be incremented.  Note that this             will not be exact but will get an approximation on how often the persona is being used.  Personas which are manually added start with a usage of zero.             Anything with a value greater than zero means that it has been seen in inbound events.
 * @member {Number} UsageCounter
 */
Persona.prototype['UsageCounter'] = undefined;






export default Persona;

