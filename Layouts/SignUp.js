import React , { Component, useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Keyboard } from 'react-native';
import { Container, Item, Button, Label, Form, CheckBox } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableRipple } from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import SignIn from './SignIn';

class SignUp extends Component{
  state = {
    name: '',
    email: '', 
    securitypin: '', 
    phonenumber: '', 
  }
  onChangeText = (key, val) => {
      this.setState({ [key]: val })
  }
  render(){
    const { name, phonenumber, email, securitypin } = this.state;
    const enabled = name.length > 5 && name.length < 16 && phonenumber.length > 8 && phonenumber.length < 13 && !isNaN(phonenumber) && phonenumber.substr(0,1) != '8' && email.length > 8 && !email.includes('@') && !email.includes('.com') || securitypin.length > 3 && !isNaN(securitypin);
    
    return(
      <View style={styles.container}>
          <View>
              <Text style={ styles.containerJudul }>
                  Terima kasih telah bergabung bersama kami :) {'\n'}Kami akan mengirimkan 
                  <Text style={{ fontWeight: 'bold' }}> Kode OTP</Text> melalui 
                  <Text style={{ fontWeight: 'bold' }}> Email </Text> 
                  untuk proses verifikasi
              </Text>
          </View>

          <View style={styles.form}>

              <View style={styles.input}>
                  <Icon name='account-plus' size={30} color="#4287f5" style={{alignItems:'center', justifyContent:'center', padding:12}}/>
                      <TextInput style={styles.textinput} mode='outlined' placeholder="Name" onChangeText={val => this.onChangeText('name', val)}>
                          <Text>{this.state.name}</Text>
                      </TextInput>
              </View>
              <Text style={{ fontSize: 10, marginStart: 150, marginEnd: -60, marginBottom: 10 }}>*Max 8-16 Characters</Text>

              <View style={styles.input}>
                  <Icon name='phone' size={30} color="#4287f5" style={{alignItems:'center', justifyContent:'center', padding:12}}/>
                      <TextInput style={styles.textinput} mode='outlined' placeholder="Phone number" onChangeText={val => this.onChangeText('phonenumber', val)}>
                          <Text>{this.state.phonenumber}</Text>
                      </TextInput>
              </View>
              <Text style={{ fontSize: 10, marginStart: 40, marginEnd: -90, marginBottom: 10 }}>*Between 8-13 digits, Must be a Number</Text>

              <View style={styles.input}>
                  <Icon name='email' size={30} color="#4287f5" style={{alignItems:'center', justifyContent:'center', padding:12}}/>
                      <TextInput style={styles.textinput} mode='outlined' placeholder="Email Address" onChangeText={val => this.onChangeText('email', val)}>
                          <Text>{this.state.email}</Text>
                      </TextInput>
              </View>
              <Text style={{ fontSize: 10, marginStart: 0, marginEnd: -70, marginBottom: 10 }}>*Greater than 8 Characters, Must include @ and .com</Text>

              <View style={styles.input}>
                  <Icon name='onepassword' size={30} color="#4287f5" style={{alignItems:'center', justifyContent:'center', padding:12}}/>
                  <TextInput keyboardType='numeric' style={styles.textinput} mode='outlined' placeholder="Security Pin" secureTextEntry={true} onChangeText={val => this.onChangeText('securitypin', val)}>
                      <Text>{this.state.securitypin}</Text>
                  </TextInput>
              </View>
              <Text style={{ fontSize: 10, marginStart: 104, marginEnd: -60, marginBottom: 0 }}>*Max 4 digits, Must be a Number</Text>
            
              <View style={{alignItems:'center', marginTop: 46}}>
                  <TouchableRipple
                      disabled={ !enabled }
                      onPress={() => this.props.navigation.navigate('SignIn')}
                      style={[
                          styles.styleButtonSignUp,
                          { 
                              backgroundColor: enabled ? '#4263D5' : '#4263D550'
                          }
                      ]}>
                      <Text style={{ textAlign: 'center', fontSize: 20, lineHeight: 43, color: '#ffffff', fontSize: 18 }}>Sign Up</Text>
                   </TouchableRipple>
              </View>

              <View style={{alignItems:'center', flexDirection: 'row', marginTop: 0, marginBottom: 30 }}>
                  <Text style={{textAlign:'center', paddingTop:20, fontSize: 14}}>Already have an account?</Text>
                  <TouchableOpacity
                      style={{ paddingTop: 20, paddingStart: 10,  }}
                      onPress={() => this.props.navigation.navigate('SignIn')}>
                      <Text style={{ color: '#4287f5', fontSize: 14, fontWeight: 'bold' }}>Sign In</Text>
                  </TouchableOpacity>
              </View>
          </View>
      </View>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff',
        justifyContent:'center',
        alignItems:'center',
        paddingStart: 24,
        flex:1,
    },
    containerJudul: {
        flex: 1,
        fontSize: 12,
        fontFamily: 'Roboto',
        letterSpacing: 1,
        lineHeight: 20,
        top: 20,
        left: 3,
    },
    form:{
        flex:1,
        width:200,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:100
    },
    image:{
        position:'absolute',
        top:-50,
        left:-45
    },
    input: {
        flex: 1,
        flexDirection: 'row',
        width: 310,
        height: 55,
        backgroundColor: 'white',
        margin: 10,
        color: '#90dae1',
        borderRadius: 20,
        fontSize: 18,
        fontWeight: '500',
        shadowColor:'black',
        shadowOffset:{width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textinput:{
        flex: 1,
        paddingLeft: 10,
        backgroundColor: 'white',
        color: '#424242',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 20,
        marginEnd: 20,
    },
    bottom: {
        flex: 1, 
        justifyContent: 'flex-end', 
        marginBottom: 14,
        display: 'flex',
        position: 'relative'
    },
    styleButtonSignUp: {
        backgroundColor: '#4287f5', 
        borderRadius: 20,
        height: 45, 
        width: 310, 
    },
});