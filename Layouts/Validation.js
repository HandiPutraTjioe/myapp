import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Validation extends Component{
    constructor(props){
        super(props);
        this.state = {
            check: false
        }
    }

    checkBoxTest(){
        this.setState({
            check: !this.state.check
        })
    }
    render(){
        return(
            <View>

            </View>
        );
    }
}