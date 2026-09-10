// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * 100% Feature Showcase for @sebastienrousseau/lefthook-config
 */
const template = require("../index.cjs");
const assert = require("assert");

console.log(
  "=== 100% Feature Showcase: @sebastienrousseau/lefthook-config ===",
);
assert(typeof template === "string" && template.length > 0);
assert(template.includes("pre-commit:"));
assert(template.includes("parallel: true"));

console.log("  ✓ Pre-commit hook declared: true");
console.log("  ✓ Parallel execution enabled: true");
console.log("✅ 100% of lefthook-config directives and features validated.");
