const { injectBabelPlugin, compose } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const rewireReactHotLoader = require('react-app-rewire-hot-loader')

module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env);
  config = injectBabelPlugin([
    'import', {
      libraryName: 'antd',
      style: true
    }
  ], config);
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      // "@primary-color": "#1DA57A"
    }
  })(config, env);
  return config;
};
