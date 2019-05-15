import webpack from "webpack";
import path from "path";
// const {GenerateSW} = require('workbox-webpack-plugin');


export default {
  module: {
    loaders: [
      {
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?name=/[hash].[ext]"
      },
      {
        loader: "babel-loader",
        test: /\.js?$/,
        exclude: /node_modules/,
        query: {cacheDirectory: true}
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      "fetch": "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
    })
  //   new GenerateSW({
  //     swDest: 'sw.js',
  //     include: [/\.css$/, /\.js$/],
  //     skipWaiting: true,
  //     clientsClaim: true,

  //       runtimeCaching: [
  //           {
  //               urlPattern: /(?:\/)$/,
  //               handler: "staleWhileRevalidate",
  //               options: {
  //                   cacheName: "html",
  //                   expiration: {
  //                       maxAgeSeconds: 60 * 60 * 24 * 7,
  //                   },
  //               },
  //           },
  //           {
  //               urlPattern: /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
  //               handler: "cacheFirst",
  //               options: {
  //                   cacheName: "images",
  //                   expiration: {
  //                       maxEntries: 1000,
  //                       maxAgeSeconds: 60 * 60 * 24 * 365,
  //                   },
  //               },
  //           },
  //           {
  //               urlPattern: /\.(?:mp3|wav|m4a)$/,
  //               handler: "cacheFirst",
  //               options: {
  //                   cacheName: "audio",
  //                   expiration: {
  //                       maxEntries: 1000,
  //                       maxAgeSeconds: 60 * 60 * 24 * 365,
  //                   },
  //               },
  //           },
  //           {
  //               urlPattern: /\.(?:m4v|mpg|avi)$/,
  //               handler: "cacheFirst",
  //               options: {
  //                   cacheName: "videos",
  //                   expiration: {
  //                       maxEntries: 1000,
  //                       maxAgeSeconds: 60 * 60 * 24 * 365,
  //                   },
  //               },
  //           },
  //           {
  //               urlPattern: /\.(?:woff|woff2)$/,
  //               handler: "cacheFirst",
  //               options: {
  //                   cacheName: "fonts",
  //                   expiration: {
  //                       maxEntries: 1000,
  //                       maxAgeSeconds: 60 * 60 * 24 * 365,
  //                   },
  //               },
  //           }

  //       ],

  //   })
  ],

  context: path.join(__dirname, "src"),
  entry: {
    app: ["./js/app"],
    cms: ["./js/cms"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js"
  },
  externals:  [/^vendor\/.+\.js$/]
};
