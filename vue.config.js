module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8000',
          // 允许跨域
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': '/'
          }
        }
      }
    }
  },

}


