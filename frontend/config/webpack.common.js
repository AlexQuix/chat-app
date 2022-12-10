require("dotenv").config();
const path = require("path");
const {merge} = require("webpack-merge")
const HtmlPlugin = require("html-webpack-plugin");
const ProdConfig = require("./webpack.prod");
const DevConfig = require("./webpack.dev");

const JsLoader = {
    test: /\.(t|j)s(x)?/,
    use: "babel-loader"
}

module.exports = merge(
    {
        output: {   
            path: path.join(process.cwd(), "/dist"),
            filename: "bundle.[contenthash].js",
            clean: true
        },
        module: {
            rules: [ JsLoader ]
        },
        plugins: [
            new HtmlPlugin({
                template: "./src/index.html",
                filename: "index.html"
            }),
        ],
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
    },
    (process.env.MODE === "dev")? DevConfig : ProdConfig
)