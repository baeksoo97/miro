const path = require('path')

// Check typescript files
const buildTypeScriptCommand = () => `tsc --noEmit`

// Check eslint
const buildEslintCommand = (filenames) =>
  `next lint --ignore-path .gitignore --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

// Check prettier and fix
const buildPrettierCommand = (filenames) =>
  `prettier --write --ignore-path .gitignore ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`

module.exports = {
  '*.{ts,tsx}': [buildTypeScriptCommand],
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
}
