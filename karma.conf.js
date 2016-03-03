module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            'tests.webpack.js'
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap']
        },
        reporters: ['dots'],
        singleRun: true,
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},

                    {   // This solves the React not defined error...
                        test: require.resolve("react"), loader: "expose?React"
                    }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        }
    });
};