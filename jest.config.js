export default {
  testEnvironment: 'node',
  testTimeout: 30000, // 👈 Agregamos 30 segundos (NeonDB a veces tarda un poco en "despertar")
  injectGlobals: true,
  transform: {
    '^.+\\.[tj]sx?$': ['@swc/jest'], 
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transformIgnorePatterns: [
    "/node_modules/(?!uuid|cloudinary)/" 
  ],
  setupFilesAfterEnv: ['./tests/setup.js']
}
