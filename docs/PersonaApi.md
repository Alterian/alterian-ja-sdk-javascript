# JourneyAnalyticsApi.PersonaApi

All URIs are relative to *http://localhost/services/api.svc/jsonsdk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPersona**](PersonaApi.md#createPersona) | **POST** /CreatePersona | Creates a @see(Persona)
[**deletePersona**](PersonaApi.md#deletePersona) | **POST** /DeletePersona | Deletes a persona from the system
[**getPersona**](PersonaApi.md#getPersona) | **POST** /GetPersona | Returns back a single @see(Persona)
[**getPersonas**](PersonaApi.md#getPersonas) | **POST** /GetPersonas | Returns back a list of @see(Persona)
[**updatePersona**](PersonaApi.md#updatePersona) | **POST** /UpdatePersona | Updates an @see(Persona)



## createPersona

> CreateClientDefaultResponse createPersona(createPersonaRequest)

Creates a @see(Persona)

Creates a @see(Persona)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PersonaApi();
let createPersonaRequest = new JourneyAnalyticsApi.CreatePersonaRequest(); // CreatePersonaRequest | Creates a @see(Persona)
apiInstance.createPersona(createPersonaRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPersonaRequest** | [**CreatePersonaRequest**](CreatePersonaRequest.md)| Creates a @see(Persona) | 

### Return type

[**CreateClientDefaultResponse**](CreateClientDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePersona

> AUTHChangePasswordDefaultResponse deletePersona(deletePersonaRequest)

Deletes a persona from the system

Deletes a persona from the system

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PersonaApi();
let deletePersonaRequest = new JourneyAnalyticsApi.DeletePersonaRequest(); // DeletePersonaRequest | Deletes a persona from the system
apiInstance.deletePersona(deletePersonaRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deletePersonaRequest** | [**DeletePersonaRequest**](DeletePersonaRequest.md)| Deletes a persona from the system | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getPersona

> GetPersonaDefaultResponse getPersona(getPersonaRequest)

Returns back a single @see(Persona)

Returns back a single @see(Persona)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PersonaApi();
let getPersonaRequest = new JourneyAnalyticsApi.GetPersonaRequest(); // GetPersonaRequest | Returns back a single @see(Persona)
apiInstance.getPersona(getPersonaRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getPersonaRequest** | [**GetPersonaRequest**](GetPersonaRequest.md)| Returns back a single @see(Persona) | 

### Return type

[**GetPersonaDefaultResponse**](GetPersonaDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getPersonas

> GetPersonasDefaultResponse getPersonas(getPersonasRequest)

Returns back a list of @see(Persona)

Returns back a list of @see(Persona)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PersonaApi();
let getPersonasRequest = new JourneyAnalyticsApi.GetPersonasRequest(); // GetPersonasRequest | Returns back a list of @see(Persona)
apiInstance.getPersonas(getPersonasRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getPersonasRequest** | [**GetPersonasRequest**](GetPersonasRequest.md)| Returns back a list of @see(Persona) | 

### Return type

[**GetPersonasDefaultResponse**](GetPersonasDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePersona

> AUTHChangePasswordDefaultResponse updatePersona(createPersonaRequest)

Updates an @see(Persona)

Updates an @see(Persona)

### Example

```javascript
import JourneyAnalyticsApi from 'journey_analytics_api';
let defaultClient = JourneyAnalyticsApi.ApiClient.instance;
// Configure API key authorization: TokenAuth
let TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new JourneyAnalyticsApi.PersonaApi();
let createPersonaRequest = new JourneyAnalyticsApi.CreatePersonaRequest(); // CreatePersonaRequest | Updates an @see(Persona)
apiInstance.updatePersona(createPersonaRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPersonaRequest** | [**CreatePersonaRequest**](CreatePersonaRequest.md)| Updates an @see(Persona) | 

### Return type

[**AUTHChangePasswordDefaultResponse**](AUTHChangePasswordDefaultResponse.md)

### Authorization

[TokenAuth](../README.md#TokenAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

