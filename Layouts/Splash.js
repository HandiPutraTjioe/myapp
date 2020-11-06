import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

var bg = require("../img/background.png");
var lg = require("../img/Logo_Balance.png");

const Splash = () => {
    const navigation = useNavigation()
    setTimeout(() => {
        navigation.navigate('Intro');
    }, 3000);
    return(
        <View style={ styles.container }>
            <ImageBackground source={bg} style={ styles.imgb }>
                <View style={ styles.header }>
                    <Image source={lg} style={ styles.imglogo }/>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Splash;

// export default class Splash extends Component{
//     constructor(props){
//         super(props);

//         setTimeout(() => {
//             navigation.navigate('TheSplash');
//         }, 3000);
//     }
//     render(){
//         return(
//             <View style={ styles.container }>
//                 <ImageBackground source={bg} style={ styles.imgb }>
//                     <View style={ styles.header }>
//                         <Image source={lg} style={ styles.imglogo }/>
//                     </View>
//                 </ImageBackground>
//             </View>
//         );
//     }
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgb : {
        height: '100%',
        width: '100%',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imglogo:  {
        height: 100,
        resizeMode: "contain"
    }
});