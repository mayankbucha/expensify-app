const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) =>{
    const isProduction = env.production; 
    
    return {
        mode: env.production ? "production" : "development",
        entry: "./src/app.js",
        output: {
            // output path takes absolute path                          
            // __dirname: returns absolute path to project folder
            // path.join(): joining absolute path with local path
            path: path.join(__dirname, "public", "dist"),
            filename: "bundle.js"
        },
    
        // loader
        module: {
            rules: [{
                // rule for babel
                loader: 'babel-loader',
                // what files do we want to run loader on (only js)
                test: /\.js$/,
                // lets us exclude given set of files
                exclude: /node_modules/
            }, {
                // rule for styles
                // support css and scss
                test: /\.s?css$/,
                // use provides us with array of loaders
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                    }
                }],
            }]
        },

        plugins: [
            new MiniCssExtractPlugin()
        ],
    
        // source map to map development code to vscode
        devtool: isProduction ? "source-map" : "inline-source-map",
        
        // webpack devServer
        devServer: {
            // absolute path to public dir
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }  
}

