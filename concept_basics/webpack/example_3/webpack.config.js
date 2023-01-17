const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // mode: "development"
    mode: "production",
    entry: {
        filename: path.resolve(__dirname, 'src/index.js')
        // здесь указываем точку входа JS исходную (откуда берем информацию)
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // папка куда складываем собранный проект после webpack
        // filename: 'index.js',
        filename: '[name][contenthash].js',
        assetModuleFilename: '[name][ext]', // команда предназначенная для того чтобы сохранять изображения с оригинальным именем и расширением
        clean: true // для того чтобы старый hash файл удалялся (строка 15)
    },
    performance: {
      hints: false, // отключаем подсказки (от изображений)
      maxAssetSize: 510000, // тысяч байт или 512 килобайт (максимальный размер для изображения)
      maxEntrypointSize: 512000 // если изображение будет превышать данный размер, то оно будет загружено после 
      // того как загрузиться остальная часть сайта = lazy loading
    },
    devServer: {
        port: 9000,
        compress: true, // файлы будут сжиматься при отображении их на локальном сервере
        hot: true, // если мы будем менять что-либо в папке dist, то в таком случае у нас будет автоматически перезагружаться web-server
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']               
            },
            {
                test: /\.(jpg|png|svg|jpeg|gif)/i, // буква i нужна для того чтобы нивелировать регитры РЕГИСТРЫ
                type: 'asset/resource'         
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'My Web Page',
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
}