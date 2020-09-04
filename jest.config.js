const { resolve } = require('path');
const root = resolve(__dirname);
module.exports = {
    rootdir: root,
    displayName: 'root-tests',
    testMatch: ['<rootdir>/src/**/*.test.js'],
    testEviroment: 'node',
    clearMocks: true,
    preset: 'ts-jest',
    moduleNameMapper: {
        '@src/(.*)': '<rootdir>/src/$1',
        '@test/(.*)': '<rootdir>/test/$1',
    },
};        