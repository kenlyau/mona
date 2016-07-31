var path = require("path"),
    webpack = require("webpack"),
    min = process.argv.indexOf("--min") !== -1,
    plugins = [];

//if (min) {
//    plugins.push(new webpack.optimize.UglifyJsPlugin());
//}

module.exports = {
    entry: {
        app: ["./src/app.js"]
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
}
