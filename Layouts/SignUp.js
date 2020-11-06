import React , { useState, useRef, useEffect, Component } from 'react';
import { View, Text, StyleSheet, Image, CheckBox } from 'react-native';
import { Container, Item, Input, Header, Body, Content, Title, Button, Label, Form } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';
import { Field, reduxForm } from 'redux-form';

import { useNavigation } from '@react-navigation/native';

var iconUsername = require('../img/IconUsername.png');
var iconEmail = require('../img/IconEmail.png');
var iconNomorPonsel = require('../img/IconNomorPonsel.png');

const validate = values => {
  const error = {};
  error.email = '';
  error.name = '';
  error.phone = '';
  
  var ema = values.email;
  var nm = values.name;
  var telp = values.phone;

  if(values.email === undefined){
    ema = '';
  }

  if(values.name === undefined){
    nm = '';
  }

  if(values.phone === undefined){
    telp = '';
  }

  if(ema.length !== 1 && ema.length < 8 && ema !== ''){
    error.email = 'too short';
  } else if(!ema.includes('@') && ema !== ''){
    error.email = '@ not included';
  } else if(!ema.includes('.') && ema !== ''){
    error.email = '.com not included';
  }

  if(nm.length < 8){
    error.name = 'Max 8 characters';
  }
  
  if(telp.substr(0,1) !== '8'){
    error.phone = 'begin with 8'
  } else if(telp.length > 12){
    error.phone = 'not greater than 12 digits!';
  } else if(!!isNaN(telp)){
    error.phone = 'must be a number'
  } else {
    error.phone = ''
  }

  return error;
};

class SimpleForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      isReady: false,
      check: false,
      txtname: '',
      txtemail: '',
      txtphone: ''
    };

    this.renderInput = this.renderInput.bind(this);
  }

  // updateValue(text, field) {
  //   if (field == 'txtname') {
  //     this.setState({
  //       txtname: text,
  //     })
  //   } else if (field == 'txtemail') {
  //     this.setState({
  //       txtemail: text,
  //     })
  //   } else if (field == 'txtphone') {
  //     this.setState({
  //       txtphone: text,
  //     })
  //   }
  // }

  // onSubmit() {
  //   let collection = {}
  //   collection.txtname = this.state.txtname,
  //   collection.txtemail = this.state.txtemail,
  //   collection.txtphone = this.state.txtphone

  //   console.warn(collection);
  // }

  isCheck(){
    this.setState({
      check: !this.state.check,
    })
  }
 
  renderInput({ input, label, type, meta: { touched, error, warning } }){
    var hasError= false;
    if(error !== undefined){
      hasError= true;
    }
    return( 
      <Item error= {hasError}>
        <Input {...input}/>
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    )
  }

  render(){
    
    const { handleSubmit, reset } = this.props;
    
    const SignUp = () => {
      const navigation = useNavigation()

      const onSuccess = () => {
        // if (nm.length !== '' && ema.length !== '' && telp.length !== '') {
        //   alert("Name or Email or Phone Number {'\n'} Must Be Fill!!");
        // } else {
        // }
        alert("Success!!", navigation.navigate('SignIn'));
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
                  <Item style={ styles.openDialogViewUsername } floatingLabel>
                      <Label>Nama Lengkap</Label>
                      <Field 
                          name="name" 
                          style={ styles.textInputUsername } 
                          // placeholder="nm"
                          component={ this.renderInput }
                          />
                  </Item>
                </View>

                <View style={ styles.containerTextEmail }>
                  <Item style={ styles.openDialogViewEmail }>
                      <Field 
                          name="email"
                          style={ styles.textInputEmail }
                          // placeholder="ema"
                          component={ this.renderInput } 
                          />
                  </Item>
                </View>

                <View style={ styles.containerTextNomorPonsel }>
                  <Item style={ styles.openDialogViewNomorPonsel } floatingLabel>
                      <Label>Nomor Ponsel</Label>
                      <Field 
                          name="phone"
                          style={ styles.textInputNomorPonsel }
                          // placeholder="tlp"
                          component={ this.renderInput } 
                          />
                  </Item>
                </View>

                <View style={ styles.containerCheckBox }>
                      <CheckBox
                          // value={this.state.Check}
                          onChange={()=>this.isCheck()}/>
                      <View style={ styles.openDialogCheckBox }>
                        <Text style={{ marginLeft: 28, fontSize: 12, lineHeight: 18 }}>
                        Saya setuju dengan 
                        <Text style={{ fontWeight: 'bold' }}> Syarat {'&'} ketentuan</Text> dan {'\n'}
                        <Text style={{ fontWeight: 'bold' }}>Kebijakan Privasi</Text>
                      </Text>
                    </View>
                </View>

                <View style={ styles.bottom }>
                    <View style={{ height: 80, flexDirection: 'row', 
                        justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableRipple 
                            style={{ backgroundColor: '#4F74E2', opacity: 0.3, width: 360, height: 44,
                            justifyContent: 'center', elevation: 4, borderRadius: 20, marginTop: 50 }}
                            // onPress= { reset }
                            onPress = {() => this.onSubmit()}>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 15 }}>SIGN UP</Text>
                        </TouchableRipple>
                    </View>
                </View>
            </View>
        </View>  
      )
    }
    
    return (
      <SignUp />
    )
  }
}

export default reduxForm({
  form: 'test',
  validate
})(SimpleForm)


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