import { StatusBar } from 'expo-status-bar';
import { Content, Header } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ProfilePicture from '../assets/aelwen1.jpg';

import MyImage1 from '../assets/zero_card.png';
import MyImage2 from '../assets/alfa_card.png';

import Telkomsel from '../assets/telkomsel.png';

import { Avatar } from 'react-native-paper';
import Footers from './Footers';

import {ScrollView, FlatList} from 'react-native-gesture-handler';

var bg = require("../img/background.png");
var lg = require("../img/Logo_Balance.png");

const colors = {
  theme: "#4287f5",
  white:'white',
  grey:'#a4a4a4'
}

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'LI',
      balance : '600.000',
      user_name : 'Aelwen',
      user_email : 'loremipsum@gmail.com',
      phonenumber: '081234567890',
      my_acccount: [
        {MyImage1},
        {MyImage2},
      ]
    };
  }

  render(){
    return(
      <View style={ styles.container }>
          <ImageBackground source={bg} style={ styles.imgb }>
              <Content>
                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>
                    <Image source={lg} style={ styles.imglogo }/>
                    <View style={{ marginTop: 54, marginStart: 198, marginEnd: 40}}>
                      <TouchableOpacity
                          onPress={() => this.props.navigation.navigate('NotificationScreen')}>
                          <Icon name="bell-outline" size={20} style={{ color: colors.white }}/>           
                      </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 10, marginLeft: 25, flexDirection: 'row' }}>
                    <Avatar.Image source={ProfilePicture} size={44} style={{backgroundColor:'white'}}/>
                    {/* <View style={ styles.circle }>
                      <Text style={ styles.circleText }>{ this.state.name }</Text>
                    </View> */}
                    <View>
                      <Text style={{color:'white', fontSize:20, fontWeight:'bold', marginStart: 18, flexDirection: 'column'}}>{this.state.user_name}</Text>
                      <Text style={{color:'white', marginStart: 18 }}>{this.state.user_email}</Text>
                    </View>
                </View>
                
                <View style={ styles.main }>
                  <View style={ styles.styleTextMain }>

                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 4 }}>
                        <Text style={{color:'white', fontSize:16, fontWeight:'200', marginStart: 10, marginTop: 16, }}>My cards</Text>
                    </View>

                    <TouchableOpacity
                        style={ styles.containerTopUp }
                        onPress={() => this.props.navigation.navigate('TopUpScreen')}>
                        <View style={ styles.containerTopUpText }>
                            <Text style={{ color:'white', fontSize:16, fontWeight:'200', marginTop: 0, textAlign: 'center' }}>{"+"} Top Up</Text>
                        </View>
                    </TouchableOpacity>

                  </View>

                  <View style={{ paddingBottom: 2 }}>
                      <ScrollView
                        horizontal={true}
                        scrollEnabled={true}
                        showsHorizontalScrollIndicator={true}
                        scrollEventThrottle={14}
                        snapToAlignment='center'
                        style={{overflow:'visible', paddingTop:10, height:219}}>

                        <TouchableOpacity activeOpacity={0.95} style={{backgroundColor:'#ffffff0', borderRadius:20, marginStart: 8, }}>
                            <View style={styles.card}>
                                <View style={styles.cardImage}>
                                    <Image source={MyImage1} style={{ marginTop: 4, width: '86%', height: '78%', resizeMode: 'stretch' }}/>
                                    <View style={{position:'absolute', paddingTop:10, paddingLeft: 10}}>
                                        <Text style={{color:'#466FFF', fontWeight:'bold', fontSize:16, textAlign: 'left', alignContent: 'center', marginStart: 20, marginTop: 60, letterSpacing: 1.2 }}>{this.state.phonenumber}</Text>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Text style={{color:'#466FFF', fontWeight:'bold', fontSize:18, textAlign: 'left', alignContent: 'center', marginStart: 20, marginTop: 20, }}>IDR </Text>
                                            <Text style={{color:'#466FFF', fontWeight:'bold', fontSize:30, textAlign: 'left', alignContent: 'center', marginStart: 5, marginTop: 16, letterSpacing: 1}}>{this.state.balance}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.card1}>
                            <View style={styles.cardImage1}>
                                <Image source={MyImage2} style={{ marginTop: 4, width: '86%', height: '78%', resizeMode: 'stretch' }}/>
                                <View style={{position:'absolute', paddingTop:10, paddingLeft: 10}}>
                                    <Text style={{color:'#466FFF', fontWeight:'bold', fontSize:16, textAlign: 'left', alignContent: 'center', marginStart: 20, marginTop: 60, letterSpacing: 1.2 }}>{this.state.phonenumber}</Text>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={{color:'#466FFF', fontWeight:'bold', fontSize:18, textAlign: 'left', alignContent: 'center', marginStart: 20, marginTop: 20, }}>IDR </Text>
                                        <Text style={{color:'#466FFF', fontWeight:'bold', fontSize:30, textAlign: 'left', alignContent: 'center', marginStart: 5, marginTop: 16, letterSpacing: 1}}>{this.state.balance}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                      </ScrollView>

                      <View style={ styles.containerSmallCircle }>
                        <View style={ styles.smallCircle } />
                        <View style={ styles.smallCircle1 } />
                      </View>

                      <Text style={{color:'white', fontSize:16, fontWeight:'200', marginStart: 10, marginTop: 10}}>Buy Credit</Text>
                      <TouchableOpacity activeOpacity={0.85} onPress={() => this.props.navigation.navigate('PulseScreen')}>
                        <View style={ styles.square }>
                            <View style={{  alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 10 }}>
                                <Image source={Telkomsel} style={{ marginTop: 2, marginBottom: 2, width: '70%', height: '100%', resizeMode: 'stretch' }}/>
                            </View>
                        </View>
                      </TouchableOpacity>

                      {/* <Slider */}

                      <Text style={{color:'white', fontSize:16, fontWeight:'200', marginStart: 10, marginTop: 14}}>Promo {"&"} Cashback</Text>
                      <TouchableOpacity activeOpacity={0.85} onPress={() => this.props.navigation.navigate('PromoScreen')}>
                        <View style={ styles.square1 }>
                            <View style={{  alignItems: 'center' }}>
                                <Text style={{ fontSize: 16, textAlign: 'center', letterSpacing: 1, lineHeight: 20, marginTop: 10 }}>Click to see the {"\n"} Promo {"&"} Cashbacks </Text>
                            </View>
                        </View>
                      </TouchableOpacity>
                  </View>
                </View>
              </Content>

              {/* <Content>
                <View style={ styles.main }>
                  <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>My cards</Text>
                </View>
              </Content> */}

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
  main:{
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingTop: 16,  
  },
  styleTextMain: {
    flexDirection: 'row',
  },
  containerTopUp: {
    justifyContent: 'flex-end', 
    alignItems: 'flex-end', 
    display: 'flex', 
    marginEnd: 10,
    marginTop: 4,
    flex: 1, 
  },
  containerTopUpText: {
    backgroundColor: '#ffffff10',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    height: 30,
  },
  imglogo:  {
    resizeMode: 'contain',
    marginTop: 30,
    marginLeft: 25,
    width: 100
  },
  containerSmallCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  smallCircle: {
    width: 6,
    height: 6,
    backgroundColor: '#64E5F6',
    borderRadius: 10,
    margin: 4
  },
  smallCircle1: {
    width: 6,
    height: 6,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    margin: 4
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
  },
  cardImage:{
    width:380, 
    height:260, 
    borderRadius:20,
    padding: 10
  },
  card:{
    marginRight:10, 
    marginTop: 120,
    justifyContent: 'center',
    alignItems:'center',
    shadowColor: 'black',
    borderColor:'black',
    borderRadius:20,    
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 0, 
    height:10, 
    width:360,
    paddingTop:0
  },
  cardImage1:{
    width:380, 
    height:260, 
    borderRadius:20,
    padding: 10,
    marginStart: 90
  },
  card1:{
    marginRight:5, 
    marginTop: 120,
    justifyContent: 'center',
    alignItems:'center',
    shadowColor: 'black',
    borderColor:'black',
    borderRadius:20,    
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 0, 
    height:10, 
    width:360,
    paddingTop:0
  },
  howtousecard: {
    marginRight:20, 
    alignItems:'center', 
    borderColor:'black', 
    borderStyle:'solid', 
    borderWidth:1, 
    borderRadius:20
  },
  square: {
    // width: 200,
    height: 60,
    borderRadius: 10,
    backgroundColor: 'white',
    marginStart: 8,
    marginEnd: 8,
    marginTop: 12
  },
  square1: {
    // width: 200,
    height: 60,
    borderRadius: 10,
    backgroundColor: 'white',
    marginStart: 8,
    marginEnd: 8,
    marginTop: 12
  }
});

export default Home;

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