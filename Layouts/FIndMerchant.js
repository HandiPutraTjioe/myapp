import React, { Component, useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { useNavigation } from '@react-navigation/native';

export default class FindMerchant extends Component{
    state = {
        merchantName: '',
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    onClear = () => {
        this.setState({
            merchantName: ''
        })
    }
    render(){
        const { merchantName } = this.state;
        const enabled = merchantName.length > 2 && merchantName.length < 20;

        return(
            <View style={styles.container}>
                <View>
                    <Text style={ styles.containerJudul }>
                        Carilah merchant dan Lakukan transaksi  {'\n'}
                        pembayaran secara offsite dengan QRIS di merchant yang tersedia
                    </Text>
                </View>

                <View style={styles.form}>

                    <View style={styles.input}>
                        <Icon name='home' size={30} color="#4287f5" style={{alignItems:'center', justifyContent:'center', padding:12}}/>
                            <TextInput style={styles.textinput} mode='outlined' placeholder="Merchant Name" onChangeText={val => this.onChangeText('merchantName', val)}>
                                <Text>{this.state.merchantName}</Text>
                            </TextInput>
                    </View>
                    
                    <View style={{alignItems:'center', marginTop: '174%'}}>
                        <TouchableOpacity
                            disabled={ !enabled }
                            onPress={() => null}
                            // this.props.navigation.navigate('SignIn')
                            style={[
                                styles.containerBtnSearch,
                                { 
                                    backgroundColor: enabled ? '#4263D5' : '#4263D530'
                                }
                                ]}>
                            <Text style={{ textAlign: 'center', fontSize: 20, lineHeight: 43, color: '#ffffff', fontSize: 18 }}>SEARCH</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginStart: 0, marginTop: 20, marginBottom: 20, justifyContent: 'center' }}>
                        <TouchableOpacity 
                            onPress={this.onClear}>
                            <Text style={ styles.styleTextClear }>Clear</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      paddingStart: 24,
      backgroundColor: '#ffffff'
  },
  
  containerJudul: {
      flex: 1,
      marginStart: -3,
      marginEnd: 20,
      fontSize: 12,
      fontFamily: 'Roboto',
      letterSpacing: 1,
      lineHeight: 20,
      top: 20,
  },
  
  form:{
      flex:1,
      width:200,
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      top:100
  },
  
  image:{
      position:'absolute',
      top:-50,
      left:-45
  },
  
  input: {
      flex: 1,
      flexDirection: 'row',
      width: 310,
      height: 55,
      backgroundColor: 'white',
      margin: 10,
      color: '#90dae1',
      borderRadius: 20,
      fontSize: 18,
      fontWeight: '500',
      shadowColor:'black',
      shadowOffset:{width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
  
    textinput:{
      flex: 1,
      paddingLeft: 10,
      backgroundColor: 'white',
      color: '#424242',
      alignItems:'center',
      justifyContent:'center',
      borderRadius: 20,
    },
  
    bottom: {
      flex: 1, 
      justifyContent: 'flex-end', 
      marginBottom: 14,
      display: 'flex',
      position: 'relative'
    },

    containerBtnSearch: {
        width: 310,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
    },
  });