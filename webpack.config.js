const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
	mode:'development',
	watch: false,
	watchOptions: {
		ignored: /node_modules/,
		poll: 1000 // Check for changes every second
	},
	entry: [
	'./src/index.js'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
		{
			test: /\.vue$/,
			loader: 'vue-loader'
		},
		{
			test: /\.js$/,
			loader: 'babel-loader'
		},
		{
			test: /\.css$/,
			use: ['vue-style-loader','css-loader']
		}

		]
	},
	plugins: [
		new VueLoaderPlugin()
    ],
    resolve: {
    	alias: {
    		vue: 'vue/dist/vue.js'
    	}
    },
    devServer: {
    	contentBase: path.join(__dirname, 'dist'),
    	compress: true,
    	port: 9000
  }
};