import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';

class TabFooters extends Component{
    render(){
        const Footers = () => {
            const navigation = useNavigation()
            return(
                <Footer>
                    <FooterTab style={{ backgroundColor: '#ffffff' }}>
                        <Button vertical onPress={() => navigation.navigate("Home")}>
                            <Icon active name="ios-home" />
                            <Text style={{ fontWeight: 'bold' }}>Home</Text>
                        </Button>
                        <Button vertical onPress={() => navigation.navigate("MenuHome")}>
                            <Icon active name="ios-cash" />
                            <Text style={{ fontWeight: 'bold' }}>Find Merchant</Text>
                        </Button>
                        <Button vertical onPress={() => navigation.navigate("MenuHome")}>
                            <Icon active name="ios-person" />
                            <Text style={{ fontWeight: 'bold' }}>Profile</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }

        return(
            <Footers />
        );
    }
}

export default TabFooters;