import React, { Component, useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, BackHandler, Alert } from 'react-native';
import Logo from '../assets/bubblelogin.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {Actions} from 'react-native-router-flux';
import CustomButtonBorder from './Components/Customebuttonborder';
import { Button, Form } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

// let merchant_balance = 0
// let user_balance = 0

export default class Security extends Component{
    state = {
        securitypin: '',
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    showAlert(){
        Alert.alert(
            "lorem ipsum?",
            [
                {text: "Yes", onPress: () => console.log("Yes")},
                {text: "No", onPress: () => console.log("No")}
            ]
        )
    }
    componentDidMount(){
        BackHandler.addEventListener("hardwareBackPress",this.handleBackPress);
        return false;
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
    }    

    handleBackPress = () => {
        Alert.alert(
            "Confirmation",
            "Are you sure you want to Cancel ?",
            [
                {
                    text: "Yes",
                    onPress: () => {
                        return this.props.navigation.navigate('TheHome');
                    },
                },
                {
                    text: "No",
                    onPress: () => {
                        console.log("Cancel Pressed");
                    },
                },
            ],
            { cancelable: true }
        );
        return true;
    }

    onClear = () => {
        this.setState({
            securitypin: ''
        })
    }


    render(){
        const { securitypin } = this.state;
        const enabled = securitypin.length >= 4 && !isNaN(securitypin);

        const { handleSubmit, reset } = this.props;   
                
        return(
            <View style={ styles.container }>
                <View style={ styles.styleTextPIN }>
                    <Text style={ styles.textPin }>Please input your Security PIN</Text>
                </View>
                <View style={styles.form} id="form">
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.input}>
                            <Icon name='account-circle' size={30} color="#4287f5" style={{alignItems:'center', justifyContent:'center', padding:12}}/>
                            <TextInput keyboardType="number-pad" placeholder="Security Pin" style={{ alignItems: 'center', justifyContent: 'center' }} onChangeText={val => this.onChangeText('securitypin', val)}>
                                <Text style={{color: "black", alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>{this.state.securitypin}</Text>
                            </TextInput>
                        </View>
                    </View>
                    <View style={{ position: 'relative', top: 40, marginStart: 24, }}>
                        <Text style={{ fontSize: 12, textAlign: 'right', marginEnd: 26, }}>*Must be a Number!</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end', flex: 1, marginBottom: 54, marginEnd: 0 }}>
                        <View style={{ alignItems:'center', marginTop: 20, }}>
                            <TouchableOpacity 
                                name={ this.state.btnPay } 
                                disabled={ !enabled }
                                onPress={() => this.props.navigation.navigate('SuccessPaymentScreen')}
                                style={[
                                    styles.containerButtonPay,
                                    { 
                                        backgroundColor: enabled ? '#4263D5' : '#4263D550', 
                                    }
                                    ]}>
                                <Text
                                    style={[
                                        styles.styleTextPay,
                                        { 
                                            color: securitypin? 'white' : 'white' 
                                        }
                                        ]}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginStart: 0, marginTop: 20, marginBottom: 20, justifyContent: 'center' }}>
                            <TouchableOpacity onPress={this.onClear}>
                                <Text style={ styles.styleTextClear }>Clear</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },

    styleTextPIN: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
    },

    textPin: {
        fontSize: 16,
    },

    form:{
        top:50,
        flex:1,        
    },

    input:{
        flex: 1,
        position:'absolute',
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
        elevation: 5,
    },

    image:{
        position:'absolute',
        top:-50,
        left:-45
    },

    styleTextClear: {
        textAlign: 'center',
    },

    containerButtonPay: {
        width: 310,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
    },

    styleTextPay: {
        textAlign: 'center',
        fontSize: 15
    },
    yes: {
        color: '#EB5757',
    }
})