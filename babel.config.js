module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: 'src',
            rootPathPrefix: '~',
          },
        ],
      },
    ],
  ],
};
