import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Icon, Image } from 'react-native';
import { Button, Content, Header } from 'native-base';
import { Avatar, TouchableRipple } from 'react-native-paper';

import ProfilePicture from '../assets/aelwen1.jpg'
import profile_background from '../assets/background_profile.png';

import icon_edit_profile from '../assets/icon_edit_profile.png';
import icon_faq from '../assets/icon_faq.png';
import icon_cs from '../assets/icon_cs.png';
import arrow from '../assets/arrow.png';
import Footers from './Footers';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
          name: 'LI',
          balance : '600.000',
          user_name : 'Aelwen',
          user_email : 'loremipsum@gmail.com',
          phonenumber : '081234567890',
          total_accounts : '2',
        }
    }

    render(){
        return(
            <View style={ styles.container }>
                <ImageBackground source={profile_background} style={ styles.imgb }>
                    <Content>
                        <View style={ styles.containerJudul }>
                            <Text style={ styles.styleContainerJudul }>Profile</Text>
                        </View>
                        <View style={ styles.containerAvatar }>
                            <Avatar.Image source={ProfilePicture} size={80} style={ styles.containerStyleAvatar } />
                            <View style={ styles.containerProfileData }>
                                <Text style={{color:'white', fontSize:26, fontWeight:'bold', marginStart: 18, flexDirection: 'column'}}>{this.state.user_name}</Text>
                                <Text style={{color:'white', marginStart: 18 }}>{this.state.user_email}</Text>
                                <Text style={{color:'white', marginStart: 18 }}>Total accounts: {this.state.total_accounts}</Text>
                            </View>
                        </View>
                    </Content>
                </ImageBackground>
                
                <View style={ styles.containerProfileMenuAccount }>
                    <View style={ styles.styleMenuAccount }>
                        <Text style={ styles.styleMenuTextAccount }>Account</Text>
                    </View>

                    <View style={ styles.containerAccount }>
                        <TouchableOpacity style={ styles.styleButtonEditProfile }
                            onPress={() => this.props.navigation.navigate('EditProfileScreen')}>
                            <Image source={icon_edit_profile} style={ styles.styleImageEditProfile }/>
                            <Text style={ styles.styleTextEditProfile }>Edit Profile</Text>
                            <Image source={arrow} style={{ marginTop: 14, marginEnd: 20, width: 14, height: 14, marginEnd: 30, resizeMode: 'contain' }}/>
                        </TouchableOpacity>
                    </View>
                </View>         

                <View style={ styles.containerProfileMenuOtherInfo }>
                    <View style={ styles.styleMenuOtherInfo }>
                        <Text style={ styles.styleTextOtherInfo }>Other Info</Text>
                    </View>

                    <View style={ styles.containerOtherInfo }>
                        <TouchableOpacity style={ styles.styleButtonFAQ }
                            onPress={() => this.props.navigation.navigate('FAQScreen')}>
                            <Image source={icon_faq} style={{ marginTop: 11, marginStart: 22, width: 20, height: 20, marginEnd: 20, resizeMode: 'contain' }}/>
                            <Text style={{ lineHeight: 40, fontSize: 16, marginEnd: '66%' }}>FAQ</Text>
                            <Image source={arrow} style={{ marginTop: 14, marginEnd: 20, width: 14, height: 14, marginEnd: 30, resizeMode: 'contain' }}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ backgroundColor: '#ffffff', height: 50, flexDirection: 'row' }}
                            onPress={() => this.props.navigation.navigate('CustomerServiceScreen')}>
                            <Image source={icon_cs} style={{ marginTop: 18, marginStart: 21, width: 20, height: 20, marginEnd: 20, resizeMode: 'contain' }}/>
                            <Text style={{ lineHeight: 54, fontSize: 16, marginEnd: '40%'}}>Customer Service</Text>
                            <Image source={arrow} style={{ marginTop: 14, marginEnd: 19, width: 14, height: 14, marginEnd: 30, resizeMode: 'contain' }}/>
                        </TouchableOpacity>
                    </View>
                </View>         

                {/* <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity
                    style={ styles.buttonSignOut }
                    onPress={() => this.props.navigation.navigate('SignIn')} >
                    <View style={ styles.containerButtonSignOut }>
                            <Text style={ styles.styleTextSignOut }>SIGN OUT</Text>
                    </View>
                </TouchableOpacity>
                </View> */}

                <View style={{ alignItems:'center', marginTop: 30, marginBottom: 0, justifyContent: 'center', alignItems: 'center', }}>
                    <TouchableOpacity
                        onLongPress={() => this.props.navigation.navigate('SignIn')}
                        style={ styles.containerSubmit } >
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ textAlign: 'center', lineHeight: 42, color: '#ffffff', fontSize: 18, color: '#EB5757' }}>SIGN OUT</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Content>
                </Content>
                <Footers />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgb : {
        width: '100%',
        height: 210,
    },
    containerJudul: {
        marginStart: 24,
        marginTop: 50,
    },
    styleContainerJudul: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
    },
    containerAvatar: {
        flexDirection: 'row',
        marginLeft: 25, 
        marginTop: 10, 
        marginTop: 28,
    },
    containerStyleAvatar: {
        backgroundColor:'white',
    },
    containerProfileData: {
        marginStart: 6,
    },
    containerProfileMenuAccount: {
        backgroundColor: 'white',
        width: '100%',
        height: 124,
    },
    styleMenuAccount: {
        marginStart: 24, 
        marginTop: 20,
    },
    styleMenuTextAccount: {
        fontWeight: '500',
        fontSize: 20, 
    },
    styleButtonEditProfile: {
        backgroundColor: '#ffffff', 
        flexDirection: 'row',
        height: 50, 
    },
    styleImageEditProfile: {
        resizeMode: 'contain',
        marginStart: 20, 
        marginTop: 10, 
        marginEnd: 20, 
        height: 20, 
        width: 20, 
    },
    styleTextEditProfile: {
        marginEnd: '53%', 
        lineHeight: 38, 
        fontSize: 16,
    },
    containerAccount: {
        marginTop: 14,
    },
    containerProfileMenuOtherInfo: {
        backgroundColor: 'white',
        width: '100%',
        height: '27%',
        marginTop: 6,
    },
    styleMenuOtherInfo: {
        marginStart: 24, 
        marginTop: 20,
    },
    styleTextOtherInfo: {
        fontWeight: '500',
        fontSize: 20, 
    },
    containerOtherInfo: {
        marginTop: 14,
    },
    styleButtonFAQ: {
        backgroundColor: '#ffffff', 
        flexDirection: 'row',
        height: 50, 
    },
    buttonSignOut: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        borderColor: '#ffffff',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 34,
        width: '100%', height: 40,
    },
    containerButtonSignOut: {
        justifyContent: 'center',
        borderColor: '#EB5757',
        borderStyle: "solid",
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 0,
        borderWidth: 1,
    },
    styleTextSignOut: {
        fontWeight: 'bold',
        color: '#EB5757',
    },
    containerSubmit: {
        backgroundColor: '#ffffff10', 
        width: 310, height: 45, 
        borderRadius: 20,
        borderColor: '#EB5757',
        borderWidth: 1,
    },
});