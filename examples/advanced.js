// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Advanced usage: add a stage to the shipped hook definitions.
 *
 * The package exports lefthook.yml as a string, so extending it means appending
 * a correctly indented block. The commands live two levels in, under
 * `pre-commit: commands:`, which is why the added block is indented by four
 * spaces.
 */

"use strict";

const base = require("../index.cjs");

const extraStage = [
  "    typecheck:",
  '      glob: "*.{ts,tsx}"',
  "      run: npx tsc --noEmit",
  "",
].join("\n");

const extended = base.replace(/\s*$/, "\n") + extraStage;

console.log("=== Advanced example: @sebastienrousseau/lefthook-config ===");
console.log(
  "  Stages in the shipped config:",
  (base.match(/^ {4}\w+:$/gm) || []).length,
);
console.log(
  "  Stages after extending:",
  (extended.match(/^ {4}\w+:$/gm) || []).length,
);
console.log("");
console.log("Extended lefthook.yml:");
console.log(extended);
console.log("Write it out and install the hooks with:");
console.log(
  "  node examples/advanced.js > lefthook.yml && npx lefthook install",
);
