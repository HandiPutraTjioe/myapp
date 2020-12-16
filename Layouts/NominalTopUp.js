import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CurrencyInput from 'react-native-currency-input';
import { RadioButton } from 'react-native-paper';

export default class TopUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            nominal: '',
            account1: 'Zero Balance',
            account2: 'Alfa Balance',
            balanceAccount1: 600000,
            balanceAccount2: 600000,
            disabled: true,
            disabled1: false,
        };
    }
    
    render(){
        const TopUpScreen = () => {
            const [checked, setChecked] = useState('');
            const [nominal, setNominal] = useState('');
            const enabled = nominal > 9999 && nominal < 1000001 && !isNaN(nominal) || checked == 'first' && checked == 'second';
            
            return(
                <View style={ styles.container }>                        
                    <View style={ styles.containerInput }> 

                        <View style={ styles.containerPilihNominal }>
                            <Text style={ styles.styleTextNominal }>
                                Input Nominal Top Up anda 
                            </Text>

                            <View style={[ styles.containerCurrency, nominal >= 10000 && nominal < 1000000 && !isNaN(nominal) ? styles.noterror : styles.error ]}>
                                <View style={{ flexDirection: 'row', marginStart: 20, padding: 4 }}>
                                    <Text style={{ lineHeight: 40, fontSize: 16, color: "#000000" }}>IDR    </Text>
                                    <CurrencyInput 
                                        mode='outlined' 
                                        placeholder="Minimal Rp10.000" 
                                        style={{ fontSize: 16, paddingTop: 0 }} 
                                        value={nominal} 
                                        onChangeValue= {setNominal}
                                        delimiter=","
                                        separator="."
                                        precision={2}
                                        keyboardType={'decimal-pad'} 
                                        onChangeText={(formattedValue) => { console.log(formattedValue) }} />
                                </View>
                                <View style={{ margin: 10}}>
                                    <Text style={{ fontSize: 12, marginStart: 10, textAlign: 'right' }}>*Min Rp10.000-Rp1.000.000 {"&"} Must be a Number</Text>
                                </View>
                            </View>
                        </View>

                        <View style={ styles.containerPilihSourceAccount }>
                            <Text style={ styles.styleTextNominal }>
                                Pilih Source Account anda
                            </Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10,  }}>
                                <RadioButton value="first"
                                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('first')} />
                                <Text style={{ marginStart: 10 }}>{this.state.account1} : {this.state.balanceAccount1}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10,  }}>
                                <RadioButton value="second" 
                                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('second')} /> 
                                <Text style={{ marginStart: 10 }}>{this.state.account2}  : {this.state.balanceAccount2}</Text>
                            </View>

                        </View>

                </View>
                        <View style={ styles.bottom }>
                            <View style={{alignItems:'center', marginTop: 0 }}>
                                <TouchableOpacity
                                    disabled={ !enabled }
                                    // !this.state.nominal && checked == 'first' && checked == 'second'
                                    onPress={() => this.props.navigation.navigate('SecurityPINScreen')}
                                    style={[
                                        styles.styleButtonSignin,
                                            { 
                                                backgroundColor: enabled ? '#4263D5' : '#4263D530'
                                                // this.state.nominal == '' && (checked == 'first' || checked == 'second') 
                                            }
                                        ]}>
                                    <Text style={ styles.styleTextSignIn }>TOP UP</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
            </View>
            );
        }

        return(
            <TopUpScreen />   
            );
        }
    }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    containerInput: {
        marginBottom: 20,
        marginStart: 20,
        marginTop: 0,
    },
    styleTextAccount: {
        fontWeight: '500',
        fontSize: 16,
    },
    containerPilihNominal: {
        marginStart: 0,
        marginTop: 20,
        marginBottom: 30,
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
        marginEnd: 20, 
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
        position: 'relative',
        marginTop: 170,
        marginBottom: 16,
        display: 'flex',
        flex: 1, 
    },
    styleButtonSignin: {
        borderRadius: 20 ,
        width: 320, 
        height: 45, 
    },
    styleTextSignIn: {
        color: '#ffffff', fontSize: 20,
        fontSize: 20, lineHeight: 45, 
        alignItems: 'center', 
        textAlign: 'center', 
    },
    show: {
        backgroundColor: '#ffffff',
    },
    unshow: {
        backgroundColor: '#ffffff',
    }
});