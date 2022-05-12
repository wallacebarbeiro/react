module.exports = {
  testEnvironment: 'jsdom', // que tipo de ambiente vamos usar aqui no caso simula o browser//
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true, // cobrir tudo com jest
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js']
}
