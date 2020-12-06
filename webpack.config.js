const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./src/index.ts',
    './src/scss/menu.scss',
    './src/scss/settings.scss',
    './src/scss/background-image.scss',
    './src/scss/background-circles.scss',
    './src/scss/background-squares.scss',
  ],
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3010,
    writeToDisk: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {outputPath: 'css/', name: '[name].css'}
          },
          'sass-loader'
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {from: 'src/index.html', to: '../dist/index.html'},
        {from: 'src/images', to: '../dist/images'},
        {
          from: 'node_modules/@fortawesome/fontawesome-free/js/all.min.js',
          to: '../dist/vendor/fontawesome/all.min.js'
        },
      ],
    }),
  ],
};
