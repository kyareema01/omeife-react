const path = require('path');

module.exports = {
  mode: 'development', // Development mode
  entry: './src/index.js', // Entry point for your application
  output: {
    filename: 'bundle.js', // Output filename for the bundled code
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src'), // Serve content from the src directory (including images)
    },
    port: 8080, // Development server port (default: 8080)
  },
};
