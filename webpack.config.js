//const webpack = require("webpack");

module.exports = {
    entry: './main.js',
    output: { path: "build", filename: "bundle.js" },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}