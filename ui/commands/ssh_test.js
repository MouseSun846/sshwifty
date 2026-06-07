// Sshwifty - A Web SSH client
//
// Copyright (C) 2019-2025 Ni Rui <ranqus@gmail.com>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

/* global describe, it */

import assert from "assert";
import { shouldKeepCredentialForKnownRemote } from "./ssh.js";

describe("SSH", () => {
  it("keeps password credentials for known remotes", () => {
    assert.strictEqual(
      shouldKeepCredentialForKnownRemote("Password", false),
      true,
    );
  });

  it("does not keep manually entered private keys for known remotes", () => {
    assert.strictEqual(
      shouldKeepCredentialForKnownRemote("Private Key", false),
      false,
    );
  });

  it("keeps preset credentials for known remotes", () => {
    assert.strictEqual(
      shouldKeepCredentialForKnownRemote("Private Key", true),
      true,
    );
  });
});
