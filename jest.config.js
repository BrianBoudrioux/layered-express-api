module.exports = {
    preset: "ts-jest",
    testEnvironment: 'node',
    testRegex: './src/.*\\.(test|spec)?\\.(js|ts)$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    roots: ['<rootDir>/src']
};