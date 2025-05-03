
//añadimos transformIgnorePatterns:[] para que jest no cargue modulos de firebase en el test y evitamos  errores
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns:[],
    forceExit: true,
    detectOpenHandles: true,
}