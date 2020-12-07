import React, { Component, useEffect } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import { TouchableOpacity } from 'react-native-gesture-handler';

import qrcode from '../assets/qr-icon.png';

// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// import THome from './Home';

// function Home() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <THome />
//         </View>
//     );
// }
  
// function Profile() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <THome />
//       </View>
//     );
// }
  
// function Payment() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Payment!</Text>
//       </View>
//     );
// }
  
// const Tab = createMaterialBottomTabNavigator();
  
//     function MyTabs() {
//         return (
//         <Tab.Navigator
//             initialRouteName="Home"
//             activeColor="#e91e63"
//             labelStyle={{ fontSize: 12 }}
//             style={{ backgroundColor: 'tomato' }} >

//             <Tab.Screen
//             name="Home"
//             component={Feed}
//             options={{
//                 tabBarLabel: 'Home',
//                 tabBarIcon: ({ color }) => (
//                 <MaterialCommunityIcons name="home" color={color} size={26} />
//                 ),
//             }}
//             />

//             <Tab.Screen
//             name="Home"
//             component={Notifications}
//             options={{
//                 tabBarLabel: 'Updates',
//                 tabBarIcon: ({ color }) => (
//                 <MaterialCommunityIcons name="bell" color={color} size={26} />
//                 ),
//             }}
//             />

//             <Tab.Screen
//             name="Profile"
//             component={Profile}
//             options={{
//                 tabBarLabel: 'Profile',
//                 tabBarIcon: ({ color }) => (
//                 <MaterialCommunityIcons name="account" color={color} size={26} />
//                 ),
//             }}
//             />
//         </Tab.Navigator>
//         );
//     }
  
//   export default class Footers extends Component{
//     render(){
//         return (
//             <NavigationContainer>
//                 <MyTabs />
//             </NavigationContainer>
//         );
//     }
//   }

export default class TabFooters extends Component{  
    useEffect = () => {
        async () => await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        })
    }
    render(){
        const Footers = () => {
            const navigation = useNavigation()            
            return(
                <Footer>
                    <FooterTab style={{ backgroundColor: '#ffffff' }}>
                        <Button vertical onPress={() => navigation.navigate("TheHome")}>
                            <View>
                                <Icon active name="ios-home" style={{ color: '#4746FF'}} />
                            </View>
                            <View>
                                <Text style={{ fontWeight: '200', color: '#4746FF' }}>Home</Text>
                            </View>
                        </Button>                        
                        
                        <Button vertical>
                            <TouchableOpacity 
                                activeOpacity={0.5}
                                onPress={() => navigation.navigate("Payment")}>
                                <View style={ styles.circle }>
                                    <Image source={qrcode} style={{ width: 26, height: 26, marginBottom: 2}}/>
                                    {/* <Icon active source={qrcode} name={qrcode} style={{ color: 'white', width: 20, height: 20 }} /> */}
                                </View>
                                <View style={ styles.stylePay}>
                                    <Text style={{ fontWeight: '200', marginBottom: 13, color: '#4746FF' }}>Pay</Text>
                                </View>
                            </TouchableOpacity>
                        </Button>
                        
                        <Button vertical onPress={() => navigation.navigate("ProfileScreen")}>
                            <View>
                                <Icon active name="ios-person" style={{ color: '#4746FF'}} />
                            </View>
                            <View>
                                <Text style={{ fontWeight: '200', color: '#4746FF' }}>Profile</Text>
                            </View>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
        
        return(
            <Footers />
        );
    }
}

const styles = StyleSheet.create({
    circle: {
        borderRadius: 90,
        width: 60,
        height: 60,
        backgroundColor: '#4148FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderWidth: 5,
    },
    stylePay: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});