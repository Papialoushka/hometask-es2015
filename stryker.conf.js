module.exports = function(config) {
  config.set({
    mutate: ['app.js',],
    testRunner: 'mocha',
    transpilers: [],
    reporter: ['clear-text', 'progress'],
    testFramework: '',
    coverageAnalysis: 'all',
    testSelector: null,
    plugins: ['stryker-mocha-runner']
  });
};