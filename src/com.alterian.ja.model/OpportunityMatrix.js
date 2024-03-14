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
 * The OpportunityMatrix model module.
 * @module com.alterian.ja.model/OpportunityMatrix
 * @version 6.35.0
 */
class OpportunityMatrix {
    /**
     * Constructs a new <code>OpportunityMatrix</code>.
     * A Data transfer object (DTO) to move information about campaigns within the opportunity matrix to and from the UI             We will have one of these instances for each cell in the matrix that contains a campaign             At time of writing, we will always get and update the entire list of Opportunity Matrix elements in one go
     * @alias module:com.alterian.ja.model/OpportunityMatrix
     */
    constructor() { 
        
        OpportunityMatrix.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OpportunityMatrix</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/OpportunityMatrix} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/OpportunityMatrix} The populated <code>OpportunityMatrix</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OpportunityMatrix();

            if (data.hasOwnProperty('BusinessGoalID')) {
                obj['BusinessGoalID'] = ApiClient.convertToType(data['BusinessGoalID'], 'Number');
            }
            if (data.hasOwnProperty('OpportunityID')) {
                obj['OpportunityID'] = ApiClient.convertToType(data['OpportunityID'], 'Number');
            }
            if (data.hasOwnProperty('DocumentID')) {
                obj['DocumentID'] = ApiClient.convertToType(data['DocumentID'], 'Number');
            }
            if (data.hasOwnProperty('CampaignName')) {
                obj['CampaignName'] = ApiClient.convertToType(data['CampaignName'], 'String');
            }
            if (data.hasOwnProperty('CampaignDescription')) {
                obj['CampaignDescription'] = ApiClient.convertToType(data['CampaignDescription'], 'String');
            }
            if (data.hasOwnProperty('Author')) {
                obj['Author'] = ApiClient.convertToType(data['Author'], 'String');
            }
            if (data.hasOwnProperty('LastUpdated')) {
                obj['LastUpdated'] = ApiClient.convertToType(data['LastUpdated'], 'Date');
            }
            if (data.hasOwnProperty('SubType')) {
                obj['SubType'] = ApiClient.convertToType(data['SubType'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OpportunityMatrix</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OpportunityMatrix</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['CampaignName'] && !(typeof data['CampaignName'] === 'string' || data['CampaignName'] instanceof String)) {
            throw new Error("Expected the field `CampaignName` to be a primitive type in the JSON string but got " + data['CampaignName']);
        }
        // ensure the json data is a string
        if (data['CampaignDescription'] && !(typeof data['CampaignDescription'] === 'string' || data['CampaignDescription'] instanceof String)) {
            throw new Error("Expected the field `CampaignDescription` to be a primitive type in the JSON string but got " + data['CampaignDescription']);
        }
        // ensure the json data is a string
        if (data['Author'] && !(typeof data['Author'] === 'string' || data['Author'] instanceof String)) {
            throw new Error("Expected the field `Author` to be a primitive type in the JSON string but got " + data['Author']);
        }
        // ensure the json data is a string
        if (data['SubType'] && !(typeof data['SubType'] === 'string' || data['SubType'] instanceof String)) {
            throw new Error("Expected the field `SubType` to be a primitive type in the JSON string but got " + data['SubType']);
        }

        return true;
    }


}



/**
 * The Id of the story that this campaign is appearing in. Basically the Y coordinate of the matrix             If the Story has been deleted then the UI will not display this campaign
 * @member {Number} BusinessGoalID
 */
OpportunityMatrix.prototype['BusinessGoalID'] = undefined;

/**
 * The Id of the opportunity that this campaign is appearing in. Basically the X coordinate of the matrix             If the Opportunity has been deleted then the UI will not display this campaign
 * @member {Number} OpportunityID
 */
OpportunityMatrix.prototype['OpportunityID'] = undefined;

/**
 * The id of the campaign document that is referenced in the cell. Required when updating
 * @member {Number} DocumentID
 */
OpportunityMatrix.prototype['DocumentID'] = undefined;

/**
 * The name of the campaign in this cell. Read only, provided as a convenience for populating the Opportunity matrix UI
 * @member {String} CampaignName
 */
OpportunityMatrix.prototype['CampaignName'] = undefined;

/**
 * The description of the campaign in this cell. Read only, provided as a convenience for populating the Opportunity matrix UI
 * @member {String} CampaignDescription
 */
OpportunityMatrix.prototype['CampaignDescription'] = undefined;

/**
 * The Author of the campaign in this cell. Read only, provided as a convenience for populating the Opportunity matrix UI
 * @member {String} Author
 */
OpportunityMatrix.prototype['Author'] = undefined;

/**
 * The Date/Time the campaign was last updated. Read only, provided as a convenience for populating the Opportunity matrix UI
 * @member {Date} LastUpdated
 */
OpportunityMatrix.prototype['LastUpdated'] = undefined;

/**
 * What kind of thing is this? Used to distinguish between Silverlight campaigns (=\"Campaign\") and Campaign360 (=\"Campaign.BuildACampaign\") objects when deeplinking
 * @member {String} SubType
 */
OpportunityMatrix.prototype['SubType'] = undefined;






export default OpportunityMatrix;
