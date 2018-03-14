import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';




export default class LoginScreen extends Component<> {
  render() {
    return (
     <View>
         <Text>Login Screen</Text>
     <Button onPress = {() => 
    this.props.navigation.navigate('HomeScreen')} title="Go To Home Screen"/> 
</View>
    );
  }
}