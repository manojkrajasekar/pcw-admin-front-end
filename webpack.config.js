const isDevelopment = process.env.NODE_ENV !== 'production';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin  = require('html-webpack-plugin');

let HtmlWebPackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: { minimize: !isDevelopment }
            },
            {
              test: /\.module\.s(a|c)ss$/,
              loader: [
                isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    sourceMap: isDevelopment
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: isDevelopment
                  }
                }
              ]
            },
            {
              test: /\.s(a|c)ss$/,
              exclude: /\.module.(s(a|c)ss)$/,
              loader: [
                isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: isDevelopment
                  }
                }
              ]
            }
        ]
    },
    resolve: {
        //modulesDirectories: ['node_modules'],
        alias: {},
        extensions: [ '.js', '.jsx', '.scss'],
    },
    mode: isDevelopment ? 'development' : 'production',
    output: {
        filename: isDevelopment ? '[name].js' : '[name].[hash].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        HtmlWebPackPluginConfig,
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
        })
    ]
}