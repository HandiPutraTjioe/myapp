import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default class LocationMerchant extends Component{
    state = {
        merchantName: 'Chatime Lorem Ipsum',
        address: 'lorum ipsumGrand Indonesia East Mall Lantai 3A, Jalan M.H. Thamrin No.28-30, Gondangdia, Menteng, RT.1/RW.5, RT.1/RW.5, Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350',
        hourStart: 10,
        hourEnd: 10,
    }
    render(){
        return(
            <View style={ styles.container }>
                <ScrollView
                    showsVerticalScrollIndicator={true}
                    scrollEventThrottle={14}
                    style={{overflow:'hidden', marginTop: 16, marginBottom: 16, paddingTop: 0, height:100}}>

                <View style={ styles.containerJudul }>
                    <Text style={ styles.styleText }>Choose Location Merchant</Text>
                </View>

                <TouchableOpacity
                    style={ styles.containerBox }
                    onPress={() => this.props.navigation.navigate("InputNominalScreen")}>
                    <View style={ styles.container1 }>
                        <View style={ styles.containerText }>
                            <Text style={ styles.merchant }>{this.state.merchantName}</Text>
                            <Text style={ styles.addr }>{this.state.address}</Text>
                            <View style={ styles.timeSqr }>
                                <Text style={ styles.time }>{this.state.hourStart} AM - {this.state.hourEnd} PM</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ styles.containerBox }
                    onPress={() => this.props.navigation.navigate("InputNominalScreen")}>
                    <View style={ styles.container1 }>
                        <View style={ styles.containerText }>
                            <Text style={ styles.merchant }>{this.state.merchantName}</Text>
                            <Text style={ styles.addr }>{this.state.address}</Text>
                            <View style={ styles.timeSqr }>
                                <Text style={ styles.time }>{this.state.hourStart} AM - {this.state.hourEnd} PM</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ styles.containerBox }
                    onPress={() => this.props.navigation.navigate("InputNominalScreen")}>
                    <View style={ styles.container1 }>
                        <View style={ styles.containerText }>
                            <Text style={ styles.merchant }>{this.state.merchantName}</Text>
                            <Text style={ styles.addr }>{this.state.address}</Text>
                            <View style={ styles.timeSqr }>
                                <Text style={ styles.time }>{this.state.hourStart} AM - {this.state.hourEnd} PM</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ styles.containerBox }
                    onPress={() => this.props.navigation.navigate("InputNominalScreen")}>
                    <View style={ styles.container1 }>
                        <View style={ styles.containerText }>
                            <Text style={ styles.merchant }>{this.state.merchantName}</Text>
                            <Text style={ styles.addr }>{this.state.address}</Text>
                            <View style={ styles.timeSqr }>
                                <Text style={ styles.time }>{this.state.hourStart} AM - {this.state.hourEnd} PM</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

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
    containerJudul: {
        marginStart: 20,
        marginTop: 0,
    },
    styleText: {
        fontWeight: '500',
        fontSize: 16,
    },
    containerBox: {
        backgroundColor: '#4287f5',
        borderRadius: 10,
        height: 160,
        marginStart: 20,
        marginTop: 14,
        marginEnd: 20,
    },
    container1: {
        borderColor: '#000',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        height: 160,
    },
    containerText: {
        marginStart: 20,
        marginTop: 14,
    },
    merchant: {
        fontWeight: '500',
        fontSize: 16,
    },
    addr: {
        lineHeight: 14,
        marginEnd: 14,
        fontSize: 12,
        marginTop: 5,
    },
    timeSqr: {
        backgroundColor: "#EB5757",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 10,
        color: '#fff',
        width: 150,
        height: 26,
    },
    time: {
        color: '#ffffff',
    },
});