import React, { Component, useState, useRef, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const VerifikasiOTP = () => {
    const navigation = useNavigation()
    let textInput = useRef(null)
    let clockCall = null
    const lengthInput = 4;
    const defaultCountdown = 5;
    const [internalVal, setInternalVal] = useState("")
    const [countdown, setCountdown] = useState(defaultCountdown)
    const [enableResend, setEnableResend] = useState(false)

    useEffect(() => {
        clockCall = setInternalVal(() => {
            decrementClock();
        }, 1000)
        return () => {
            clearInterval(clockCall)
        }
    })

    const decrementClock = () => {
        if (countdown === 0) {
            setEnableResend(true)
            setCountdown(0)
            clearInterval(clockCall)
        } else {
            setCountdown(countdown -1)
        }
    }

    const onChangeText = (val) => {
        setInternalVal(val)
        // if (val.length === lengthInput) {
        //     navigation.navigate('SecurityPage')
        // }
    }

    const onResendOTP = () => {
        if (enableResend) {
            setCountdown(defaultCountdown)
            setEnableResend(false)
            clearInterval(clockCall)
            clockCall = setInternalVal(() => {
                decrementClock()
            }, 1000)
        }
    }

    const onChangeNumber = () => {
        setInternalVal("")
    }

    useEffect(() => {
        textInput.focus()
    },[])    

    return(
        <View style={ styles.container }>
            <KeyboardAvoidingView
                keyboardVerticalOffset={50}
                behavior={'padding'}
                style={ styles.containerAvoiddingView }>
                
                <Text style={ styles.textTitle }>
                    {"Input your OTP code sent via Email"}
                </Text>

                <View>
                    <TextInput
                        ref={(input) => textInput = input}
                        onChangeText={onChangeText}
                        style={{width: 0, height: 0}}
                        value={internalVal}
                        maxLength={lengthInput}
                        returnKeyType="done"
                        keyboardType="numeric"
                    />
                    <View style={ styles.containerInput }>
                    {
                        Array(lengthInput).fill().map((data, index) => (
                            <View key={index} style={ styles.cellView } >
                                <Text style={ styles.cellText }
                                    onPress={() => textInput.focus()}>
                                        { internalVal && internalVal.length > 0 ? internalVal[index] : "" }
                                </Text>
                        </View>
                        ))
                    }
                    </View>
                </View>

                <View style={ styles.bottomView }>
                    <TouchableOpacity onPress={onChangeNumber}>
                        <View style={ styles.btnChangeNumber }>
                            <Text style={ styles.textChange }>Change Number</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onResendOTP}>
                        <View style={ styles.btnResend }>
                            <Text style={[ styles.textResend,
                                {
                                    color: enableResend ? '#234db7' : 'gray'
                                } ]}>Resend OTP ({countdown})</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

export default VerifikasiOTP;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerAvoiddingView: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    textTitle: {
        marginTop: 50,
        marginBottom: 50,
        fontSize: 16
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cellView: {
        paddingVertical: 11,
        width: 40,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1.5
    },
    cellText: {
        textAlign: 'center',
        fontSize: 16,
    },
    bottomView: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 50,
        alignItems: 'flex-end'
    },
    btnChangeNumber: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    textChange: {
        color: '#234db7',
        alignItems: 'center',
        fontSize: 15
    },
    btnResend: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    textResend: {
        alignItems: 'center',
        fontSize: 15
    }
});
