module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts/Roboto/'],
  dependencies: {
    'react-native-svg': {
      platforms: {
        ios: null,
      },
    },
    'react-native-screens': {
      platforms: {
        android: {
          sourceDir: '../node_modules/react-native-screens/android',
        },
      },
    },
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
};
