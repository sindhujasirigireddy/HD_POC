import React, {Component} from 'react'
import {Text, View, StyleSheet, Image,TouchableOpacity, KeyboardAvoidingView, Button, ImageBackground,TouchableHighlight,  TextInput, Alert} from 'react-native'

export default class DashBoardScreen extends Component{
    static navigationOptions = {
        title:"Login",
    };
    render() {
        var {navigate} = this.props.navigation;
        return (<Text>This is dash board</Text>);
    }
}