module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'view': '@/view'
      }
    }
  },
  /* devServer: {
    overlay: {
        warnings: false,
        errors: false
    },
    lintOnSave: false
  }, */
}
