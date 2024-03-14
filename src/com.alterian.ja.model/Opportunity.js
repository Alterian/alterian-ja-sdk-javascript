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
import OpportunityItem from './OpportunityItem';

/**
 * The Opportunity model module.
 * @module com.alterian.ja.model/Opportunity
 * @version 6.35.0
 */
class Opportunity {
    /**
     * Constructs a new <code>Opportunity</code>.
     * 
     * @alias module:com.alterian.ja.model/Opportunity
     */
    constructor() { 
        
        Opportunity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Opportunity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/Opportunity} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/Opportunity} The populated <code>Opportunity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Opportunity();

            if (data.hasOwnProperty('ID')) {
                obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Group')) {
                obj['Group'] = ApiClient.convertToType(data['Group'], 'String');
            }
            if (data.hasOwnProperty('Colour')) {
                obj['Colour'] = ApiClient.convertToType(data['Colour'], 'String');
            }
            if (data.hasOwnProperty('Icon')) {
                obj['Icon'] = ApiClient.convertToType(data['Icon'], 'String');
            }
            if (data.hasOwnProperty('Items')) {
                obj['Items'] = ApiClient.convertToType(data['Items'], [OpportunityItem]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Opportunity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Opportunity</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Name'] && !(typeof data['Name'] === 'string' || data['Name'] instanceof String)) {
            throw new Error("Expected the field `Name` to be a primitive type in the JSON string but got " + data['Name']);
        }
        // ensure the json data is a string
        if (data['Description'] && !(typeof data['Description'] === 'string' || data['Description'] instanceof String)) {
            throw new Error("Expected the field `Description` to be a primitive type in the JSON string but got " + data['Description']);
        }
        // ensure the json data is a string
        if (data['Group'] && !(typeof data['Group'] === 'string' || data['Group'] instanceof String)) {
            throw new Error("Expected the field `Group` to be a primitive type in the JSON string but got " + data['Group']);
        }
        // ensure the json data is a string
        if (data['Colour'] && !(typeof data['Colour'] === 'string' || data['Colour'] instanceof String)) {
            throw new Error("Expected the field `Colour` to be a primitive type in the JSON string but got " + data['Colour']);
        }
        // ensure the json data is a string
        if (data['Icon'] && !(typeof data['Icon'] === 'string' || data['Icon'] instanceof String)) {
            throw new Error("Expected the field `Icon` to be a primitive type in the JSON string but got " + data['Icon']);
        }
        if (data['Items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['Items'])) {
                throw new Error("Expected the field `Items` to be an array in the JSON data but got " + data['Items']);
            }
            // validate the optional field `Items` (array)
            for (const item of data['Items']) {
                OpportunityItem.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * ID of the opportunity as stored in the database
 * @member {Number} ID
 */
Opportunity.prototype['ID'] = undefined;

/**
 * The (arbitrary) name of the Opportunity as decided by the marketer
 * @member {String} Name
 */
Opportunity.prototype['Name'] = undefined;

/**
 * A desciption of the Opportunity to explain it's purpose to the user
 * @member {String} Description
 */
Opportunity.prototype['Description'] = undefined;

/**
 * Group Name used to give some structure to the Opportunities within the Matrix - this should probably be an ID to another table but meh!
 * @member {String} Group
 */
Opportunity.prototype['Group'] = undefined;

/**
 * Let's liven things up with a bit of colour
 * @member {String} Colour
 */
Opportunity.prototype['Colour'] = undefined;

/**
 * Icon for quick reference and to make the grid look a bit more shiny
 * @member {String} Icon
 */
Opportunity.prototype['Icon'] = undefined;

/**
 * List of the associated items (i.e. Campaigns / Journeys) linked to this Opportunity
 * @member {Array.<module:com.alterian.ja.model/OpportunityItem>} Items
 */
Opportunity.prototype['Items'] = undefined;






export default Opportunity;
