const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
        about: './src/frases.js',
    },
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
    }
};