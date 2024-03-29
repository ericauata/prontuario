const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
   entry: "./src/index.js",
   output: {
      path: path.join(__dirname, "../public"),
      filename: "index.js",
      publicPath: "/"
   },
   plugins: [
      new HTMLWebpackPlugin({
         template: "./src/index.html"
      }),
      new BundleAnalyzerPlugin()
   ],
   module: {
      rules: [
         {
            test: /.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ["@babel/preset-env", "@babel/preset-react"]
               }
            }
         },
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
         }
      ]
   },
   target: "web",
   devServer: {
      port: "3000",
      hot: true,
      liveReload: true,
      proxy: {
         '/api/*': {
            target: "http://localhost:8080",
            router: () => "http://localhost:5000"
         }
      },
      historyApiFallback: true
   },
   devtool: "inline-source-map"
}