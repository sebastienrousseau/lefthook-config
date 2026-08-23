<!-- SPDX-License-Identifier: Apache-2.0 OR MIT>

<p align="center">
  <img src="./lefthook-config.svg" alt="lefthook-config logo" width="128" />
</p>

<h1 align="center">@sebastienrousseau/lefthook-config</h1>

<p align="center">
  Shareable Lefthook git hook configuration rules replacing heavy legacy hook managers.
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/lefthook-config/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/lefthook-config/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/@sebastienrousseau/lefthook-config"><img src="https://img.shields.io/npm/v/@sebastienrousseau%2Flefthook-config?style=for-the-badge&color=fc8d62&logo=npm" alt="npm package" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/lefthook-config"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/lefthook-config?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
  <a href="https://github.com/sebastienrousseau/lefthook-config/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-ISC-blue?style=for-the-badge" alt="License" /></a>
</p>

---

## Contents

**Getting Started**
- [Installation](#installation) — Package manager commands
- [Quick Start](#quick-start) — Configure in under a minute

**Features & Rule Showcase**
- [Ultra-Fast Git Hook Pipeline](#ultra-fast-git-hook-pipeline) — Code comparison
- [Module Compatibility](#module-compatibility) — Dual CJS/ESM & TypeScript declarations

**Governance & Quality**
- [Development & Testing](#development--testing) — Local validation
- [Security & Compliance](#security--compliance) — SLSA attestation & vulnerability policy
- [Author & License](#author--license) — Open source license

---

## Installation

Install using your preferred package manager:

```bash
# npm
npm install --save-dev @sebastienrousseau/lefthook-config

# pnpm
pnpm add -D @sebastienrousseau/lefthook-config

# yarn
yarn add -D @sebastienrousseau/lefthook-config

# bun
bun add -d @sebastienrousseau/lefthook-config
```

---

## Quick Start

### In `package.json`

```json
{
  "lefthook": "@sebastienrousseau/lefthook-config"
}
```

### In CommonJS Configuration

```js
module.exports = require("@sebastienrousseau/lefthook-config");
```

### In ES Module Configuration

```js
import config from "@sebastienrousseau/lefthook-config";
export default config;
```

---

## Ultra-Fast Git Hook Pipeline

Configures parallel pre-commit linting, formatting, and pre-push branch checking in `lefthook.yml`.

### Before (Unstandardized)

```javascript
// Heavy node-based hook execution
```

### After (@sebastienrousseau/lefthook-config Enforced)

```javascript
// lefthook.yml extending @sebastienrousseau/lefthook-config
extends:
  - "@sebastienrousseau/lefthook-config"
```

---

## Module Compatibility

This package exports dual module entrypoints via `package.json` `exports`:

```json
"exports": {
  ".": {
    "types": "./index.d.ts",
    "import": "./index.mjs",
    "require": "./index.cjs"
  }
}
```

Full TypeScript definitions (`index.d.ts`) are included for rich IDE autocomplete and inline JSDoc tooltips.

---

## Development & Testing

```bash
# Clone repository
git clone https://github.com/sebastienrousseau/lefthook-config.git
cd lefthook-config

# Run validation tests
npm test
```

---

## Security & Compliance

- **SLSA Level 3 Provenance**: Builds are cryptographically signed with keyless provenance via GitHub Actions.
- **Automated Security Audit**: Monitored continuously with CodeQL and Dependabot.
- **Commit Signatures**: All commits are SSH/GPG signed.
- See [SECURITY.md](SECURITY.md) for vulnerability reporting procedures.

---

## Author & License

Developed and maintained by **[Sebastien Rousseau](https://github.com/sebastienrousseau)**.

Released under the [ISC License](LICENSE).
