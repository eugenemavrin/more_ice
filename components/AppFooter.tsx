import React from 'react';
import { Button, View, Text } from 'react-native';

export interface Props {
  data: any
}

const AppFooter: any = (props: any) => {
  return (
    <View >
      <Button title="Press me" onPress={() => props.getData()} />
      {props.isFetching ? (
        <View>
          {props.data.map((name: any) => (
            <Text>{name.temperatureF}</Text>
          ))}
        </View>
      ) : (
          <Text>Fetching...</Text>
        )}

    </View>
  );
}

export default AppFooter;
