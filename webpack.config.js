const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app/index.js',
	output: {
		path: './dist/public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					babelrc: true
				}
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css?modules&importLoaders=2', 'sass', 'bulma?theme=src/app/theme.sass']
			},
			{
				test: /\.png$/,
				loader: 'file'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/app/index.html',
			hash: false,
			filename: 'index.html',
			inject: 'body',
			minify: {
				collapseWhitespace: true
			}
		})
	]
};
