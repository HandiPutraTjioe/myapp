import { CheckBox, Radio } from 'native-base';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CurrencyInput from 'react-native-currency-input';

class InputNominal extends Component{
    state = {
        merchantName: 'Chatime Lorem Ipsum',
        address: 'lorum ipsumGrand Indonesia East Mall Lantai 3A, Jalan M.H. Thamrin No.28-30, Gondangdia, Menteng, RT.1/RW.5, RT.1/RW.5, Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350',
        hourStart: 10,
        hourEnd: 10,
        nominal: '',
        account1: 'Zero Balance',
        account2: 'Alfa Balance',
        balanceAccount1: 600000,
        balanceAccount2: 600000,
    }
    
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    
    render(){
        const NominalScreen = () => {
            
            const [checked, setChecked] = useState('');
            const [nominal, setNominal] = useState('');
            const enabled = nominal > 9999 && nominal < 1000001 && !isNaN(nominal) || checked == 'first' && checked == 'second';
            return(
                <View style={ styles.container }>

                {/* <ScrollView
                    showsVerticalScrollIndicator={true}
                    scrollEventThrottle={14}
                    style={{overflow:'hidden', marginTop: 16, marginBottom: 16, paddingTop: 0, height:100}}> */}

                    <TouchableOpacity
                        style={ styles.containerBox }
                        onPress={() => null}>
                        <View style={ styles.container1 }>
                            <View style={ styles.containerText }>
                                <Text style={ styles.merchant }>{this.state.merchantName}</Text>
                                <Text style={ styles.addr }>{this.state.address}</Text>
                                <View style={ styles.timeSqr }>
                                    <Text style={ styles.time }>{this.state.hourStart} AM - {this.state.hourEnd} PM</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={ styles.containerJudul }>
                        <Text>Input Nominal</Text>
                    </View> 

                    <View style={{ marginStart: 20, borderColor: '#000000', borderWidth: 1, height: 50, marginTop: 10, marginEnd: 20, borderRadius: 10,  marginBottom: 20, }}>
                        <View style={{ flexDirection: 'row', marginStart: 20, }}>
                            <Text style={{ lineHeight: 44, fontSize: 16, paddingTop: 2, color: "#000000" }}>IDR    </Text>
                            <CurrencyInput 
                                mode='outlined' 
                                placeholder="Input Nominal" 
                                style={{ fontSize: 16, paddingTop: 2 }} 
                                value={nominal} 
                                onChangeValue= {setNominal}
                                delimiter=","
                                separator="."
                                precision={2}
                                keyboardType={'decimal-pad'} 
                                onChangeText={(formattedValue) => { console.log(formattedValue) }}
                                />
                        </View>
                        <Text style={{ fontSize: 12, marginTop: 10, textAlign: 'right' }}>*min. IDR 10.000</Text>
                        {/* <Text style={{ fontSize: 12, marginTop: 10, textAlign: 'left' }}>{nominal}</Text>                         */}
                    </View>

                    <View style={ styles.containerJudul }>
                        <Text>Select Source Account</Text>
                    </View> 

                    <View style={{ marginStart: 20,  }}>

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
                    
                    <TouchableOpacity
                        style={ styles.containerBox1 }
                        onPress={() => this.props.navigation.navigate("PromoScreen")}>
                        <View style={ styles.container2 }>
                            <View style={ styles.containerText1 }>
                                <Text style={{ textAlign: 'center' }}>PROMO {"&"} CASHBACK</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                    <View style={{ alignItems:'center', marginTop: 84, marginBottom: 0 }}>

                        <TouchableOpacity
                            disabled={ !enabled }
                            onLongPress={() => this.props.navigation.navigate('SecurityPINScreen')}
                            style={[
                                styles.containerBtnSearch,
                                { 
                                    backgroundColor: enabled ? '#4263D5' : '#4263D530'
                                }
                                ]}>
                            <Text style={{ textAlign: 'center', fontSize: 20, lineHeight: 43, color: '#ffffff', fontSize: 18 }}>NEXT</Text>
                        </TouchableOpacity>

                    </View>

                {/* </ScrollView> */}
            </View>
            );
        }
        return(
            <NominalScreen />
        );
    }
}

export default InputNominal;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    containerJudul: {
        marginStart: 20,
        marginTop: 20,
    },
    styleText: {
        fontWeight: '500',
        fontSize: 16,
    },
    containerBox: {
        backgroundColor: '#4287f5',
        borderRadius: 10,
        marginStart: 20,
        marginTop: 90,
        marginEnd: 20,
        height: 160,
    },
    containerBox1: {
        backgroundColor: '#4287f5',
        borderRadius: 10,
        marginStart: 20,
        marginTop: 14,
        marginEnd: 20,
        height: 50,
    },
    container1: {
        backgroundColor: '#fff',
        borderColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        height: 160,
    },
    container2: {
        backgroundColor: '#fff',
        borderColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        height: 50,
    },
    containerText: {
        marginStart: 20,
        marginTop: 14,
    },
    containerText1: {
        marginStart: 0,
        marginTop: 14,
    },
    merchant: {
        fontWeight: '500',
        fontSize: 16,
    },
    addr: {
        lineHeight: 14,
        marginEnd: 14,
        fontSize: 12,
        marginTop: 5,
    },
    timeSqr: {
        backgroundColor: "#EB5757",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 10,
        color: '#fff',
        width: 150,
        height: 26,
    },
    time: {
        color: '#ffffff',
    },
    form:{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginStart: 80,
        marginTop: 200,
        height: 100,
        width: 200,
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
        width: 310,
        height: 55,
        margin: 10,
        flex: 1,
    },
    textinput:{
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center',
        color: '#424242',
        borderRadius: 20,
        paddingLeft: 10,
        flex: 1,
    },
    bottom: {
        justifyContent: 'flex-end', 
        position: 'relative',
        marginBottom: 14,
        display: 'flex',
        flex: 1, 
    },
    containerBtnSearch: {
        justifyContent: 'center',
        borderRadius: 20,
        width: 310,
        height: 40,
    },
});