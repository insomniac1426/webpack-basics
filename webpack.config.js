var path = require('path');
var uglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var extractTextPlugin = require('extract-text-webpack-plugin'); 
// var extractText = new extractTextPlugin({
//     filename:"style.css"
// })

/* 
    we use __dirname, 'dist' for output as absolute pathname required for this property.
    path and filename :enough for webpack to understand the output,
    publicPath : required by webpack-dev-server to identify the folder that is public i.e. can be served to public.
*/
module.exports = {
    entry : './src/js/app.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js',
        // publicPath : '/dist'
    },
    module : {
        rules : [
            {
                test:/\.js$/,
                use : [{
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }]
            },                   
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
                // use : extractText.extract({
                //     use:['css-loader']
                // })
            },
            {
                test:/\.html$/,
                use:['html-loader']
            },
            {
                test:/\.(jpg|png)$/,
                use:[{
                    loader:'file-loader',
                    options: {
                        name:'[name].[ext]',
                        outputPath: 'img/',
                        publicPath: 'img/'
                    }
                }]
            }
        ]
    },
    plugins : [
        new uglifyWebpackPlugin(),
        // extractText
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}