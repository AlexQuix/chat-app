const path = require("path");
const CssExtractPlugin = require("mini-css-extract-plugin");

const CssLoader = {
    test: /\.(s)?css/,
    use: [CssExtractPlugin.loader, "css-loader", "sass-loader"]
}

module.exports = {
    mode: "production",
    entry: {
        bundle: {
            import: path.join(process.cwd(), "src/index.tsx"),
            dependOn: "vendor"
        },
        vendor: ["react", "react-dom", "react-icons"]
    },
    output: {

        filename: "[name].[contenthash].js"
    },
    module: {
        rules: [CssLoader]
    },
    plugins: [
        new CssExtractPlugin({
            filename: "bundle.[contenthash].css"
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
}