import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createStackNavigator ,
} from 'react-navigation';
import SplashScreen from './Screens/SplashScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import ForgotPasswordGetOTP from './Screens/ForgotPasswordGetOTP';
import ForgotPassWordPatientID from './Screens/ForgotPassWordPatientID';
import ResetPassword from './Screens/ResetPassword';
import ConfirmOrResendOTP from './Screens/ConfirmOrResendOTP';
import DashBoardScreen from './Screens/DashBoardScreen';

const Navigation = createStackNavigator ({
  Splash: { screen: SplashScreen},
  Register: {screen: RegistrationScreen},
  Login: {screen: LoginScreen},
  ConfirmOrResendOTP:{screen: ConfirmOrResendOTP},
  ForgotPasswordGetOTP:{screen: ForgotPasswordGetOTP},
  ResetPassword:{screen: ResetPassword},
  ForgotPassWordPatientID:{screen: ForgotPassWordPatientID},
  DashBoardScreen:{screen: DashBoardScreen},
})

export default Navigation;