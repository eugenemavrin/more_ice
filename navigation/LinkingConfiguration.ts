import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'ice1',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'ice2',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
