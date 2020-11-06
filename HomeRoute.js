import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Home from './Layouts/Home';

class HomeScreen extends React.Component {
  render(){
    return (
      <View style={ styles.container }>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

class PaymentScreen extends React.Component {
  render(){
    return (
      <View style={ styles.container }>
        <Text>Payment Screen</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render(){
    return (
      <View style={ styles.container }>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  }
});

const TabNavigator = createMaterialBottomTabNavigator(
{
  Home: {
    screen: HomeScreen, 
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
        </View>
      ),
    }
  },
  Payment: {
    screen: PaymentScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{color: tintColor}]} size={25} name={'ios-cash'} />
        </View>
      ),
      activeColor: '#ffffff',
      inactiveColor: '#92c5c2',
      barStyle: { backgroundColor: '#2163f6' },
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
        </View>
      ),
      activeColor: '#ffffff',
      inactiveColor: '#92c5c2',
      barStyle: { backgroundColor: '#2163f6' },
    }
  },
},
{
  initialRouteName: 'Home',
  activeColor: '#ffffff',
  inactiveColor: '#92c5c2',
  barStyle: { backgroundColor: '#2163f6' },
}
);

export default createAppContainer(TabNavigator);