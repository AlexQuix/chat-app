const path = require("path");
const {HotModuleReplacementPlugin} = require("webpack");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

const CssLoader = {
    test: /\.(s)?(a|c)ss/,
    use: ["style-loader", "css-loader", "sass-loader"]
}

module.exports = {
    mode: "development",
    target: "web",
    entry: path.join(process.cwd(), "src/index.tsx"),
    output: {   
        filename: "bundle.js"
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new ReactRefreshPlugin()
    ],
    module: {
        rules: [ CssLoader ]
    },
    devtool: "source-map",
    devServer: {
        static: [
            {
                directory: path.join(process.cwd(), "/dist")
            },
            {
                directory: path.join(process.cwd(), "/public")
            }
        ],
        port: 5000,
        open: true,
        compress: true
    }
}