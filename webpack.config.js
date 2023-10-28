const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
        frases: './src/frases.js',
        favoritos: './src/favoritos.js',
    },
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
    }
};