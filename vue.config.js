module.exports = {
  devServer: {
    disableHostCheck: true
  },
  lintOnSave: false,
  transpileDependencies: [
    'vuetify'
  ],
  // Adds the prefix /turd only when the application is built.
  publicPath: process.env.NODE_ENV === 'production'
  ? '/kings-bakery/'
  : '/',
}
