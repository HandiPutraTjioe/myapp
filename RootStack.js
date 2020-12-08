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
import LocationMerchant from './Layouts/LocationMerchant';
import errorFindMerchant from './Layouts/Components/ErrorFindMerchant';
import InputNominal from './Layouts/InputNominal';

// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
  
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
          <Stack.Screen name="TheHome"
                        component={Home}
                        options={{ headerShown: false }}/>
          <Stack.Screen name="Payment"
                        component={Payment}
                        options={{ headerShown: true, headerTitleAlign: 'center', headerTransparent: true }}/>
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
          <Stack.Screen name="LocationMerchantScreen"
                        component={LocationMerchant}
                        options={{ headerShown: true, headerTitleAlign: 'center', title: 'Find Merchant' }}/>
          <Stack.Screen name="ErrorFindMerchantScreen"
                        component={errorFindMerchant}
                        options={{ headerShown: false, headerTitleAlign: 'center', title: 'Find Merchant' }}/>
          <Stack.Screen name="InputNominalScreen"
                        component={InputNominal}
                        options={{ headerShown: true, headerTitleAlign: 'center', title: 'Find Merchant', headerTransparent: true }}/>
          <Stack.Screen name="SecurityPINScreen"
                        component={SecurityPage}
                        options={{ headerShown: true, headerTitleAlign: 'center', title: 'Security PIN', headerTransparent: true }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }