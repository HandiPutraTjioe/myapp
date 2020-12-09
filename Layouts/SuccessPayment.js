import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import iconSuccess from '../assets/iconSuccess.png';

class Success extends Component{
    render(){
        return(
            <View style={ styles.container }>
                <View style={ styles.containerContent }>
                    <View style={ styles.circle }>
                        <Image style={ styles.styleImg } source={iconSuccess}/>
                    </View>
                    <Text style={ styles.styleText }>PAYMENT SUCCESS</Text>
                </View>

                <View style={ styles.container1 }>
                    <TouchableOpacity
                        style={ styles.containerButton }
                        onPress={() => this.props.navigation.navigate('TheHome')}>
                        <View style={ styles.containerStyleButton }>
                            <Text style={ styles.styleTextButton }>DONE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Success;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    containerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        borderColor: '#7CFFB3',
        borderWidth: 3,
        marginTop: 180,
        borderRadius: 90,
        padding: 5
    },
    styleImg: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 140,
        height: 140
    },
    styleText: {
        fontWeight: '500',
        marginTop: 18,
        fontSize: 18,
    },
    container1: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
        display: 'flex',
        flex: 1,
    },
    containerButton: {
        backgroundColor: '#4287f5',
        borderRadius: 20,
        marginTop: 24,
        width: '84%',
    },
    containerStyleButton: {
        backgroundColor: '#4F74E2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        height: 40,
    },
    styleTextButton: {
        fontWeight: '500',
        color: '#ffffff',
        fontSize: 15,
    },
});