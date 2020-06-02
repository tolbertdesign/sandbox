const path = require('path')

module.exports = {
  alias: {
    '/@/': path.resolve(__dirname, './src'),
  },
  jsx: 'preact',
  minify: false,
  serviceWorker: !!process.env.USE_SW,
  proxy: {
    // string shorthand
    '/foo': 'http://localhost:4567/foo',
    // with options
    '/api': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, ''),
    },
  },
}
