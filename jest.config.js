const { defaults: tsjPreset } = require("ts-jest/presets");

module.exports = {
  ...tsjPreset,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx$": "babel-jest",
    "^.+\\.tsx?$": ["ts-jest"],
    "\\.svg$": "<rootDir>/fileTransformer.js",
  },
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/fileTransformer.js",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", "svg"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};
