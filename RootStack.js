import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './Layouts/Splash';
import Intro from './Layouts/Intro';
import SignIn from './Layouts/SignIn';
import SignUp from './Layouts/SignUp';
import Home from './Layouts/Home';
import VerifikasiOTP from './Layouts/VerifikasiOTP';
import SecurityPage from './Layouts/SecurityPage';
import Payment from './Layouts/Payment';
import Profile from './Layouts/Profile';
import Promo from './Layouts/Promo';
import Notification from './Layouts/Notification';
import ScanQR from './Layouts/ScanQR';
import FindMerchant from './Layouts/FIndMerchant';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
  
  const Stack = createStackNavigator();
  
  export default function RootStack() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MySignUp">
          {/* <Stack.Screen name="TheSplash" 
                        component={Splash}
                        options={{ headerShown: false }}/> */}
          {/* <Stack.Screen name="Intro"
                        component={Intro}
                        options={{ headerShown: false }}/> */}
          {/* <Stack.Screen name="SignIn"
                        component={SignIn}
                        options={{ headerShown: false }}/>
          <Stack.Screen name="SignUp"
                        component={SignUp}
                        options={{ headerShown: true, headerTitleAlign: 'center', title: 'Sign Up' }} />             */}
          {/* <Stack.Screen name="VerifikasiOTP"
                        component={VerifikasiOTP}
                        options={{ title: "Verifikasi OTP" }}/> */}
          {/* <Stack.Screen name="SecurityPIN"
                        component={SecurityPage}
                        options={{ headerShown: true, headerTitleAlign: 'center', title: 'Security PIN' }}/> */}
          <Stack.Screen name="TheHome"
                        component={Home}
                        options={{ headerShown: false }}/>
          <Stack.Screen name="Payment"
                        component={Payment}
                        options={{ headerShown: true, headerTitleAlign: 'center' }}/>
          <Stack.Screen name="ProfileScreen"
                        component={Profile}
                        options={{ headerShown: false }}/>
          <Stack.Screen name="PromoScreen"
                        component={Promo}
                        options={{ headerShown: true, headerTitleAlign: 'center', title: 'Promo & Cashback' }}/>
          <Stack.Screen name="NotificationScreen"
                        component={Notification}
                        options={{ headerShown: true, headerTitleAlign: 'center', title: 'Notifications' }}/>
          <Stack.Screen name="ScanQRScreen"
                        component={ScanQR}
                        options={{ headerShown: false, headerTitleAlign: 'center', title: ' ' }}/>
          <Stack.Screen name="FindMerchantScreen"
                        component={FindMerchant}
                        options={{ headerShown: true, headerTitleAlign: 'center', title: 'Find Merchant' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }