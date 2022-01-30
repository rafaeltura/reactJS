const path = require('path');
const HtmlWebPackagePlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'transpiled', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle[hash].js' //hash serve para forçar o navegador a utilizar o arquivo, pois, se não tivesse o hash ele pegaria do cache e, possivelmente, numa versão defasada
    },
    plugins: [
        new HtmlWebPackagePlugin(
            {
                template: path.resolve(__dirname, 'public', 'index.html')
            }
        ),
        new CleanWebpackPlugin()
    ]
};