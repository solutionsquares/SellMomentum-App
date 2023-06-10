import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, selectAll } from '../../stores/user.reducer'
import BackButton from '../../components/backButton'
import Input from '../../components/textInput'
import Header from '../../components/header'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import { DialogMsgClose, DialogMsg, ToastMsg, ToastMsgClose } from '../../utils/notification'
import { constant } from '../../constant/constant'
const theme = require('../../core/theme');
const PhoneVerify = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  function otpVerify() {
    navigation.navigate('WithoutAuth', { screen: 'OtpVerify' })
  }

  return (
    <>
      <View style={theme.container}>
        <StatusBar barStyle="light-content" style={[theme.primaryBGColor]} />
        <View style={[theme.centerCss]}>
          <Text style={[theme.whiteTitle, styles.allMargen]}>Verify your phone number</Text>
        </View>
        <View style={[theme.centerCss]}>
          <Text style={[theme.whiteText, styles.allMargen,styles.centerText]}>We have sent you an SMS with a code to enter number</Text>
        </View>
        <TextInput
          style={theme.input}
          placeholder="+91 9876543210"
          placeholderTextColor="white"
        />
        <View style={[theme.centerCss]}>
          <Text style={[theme.whiteText, styles.allMargen]}>Or login with Social network</Text>
        </View>
        <TouchableOpacity onPress={()=>otpVerify()}>
        <View style={[styles.nextButton,theme.whiteBGColor]} >
          
            <Text style={[styles.buttonText,theme.primaryColor]}>Verify</Text>
          
        </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  allMargen: {
    margin: 20
  },
  centerText:{
    textAlign:"center"
  },
  nextButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
  }

})

export default PhoneVerify
