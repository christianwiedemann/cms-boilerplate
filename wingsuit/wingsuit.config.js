const namespaces = require('./source/default/namespaces');

module.exports = {
  presets: ['@wingsuit-designsystem/preset-tailwind2', '@wingsuit-designsystem/preset-postcss8'],
  apps: {
    cms: {
      cssMode: 'extract',
      distFolder: '../craft/cms/dist',
      assetAtomicFolder: '../templates',
    },
  },
  designSystems: {
    default: {
      namespaces,
    },
  },
};
