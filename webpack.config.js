var webpack = require('webpack');
 module.exports = {
                entry: [
                  'ui/app.jsx'
                ],
                externals: {
                  jquery: 'jQuery'
                },
                plugins: [
                  new webpack.ProvidePlugin({
                    '$': 'jquery',
                    'jQuery': 'jquery'
                  })
                ],
                output: {
                  path: __dirname,
                  filename: 'server/public/bundle.js'
                },
                resolve: {
                  root: __dirname,
                  alias: {
                    Main: 'ui/components/main.jsx',
                    About: 'ui/components/about.jsx',
                    HomePage: 'ui/components/homePage.jsx',
                    applicationStyles: 'ui/styles/app.scss'
                  },
                extensions: ["",".js",".jsx"]
              },
              module: {
                loaders: [
                  {
                    loader: 'babel-loader',
                    query: {
                      presets: ['react', 'es2015', 'stage-0']
                    },
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/
                  },
                  { test: /\.css$/, loader: "style-loader!css-loader!sass-loader" },
                  { test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url' },
                  { test: /\.json$/, loader: "json-loader" }
                ]
              },
            devtool: 'cheap-module-eval-source-map'
 };
