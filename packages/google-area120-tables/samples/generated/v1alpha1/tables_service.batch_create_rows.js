// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent, requests) {
  // [START area120tables_v1alpha1_generated_TablesService_BatchCreateRows_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent table where the rows will be created.
   *  Format: tables/{table}
   */
  // const parent = 'abc123'
  /**
   *  Required. The request message specifying the rows to create.
   *  A maximum of 500 rows can be created in a single batch.
   */
  // const requests = 1234

  // Imports the Tables library
  const {TablesServiceClient} = require('@google/area120-tables').v1alpha1;

  // Instantiates a client
  const tablesClient = new TablesServiceClient();

  async function callBatchCreateRows() {
    // Construct request
    const request = {
      parent,
      requests,
    };

    // Run request
    const response = await tablesClient.batchCreateRows(request);
    console.log(response);
  }

  callBatchCreateRows();
  // [END area120tables_v1alpha1_generated_TablesService_BatchCreateRows_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));