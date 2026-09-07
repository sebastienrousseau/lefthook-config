/**
 * Advanced Lefthook custom hook definition
 */
const baseTemplate = require("../index.cjs");
const extended = baseTemplate + "    format:\n      run: npm run format\n";
console.log("Extended hook template with formatting stage.");
