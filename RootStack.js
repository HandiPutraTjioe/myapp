import React, { Component } from 'react';

import Application from './src/Application';
import allReducers from './src/reducers/index'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
const store = createStore(allReducers);

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './Layouts/Splash';
import Intro from './Layouts/Intro';
import SignIn from './Layouts/SignIn';
import Applications from './src/Application';
import SignUp from './Layouts/SignUp';
import Home from './Layouts/Home';
import HomeRoute from './HomeRoute';
import VerifikasiOTP from './Layouts/VerifikasiOTP';
  
  const Stack = createStackNavigator();
  
  export default function RootStack() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MySignUp">
          {/* <Stack.Screen name="TheSplash" 
                        component={Splash}
                        options={{ headerShown: false }}/>
          <Stack.Screen name="Intro"
                        component={Intro}
                        options={{ headerShown: false }}/> */}
          <Stack.Screen name="SignIn"
                        component={SignIn}
                        options={{ headerShown: false }}/>
          <Stack.Screen name="SignUp"
                        component={Applications}
                        options={{ headerShown: true }} />            
          <Stack.Screen name="VerifikasiOTP"
                        component={VerifikasiOTP}
                        options={{ title: "Verifikasi OTP" }}/>
          <Stack.Screen name="TheHome"
                        component={Home}
                        options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }