module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@components': './components',
            '@assets': './assets',
            '@store': './store',
            '@utils': './utils',
          },
        },
      ],
    ],
  };
};
