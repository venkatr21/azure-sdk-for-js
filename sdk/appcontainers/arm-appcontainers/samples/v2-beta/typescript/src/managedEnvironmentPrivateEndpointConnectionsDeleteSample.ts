/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContainerAppsAPIClient } from "@azure/arm-appcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete a private endpoint connection for a given managed environment.
 *
 * @summary Delete a private endpoint connection for a given managed environment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2024-08-02-preview/examples/ManagedEnvironmentPrivateEndpointConnections_Delete.json
 */
async function deleteAPrivateEndpointConnectionByManagedEnvironment() {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] ||
    "8efdecc5-919e-44eb-b179-915dca89ebf9";
  const resourceGroupName =
    process.env["APPCONTAINERS_RESOURCE_GROUP"] || "examplerg";
  const environmentName = "managedEnv";
  const privateEndpointConnectionName = "jlaw-demo1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result =
    await client.managedEnvironmentPrivateEndpointConnections.beginDeleteAndWait(
      resourceGroupName,
      environmentName,
      privateEndpointConnectionName,
    );
  console.log(result);
}

async function main() {
  deleteAPrivateEndpointConnectionByManagedEnvironment();
}

main().catch(console.error);
