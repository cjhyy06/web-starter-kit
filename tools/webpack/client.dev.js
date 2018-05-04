import webpack from 'webpack'
import config from '../config'
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  context: config.dev.webpackContextPath,
  target: 'web',
  entry: {
    app: ['./client.js', 'webpack-hot-middleware/client?noInfo=true&reload=true']
  },
  devtool: 'inline-source-map',
  resolveLoader: {
    modules: ['node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    unsafeCache: true,
    symlinks: false
  },
  module: {
    noParse: function (content) {
      return /lodash/.test(content)
    },
    rules: [
      {
        test: /\.js$/i,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: './.cache/babel-loader',
              compact: false
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: './.cache/babel-loader'
          }
        }, {
          loader: 'vue-loader'
        }]
      },
      {
        test: /\.scss$/i,
        use: [
          {
            loader: 'vue-style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './tools/postcss.config.js'
              },
              sourceMap: 'inline'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'vue-style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './tools/postcss.config.js'
              },
              sourceMap: 'inline'
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'vue-style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './tools/postcss.config.js'
              },
              sourceMap: 'inline'
            }
          }
        ]
      },
      {
        test: /\.(ico|gif|png|jpg|jpeg|webp|pdf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|ttf|eot|svg)(\?[\s\S])?$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  }
}
