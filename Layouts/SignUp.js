import React , { useState, useRef, useEffect, Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Keyboard } from 'react-native';
import { Container, Item, Button, Label, Form, CheckBox } from 'native-base';
import { TouchableRipple } from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// var iconUsername = require('../img/IconUsername.png');
// var iconEmail = require('../img/IconEmail.png');
// var iconNomorPonsel = require('../img/IconNomorPonsel.png');

const Register = () => {
  const navigation = useNavigation()

  let [userName, setUserName] = useState('');
  let [userEmail, setUserEmail] = useState('');
  let [userPhone, setUserPhone] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');
  let [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

  const handleSubmitButton = props => {
    setErrortext('');

    if (!userName) {
      alert('Name : \nPlease Fill Name');
      return;
    } 
    
    if (userName.length > 5) {
      alert('Name : \nMust Greater than 5 Characters');
      return;
    }
    
    if (!userEmail) {
      alert('Email : \nPlease Fill Email');
      return;
    } 
    
    if (userEmail.length > 8) {
      alert('Email : \ntoo short');
      return;
    } 
    
    if (!userEmail.includes('@')) {
      alert('Email : \nMust Include @');
      return;
    } else if (!userEmail.includes('.com')) {
      alert('Email : \nMust Include .com');
      return;
    }

    if (!userPhone) {
      alert('Phone Number : \nPlease Fill Phone Number');
      return;
    } 

    if (userPhone.substr(0,1) !== '8') {
      alert('Phone Number : \nbegin with 8');
      return;
    }

    alert('Success!!', navigation.navigate('Home'));
    
    // if (userEmail.length < 8) {
    //   alert('Email name too short {"\n"} Max 8 Characters');
    //   return;
    // } else if (!userEmail.includes('@') && !userEmail.includes('.com')) {
    //   alert('Must Include @ and .com');
    // }

    // if (userPhone.substr(0,1) !== '8') {
    //   alert('begin with 8');
    //   return;
    // } else if (userPhone.length > 12) {
    //   alert('not greater than 12 digits!');
    //   return;
    // } else if (!!isNaN(userPhone)) {
    //   alert('must be a number!');
    //   return;
    // }
  }

  return(
    <View style={ styles.container }>
          <View style={ styles.containerJudul }>
              <Text>
                  Terima kasih telah bergabung bersama kami :) {'\n'}
                  Kami akan mengirimkan 
                  <Text style={{ fontWeight: 'bold' }}> Kode OTP</Text> melalui 
                  <Text style={{ fontWeight: 'bold' }}> Email </Text> {'\n'}
                  untuk proses verifikasi
              </Text>
          </View>   

          <View style={ styles.containerFields }>
              <View style={ styles.containerTextUsername }>
                <Item style={ styles.openDialogViewUsername }>
                    <TextInput
                      style={ styles.textInputUsername }
                      onChangeText={ userName => setUserName(userName) }
                      underlineColorAndroid = "#FFFFFF"
                      placeholder = "Nama Lengkap"
                      placeholderTextColor = "#828282"
                      returnKeyType = "next"
                      onSubmitEditing={() => 
                        this._emailinput && this._emailinput.focus()
                      }
                      blurOnSubmit={ false }/>
                </Item>
              </View>

              <View style={ styles.containerTextEmail }>
                <Item style={ styles.openDialogViewEmail }>
                    <TextInput
                      style={ styles.textInputEmail }
                      onChangeText={ userEmail => setUserEmail(userEmail)}
                      underlineColorAndroid = "#F6F6F7"
                      placeholder = "Alamat Email"
                      placeholderTextColor = "#828282"
                      keyboardType = "email-address"
                      ref={ref => {
                        this._emailinput = ref;
                      }}
                      returnKeyType = "next"
                      onSubmitEditing = {() => this._phoneinput && this._phoneinput.focus()}
                      blurOnSubmit = {false}/>
                </Item>
              </View>

              <View style={ styles.containerTextNomorPonsel }>
                <Item style={ styles.openDialogViewNomorPonsel }>
                    <TextInput
                          style={ styles.textInputEmail }
                          onChangeText={ userPhone => setUserPhone(userPhone)}
                          underlineColorAndroid = "#F6F6F7"
                          placeholder = "Nomor Ponsel"
                          placeholderTextColor = "#828282"
                          keyboardType = "numeric"
                          ref={ref => {
                            this._phoneinput = ref;
                          }}
                          returnKeyType = "next"
                          onSubmitEditing = {Keyboard.dismiss}
                          blurOnSubmit = {false}/>
                </Item>
              </View>

              <View style={ styles.containerCheckBox }>
                    <CheckBox
                        // value={this.state.Check}
                        // onChange={()=>this.isCheck()}
                        />
                    <View style={ styles.openDialogCheckBox }>
                      <Text style={{ marginLeft: 28, fontSize: 12, lineHeight: 18 }}>
                      Saya setuju dengan 
                      <Text style={{ fontWeight: 'bold' }}> Syarat {'&'} ketentuan</Text> dan {'\n'}
                      <Text style={{ fontWeight: 'bold' }}>Kebijakan Privasi</Text>
                    </Text>
                  </View>
              </View>

              {
                errortext != '' ? (
                  <Text> { errortext } </Text>
                ) : null
              }

              <View style={ styles.bottom }>
                  <View style={{ height: 80, flexDirection: 'row', 
                      justifyContent: 'center', alignItems: 'center' }}>
                      <TouchableRipple 
                          style={{ backgroundColor: '#4F74E2', opacity: 0.3, width: 360, height: 44,
                          justifyContent: 'center', elevation: 4, borderRadius: 20, marginTop: 50 }}
                          onPress = {() => handleSubmitButton()}>
                          <Text style={{ color: 'white', textAlign: 'center', fontSize: 15 }}>SIGN UP</Text>
                      </TouchableRipple>
                  </View>
              </View>
          </View>
      </View>  
  );
}

export default Register;

// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';
// import { Container, Header, Content, Item, Input, Icon, Button, CheckBox } from 'native-base';
// import { TextInput } from 'react-native-gesture-handler';
// import { TouchableRipple } from 'react-native-paper';

// import Validation from './Validation';

// var txtInputUsername = "Nama Lengkap";
// var txtInputEmail = "Email";
// var txtInputNoPonsel = "Nomor Ponsel";

// var iconUsername = require('../img/IconUsername.png');
// var iconEmail = require('../img/IconEmail.png');
// var iconNomorPonsel = require('../img/IconNomorPonsel.png');

// const SignUp = () => {
//     const [yourName, setYourName] = useState("Must be between 5-15 Characters")
//     const [yourEmail, setEmail] = useState("Must include @ and .com")
//     const [yourPhone, setPhone] = useState("Start with 0 (Zero) length 9 - 13 digits")

//     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//     const isValidLengthofName = (props) => {
//         if (yourname.length > 6 && yourname.length < 15) {
//             setYourName("Name Success")
//         }
//     }
    
//     const [chkFalse] = useState(false)

//     isCheck = () => {
//         !chkFalse(true)
//     }

//     const [displaySosmed, setDisplaySosmed] = useState("flex")
    
//     return(           
//             <View style={ styles.container }>
//                     <View style={ styles.containerJudul }>
//                         <Text>
//                             Terima kasih telah bergabung bersama kami :) {'\n'}
//                             Kami akan mengirimkan 
//                             <Text style={{ fontWeight: 'bold' }}> Kode OTP</Text> melalui 
//                             <Text style={{ fontWeight: 'bold' }}> Email </Text> {'\n'}
//                             untuk proses verifikasi
//                         </Text>
//                     </View>   
              
//                     <View style={ styles.containerTextUsername }>
//                         <Item style={ styles.openDialogViewUsername }>
//                             <Image source={ iconUsername } style={{ marginTop: 8, marginLeft: 9, marginEnd: 23, resizeMode: 'contain' }} />
//                             <TextInput style={ styles.textInputUsername } 
//                                     placeholder='Nama Lengkap'
//                                     onChangeText={(yourName) => {
//                                         setYourName(yourName)

//                                         if (yourName.length > 5 && yourName.length < 15) {
//                                             setYourName("Name Success")
//                                         } else {
//                                             setYourName("Must be between 5-15 Characters")
//                                         }
//                                     }} />
//                         </Item>
//                     </View>
//                     <View
//                         onPress={() => isValidLengthofName() }>
//                         <Text style={{ marginLeft: 22, fontSize: 12, color: "#EB5757", marginBottom: 0 }}>{yourName}</Text>
//                     </View>

//                     <View style={ styles.containerTextEmail }>
//                         <Item style={ styles.openDialogViewEmail }>
//                             <Image source={ iconEmail } style={{ marginTop: 8, marginEnd: 18, resizeMode: 'contain', alignItems: 'center' }} />
//                             <TextInput style={ styles.textInputEmail } 
//                                     placeholder='Email'
//                                     keyboardType='email-address'
//                                     onChangeText={(yourEmail) => {
//                                         setEmail(yourEmail)

//                                         if (reg.test(yourEmail) === true) {
//                                             setEmail("Email Success")
//                                         } else {
//                                             setEmail("Must include @ and .com")
//                                         }
//                                     }}/>
//                         </Item>
//                     </View>
//                     <Text style={{ marginLeft: 22, fontSize: 12, color: "#EB5757", marginBottom: 0 }}>{yourEmail}</Text>

//                     <View style={ styles.containerTextNomorPonsel }>
//                         <Item style={ styles.openDialogViewNomorPonsel }>
//                             <Image source={ iconNomorPonsel } style={{ marginTop: 8, marginLeft: 9, marginEnd: 23, resizeMode: 'contain' }} />
//                             <TextInput style={ styles.textInputNomorPonsel } 
//                                     placeholder='Nomor Ponsel'
//                                     keyboardType='number-pad'
//                                     onChangeText={(yourPhone) => {
//                                         setPhone(yourPhone)

//                                         if (yourPhone.length > 9 && yourPhone.length < 13 && yourPhone.substr(0,1) == "0" && !isNaN(yourPhone)) {
//                                             setPhone("Phone Number Success")
//                                         } else {
//                                             setPhone("Start with 0 (Zero) length 9 - 13 digits")
//                                         }
//                                     }}/>
//                         </Item>
//                     </View>
//                     <Text style={{ marginLeft: 22, fontSize: 12, color: "#EB5757", marginBottom: 0 }}>{yourPhone}</Text>

//                     <View style={ styles.containerCheckBox }>
//                         <View style={ styles.openDialogCheckBox }>
//                             <CheckBox
//                                 value={this.isCheck}
//                                 onChange={()=>this.checkBoxTest()}/>
//                                 <Text style={{ marginLeft: 28, fontSize: 12, lineHeight: 18 }}>
//                                 Saya setuju dengan 
//                                 <Text style={{ fontWeight: 'bold' }}> Syarat {'&'} ketentuan</Text> dan {'\n'}
//                                 <Text style={{ fontWeight: 'bold' }}>Kebijakan Privasi</Text>
//                             </Text>
//                         </View>
//                     </View>

//                     <View style={ styles.bottom }>
//                         <View style={{  height: 80, flexDirection: 'row', 
//                             justifyContent: 'center', alignItems: 'center' }}>
//                             <TouchableRipple 
//                                 style={{ backgroundColor: '#4F74E2', opacity: 0.3, width: 360, height: 44,
//                                 justifyContent: 'center', elevation: 4, borderRadius: 20, marginTop: 50 }}
//                                 onPress = {() => navigation.navigate("TheSignIn")}>
//                                 <Text style={{ color: 'white', textAlign: 'center', fontSize: 15 }}>SIGN UP</Text>
//                             </TouchableRipple>
//                         </View>
//                     </View>
//             </View>  
//     );
// }

// export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    containerJudul: {
        marginLeft: 25,
        marginTop: 30,
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        letterSpacing: 10,
        lineHeight: 20
    },
    containerTextInput: {
        marginTop: 40,
        marginLeft: 25
    },
    containerTextUsername: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        borderRadius: 0,
        backgroundColor: 'white',
        alignItems: 'center',
        margin: 10,        
    },
    openDialogViewUsername: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        lineHeight: 16,  
    },
    textInputUsername: {
        width: 300, 
        height: 45, 
        backgroundColor: 'white', 
        marginTop: 10, 
        marginLeft: 5,
        flex: 1,
        height: 50, 
        fontSize: 18
    },
    containerTextEmail: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        borderRadius: 0,
        backgroundColor: 'white',
        alignItems: 'center',
        margin: 10,        
    },
    openDialogViewEmail: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        lineHeight: 16,  
    },
    textInputEmail: {
        width: 300, 
        height: 45, 
        backgroundColor: 'white', 
        marginTop: 10, 
        marginLeft: 5,
        flex: 1,
        height: 50,
        fontSize: 18
    },
    containerTextNomorPonsel: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        borderRadius: 0,
        backgroundColor: 'white',
        alignItems: 'center',
        margin: 10,        
    },
    openDialogViewNomorPonsel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        lineHeight: 16,  
    },
    textInputNomorPonsel: {
        width: 300, 
        height: 45, 
        backgroundColor: 'white', 
        marginTop: 10, 
        marginLeft: 5,
        flex: 1,
        height: 50,
        fontSize: 18
    },
    containerCheckBox: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 20,  
        marginLeft: 10
    },
    openDialogCheckBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        lineHeight: 16,  
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        bottom: 0,
        position: 'absolute',
        backgroundColor: '#4F74E2',
        width: 360, 
        height: 44, 
        borderRadius: 20,
    },
    bottom: {
        flex: 2, 
        justifyContent: 'center', 
        marginBottom: 0,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    containerFields: {
        marginTop: 10
    },
});