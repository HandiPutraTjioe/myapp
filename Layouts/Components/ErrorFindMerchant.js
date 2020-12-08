import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import error from '../../assets/error.png';

export default class errorFindMerchant extends Component{
    render(){
        return(
            <View style={ styles.container }>
                <View style={ styles.containerImage }>
                    <Image source={ error }/>
                    <Text style={ styles.containerText }>Sorry, Merchant is not found..</Text>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={ styles.containerButton }
                        onPress={() => this.props.navigation.navigate("FindMerchantScreen")}>
                        <Text style={ styles.containerTextButton }>TRY AGAIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff',
    },
    containerImage: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 150,
    },
    containerText: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        color: '#828282',
        textAlign: 'center',
        lineHeight: 20,
    },
    containerButton: {
        backgroundColor: '#4263D5',
        borderColor: '#4263D550',
        width: 145,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTextButton: {
        color: '#ffffff',
        fontSize: 15
    },
});