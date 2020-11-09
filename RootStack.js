import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './Layouts/Splash';
import Intro from './Layouts/Intro';
import SignIn from './Layouts/SignIn';
import SignUp from './Layouts/SignUp';
import Home from './Layouts/Home';
import VerifikasiOTP from './Layouts/VerifikasiOTP';
import MenuHome from './Layouts/Components/MenuHome';
  
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
          {/* <Stack.Screen name="SignIn"
                        component={SignIn}
                        options={{ headerShown: false }}/> */}
          {/* <Stack.Screen name="SignUp"
                        component={SignUp}
                        options={{ headerShown: true }} />            
          <Stack.Screen name="VerifikasiOTP"
                        component={VerifikasiOTP}
                        options={{ title: "Verifikasi OTP" }}/> */}
          <Stack.Screen name="TheHome"
                        component={Home}
                        options={{ headerShown: false }}/>
          <Stack.Screen name="HomeScreen"
                        component={MenuHome}
                        options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }