import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './Layouts/Splash';
import SignIn from './Layouts/SignIn';
import SignUp from './Layouts/SignUp';
import VerifikasiOTP from './Layouts/VerifikasiOTP';
import Home from './Layouts/Home';
import Payment from './Layouts/Payment';
import Profile from './Layouts/Profile';
import Promo from './Layouts/Promo';
import Notification from './Layouts/Notification';
import ScanQR from './Layouts/ScanQR';
import FindMerchant from './Layouts/FIndMerchant';
import LocationMerchant from './Layouts/LocationMerchant';
import errorFindMerchant from './Layouts/Components/ErrorFindMerchant';
import InputNominal from './Layouts/InputNominal';
import SecurityPage from './Layouts/SecurityPage';
import EditProfile from './Layouts/EditProfile';
import SuccessPayment from './Layouts/SuccessPayment';
import CustomerService from './Layouts/CustomerService';
import FAQ from './Layouts/FaqAccordions';
import TopUp from './Layouts/TopUp';
import NominalTopUp from './Layouts/NominalTopUp';
import PulseSS from './Layouts/Pulse';
import InputPulseSS from './Layouts/InputPulse';
  
  const Stack = createStackNavigator();
  
  export default function RootStack() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MySignUp">
          {/* <Stack.Screen name="TheSplash" 
                        component={Splash}
                        options={{ headerShown: false }}/>
          <Stack.Screen name="SignIn"
                        component={SignIn}
                        options={{ headerShown: false }}/>
          <Stack.Screen name="SignUp"
                        component={SignUp}
                        options={{ headerShown: true, headerTitleAlign: 'center', title: 'Sign Up' }} />            
          <Stack.Screen name="VerifikasiOTPScreen"
                        component={VerifikasiOTP}
                        options={{ headerShown: true, headerTitleAlign: 'center', title: 'Verify OTP', headerTransparent: true }}/> */}
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
                        options={{ headerShown: false, headerTitleAlign: 'center', title: 'Security PIN', headerTransparent: true, }} />
          <Stack.Screen name="SuccessPaymentScreen"
                        component={SuccessPayment}
                        options={{ headerShown: false, headerTitleAlign: 'center', title: 'Find Merchant', headerTransparent: true }}/>
          <Stack.Screen name="EditProfileScreen"
                        component={EditProfile}
                        options={{ headerShown: true, headerTitleAlign: 'center', title: 'Edit Profile', headerTransparent: false }}/>                        
          <Stack.Screen name="CustomerServiceScreen"
                        component={CustomerService}
                        options={{ headerShown: true, headerTitleAlign: 'center', title: 'Customer Service', headerTransparent: false }}/>
          <Stack.Screen name="FAQScreen"
                        component={FAQ}
                        options={{ headerShown: true, headerTitleAlign: 'center', title: 'FAQ', headerTransparent: true, headerTitleStyle: { color: '#ffffff' } }}/>
          <Stack.Screen name="TopUpScreen"
                        component={TopUp}
                        options={{ headerShown: true, headerTitleAlign: 'center', title: 'Top Up', headerTransparent: false }}/>  
          <Stack.Screen name="NominalTopUpScreen"
                        component={NominalTopUp}
                        options={{ headerShown: true, headerTitleAlign: 'center', title: 'Top Up', headerTransparent: false }}/>  
          <Stack.Screen name="PulseScreen"
                        component={PulseSS}
                        options={{ headerShown: true, headerTitleAlign: 'center', title: 'Telkomsel Pulse', headerTransparent: false }}/>
          <Stack.Screen name="InputPulseScreen"
                        component={InputPulseSS}
                        options={{ headerShown: true, headerTitleAlign: 'center', title: 'Telkomsel Pulse', headerTransparent: false }}/>                        
        </Stack.Navigator>
      </NavigationContainer>
    );
  }