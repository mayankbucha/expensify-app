const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if(process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: __dirname+'/.env.test'});
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: __dirname+'/.env.development'});
}


module.exports = (env) =>{
    const isProduction = env.production; 
    
    return {
        mode: env.production ? "production" : "development",
        entry: ['babel-polyfill', "./src/app.js"],
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
            new MiniCssExtractPlugin(),
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSENGER_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSENGER_SENDER_ID),
                'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            })
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

