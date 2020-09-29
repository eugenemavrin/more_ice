import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import AppFooterContainer from './containres/AppFooterContainer';
import store from './store/store'
import { View } from 'react-native';


const App = () => (
  <Provider store={store}>
    <View>
      <AppFooterContainer />
    </View>
  </Provider>
)

export default App;