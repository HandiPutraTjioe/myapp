import React, { useState, useRef, useEffect } from 'react';
import { View, PixelRatio, Text, StyleSheet, ImageBackground, StatusBar, Image, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native';

var bg = require("../img/background.png");
var lg = require("../img/Logo_Balance.png");

export default class SignIn extends React.Component{
        state = {
            phonenumber: '', 
            securitypin: '',
        }
        
        onChangeText = (key, val) => {
            this.setState({ [key]: val })
        }
        
        render(){            
            const { phonenumber, securitypin } = this.state;
            const enabled = phonenumber.length > 9 && phonenumber.length < 13 && securitypin.length > 3;
                
            return(
                <View style={ styles.container }>
                    <ImageBackground source={bg} style={ styles.imgb }> 
                        <View style={{ marginStart: 35, marginTop: 24 }}>
                            <Text style={ styles.judul }>Welcome</Text>
                            <View style={ styles.square }/> 
                        </View>
    
                        <View style={{ marginStart: 35, marginTop: 46}}>
                            <Text style={{ textAlign: 'left', fontSize: 16, color: '#fff' }}>Please Input the fields below</Text>
                        </View>
    
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.form}>
    
                                <View style={styles.input}>
                                    <Icon name='phone' size={30} color="#4287f5" style={{alignItems:'center', justifyContent:'center', padding:12}}/>
                                    <TextInput 
                                        keyboardType='numeric' 
                                        style={styles.textinput} 
                                        mode='outlined' placeholder="Phone number" 
                                        onSubmitEditing={() => 
                                            this._securityinput && this._securityinput.focus()
                                        }
                                        onChangeText={val => this.onChangeText('phonenumber', val)}>
                                        <Text>{this.state.phonenumber}</Text>
                                    </TextInput>
                                </View>
    
                                <View style={styles.input}>
                                    <Icon name='onepassword' size={30} color="#4287f5" style={{alignItems:'center', justifyContent:'center', padding:12}}/>
                                    <TextInput keyboardType='numeric' style={styles.textinput} mode='outlined' placeholder="Security pin" secureTextEntry={true} onChangeText={val => this.onChangeText('securitypin', val)}>
                                        <Text>{this.state.securitypin}</Text>
                                    </TextInput>
                                </View>
                            
                            </View>
                        </View>
            
                        <View style={ styles.bottom }>
                            <View style={{alignItems:'center', marginTop: 0 }}>
                                <TouchableOpacity
                                    disabled={ !enabled }
                                    onLongPress={() => this.props.navigation.navigate('TheHome')}
                                    // style={{ backgroundColor: '#4287f5', borderRadius: 20 }}
                                    style={[
                                        styles.styleButtonSignin,
                                            { 
                                                backgroundColor: enabled ? '#4263D5' : '#4263D510'
                                            }
                                        ]}
                                    onPress={() => null}>
                                    <Text style={ styles.styleTextSignIn }>Sign In</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    
                        <View style={{justifyContent: 'center', backgroundColor: '#fff', alignItems:'center', marginTop: 0, marginBottom: 0, flexDirection: 'row'}}>
                            <Text style={{textAlign:'center', paddingTop:20, paddingBottom: 20, fontSize: 14}}>Don't have an account?</Text>
                            <TouchableOpacity
                                style={{ paddingTop: 0, paddingStart: 10, }}
                                onPress={() => this.props.navigation.navigate("SignUp")} >
                                <Text style={{ color: '#4287f5', fontSize: 14, fontWeight: 'bold', }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>                    
                </View>
            );
        }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgb : {
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
    },
    imglogo:  {
        justifyContent: 'center',
        resizeMode: "contain",
        alignItems: 'center',
        marginLeft: 70,
        marginTop: 80,
        height: 100,
    },
    header: {
      flex: 1,
    },
    judul: {
        fontWeight: 'bold',        
        color: "white",
        marginTop: 40,  
        fontSize: 50,
    },
    square: {
        backgroundColor: 'white',
        width: 70,
        height: 4,
    },
    containerJudulInput: {
        marginHorizontal: 40, 
        marginTop: 60
    },
    textJudul: {
        fontWeight: 'bold',
        color: "#F2F2F2",
        fontSize: 15,
    },
    containerInput: {
        paddingHorizontal: 12,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 0,
        marginTop: 40,
    },
    containerPIN: {
        paddingHorizontal: 12,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 0,
        marginTop: 10,
    },
    openDialogView: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        lineHeight: 16,        
        fontSize: 14,
    },
    textIdCountry: {
        color: '#33333350',
        fontSize: 18,
    },
    txtInput: {
        backgroundColor: 'white', 
        marginStart: 5,
        marginTop: 10, 
        marginEnd: 5,
        height: 50,
        width: 300, 
        height: 45, 
        flex: 1,
    },
    containerSignUp: {
        fontWeight: 'bold',
        color: '#F2F2F2',
        fontSize: 14, 
    },
    bottom: {
        justifyContent: 'flex-end', 
        position: 'relative',
        marginBottom: 14,
        display: 'flex',
        flex: 1, 
    },
    form:{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        flex: 1,
    },
    input: {
        shadowOffset:{width: 0, height: 2},
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowOpacity: 0.25,
        shadowColor:'black',
        shadowRadius: 3.84,
        fontWeight: '500',
        color: '#90dae1',
        borderRadius: 20,
        fontSize: 18,
        elevation: 5,
        width: 300,
        height: 55,
        margin: 10,
        flex: 1,
    },
    textinput:{
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 20,
        color: '#424242',
        paddingLeft: 10,
        marginEnd: 20,
        fontSize: 18,
        flex: 1,
    },
    styleButtonSignin: {
        borderRadius: 20 ,
        width: 300, 
        height: 45, 
    },
    styleTextSignIn: {
        color: '#ffffff', fontSize: 20,
        fontSize: 20, lineHeight: 45, 
        alignItems: 'center', 
        textAlign: 'center', 
    },
});

