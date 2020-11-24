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
import * as Mappers from "../models/integrationRuntimeStatusOperationsMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a IntegrationRuntimeStatusOperations. */
export class IntegrationRuntimeStatusOperations {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a IntegrationRuntimeStatusOperations.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the integration runtime status
   * @summary Get integration runtime status
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param [options] The optional parameters
   * @returns Promise<Models.IntegrationRuntimeStatusGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options?: msRest.RequestOptionsBase): Promise<Models.IntegrationRuntimeStatusGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, callback: msRest.ServiceCallback<Models.IntegrationRuntimeStatusResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IntegrationRuntimeStatusResponse>): void;
  get(resourceGroupName: string, workspaceName: string, integrationRuntimeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IntegrationRuntimeStatusResponse>, callback?: msRest.ServiceCallback<Models.IntegrationRuntimeStatusResponse>): Promise<Models.IntegrationRuntimeStatusGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        integrationRuntimeName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.IntegrationRuntimeStatusGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/getStatus",
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
      bodyMapper: Mappers.IntegrationRuntimeStatusResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
