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
 * The WebSpoonStatus model module.
 * @module com.alterian.ja.model/WebSpoonStatus
 * @version 6.35.0
 */
class WebSpoonStatus {
    /**
     * Constructs a new <code>WebSpoonStatus</code>.
     * 
     * @alias module:com.alterian.ja.model/WebSpoonStatus
     */
    constructor() { 
        
        WebSpoonStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebSpoonStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.alterian.ja.model/WebSpoonStatus} obj Optional instance to populate.
     * @return {module:com.alterian.ja.model/WebSpoonStatus} The populated <code>WebSpoonStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebSpoonStatus();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
            }
            if (data.hasOwnProperty('OperationalStatus')) {
                obj['OperationalStatus'] = ApiClient.convertToType(data['OperationalStatus'], 'String');
            }
            if (data.hasOwnProperty('Tags')) {
                obj['Tags'] = ApiClient.convertToType(data['Tags'], {'String': 'String'});
            }
            if (data.hasOwnProperty('PublicIp')) {
                obj['PublicIp'] = ApiClient.convertToType(data['PublicIp'], 'String');
            }
            if (data.hasOwnProperty('URL')) {
                obj['URL'] = ApiClient.convertToType(data['URL'], 'String');
            }
            if (data.hasOwnProperty('CreationStatus')) {
                obj['CreationStatus'] = ApiClient.convertToType(data['CreationStatus'], 'String');
            }
            if (data.hasOwnProperty('Created')) {
                obj['Created'] = ApiClient.convertToType(data['Created'], 'Date');
            }
            if (data.hasOwnProperty('StartedByCode')) {
                obj['StartedByCode'] = ApiClient.convertToType(data['StartedByCode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebSpoonStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebSpoonStatus</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Id'] && !(typeof data['Id'] === 'string' || data['Id'] instanceof String)) {
            throw new Error("Expected the field `Id` to be a primitive type in the JSON string but got " + data['Id']);
        }
        // ensure the json data is a string
        if (data['OperationalStatus'] && !(typeof data['OperationalStatus'] === 'string' || data['OperationalStatus'] instanceof String)) {
            throw new Error("Expected the field `OperationalStatus` to be a primitive type in the JSON string but got " + data['OperationalStatus']);
        }
        // ensure the json data is a string
        if (data['PublicIp'] && !(typeof data['PublicIp'] === 'string' || data['PublicIp'] instanceof String)) {
            throw new Error("Expected the field `PublicIp` to be a primitive type in the JSON string but got " + data['PublicIp']);
        }
        // ensure the json data is a string
        if (data['URL'] && !(typeof data['URL'] === 'string' || data['URL'] instanceof String)) {
            throw new Error("Expected the field `URL` to be a primitive type in the JSON string but got " + data['URL']);
        }
        // ensure the json data is a string
        if (data['CreationStatus'] && !(typeof data['CreationStatus'] === 'string' || data['CreationStatus'] instanceof String)) {
            throw new Error("Expected the field `CreationStatus` to be a primitive type in the JSON string but got " + data['CreationStatus']);
        }
        // ensure the json data is a string
        if (data['StartedByCode'] && !(typeof data['StartedByCode'] === 'string' || data['StartedByCode'] instanceof String)) {
            throw new Error("Expected the field `StartedByCode` to be a primitive type in the JSON string but got " + data['StartedByCode']);
        }

        return true;
    }


}



/**
 * 
 * @member {String} Id
 */
WebSpoonStatus.prototype['Id'] = undefined;

/**
 * 
 * @member {String} OperationalStatus
 */
WebSpoonStatus.prototype['OperationalStatus'] = undefined;

/**
 * 
 * @member {Object.<String, String>} Tags
 */
WebSpoonStatus.prototype['Tags'] = undefined;

/**
 * 
 * @member {String} PublicIp
 */
WebSpoonStatus.prototype['PublicIp'] = undefined;

/**
 * 
 * @member {String} URL
 */
WebSpoonStatus.prototype['URL'] = undefined;

/**
 * 
 * @member {String} CreationStatus
 */
WebSpoonStatus.prototype['CreationStatus'] = undefined;

/**
 * 
 * @member {Date} Created
 */
WebSpoonStatus.prototype['Created'] = undefined;

/**
 * 
 * @member {String} StartedByCode
 */
WebSpoonStatus.prototype['StartedByCode'] = undefined;






export default WebSpoonStatus;

