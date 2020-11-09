import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Container, Content } from 'native-base';
import Splash from './Layouts/Splash';

// import Application from './src/Application';
// import allReducers from './src/reducers/index'

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// const store = createStore(allReducers);

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeRoute from './HomeRoute';
import SignIn from './Layouts/SignIn';
import Intro from './Layouts/Intro';
import RootStack from './RootStack';

export default class App extends Component{
  render(){
    return(
      <RootStack />
    );
  }
}