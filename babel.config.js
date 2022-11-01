module.exports = {
  plugins: [
    [
      'formatjs',
      {
        idInterpolationPattern: '[sha512:contenthash:base64:6]',
        ast: true,
      },
    ],
  ],

  presets: ['module:metro-react-native-babel-preset'],
}
