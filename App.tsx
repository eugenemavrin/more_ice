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
import { View, StyleSheet } from 'react-native';
import { BottomNavigation, Text, List, Button, DefaultTheme } from 'react-native-paper';

const MusicRoute = () => <AppFooterContainer />;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Вишлисты', icon: 'format-list-checks' },
    { key: 'albums', title: 'Заказы', icon: 'tortoise' },
    { key: 'recents', title: 'Личный кабинеи', icon: 'account-box' },

   /*  { key: 'Вишлисты', title: 'Music', icon: 'format-list-checks' },
    { key: 'Заказы', title: 'Albums', icon: 'tortoise' },
    { key: 'Личный кабинет', title: 'Recents', icon: 'account-box' }, */
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <Provider store={store}>
    <View>
  {/*     <AppFooterContainer />
      <List.Section>
    <List.Subheader>Some title</List.Subheader>
    <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
    <List.Item
      title="Second Item"
      left={() => <List.Icon color="#000" icon="folder" />}
    />
  </List.Section>
 */}
  

    </View>



    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    width: '100%',
    backgroundColor: 'green',
  },
  mainMenuAnchor: {
   // display:"flex",
   position: "absolute",
   bottom: "10%",
   left: "60%",

 
  },
  menuWrapper: {
    alignSelf: 'flex-end',
    margin: 8,
  }
});

export default App;
/* const App = () => (
  <Provider store={store}>
    <View>
      <AppFooterContainer />
      <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    </View>
  </Provider>
)

export default App; */