import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default class ProfileInformation extends Component{
    static navigationOptions = {
        title:"Your Information",
    };
    
    render() {
        return(
            <View style={{flex:1}}>
           <View style={styles.ProfileContainer}>
           <ProfileView  title = 'Patient Name' Text = 'James Doe'/>
           <ProfileView  title = 'MRN' Text = '12354abc'/>
           <ProfileView title = 'Gender' Text = 'Male'/>
           <ProfileView title = 'Date of Birth' Text = '03/03/1990'/>
           <ProfileView  title = 'Communication Language' Text = 'English'/>
               </View>
               <View style={{flex:2}}>
                   </View>
                   </View> 
               
        );
    }
}

class ProfileView extends Component {
    render(){
        return(
            <View style={styles.ProfileView}>
           <Text style={styles.Profileproperty}>{this.props.title}</Text>
           <Text style={styles.ProfileValue}>{this.props.Text}</Text>
         </View>
        );
    }
}

const styles = StyleSheet.create({
    
    ProfileContainer:{
flex:4,
margin:10,
flexDirection: 'column',
justifyContent:'center',
    },
    ProfileView:{
flex:1,
height:50,
flexDirection: 'row',
justifyContent:'center',
    },
    Profileproperty:{
flex:1,
flexDirection: 'column',
justifyContent:'center',
    },
    ProfileValue:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'center',
            },

//backgroundColor:'rgb(234,160,74)'
    
})