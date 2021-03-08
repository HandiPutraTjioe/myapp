import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CurrencyInput from 'react-native-currency-input';

export default class InputPulse extends Component{
    constructor(props){
        super(props);
        this.state = {
            phonenumber: '085347622944', 
            nominal: '',
            account1: 'Zero Balance',
            account2: 'Alfa Balance',
            balanceAccount1: 600000,
            balanceAccount2: 600000,

            nominal1: '5,000',
            nominal2: '10,000',
            nominal3: '15,000',
            nominal4: '20,000',
            nominal5: '50,000',
            nominal6: '75,000',
            nominal7: '100,000',
            nominal8: '125,000',
        };
    }
    
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    
    render(){
        const NominalScreen = () => {
            const [checked, setChecked] = useState('');
            const [checked1, setChecked1] = useState('');            
            const enabled = (checked == 'first' || checked == 'second' || checked == 'third' || checked == 'fourth' || checked == 'fifth' || checked == 'sixth' || checked == 'seventh' || checked == 'eight') && (checked1 == 'chk1' || checked1 == 'chk2');

            return(
                <View style={ styles.container }>

                    <View style={ styles.form }>

                        <View style={ styles.containerInputAccount }> 

                            <View>
                                <Text style={ styles.styleTextSelect }>Select Nominal Pulse</Text>
                            </View> 

                            <View style={{ marginStart: 0, }}>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20,  }}>
                                    <RadioButton value="first"
                                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                                        onPress={() => setChecked('first')} />
                                    <View style={{ marginEnd: 60 }}>
                                        <Text style={{ marginStart: 10, fontSize: 18 }}>{this.state.nominal1}</Text>
                                    </View>
                                    
                                    <RadioButton value="second" 
                                        status={ checked === 'second' ? 'checked' : 'unchecked' }
                                        onPress={() => setChecked('second')} /> 
                                    <Text style={{ marginStart: 10, fontSize: 18 }}>{this.state.nominal2}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10,  }}>
                                    <RadioButton value="third" 
                                        status={ checked === 'third' ? 'checked' : 'unchecked' }
                                        onPress={() => setChecked('third')} /> 
                                    <View style={{ marginEnd: 50 }}>
                                        <Text style={{ marginStart: 10, fontSize: 18 }}>{this.state.nominal3}</Text>
                                    </View>

                                    <RadioButton value="fourth" 
                                        status={ checked === 'fourth' ? 'checked' : 'unchecked' }
                                        onPress={() => setChecked('fourth')} /> 
                                    <Text style={{ marginStart: 10, fontSize: 18 }}>{this.state.nominal4}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10,  }}>
                                    <RadioButton value="fifth" 
                                        status={ checked === 'fifth' ? 'checked' : 'unchecked' }
                                        onPress={() => setChecked('fifth')} /> 
                                    <View style={{ marginEnd: 50, fontSize: 18 }}>
                                        <Text style={{ marginStart: 10, fontSize: 18 }}>{this.state.nominal5}</Text>
                                    </View>

                                    <RadioButton value="sixth" 
                                        status={ checked === 'sixth' ? 'checked' : 'unchecked' }
                                        onPress={() => setChecked('sixth')} /> 
                                    <Text style={{ marginStart: 10, fontSize: 18 }}>{this.state.nominal6}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10,  }}>
                                    <RadioButton value="seventh" 
                                        status={ checked === 'seventh' ? 'checked' : 'unchecked' }
                                        onPress={() => setChecked('seventh')} /> 
                                    <View style={{ marginEnd: 41 }}>
                                        <Text style={{ marginStart: 10, fontSize: 18 }}>{this.state.nominal7}</Text>
                                    </View>

                                    <RadioButton value="eight" 
                                        status={ checked === 'eight' ? 'checked' : 'unchecked' }
                                        onPress={() => setChecked('eight')} /> 
                                    <Text style={{ marginStart: 10, fontSize: 18 }}>{this.state.nominal8}</Text>
                                </View>

                            </View> 

                            <View>
                                <Text style={ styles.styleTextSelect }>Select Source Account</Text>
                            </View> 

                            <View style={{ marginStart: 0,  }}>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 14,  }}>
                                    <RadioButton value="chk1"
                                        status={ checked1 === 'chk1' ? 'checked' : 'unchecked' }
                                        onPress={() => setChecked1('chk1')} />
                                    <Text style={{ marginStart: 10, fontSize: 18 }}>{this.state.account1} : {this.state.balanceAccount1}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10,  }}>
                                    <RadioButton value="chk2" 
                                        status={ checked1 === 'chk2' ? 'checked' : 'unchecked' }
                                        onPress={() => setChecked1('chk2')} /> 
                                    <Text style={{ marginStart: 10, fontSize: 18 }}>{this.state.account2}  : {this.state.balanceAccount2}</Text>
                                </View>

                            </View>                 
                            
                            <View style={{  justifyContent: 'flex-end', position: 'relative', marginBottom: 14, display: 'flex', flex: 1,  }}>
                                <View style={{ alignItems:'center', marginTop: 200, marginBottom: 40 }}>
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
                            </View>

                        </View>
                    </View>
                </View>
            );
        }
        return(
            <NominalScreen />
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
    },
    styleTextAccount: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 16,
    },
    styleTextSelect: {
        fontWeight: 'bold',
        marginTop: 30,
        fontSize: 16,
    },
    form:{
        justifyContent: 'center',
        position: 'absolute',
        alignItems: 'center',
        marginBottom: 10,        
        marginLeft: 8,
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
    square: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth:1, 
        marginTop: 20,
        height: 60,
        width: 140,
    },
    square1: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 10,
        marginLeft: 20,
        borderWidth: 1, 
        marginTop: 20,
        height: 60,
        width: 140,
    },
    containerBtnSearch: {
        justifyContent: 'center',
        borderRadius: 20,
        width: 310,
        height: 40,
    },
});