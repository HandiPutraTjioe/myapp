import { StatusBar } from 'expo-status-bar';
import { Content, Header } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, Button, ImageBackground } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Footers from './Footers';
// import Icon from 'react-native-vector-icons/Ionicons';

// import { createAppContainer } from 'react-navigation';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// import MenuHome from './Components/MenuHome';

var bg = require("../img/background.png");
var lg = require("../img/Logo_Balance.png");

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'LI'
    }
  }

  render(){
    return(
      <View style={ styles.container }>
          <ImageBackground source={bg} style={ styles.imgb }>
              <Content>
                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <Image source={lg} style={ styles.imglogo }/>
                </View>
                <View style={{ marginTop: 20, marginLeft: 25, flexDirection: 'row' }}>
                    <View style={ styles.circle }>
                      <Text style={ styles.circleText }>{ this.state.name }</Text>
                    </View>
                </View>
              </Content>
              <Footers />
          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imgb : {
    height: '100%',
    width: '100%',
  },
  imglogo:  {
    resizeMode: 'contain',
    marginTop: 30,
    marginLeft: 25,
    width: 100
  },
  circle: {
    backgroundColor: '#56CCF2',
    borderRadius: 90,
    height: 60,
    width: 60,
  },
  circleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 12
  }
});

// class HomeScreen extends React.Component {
//   render(){
//     return (
//       // <View style={ styles.container }>
//       //   <Text>Home Screen</Text>
//       // </View>
//       <MenuHome />
//     );
//   }
// }

// class PaymentScreen extends React.Component {
//   render(){
//     return (
//       <View style={ styles.container }>
//         <Text>Payment Screen</Text>
//       </View>
//     );
//   }
// }

// class ProfileScreen extends React.Component {
//   render(){
//     return (
//       <View style={ styles.container }>
//         <Text>Profile Screen</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff'
//   }
// });

// const TabNavigator = createMaterialBottomTabNavigator(
// {
//   Home: {
//     screen: HomeScreen, 
//     navigationOptions: {
//       tabBarIcon: ({ tintColor }) => (
//         <View>
//           <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
//         </View>
//       ),
//     }
//   },
//   Payment: {
//     screen: PaymentScreen,
//     navigationOptions: {
//       tabBarIcon: ({ tintColor }) => (
//         <View>
//           <Icon style={[{color: tintColor}]} size={25} name={'ios-cash'} />
//         </View>
//       ),
//       activeColor: '#ffffff',
//       inactiveColor: '#92c5c2',
//       barStyle: { backgroundColor: '#2163f6' },
//     }
//   },
//   Profile: {
//     screen: ProfileScreen,
//     navigationOptions: {
//       tabBarIcon: ({ tintColor }) => (
//         <View>
//           <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
//         </View>
//       ),
//       activeColor: '#ffffff',
//       inactiveColor: '#92c5c2',
//       barStyle: { backgroundColor: '#2163f6' },
//     }
//   },
// },
// {
//   initialRouteName: 'Home',
//   activeColor: '#ffffff',
//   inactiveColor: '#92c5c2',
//   barStyle: { backgroundColor: '#2163f6' },
// }
// );

// export default createAppContainer(TabNavigator);