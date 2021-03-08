import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CurrencyInput from 'react-native-currency-input';
import { RadioButton } from 'react-native-paper';

export default class Pulse extends Component{
    constructor(props){
        super(props);
        this.state = {
            phonenumber: '085347622944', 
            nominal: '',
            account1: 'Zero Balance',
            account2: 'Alfa Balance',
            balanceAccount1: 600000,
            balanceAccount2: 600000,
        };
    }
    
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    render(){
        const { phonenumber } = this.state;
        return(
            <View style={ styles.container }>
                    
                    <View style={ styles.form }>
                        
                        <View style={ styles.containerInputAccount }> 

                            <Text style={ styles.styleTextAccount }>
                                Masukkan Phone Number
                            </Text>

                            <View style={[ styles.input, this.state.phonenumber.length > 8 && this.state.phonenumber.length < 17 && !isNaN(phonenumber) ? styles.noterror : styles.error  ]}>
                                <Icon name='account' size={30} color="#4287f5" style={{alignItems:'center', justifyContent:'center', padding:12}}/>
                                <TextInput 
                                    keyboardType='numeric' 
                                    style={styles.textinput} 
                                    mode='outlined' 
                                    placeholder="Phone Number" 
                                    onChangeText={val => this.onChangeText('phonenumber', val)}>
                                    <Text>{this.state.phonenumber}</Text>
                                </TextInput>
                            </View>

                            <View style={ styles.bottom }>
                                <View style={{alignItems:'center', marginTop: 0 }}>
                                    <TouchableOpacity
                                        disabled={ this.state.phonenumber === ''}
                                        onPress={() => this.props.navigation.navigate('InputPulseScreen')}
                                        style={[
                                            styles.styleButtonSignin,
                                                { 
                                                    backgroundColor: this.state.phonenumber !== '' ? '#4263D5' : '#4263D550'
                                                }
                                            ]}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                                            <Icon name="arrow-right" size={40} style={{ color: '#ffffff' }}/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
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
    containerInputAccount: {
        marginBottom: 20,
        marginStart: 20,
        marginTop: 30,
    },
    styleTextAccount: {
        fontWeight: '500',
        fontSize: 16,
    },
    form:{
        justifyContent: 'center',
        position: 'absolute',
        alignItems: 'center',
        marginBottom: 10,        
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
        marginBottom: 10, 
        marginTop: 20,
        fontSize: 18,
        width: 320,
        height: 55,
        flex: 2,
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
    containerPilihNominal: {
        marginStart: 0,
        marginTop: 30,
    },
    styleTextNominal: {
        fontWeight: '500',
        fontSize: 16,
    },
    containerNominal: {
        flexDirection: 'row',
    },
    containerNominal1: {
        borderColor: '#4263D5',
        borderRadius: 20,
        marginStart: 6,
        borderWidth: 1,
        marginTop: 16,
        marginEnd: 6, 
        padding: 10
    },
    styleTextInputManual: {
        marginTop: 20,
        fontSize: 13,
        color: 'gray'
    },
    containerPilihSourceAccount: {
        marginStart: 0,
        marginTop: 0,
    },
    containerCurrency: {
        borderColor: '#00000020', 
        borderRadius: 20,  
        marginBottom: 20,
        borderWidth: 2, 
        marginStart: 0, 
        marginTop: 20, 
        marginEnd: 0, 
        height: 52, 
    },
    error: {
        borderColor: 'red',
        borderWidth: 1.1,
    },
    noterror: {
        borderColor: 'lightgreen',
        borderWidth: 1.1,
    },
    bottom: {
        justifyContent: 'flex-end', 
        alignItems: 'flex-end',
        position: 'relative',
        marginTop: 10,
        marginBottom: 16,
        display: 'flex',
        flex: 1, 
    },
    styleButtonSignin: {
        borderRadius: 90 ,
        height: 50, 
        width: 50, 
    },
    styleTextSignIn: {
        alignItems: 'center', 
        textAlign: 'center', 
        color: '#ffffff', 
        lineHeight: 45, 
        fontSize: 20,
        fontSize: 20, 
    },
});