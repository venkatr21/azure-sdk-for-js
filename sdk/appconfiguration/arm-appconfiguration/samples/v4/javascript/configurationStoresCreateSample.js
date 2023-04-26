/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AppConfigurationManagementClient } = require("@azure/arm-appconfiguration");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates a configuration store with the specified parameters.
 *
 * @summary Creates a configuration store with the specified parameters.
 * x-ms-original-file: specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/stable/2023-03-01/examples/ConfigurationStoresCreate.json
 */
async function configurationStoresCreate() {
  const subscriptionId =
    process.env["APPCONFIGURATION_SUBSCRIPTION_ID"] || "c80fb759-c965-4c6a-9110-9b2b2d038882";
  const resourceGroupName = process.env["APPCONFIGURATION_RESOURCE_GROUP"] || "myResourceGroup";
  const configStoreName = "contoso";
  const configStoreCreationParameters = {
    location: "westus",
    sku: { name: "Standard" },
    tags: { myTag: "myTagValue" },
  };
  const credential = new DefaultAzureCredential();
  const client = new AppConfigurationManagementClient(credential, subscriptionId);
  const result = await client.configurationStores.beginCreateAndWait(
    resourceGroupName,
    configStoreName,
    configStoreCreationParameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a configuration store with the specified parameters.
 *
 * @summary Creates a configuration store with the specified parameters.
 * x-ms-original-file: specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/stable/2023-03-01/examples/ConfigurationStoresCreateWithIdentity.json
 */
async function configurationStoresCreateWithIdentity() {
  const subscriptionId =
    process.env["APPCONFIGURATION_SUBSCRIPTION_ID"] || "c80fb759-c965-4c6a-9110-9b2b2d038882";
  const resourceGroupName = process.env["APPCONFIGURATION_RESOURCE_GROUP"] || "myResourceGroup";
  const configStoreName = "contoso";
  const configStoreCreationParameters = {
    identity: {
      type: "SystemAssigned, UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/c80fb759C9654c6a91109b2b2d038882/resourcegroups/myResourceGroup1/providers/MicrosoftManagedIdentity/userAssignedIdentities/identity2":
          {},
      },
    },
    location: "westus",
    sku: { name: "Standard" },
    tags: { myTag: "myTagValue" },
  };
  const credential = new DefaultAzureCredential();
  const client = new AppConfigurationManagementClient(credential, subscriptionId);
  const result = await client.configurationStores.beginCreateAndWait(
    resourceGroupName,
    configStoreName,
    configStoreCreationParameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a configuration store with the specified parameters.
 *
 * @summary Creates a configuration store with the specified parameters.
 * x-ms-original-file: specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/stable/2023-03-01/examples/ConfigurationStoresCreateWithLocalAuthDisabled.json
 */
async function configurationStoresCreateWithLocalAuthDisabled() {
  const subscriptionId =
    process.env["APPCONFIGURATION_SUBSCRIPTION_ID"] || "c80fb759-c965-4c6a-9110-9b2b2d038882";
  const resourceGroupName = process.env["APPCONFIGURATION_RESOURCE_GROUP"] || "myResourceGroup";
  const configStoreName = "contoso";
  const configStoreCreationParameters = {
    disableLocalAuth: true,
    location: "westus",
    sku: { name: "Standard" },
  };
  const credential = new DefaultAzureCredential();
  const client = new AppConfigurationManagementClient(credential, subscriptionId);
  const result = await client.configurationStores.beginCreateAndWait(
    resourceGroupName,
    configStoreName,
    configStoreCreationParameters
  );
  console.log(result);
}

async function main() {
  configurationStoresCreate();
  configurationStoresCreateWithIdentity();
  configurationStoresCreateWithLocalAuthDisabled();
}

main().catch(console.error);