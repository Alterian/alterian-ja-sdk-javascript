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
import PatternTaskType from './PatternTaskType';

/**
 * The CreatePatternTasksRequest model module.
 * @module com.alterian.ja.model/CreatePatternTasksRequest
 * @version 6.35.0
 */
class CreatePatternTasksRequest {
    /**
     * Constructs a new <code>CreatePatternTasksRequest</code>.
     * @alias module:com.alterian.ja.model/CreatePatternTasksRequest
     */
    constructor() { 
        
        CreatePatternTasksRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreatePatternTasksRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/CreatePatternTasksRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/CreatePatternTasksRequest} The populated <code>CreatePatternTasksRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePatternTasksRequest();

            if (data.hasOwnProperty('IsReplace')) {
                obj['IsReplace'] = ApiClient.convertToType(data['IsReplace'], 'Boolean');
            }
            if (data.hasOwnProperty('IsSynchronousExecution')) {
                obj['IsSynchronousExecution'] = ApiClient.convertToType(data['IsSynchronousExecution'], 'Boolean');
            }
            if (data.hasOwnProperty('PatternId')) {
                obj['PatternId'] = ApiClient.convertToType(data['PatternId'], 'Number');
            }
            if (data.hasOwnProperty('Tasks')) {
                obj['Tasks'] = ApiClient.convertToType(data['Tasks'], [PatternTaskType]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreatePatternTasksRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreatePatternTasksRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['Tasks'])) {
            throw new Error("Expected the field `Tasks` to be an array in the JSON data but got " + data['Tasks']);
        }

        return true;
    }


}



/**
 * When true, first request cancellation of any existing tasks which are dependent on any new of the new ones that have been submitted
 * @member {Boolean} IsReplace
 */
CreatePatternTasksRequest.prototype['IsReplace'] = undefined;

/**
 * Process a short task synchronously and return the result. Currently only supported for Task 'Upload'
 * @member {Boolean} IsSynchronousExecution
 */
CreatePatternTasksRequest.prototype['IsSynchronousExecution'] = undefined;

/**
 * Pattern to run tasks against
 * @member {Number} PatternId
 */
CreatePatternTasksRequest.prototype['PatternId'] = undefined;

/**
 * Tasks to perform
 * @member {Array.<module:com.alterian.ja.model/PatternTaskType>} Tasks
 */
CreatePatternTasksRequest.prototype['Tasks'] = undefined;






export default CreatePatternTasksRequest;
