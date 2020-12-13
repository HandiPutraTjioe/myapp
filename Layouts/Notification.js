import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();

var hours = new Date().getHours(); 
var min = new Date().getMinutes(); 
var sec = new Date().getSeconds();

export default class Notification extends Component{
    constructor(props){
        super(props);
        this.state = {
            dateNow: date + '-' + month + '-' + year,
            timeNow: hours +':'+ min +':'+ sec,
        };
    }
    render(){
        return(
            <View style={ styles.container }>

                <ScrollView
                    showsVerticalScrollIndicator={true}
                    scrollEventThrottle={14}
                    style={{ overflow: 'hidden', marginTop: 0, marginBottom: 0, }}>

                    <View style={ styles.rectangle }>
                        <View style={ styles.content }>
                            <View style={ styles.containerText }>
                                <Text style={ styles.styleTime }>{this.state.dateNow}{"/"}{this.state.timeNow}</Text>
                                <Text style={ styles.styleText }>Notification Notification Notification Notification Notification Notification Notification</Text>
                            </View>
                        </View>
                    </View>
                    <View style={ styles.rectangle }>
                        <View style={ styles.content }>
                            <View style={ styles.containerText }>
                                <Text style={ styles.styleTime }>{this.state.dateNow}{"/"}{this.state.timeNow}</Text>
                                <Text style={ styles.styleText }>Notification Notification Notification Notification Notification Notification Notification</Text>
                            </View>
                        </View>
                    </View> 
                    <View style={ styles.rectangle }>
                        <View style={ styles.content }>
                            <View style={ styles.containerText }>
                                <Text style={ styles.styleTime }>{this.state.dateNow}{"/"}{this.state.timeNow}</Text>
                                <Text style={ styles.styleText }>Notification Notification Notification Notification Notification Notification Notification</Text>
                            </View>
                        </View>
                    </View>
                    <View style={ styles.rectangle }>
                        <View style={ styles.content }>
                            <View style={ styles.containerText }>
                                <Text style={ styles.styleTime }>{this.state.dateNow}{"/"}{this.state.timeNow}</Text>
                                <Text style={ styles.styleText }>Notification Notification Notification Notification Notification Notification Notification</Text>
                            </View>
                        </View>
                    </View>
                    <View style={ styles.rectangle }>
                        <View style={ styles.content }>
                            <View style={ styles.containerText }>
                                <Text style={ styles.styleTime }>{this.state.dateNow}{"/"}{this.state.timeNow}</Text>
                                <Text style={ styles.styleText }>Notification Notification Notification Notification Notification Notification Notification</Text>
                            </View>
                        </View>
                    </View>
                    <View style={ styles.rectangle }>
                        <View style={ styles.content }>
                            <View style={ styles.containerText }>
                                <Text style={ styles.styleTime }>{this.state.dateNow}{"/"}{this.state.timeNow}</Text>
                                <Text style={ styles.styleText }>Notification Notification Notification Notification Notification Notification Notification</Text>
                            </View>
                        </View>
                    </View>
                    <View style={ styles.rectangle }>
                        <View style={ styles.content }>
                            <View style={ styles.containerText }>
                                <Text style={ styles.styleTime }>{this.state.dateNow}{"/"}{this.state.timeNow}</Text>
                                <Text style={ styles.styleText }>Notification Notification Notification Notification Notification Notification Notification</Text>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    rectangle: {
        borderColor: '#f5f4f3',
        borderWidth: 1,
    },
    content: {
        flexDirection: 'row',
        margin: 20,
    },
    containerText: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginStart: 4,        
    },
    styleTime: {
        fontWeight: 'bold',
        color: '#FF6347',
        marginBottom: 4,
        fontSize: 14,
    },
    styleText: {
        position: 'relative',
        fontSize: 14.5,
    }
});