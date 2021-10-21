module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/nasa-photo-library/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'views': '@/views',
      }
    },
    externals: {
      "BMap": "BMap"
    },
  },

}

