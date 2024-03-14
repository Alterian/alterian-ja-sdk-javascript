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

/**
 * The GetEMMappingsRequest model module.
 * @module com.alterian.ja.model/GetEMMappingsRequest
 * @version 6.35.0
 */
class GetEMMappingsRequest {
    /**
     * Constructs a new <code>GetEMMappingsRequest</code>.
     * @alias module:com.alterian.ja.model/GetEMMappingsRequest
     */
    constructor() { 
        
        GetEMMappingsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetEMMappingsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/GetEMMappingsRequest} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/GetEMMappingsRequest} The populated <code>GetEMMappingsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEMMappingsRequest();

            if (data.hasOwnProperty('Cursor')) {
                obj['Cursor'] = APICursor.constructFromObject(data['Cursor']);
            }
            if (data.hasOwnProperty('FolderID')) {
                obj['FolderID'] = ApiClient.convertToType(data['FolderID'], 'Number');
            }
            if (data.hasOwnProperty('IncludeChildren')) {
                obj['IncludeChildren'] = ApiClient.convertToType(data['IncludeChildren'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetEMMappingsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetEMMappingsRequest</code>.
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
GetEMMappingsRequest.prototype['Cursor'] = undefined;

/**
 * @see(Folder) from which to return the list of @see(EMMapping)s.  Pass NULL for the root [not contained within a folder]
 * @member {Number} FolderID
 */
GetEMMappingsRequest.prototype['FolderID'] = undefined;

/**
 * pass TRUE to find any @see(EMUploadMapping)s which are contained within child folders of the FolderID parameter
 * @member {Boolean} IncludeChildren
 */
GetEMMappingsRequest.prototype['IncludeChildren'] = undefined;






export default GetEMMappingsRequest;
