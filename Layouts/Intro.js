import { LinearGradient } from 'expo-linear-gradient';
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, StatusBar, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

var bg = require("../img/bgbaru.png");
var lg = require("../img/Logo_Balance.png");

const Intro = () => {
    const navigation = useNavigation()
    return(
        <View>
            <StatusBar barStyle="light-content" />
            <ImageBackground source={bg} style={ styles.imgb }>
                <View style={ styles.header }>
                    <Image source={lg} style={ styles.imglogo }/>
                </View>

                <View style={ styles.footer }>
                    <Text style={ styles.text1 }>
                        STAY CONNECTED WITH{"\n"}
                        EVERYONE!
                    </Text>
                    <Text style={ styles.text2 }>Sign Up first</Text>
                    <View style={ styles.button }>
                        <TouchableOpacity
                            onPress={()=> navigation.navigate("TheSignIn")}>
                            <LinearGradient
                                colors={['#5db8fe','#39cff2']}
                                style={ styles.signIn }>
                                    <Text style={ styles.textSign }>Get Started {'>'}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Intro;

// export default class Intro extends Component{
//     render(){
//         return(
//             <View>
//                 <StatusBar barStyle="light-content" />
//                 <ImageBackground source={bg} style={ styles.imgb }>
//                     <View style={ styles.header }>
//                         <Image source={lg} style={ styles.imglogo }/>
//                     </View>

//                     <View style={ styles.footer }>
//                         <Text style={ styles.text1 }>
//                             STAY CONNECTED WITH{"\n"}
//                             EVERYONE!
//                         </Text>
//                         <Text style={ styles.text2 }>Sign Up first</Text>
//                         <View style={ styles.button }>
//                             <TouchableOpacity
//                                 onPress={()=> navigation.navigate("TheSignUp")}>
//                                 <LinearGradient
//                                     colors={['#5db8fe','#39cff2']}
//                                     style={ styles.signIn }>
//                                         <Text style={ styles.textSign }>Get Started {'>'}</Text>
//                                 </LinearGradient>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </ImageBackground>
//             </View>
//         );
//     }
// }

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imgb : {
        height: '100%',
        width: '100%',
    },
    imglogo:  {
        height: 100,
        resizeMode: "contain"
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 30
    },
    text1: {
        marginLeft: 20,
        marginTop: 5,
        fontSize: 23,
        fontWeight: 'bold'
    },
    text2: {
        marginTop: 10,
        marginLeft: 20,
        fontSize: 14
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 16
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,        
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});