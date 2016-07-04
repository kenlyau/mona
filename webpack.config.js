var path = require("path");

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
    }
}
