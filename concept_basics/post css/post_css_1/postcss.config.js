module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-preset-env')({
            stage: 1,
        }),
        require('precss'),
        require('postcss-import'),
        require('cssnano')({
            preset: 'default'
        }),
        require('postcss-assets')({
            loadPaths: ['dist/img']
        }),
    ]
};