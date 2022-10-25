/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get a list of all relevant governanceRules over a security connector level scope
 *
 * @summary Get a list of all relevant governanceRules over a security connector level scope
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2022-01-01-preview/examples/GovernanceRules/ListBySecurityConnectorGovernanceRules_example.json
 */
async function listSecurityGovernanceRulesBySecurityConnectorLevelScope() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const resourceGroupName = "gcpResourceGroup";
  const securityConnectorName = "gcpconnector";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.securityConnectorGovernanceRule.list(
    resourceGroupName,
    securityConnectorName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listSecurityGovernanceRulesBySecurityConnectorLevelScope().catch(console.error);
