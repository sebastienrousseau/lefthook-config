# `@sebastienrousseau/lefthook-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/lefthook-config`.

---

## Description
Shareable Lefthook Git hooks configuration running parallel fast pre-commit checks.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/lefthook-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. Parallel Execution
- **Description**: Runs pre-commit checks concurrently for minimal latency
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. File Pattern Filtering
- **Description**: Targeted globbing for JS, TS, and config files
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. Pre-Commit Lint Gate
- **Description**: Automated test and lint verification before commits
- **Scope**: Production & Development
- **Status**: Stable & Active

### 4. Staged Changes Scope
- **Description**: Executes exclusively on staged files
- **Scope**: Production & Development
- **Status**: Stable & Active

