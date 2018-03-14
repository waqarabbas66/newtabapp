import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {TabNavigator} from 'react-navigation'
//import MainScreen from 'MainScreen'

class HomeScreen extends Component<> {
  render() {
    return (
     <View>
      <Text> home Screen </Text>
     </View>

    );
  }
}
class Notification extends Component<>{
    render() {
        return (
         <View>
          <Text> home Screen </Text>
         </View>
    
        )
      }
}
const TabNav = TabNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    Notification: {
        screen: Notification
    }
},{
      animationEnabled: true
})
export default TabNav;