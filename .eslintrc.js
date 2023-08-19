/* eslint-env node */
module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        "@typescript-eslint",
        "eslint-plugin-import",
        "eslint-plugin-jest",
        "eslint-plugin-n",
    ],
    root: true,
    rules: {
        "@typescript-eslint/no-empty-function": "off"
    }
}
