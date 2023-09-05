module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          api: './src/api',
          common: './src/common',
          components: './src/components',
          interfaces: './src/interfaces',
          navigation: './src/navigation',
          screens: './src/screens',
        },
      },
    ],
  ],
};
