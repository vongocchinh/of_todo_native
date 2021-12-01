import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              Home: 'one',
            },
          },
          Account:{
            screens:{
              Account:"account"
            }
          },
          Setting:{
            screens:{
              Setting:"setting"
            }
          }
        },
      },
      Modal: 'modal',
      NotFound: '*',
      Login:"Login",
      Social:"Social",
      Detail:"Detail"
    },
  },
};

export default linking;
