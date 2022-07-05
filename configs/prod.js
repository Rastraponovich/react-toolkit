const paths = require("./paths")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const stylesHandler = MiniCssExtractPlugin.loader
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "production",
    target: "browserslist",
    entry: {
        index: {
            import: `${paths.src}/index.tsx`,
        },
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                    },
                ],
            },
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    stylesHandler,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            modules: false,
                        },
                    },
                    { loader: "postcss-loader", options: { sourceMap: true } },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg|eot|ttf|woff2?)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/[hash][ext][query]",
                },
            },
        ],
    },
    devtool: false,
    output: {
        filename: "js/[name].[contenthash].bundle.js",
        publicPath: "./",
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
            chunkFilename: "[id].css",
        }),
        new HtmlWebpackPlugin({
            template: `${paths.public}/index.html`,
            filename: "index.html",
        }),
    ],

    optimization: {
        runtimeChunk: "single",
    },
    performance: {
        hints: "warning",
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
}
