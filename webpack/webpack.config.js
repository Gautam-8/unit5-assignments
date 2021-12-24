const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname , "build"),
        filename:"bundle.js"
    },
    mode:"development",
    module: {
        rules : [
            {
                test:/\.css$/,
                use: ["style-Loader" , "css-Loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [ {loader: 'file-loader' }, ],
            },
            {
                test:/\.js$/,
                use: ["babel-loader"],
            },
                ],
    
            },

}