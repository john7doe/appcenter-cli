/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Apple credentials needed to log into the Apple Itunes Portal
 *
 */
class ItunesTeamsRequest {
  /**
   * Create a ItunesTeamsRequest.
   * @member {string} username The username for the Apple Developer account.
   * @member {string} password The password for the Apple Developer account.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ItunesTeamsRequest
   *
   * @returns {object} metadata of ItunesTeamsRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ItunesTeamsRequest',
      type: {
        name: 'Composite',
        className: 'ItunesTeamsRequest',
        modelProperties: {
          username: {
            required: true,
            serializedName: 'username',
            type: {
              name: 'String'
            }
          },
          password: {
            required: true,
            serializedName: 'password',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ItunesTeamsRequest;
