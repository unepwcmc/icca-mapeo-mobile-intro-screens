module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@unep-wcmc/icca-mapeo-mobile-intro-screens': '../src/index',
          'react-native-vector-icons': '@expo/vector-icons',
        },
      },
    ],
  ],
}
