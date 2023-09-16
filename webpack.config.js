const path = require("path");
const postCSSPlugins = [
    require("postcss-import"),
    require("postcss-mixins"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("autoprefixer")];
module.exports = {
    entry: "./app/assets/script/App.js",
    output: {
        filename: "bundled.js",
        path: path.resolve(__dirname, "app")
    },
    devServer: {
        watchFiles: {
            paths: ['./app/**/*.html'], // Add other file patterns as needed
        },
        static: {
            directory: path.resolve(__dirname, 'app'),
        },
        hot: true,
        port: 3000,
        host: "0.0.0.0"
    },
    mode: 'development',
    module: {
        rules: [
            // ...other rules...

            // Rule for CSS files
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: { plugins: postCSSPlugins },
                        },
                    },
                ],
            },

            // // Rule for image files
            // {
            //     test: /\.(jpg|jpeg|png|gif|svg)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[ext]',
            //                 outputPath: 'assets/images/', // Specify the output path for images
            //             },
            //         },
            //     ],
            // },
        ],
    },


};