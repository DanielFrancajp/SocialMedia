module.exports = {
  project: {
    dependencies: {
      'react-native-vector-icons': {
        platforms: {
          ios: {
            automaticPodsInstallation: true
          },
        },

        android: {},
      },
      assets: ['./src/assets/fonts']
    }
  }
}