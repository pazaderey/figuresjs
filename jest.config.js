/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  roots: ["./tests"],
  testMatch: [
    "**/tests/**/*.+(ts)",
    "**/?(*.)+(test).+(ts)"
  ],
  transform: {
    "^.+\\.(ts)$": "ts-jest"
  },
  testEnvironment: "node",
};