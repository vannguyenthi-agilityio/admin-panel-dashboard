export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  moduleNameMapper: {
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@layouts/(.*)': '<rootDir>/src/layouts/$1',
    '^.+\\.svg$': 'jest-svg-transformer',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },


  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
