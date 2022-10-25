/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Returns the list of currently active sessions on the Bastion.
 *
 * @summary Returns the list of currently active sessions on the Bastion.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/BastionSessionsList.json
 */
async function returnsAListOfCurrentlyActiveSessionsOnTheBastion() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const bastionHostName = "bastionhosttenant";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.beginListActiveSessionsAndWait(
    resourceGroupName,
    bastionHostName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

returnsAListOfCurrentlyActiveSessionsOnTheBastion().catch(console.error);
