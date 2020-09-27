import * as React from 'react';
import { Text, View } from '../components/Themed';
import { Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class OrderItem extends React.Component<any> {
    render() {
      return (
        <TouchableHighlight onPress={()=>{Alert.alert(this.props.title, this.props.subtitle)}} >
            <View style={{ alignItems: 'center' }} accessible={true} >
                <Text>{this.props.title}</Text>
                <Text>{this.props.subtitle}</Text>
            </View>
        </TouchableHighlight>
        );
    }
}