import React , { Component, useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableRipple } from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';

class faq extends Component{
    render(){
        return(
            <View style={ styles.container }>
                <Text>FAQ</Text>
            </View>
        );
    }
}

export default faq;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        paddingStart: 24,
    },
});