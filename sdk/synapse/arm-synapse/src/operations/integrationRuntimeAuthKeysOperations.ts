/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/integrationRuntimeAuthKeysOperationsMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a IntegrationRuntimeAuthKeysOperations. */
export class IntegrationRuntimeAuthKeysOperations {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a IntegrationRuntimeAuthKeysOperations.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Regenerate the authentication key for an integration runtime
   * @summary Regenerate integration runtime authentication key
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param regenerateKeyParameters The parameters for regenerating integration runtime
   * authentication key.
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationRuntimeAuthKeysRegenerateResponse>
   */
  regenerate(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, regenerateKeyParameters: Models.IntegrationRuntimeRegenerateKeyParameters, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationRuntimeAuthKeysRegenerateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param regenerateKeyParameters The parameters for regenerating integration runtime
   * authentication key.
   * @param callback The callback
   */
  regenerate(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, regenerateKeyParameters: Models.IntegrationRuntimeRegenerateKeyParameters, callback: msRest.ServiceCallback<Models.IntegrationRuntimeAuthKeys>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param regenerateKeyParameters The parameters for regenerating integration runtime
   * authentication key.
   * @param options The optional parameters
   * @param callback The callback
   */
  regenerate(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, regenerateKeyParameters: Models.IntegrationRuntimeRegenerateKeyParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationRuntimeAuthKeys>): void;
  regenerate(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, regenerateKeyParameters: Models.IntegrationRuntimeRegenerateKeyParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IntegrationRuntimeAuthKeys>, callback?: msRest.ServiceCallback<Models.IntegrationRuntimeAuthKeys>): Promise<Models.IntegrationRuntimeAuthKeysRegenerateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        integrationRuntimeName,
        regenerateKeyParameters,
        options
      },
      regenerateOperationSpec,
      callback) as Promise<Models.IntegrationRuntimeAuthKeysRegenerateResponse>;
  }

  /**
   * List authentication keys in an integration runtime
   * @summary List integration runtime authentication keys
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationRuntimeAuthKeysListResponse>
   */
  list(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationRuntimeAuthKeysListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, callback: msRest.ServiceCallback<Models.IntegrationRuntimeAuthKeys>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationRuntimeAuthKeys>): void;
  list(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IntegrationRuntimeAuthKeys>, callback?: msRest.ServiceCallback<Models.IntegrationRuntimeAuthKeys>): Promise<Models.IntegrationRuntimeAuthKeysListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        integrationRuntimeName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.IntegrationRuntimeAuthKeysListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const regenerateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/regenerateAuthKey",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.integrationRuntimeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "regenerateKeyParameters",
    mapper: {
      ...Mappers.IntegrationRuntimeRegenerateKeyParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationRuntimeAuthKeys
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/listAuthKeys",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.integrationRuntimeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationRuntimeAuthKeys
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
