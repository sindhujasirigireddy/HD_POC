import React, {Component} from 'react'
import {Text, View, StyleSheet, Image,TouchableOpacity, KeyboardAvoidingView, Button, ImageBackground,TouchableHighlight,  TextInput, Alert} from 'react-native'

export default class LoginScreen extends Component{
    static navigationOptions = {
        title:"Login",
    };
    constructor(props){
        super(props)
    
        this.state = {
          username: '',
          password: '',
          isLoginSuccess: false,
        }
      }

    handlePress = async () => {

        var details = {
            'userName': this.state.username,
            'password': this.state.password,
            'grant_type': 'password'
        };
        
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        
        fetch('http://172.16.0.221:61758/authtoken', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: formBody
        })
          .then((response) => {
              if(response.status==200){
            this.setState({isLoginSuccess:true});
          }else{
            this.setState({isLoginSuccess:false});
          }
          response.json()})
          .then((responseJson) => {
              if(this.state.isLoginSuccess){
       Alert.alert(JSON.stringify(responseJson));
       var {navigate} = this.props.navigation;
       navigate('DashBoardScreen');
    }else{
       Alert.alert("Login failed");
    }
          })
          .catch((error) => {
            console.error(error);
          });
      }

render() {
    var {navigate} = this.props.navigation;
    return (
 <View style={styles.container}>
    <ImageBackground source={{uri:'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/yI9FRzo/animated-collapsing-crumbling-wall-of-white-boxes-with-reflective-surface-2-transparent-background-alpha-channel-embedded-with-hd-png-file-good-for-video-transition-or-similar-effects-very-easy-to-put-any-video-or-image-in-the-background_v1ie0fg7__S0000.jpg'}} style={styles.container}>
        <View style={styles.formTitleContainer}>
        <Text style={styles.textHeader}>ggk tech</Text>
        <Text style={[styles.textHeader, styles.textColorBlack]}>HD++</Text>
        </View>
        <View style={{flex:7}}>
        <Text style={styles.questionHeader}>USERNAME</Text>
       <TextInput 
        placeholderTextColor = '#cacaca'
        style= {styles.input}
        placeholder = "E.g. Johndo@gmail.com"
 returnKeyType="next"
 onSubmitEditing={()=> this.passWordInput.focus()}
 keyboardType = "email-address"
 autoCorrect = {false}
 autoCapitalize = "none"
 onChangeText={(text) => this.setState({username:text})}
        />
   <Text style={styles.questionHeader}>PASSWORD</Text>
       <TextInput 
        placeholderTextColor = '#cacaca'
        style = {styles.input}
 placeholder = "**********"
 secureTextEntry
 onChangeText={(text) => this.setState({password:text})}
 returnKeyType = "go"
 ref = {(input)=>this.passWordInput = input}
        />
        <Text style={styles.textHeading} onPress={() => navigate('ForgotPassWordPatientID')}> FORGOT PASSWORD? </Text>
        
        <TouchableHighlight style={ styles.touchableHightlight } underlayColor={'transparent'} onPress={()=>this.handlePress()}>
           <Text style= {[ styles.button, styles.buttonLight ]}>   Login   </Text>
        </TouchableHighlight>
        </View>
    </ImageBackground>
</View>
    );
}
}

const styles = StyleSheet.create({
container:{
    flex:1
    },
    input:{
        height:40,
        paddingHorizontal: 10,
        marginTop:10,
        marginHorizontal:30,
        textAlign:'left'
            },
    
    questionHeader:{
        color:'#5f2d03',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign:'left',
        marginTop:30,
        marginHorizontal:30
    },
    textColorBlack:{
        color:'#000000',
        fontSize: 20
    },
    touchableHightlight: {
        marginTop:10,
        marginHorizontal:30,
        borderRadius: 20
    },
    button: {
        textAlign: 'center',
        padding: 10,
        borderRadius: 20,
        fontSize: 14
    },
    buttonLight: {
        borderWidth: 1,
        borderColor: '#5f2d03',
        color: '#5f2d03'
    },
    formTitleContainer:{
        flex:1,
        margin:30,
        padding:20,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
        },
        textHeader:{
            color:'#5f2d03',
            flex:1,
            fontWeight: 'bold',
            fontSize: 30,
            textAlign:'center'
        },
        textHeading:{
            color:'#5f2d03',
            fontWeight: 'bold',
            fontSize: 10,
            margin:10,
            marginHorizontal:30,
            textAlign:'right'
        }
})