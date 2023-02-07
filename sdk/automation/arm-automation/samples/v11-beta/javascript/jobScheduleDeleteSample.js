/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AutomationClient } = require("@azure/arm-automation");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Delete the job schedule identified by job schedule name.
 *
 * @summary Delete the job schedule identified by job schedule name.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/preview/2020-01-13-preview/examples/deleteJobSchedule.json
 */
async function deleteAJobSchedule() {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "ContoseAutomationAccount";
  const jobScheduleId = "0fa462ba-3aa2-4138-83ca-9ebc3bc55cdc";
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.jobScheduleOperations.delete(
    resourceGroupName,
    automationAccountName,
    jobScheduleId
  );
  console.log(result);
}

async function main() {
  deleteAJobSchedule();
}

main().catch(console.error);