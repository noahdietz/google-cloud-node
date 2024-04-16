// Copyright 2024 Google LLC
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

function main(parent, membership) {
  // [START chat_v1_generated_ChatService_CreateMembership_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the space for which to create the
   *  membership.
   *  Format: spaces/{space}
   */
  // const parent = 'abc123'
  /**
   *  Required. The membership relation to create.
   *  The `memberType` field must contain a user with the `user.name` and
   *  `user.type` fields populated. The server will assign a resource name
   *  and overwrite anything specified.
   *  When a Chat app creates a membership relation for a human user, it must use
   *  the `chat.memberships` scope, set `user.type` to `HUMAN`, and set
   *  `user.name` with format `users/{user}`, where `{user}` can be the email
   *  address for the user. For users in the same Workspace organization `{user}`
   *  can also be the `id` of the
   *  person (https://developers.google.com/people/api/rest/v1/people) from the
   *  People API, or the `id` for the user in the Directory API. For example, if
   *  the People API Person profile ID for `user@example.com` is `123456789`, you
   *  can add the user to the space by setting the `membership.member.name` to
   *  `users/user@example.com` or `users/123456789`. When a Chat app creates a
   *  membership relation for itself, it must use the `chat.memberships.app`
   *  scope, set `user.type` to `BOT`, and set `user.name` to `users/app`.
   */
  // const membership = {}

  // Imports the Chat library
  const {ChatServiceClient} = require('@google-apps/chat').v1;

  // Instantiates a client
  const chatClient = new ChatServiceClient();

  async function callCreateMembership() {
    // Construct request
    const request = {
      parent,
      membership,
    };

    // Run request
    const response = await chatClient.createMembership(request);
    console.log(response);
  }

  callCreateMembership();
  // [END chat_v1_generated_ChatService_CreateMembership_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));