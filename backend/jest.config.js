// jest.config.js

module.exports = {
  testEnvironment: 'node',
  // setupFilesAfterEnv: ['./jest.setup.js'], // Comment this line if not needed
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
