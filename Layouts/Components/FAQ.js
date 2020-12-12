import React , { Component, useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Keyboard, ImageBackground, LayoutAnimation, Platform, UIManager } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class FAQ extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            expanded: false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
    render(){
        return(
            <View>                    
                
                <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                    <Text style={[styles.title]}>{this.props.title}</Text>
                    <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'gray'} />
                </TouchableOpacity>

                <View style={styles.parentHr}/>

                    {
                        this.state.expanded &&
                            <View style={styles.child}>
                                <Text style={ styles.textData }>{this.props.data}</Text>    
                            </View>
                    }          
                
            </View>
        );
    }

    toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded : !this.state.expanded })
    }
}

const styles = StyleSheet.create({
    line: {
        backgroundColor: '#F2F2F2',
        marginStart: 26,
        marginTop: 8,
        width: '85%',
        height: 2,
    },
    title: {
        fontWeight: '500',
        color: '#000000',
        fontSize: 14,
        margin: 0
    },
    row: {
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 25,
        paddingEnd: 20,
        height: 56,
        marginTop: 12,
    },
    parenthr: {
        color: '#ffffff',
        width: '100%',
        height: 1,
    },
    child: {
        backgroundColor: '#C4C4C430',
        padding: 16,
    },
    textData: {
        marginStart: 10,
        lineHeight: 18,
        fontSize: 12,
    },
});