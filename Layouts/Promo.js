import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import scanQris from '../assets/scanQris.png';
import findMerchant from '../assets/findMerchant.png';

export default class Promo extends Component{
    render(){
        return(
            <View style={ styles.container }>
                <ImageBackground style={ styles.styleBackground }>
                    <View style={ styles.containerMenus }>

                        <TouchableOpacity style={ styles.containerPromo1 }>
                            <View style={ styles.containerPromos }>
                                <View style={ styles.containerTextPromo }>
                                    <Text style={ styles.styleTextPromo }>Diskon Rp 10.000</Text>
                                    <Text style={ styles.styleTextExpired }>Expired {":"} 31 October 2020</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={ styles.containerPromo2 }>
                            <View style={ styles.containerPromos }>
                                <View style={ styles.containerTextPromo }>
                                    <Text style={ styles.styleTextPromo }>Diskon Rp 15.000</Text>
                                    <Text style={ styles.styleTextExpired }>Expired {":"} 31 October 2020</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={ styles.containerPromo3 }>
                            <View style={ styles.containerPromos }>
                                <View style={ styles.containerTextPromo }>
                                    <Text style={ styles.styleTextPromo }>Cashback Rp 15.000</Text>
                                    <Text style={ styles.styleTextExpired }>Expired {":"} 31 October 2020</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    styleBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    containerMenus: {
        margin: 20
    },

    containerPromo1: {
        backgroundColor: '#4287f5',
        marginTop: 10,
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 1,
    },
    containerPromo2: {
        backgroundColor: '#4287f5',
        marginTop: 24,
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 1,
    },
    containerPromo3: {
        backgroundColor: '#4287f5',
        marginTop: 24,
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 1,
    },

    containerPromos: {
        width: '100%',
        height: 84,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    },

    containerTextPromo: {        
        flexDirection: 'column'
    },
    styleTextPromo: {
        textAlign: 'left',
        fontSize: 24,
        marginStart: 20,
        marginTop: 10,
        fontWeight: '500'
    },
    styleTextExpired: {
        marginStart: 20,
        marginTop: 8,
        fontSize: 13,
        fontWeight: '500',
    }
});