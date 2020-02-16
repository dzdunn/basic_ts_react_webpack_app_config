const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
    mode: "development",
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: path.resolve(__dirname, 'build'),
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js"
    },
    module: {
        rules: [{
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: "ts-loader",
                    options: {
                        compilerOptions: {
                            noEmit: false
                        }
                    }
                }],
            }, {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // }
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            }
        ]
    },
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    devServer: {
        contentBase: '../public',
        compress: true,
        hot: true,
        port: 3000,
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: '../public/index.html',
            // filename: "../public/index.html"
        })
    ]
}