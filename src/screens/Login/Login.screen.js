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
import { theme } from '../../core/theme'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import { DialogMsgClose, DialogMsg, ToastMsg, ToastMsgClose } from '../../utils/notification'
import { constant } from '../../constant/constant'
const Login = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = ({navigation}) => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Dashboard' }],
    // })
  }

  function LoginFun() {
    // console.log("LoginFun")
    DialogMsg(constant.errorActionTypes.success, 'Success', 'Congrats! this is dialog box success')
    setTimeout(() => {
      DialogMsgClose()
      navigation.replace('HomeBase', { screen: 'Home' })
    }, 3000)

  }
  function SignUpPage(){
    navigation.navigate('WithoutAuth', { screen: 'Signup' })
  }

  return (
    <>

      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
        <View style={styles.topBox}>
          <View>
            <Text style={[theme.whiteTitle,styles.allMargen]}>Welcome to tradly</Text>
          </View>
          <View>
            <Text style={[theme.whiteText,styles.allMargen]}>Login to your account</Text>
          </View>
        </View>
        <View style={styles.bottomBox}>
          <TextInput
            style={theme.input}
            placeholder="Email/Mobile Number"
            placeholderTextColor={theme.colors.white}
          />
          <TextInput
            style={theme.input}
            placeholder="Password"
            placeholderTextColor={theme.colors.white}
            secureTextEntry
          />
          <View style={styles.nextButton}>
            <TouchableOpacity >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={theme.centerCss}>
            <Text style={[theme.whiteText,styles.allMargen]}>Forgot your password?</Text>
          </View>
          <View style={[theme.centerCss,theme.rowView]}>
            <View>
              <Text style={[theme.whiteText,styles.allMargen]}>Don’t have an account? </Text>
            </View>
            <TouchableOpacity onPress={()=>SignUpPage()}>
            <View>
              <Text style={[theme.whiteText,styles.allMargen,styles.boldText]}>Sign up</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    padding: 20
  },
  boldText:{
    fontWeight: "900"
  },
  nextButton: {
    backgroundColor: theme.colors.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: theme.colors.primary,
  },
  allMargen:{
    margin:20
  },
  topBox:{
    flex: 0.4,alignItems:"center",justifyContent:"center" 
  },
  bottomBox:{
    flex: 0.6 
  },
  
})

export default Login
