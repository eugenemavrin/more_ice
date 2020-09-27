import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { Text } from './components/Themed';
import OrderItem from './orderitem/orderitem';

export default function App() {
  let list: {title: string, subtitle: string}[] = [
    { title: "Main1", subtitle: "subtitle1" },
    { title: "Main2", subtitle: "subtitle2" },
    { title: "Main3", subtitle: "subtitle3" },
    { title: "Main4", subtitle: "subtitle4" },
  ]
  

  return (list.map((element, key) => {
    return (
      <OrderItem  key={key} title={element.title} subtitle={element.subtitle}></OrderItem>)
    }
  ))
}
