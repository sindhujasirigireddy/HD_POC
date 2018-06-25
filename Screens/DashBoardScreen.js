import React, {Component} from 'react'
import {Text, View, StyleSheet, Image,TouchableOpacity, KeyboardAvoidingView, Button, ImageBackground,TouchableHighlight,  TextInput, Alert} from 'react-native'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

export default class DashBoardScreen extends Component{
    static navigationOptions = {
        title:"DASHBOARD",
    };
  
    render() {
        var {navigate} = this.props.navigation;
        return (
       <View style={styles.pageStyle}>
<View style={styles.ProfileStyle}>
<Image style={{flex:1, flexWrap: 'wrap' }}
 source={{uri:'https://www.omunim.com/assets/frontend/onepage2/img/money-lending-software/professional_man_with_laptop.png'}}
 />
 <View style={styles.PatientBasicInfo}>
     <Text style={styles.PatientName}>Leitner john</Text>
     <Text style={styles.PatientId}>PetientId: abcd1234</Text>
     </View>
    </View>
    <View style={styles.PatientMenuDetails}>
    <DashBoardButton
        uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjmsGhApC7IcEbFtMKV0L2I3l5KhQs1OUaYh68Lk3yJdMQe0P'
        Text = 'My Profile Information'
        onPress={() => navigate("ProfileInformation",{})}
        />
        <DashBoardButton
        uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjmsGhApC7IcEbFtMKV0L2I3l5KhQs1OUaYh68Lk3yJdMQe0P'
        Text = 'My Health Information'
        />
        <DashBoardButton
        uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjmsGhApC7IcEbFtMKV0L2I3l5KhQs1OUaYh68Lk3yJdMQe0P'
        Text = 'My Claims'
        />
        <DashBoardButton
        uri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjmsGhApC7IcEbFtMKV0L2I3l5KhQs1OUaYh68Lk3yJdMQe0P'
        Text = 'My Prescriptions'
        />
        </View>
           </View>
    );
    }
}

class DashBoardButton extends Component {
    getProfile = async () => {

        var {navigate} = this.props.navigation;
       navigate('ProfileInformation', {});
    //     fetch('http://172.16.0.221:61758/fhir/Patient?Patient=1  ', {
    //       method: 'GET',
    //         headers: new Headers({
    //             'Authorization': 'Bearer '+btoa('username:password'), 
    //             'Content-Type': 'application/octet-stream; charset=utf-8'
    //           }), 
    //         })
    //       .then((response) => {
    //           if(response.status==200){
    //         this.setState({isLoginSuccess:true});
    //       }else{
    //         this.setState({isLoginSuccess:false});
    //       }
    //       response.json()})
    //       .then((responseJson) => {
    //           if(this.state.isLoginSuccess){
    //    Alert.alert(JSON.stringify(responseJson));
    //    var {navigate} = this.props.navigation;
    //    navigate('ProfileInformation', );
    // }else{
    //    Alert.alert("Login failed");
    // }
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
      }
      
    render(){
        return(
            <TouchableHighlight style={ styles.touchableHightlight } underlayColor={'transparent'} onPress={this.props.onPress}>
            <View>
            <Image source={{uri:(this.props.uri)}}/>
            <Text style= {[ styles.button, styles.buttonLight ]}>{this.props.Text}</Text>
            </View>
         </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
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
    pageStyle:{
flex:1,
margin:10
    },
    ProfileStyle:{
flex:2,
flexDirection: 'row',
justifyContent:'center',
    },
    PatientBasicInfo:{
flex:1,
flexDirection: 'column',
justifyContent:'center',
    },
    PatientName:{
        fontSize: 15,
        textAlign:'center',
    },
    PatientId:{
        fontSize: 10,
        textAlign:'center',
    },
    PatientMenuDetails:{
flex:4,
justifyContent:'center',
//backgroundColor:'rgb(234,160,74)'
    }
})