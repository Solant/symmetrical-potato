/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var env = process.env;
var production = env.NODE_ENV === 'production';

var host = 'localhost';
var port = 3000;

var webpackConfig = {
  context: path.join(__dirname, '/client'),
  devtool: production ? 'source-map' : 'inline-source-map',
  entry: {
    app: './js/app.js',
    vendors: [
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux',
      'redux-act',
    ],
  },
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: production ? '/' : `http://${host}:${port}/`,
    filename: 'js/[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loaders: ['babel?cacheDirectory=cache'],
      },
      {
        test: /\.(woff|woff2)(\?.*)?$/,
        loader: 'url?limit=10000' +
        '&mimetype=application/font-woff' +
        '&prefix=fonts&name=[name].[ext]',
      }, {
        test: /\.ttf(\?.*)?$/,
        loader: 'url?limit=10000' +
        '&mimetype=application/octet-stream' +
        '&prefix=fonts&name=[name].[ext]',
      }, {
        test: /\.eot(\?.*)?$/,
        loader: 'url?limit=10000' +
        '&mimetype=application/vnd.ms-fontobject' +
        '&prefix=fonts&name=[name].[ext]',
      }, {
        test: /\.svg(\?.*)?$/,
        loader: 'url?limit=10000' +
        '&mimetype=image/svg+xml&prefix=fonts' +
        '&name=[name].[ext]',
      },
      { test: /\.(png|jpg)$/, loader: 'file?name=[path][name].[ext]' },
      { test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery' },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.RW_IS_WEBPACK': true,
      'process.env': JSON.stringify(env),
    }),
    new ExtractTextPlugin({filename: '[name].css', disable: !production }),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'js/vendors.js'}),
    new HtmlWebpackPlugin({
      template: './app.html',
      filename: 'app.html',
      inject: true,
      excludeChunks: [],
    }),
  ],
};

if (production) {
  webpackConfig.plugins.splice(0, 0,
    new webpack.NormalModuleReplacementPlugin(
      /services\/debug\.js/,
      path.join(__dirname, '/client/js/services/debug.production.js')
    )
  );
} else {
  webpackConfig.plugins.splice(0, 0,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );

  webpackConfig.entry = [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    'react-hot-loader/patch'
  ];
}

module.exports = webpackConfig;
/* eslint-enable */
