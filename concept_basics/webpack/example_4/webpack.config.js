const path = require('path')

const HtmlwebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = 'development'

if (process.env.NODE_ENV === 'production') {
    mode = 'production'
} 

console.log(mode + ' mode');

module.exports = {
    mode: mode,
    entry: {
        filename: path.resolve(__dirname, 'src/index.js')
        // здесь указываем точку входа JS исходную (откуда берем информацию)
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // папка куда складываем собранный проект после webpack
        // filename: 'index.js',
        filename: '[name][contenthash].js',
        assetModuleFilename: 'assets/[name][ext][query]', // команда предназначенная для того чтобы сохранять изображения с оригинальным именем и расширением
        clean: true // для того чтобы старый hash файл удалялся - две строчки выше filename: '[name][contenthash].js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css' // для кэширования
        }),
        new HtmlwebpackPlugin({
        template: "./src/index.pug"
        // оф. сайт g-hub/jantimon/html-webpack-plugin - опция указывает откуда необходимо брать шаблон
        // и компилировать в папку dist
    })],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
}