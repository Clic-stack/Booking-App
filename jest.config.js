export default {
  testEnvironment: 'node',
  injectGlobals: true,
  transform: {
    '^.+\\.[tj]sx?$': ['@swc/jest'], // usa swc para JS/TS
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transformIgnorePatterns: [
    "/node_modules/(?!uuid|cloudinary)/" // obliga a transformar estos módulos
  ],
  setupFilesAfterEnv: ['./tests/setup.js']
}
