import React, { useState, useRef, useEffect } from 'react';
import { View, PixelRatio, Text, StyleSheet, ImageBackground, StatusBar, Image, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

var bg = require("../img/background.png");
var lg = require("../img/Logo_Balance.png");

const MySignUp = () => {
    const navigation = useNavigation()
    const [displaySosmed, setDisplaySosmed] = useState("flex")
    const [nohp, setNoHp] = useState("")
    const [actionButton, setActionButton] = useState("You dont have an account?")

    const proses = (props) => {
        if (nohp.length > 9 && nohp.length < 13 && nohp.substr(0,1) == '8' && !isNaN(nohp)) {
            navigation.navigate("VerifikasiOTP")
        }
    }

    return(
        <View source={bg} style={ styles.container }>
            {/* <StatusBar backgroundColor='#39cff2'/> */}
            <ImageBackground source={bg} style={ styles.imgb }>
                <StatusBar barStyle="light-content" backgroundColor="#25995b" />
                <View style={ styles.header }>
                    <View style={{ marginTop: 60 }}>
                        <View style={{ marginLeft: 40 }}>
                            <Text style={ styles.judul }>Welcome</Text>
                            <View style={ styles.square }/> 
                        </View>

                        <View style={ styles.containerJudulInput }>
                            <Text style={ styles.textJudul }>What is your phone number?</Text>

                            <View style={ styles.containerInput }>
                                <View style={ styles.openDialogView }>
                                    <Text style={ styles.textIdCountry }>{"+62  |"}</Text>
                                </View>
                                <View style={ styles.txtInput }>
                                    <TextInput style={{ fontSize: 20, margin: 6 }} placeholder="8123456789"
                                        onChangeText={(nohp) => { 
                                            setNoHp(nohp) 
                                        
                                            if (nohp.length > 9 && nohp.length < 13 && nohp.substr(0,1) == '8'
                                                && !isNaN(nohp)) {
                                                setActionButton("Continue")
                                            } else {
                                                setActionButton("You dont have an account?")
                                            }
                                        }}
                                        keyboardType="number-pad" 
                                        onFocus = {() => setDisplaySosmed("none")}
                                        onBlur = {() => setDisplaySosmed("flex")}
                                        value = {nohp}
                                        />
                                </View>
                            </View>
                            
                            {/* privacy policy */}

                        </View>
                    </View>
                </View>

                <View style={ styles.bottom }>
                    <TouchableRipple style={{ alignItems: 'center', marginBottom: 15 }}
                        onPress = {() => proses() } >
                            <Text style={ styles.containerSignUp }>{actionButton}</Text>
                    </TouchableRipple>

                    <View style={{ display: displaySosmed, height: 80, 
                        backgroundColor: '#ffffff', flexDirection: 'column',
                        justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableRipple 
                            style={{ backgroundColor: '#2166b0', width: 200, height: 50,
                            justifyContent: 'center', alignItems: 'center' }}
                            onPress = {() => navigation.navigate("SignUp")}>
                            <Text style={{ color: 'white', textAlign: 'center' }}>Sign Up</Text>
                        </TouchableRipple>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default MySignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imgb : {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch'
    },
    imglogo:  {
        height: 100,
        resizeMode: "contain",
        marginLeft: 70,
        marginTop: 80
    },
    header: {
      flex: 2 
    },
    judul: {
        fontSize: 50,
        color: "white",
        marginTop: 40,  
        fontWeight: 'bold',        
    },
    square: {
        width: 70,
        height: 4,
        backgroundColor: 'white'
    },
    containerJudulInput: {
        marginHorizontal: 40, 
        marginTop: 60
    },
    textJudul: {
        fontSize: 15,
        color: "#F2F2F2",
        fontWeight: 'bold'
    },
    containerInput: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        borderRadius: 0,
        backgroundColor: 'white',
        alignItems: 'center',
        // borderBottomWidth: 1.5,
        marginTop: 20
    },
    openDialogView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        lineHeight: 16,        
    },
    textIdCountry: {
        fontSize: 18,
        color: '#33333350',
    },
    txtInput: {
        width: 300, 
        height: 45, 
        backgroundColor: 'white', 
        marginTop: 10, 
        marginLeft: 5,
        flex: 1,
        height: 50
    },
    containerSignUp: {
        fontSize: 14, 
        color: '#F2F2F2',
        fontWeight: 'bold'
    },
    bottom: {
        flex: 1, 
        justifyContent: 'flex-end', 
        marginBottom: 0
    },
});

