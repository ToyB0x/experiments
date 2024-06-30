const base = require('./library')
const { resolve } = require('node:path')

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...base,
  env: {
    browser: true,
  },
}
