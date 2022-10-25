// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpClient } from "./interfaces.js";
import { createFetchHttpClient } from "./fetchHttpClient.js";

/**
 * Create the correct HttpClient for the current environment.
 */
export function createDefaultHttpClient(): HttpClient {
  return createFetchHttpClient();
}
