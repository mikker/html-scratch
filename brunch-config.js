module.exports = {
  files: {
    javascripts: { joinTo: 'app.js' },
    stylesheets: { joinTo: 'app.css' }
  },

  paths: {
    watched: ['src'],
    public: 'public'
  },

  plugins: {
    babel: { presets: ['es2015'] },
    postcss: {
      processors: [
        require('postcss-import')({ path: 'src/css' }),
        require('postcss-cssnext')({})
      ]
    }
  },

  modules: {
    autoRequire: {
      'app.js': ['src/js/app']
    }
  },

  npm: { enabled: true }
}
