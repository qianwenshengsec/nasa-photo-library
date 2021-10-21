module.exports = {

  configureWebpack: {
    publicPath: process.env.NODE_ENV === 'development' ? '/nasa-photo-library/' : '/',
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

