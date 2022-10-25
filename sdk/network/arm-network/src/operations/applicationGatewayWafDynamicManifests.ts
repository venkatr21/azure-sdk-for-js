/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ApplicationGatewayWafDynamicManifests } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClient } from "../networkManagementClient";
import {
  ApplicationGatewayWafDynamicManifestResult,
  ApplicationGatewayWafDynamicManifestsGetNextOptionalParams,
  ApplicationGatewayWafDynamicManifestsGetOptionalParams,
  ApplicationGatewayWafDynamicManifestsGetResponse,
  ApplicationGatewayWafDynamicManifestsGetNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApplicationGatewayWafDynamicManifests operations. */
export class ApplicationGatewayWafDynamicManifestsImpl
  implements ApplicationGatewayWafDynamicManifests {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class ApplicationGatewayWafDynamicManifests class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Gets the regional application gateway waf manifest.
   * @param location The region where the nrp are located at.
   * @param options The options parameters.
   */
  public list(
    location: string,
    options?: ApplicationGatewayWafDynamicManifestsGetOptionalParams
  ): PagedAsyncIterableIterator<ApplicationGatewayWafDynamicManifestResult> {
    const iter = this.getPagingAll(location, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getPagingPage(location, options);
      }
    };
  }

  private async *getPagingPage(
    location: string,
    options?: ApplicationGatewayWafDynamicManifestsGetOptionalParams
  ): AsyncIterableIterator<ApplicationGatewayWafDynamicManifestResult[]> {
    let result = await this._get(location, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getNext(location, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getPagingAll(
    location: string,
    options?: ApplicationGatewayWafDynamicManifestsGetOptionalParams
  ): AsyncIterableIterator<ApplicationGatewayWafDynamicManifestResult> {
    for await (const page of this.getPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * Gets the regional application gateway waf manifest.
   * @param location The region where the nrp are located at.
   * @param options The options parameters.
   */
  private _get(
    location: string,
    options?: ApplicationGatewayWafDynamicManifestsGetOptionalParams
  ): Promise<ApplicationGatewayWafDynamicManifestsGetResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      getOperationSpec
    );
  }

  /**
   * GetNext
   * @param location The region where the nrp are located at.
   * @param nextLink The nextLink from the previous successful call to the Get method.
   * @param options The options parameters.
   */
  private _getNext(
    location: string,
    nextLink: string,
    options?: ApplicationGatewayWafDynamicManifestsGetNextOptionalParams
  ): Promise<ApplicationGatewayWafDynamicManifestsGetNextResponse> {
    return this.client.sendOperationRequest(
      { location, nextLink, options },
      getNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/applicationGatewayWafDynamicManifests",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayWafDynamicManifestResultList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayWafDynamicManifestResultList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
