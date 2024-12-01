import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Important for browser-like APIs
  setupFilesAfterEnv: ['./setupTests.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // To handle TypeScript files
  },
  moduleNameMapper: {
    '\\.(css|sass)$': 'identity-obj-proxy',
  },
}

export default config
