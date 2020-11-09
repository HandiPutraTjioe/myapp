import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

var bg = require("../../img/background.png");
var lg = require("../../img/Logo_Balance.png");

class MenuHome extends Component{
    render(){
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
}

export default MenuHome;

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
        height: 30,
        resizeMode: "contain",
        marginLeft: 70,
        marginTop: 40
    },
    header: {
        flex: 2 
    },
});