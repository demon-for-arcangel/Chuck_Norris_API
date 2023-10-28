const path = require('path');

module.exports = {
    entry: {
        main: './src/index.main.js',
        about: './src/frases.main.js',
    },
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
    }
};