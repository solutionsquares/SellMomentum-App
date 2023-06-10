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
const Login = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [ApiLoader, setApiLoader] = useState(false);
  const dispatch = useDispatch()
  const onLoginPressed = ({ navigation }) => {
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
  function SignUpScreen(){
    navigation.replace('Signup', { screen: 'Signup' })
  }
  async function LoginFun() {
    console.log(email)
    console.log(password)
    setApiLoader(true)
    await dispatch(fetchUser({
      "email": email.value,
      "password": password.value
    })).then(async (res) => {
      if (res) {        
        console.log("res",res)
        //
        try {
        } catch (error) {
          console.log("error",error)
        }
        
        setApiLoader(false)
        ToastMsg(constant.errorActionTypes.success, 'Success', 'OTP successfully send')
        navigation.replace('HomeBase', { screen: 'Home' })
        // navigation.navigate('PhoneVerify', { screen: 'Home', confirm: response })
      } else {
        setApiLoader(false)
      }

    })
    
    // setTimeout(() => {
    //   DialogMsgClose()
    //   navigation.replace('HomeBase', { screen: 'Home' })
    // }, 3000)

  }

  return (
    <>

      <View style={[styles.container,theme.primaryBGColor]}>
        <StatusBar barStyle="light-content" style={[theme.primaryBGColor]}/>
        <View style={styles.topBox}>
          <View>
            <Text style={[theme.whiteTitle, styles.allMargen]}>Welcome to tradly</Text>
          </View>
          <View>
            <Text style={[theme.whiteText, styles.allMargen]}>Login to your account</Text>
          </View>
        </View>
        <View style={styles.bottomBox}>
          <Input
            label="Email/Mobile Number"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="email"
            keyboardType={'email'}
            maxLength={100}
            // placeholderTextColor={theme.colors.white}
            placeholderTextColor={'#fff'}
            selectionColor="#fff"
            style={theme.input}
          />
          <Input
            label="Password"
            returnKeyType="next"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
            error={!!password.error}
            errorText={password.error}
            autoCapitalize="none"
            autoCompleteType="text"
            textContentType="text"
            keyboardType={'text'}
            maxLength={100}
            placeholderTextColor={'#fff'}
            // placeholderTextColor={theme.colors.white}
            selectionColor="#fff"
            style={theme.input}
            secureTextEntry
          />

          {/* <TextInput
            style={theme.input}
            placeholder="Password"
            placeholderTextColor={theme.colors.white}
            secureTextEntry
          /> */}
          <TouchableOpacity onPress={() => LoginFun()}>
            <View style={[styles.nextButton,theme.whiteBGColor]}>

              <Text style={[styles.buttonText,theme.primaryColor]}>Login</Text>

            </View>
          </TouchableOpacity>
          <View style={theme.centerCss}>
            <Text style={[theme.whiteText, styles.allMargen]}>Forgot your password?</Text>
          </View>
          <View style={[theme.centerCss, theme.rowView]}>
            <View>
              <Text style={[theme.whiteText, styles.allMargen]}>Don’t have an account? </Text>
            </View>
            <TouchableOpacity onPress={() => SignUpScreen()}>
              <View>
                <Text style={[theme.whiteText, styles.allMargen, styles.boldText]}>Sign up</Text>
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
    justifyContent: "center",
    padding: 20
  },
  boldText: {
    fontWeight: "900"
  },
  nextButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
  },
  allMargen: {
    margin: 20
  },
  topBox: {
    flex: 0.4, alignItems: "center", justifyContent: "center"
  },
  bottomBox: {
    flex: 0.6
  },

})

export default Login
